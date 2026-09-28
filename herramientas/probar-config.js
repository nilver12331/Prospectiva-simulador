// Ejecutar después de node herramientas/build.js. No conecta con Supabase.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const {spawn}=require('node:child_process');
const {once}=require('node:events');
const {leerConfig,scriptConfig}=require('./config-publica');
const raiz=path.resolve(__dirname,'..');
async function main(){
  const config=leerConfig(raiz);
  const browser={window:{}};
  vm.runInNewContext(scriptConfig(config),browser);
  assert.equal(browser.window.APP_CONFIG.supabaseUrl,config.supabaseUrl);
  assert.deepEqual(Object.keys(browser.window.APP_CONFIG).sort(),['supabasePublishableKey','supabaseUrl']);
  assert.throws(()=>leerConfig(raiz,{SUPABASE_URL:'',SUPABASE_PUBLISHABLE_KEY:''}),/Configura/);
  assert.throws(()=>leerConfig(raiz,{SUPABASE_PUBLISHABLE_KEY:'sb_secret_prohibida'}),/No uses/);
  assert.throws(()=>leerConfig(raiz,{SUPABASE_PUBLISHABLE_KEY:'eyJ.service_role'}),/No uses/);
  assert.throws(()=>leerConfig(raiz,{SUPABASE_URL:'http://inseguro.example'}),/HTTPS/);
  assert.equal(leerConfig(raiz,{SUPABASE_URL:'https://otro.supabase.co',SUPABASE_PUBLISHABLE_KEY:'sb_publishable_prueba'}).supabaseUrl,'https://otro.supabase.co');
  const dist=path.join(raiz,'dist');
  assert(!fs.existsSync(path.join(dist,'.env')));
  assert(!fs.existsSync(path.join(dist,'herramientas')));
  assert(!fs.existsSync(path.join(dist,'.git')));
  let paginas=0;
  for(const file of fs.readdirSync(dist).filter(f=>f.endsWith('.html'))){
    const html=fs.readFileSync(path.join(dist,file),'utf8');
    const conf=html.indexOf('src="js/config.js"'),nube=html.indexOf('src="js/nube.js');
    assert(conf>=0&&nube>conf,file+' debe cargar la configuración antes de nube.js');paginas++;
  }
  assert.equal(fs.readFileSync(path.join(dist,'js/config.js'),'utf8'),scriptConfig(config));
  // Verificar que nube.js conserve la inicialización y el acceso con una sesión de prueba.
  const client={auth:{getSession:async()=>({data:{session:{user:{email:'prueba@example.test'}}}}),onAuthStateChange:()=>{},signInWithPassword:async()=>({data:{user:{email:'prueba@example.test'}}})}};
  const context={window:{APP_CONFIG:config,supabase:{createClient:(url,key)=>{assert.equal(url,config.supabaseUrl);assert.equal(key,config.supabasePublishableKey);return client}}},
    location:{pathname:'/ingreso.html'},document:{createElement:()=>({}),head:{appendChild:()=>{}}}};
  vm.runInNewContext(fs.readFileSync(path.join(raiz,'js/nube.js'),'utf8'),context);
  assert.equal(await context.window.NUBE.listo,true);
  assert.equal((await context.window.NUBE.ingresar('prueba@example.test','simulada')).email,'prueba@example.test');
  const server=spawn(process.execPath,['herramientas/servir.js','0'],{cwd:raiz,windowsHide:true,stdio:['ignore','pipe','pipe']});
  try{
    const url=await new Promise((resolve,reject)=>{
      const timer=setTimeout(()=>reject(Error('El servidor no inició')),5000);
      server.stdout.once('data',b=>{clearTimeout(timer);resolve(b.toString().trim())});
      server.once('error',e=>{clearTimeout(timer);reject(e)});
      server.once('exit',code=>{clearTimeout(timer);reject(Error('Servidor terminó: '+code))});
    });
    for(const file of ['/.env','/.env.example','/%2eenv','/.git/config'])assert.equal((await fetch(url+file)).status,404,file);
    const response=await fetch(url+'/js/config.js');
    assert.equal(response.status,200);assert.equal(response.headers.get('cache-control'),'no-store');
    assert.equal(await response.text(),scriptConfig(config));
    assert.equal((await fetch(url+'/ingreso.html')).status,200);
  }finally{const exit=once(server,'exit');server.kill();await exit}
  console.log(`Correcto: ${paginas} páginas, configuración, prioridad del entorno, rechazo de claves secretas, inicio de sesión simulado y bloqueo HTTP de .env.`);
}
main().catch(e=>{console.error(e.message);process.exitCode=1});
