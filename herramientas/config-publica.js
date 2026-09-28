const fs=require('node:fs');
const path=require('node:path');
const {parseEnv}=require('node:util');

function leerConfig(raiz,entorno=process.env){
  const archivo=path.join(raiz,'.env');
  const local=fs.existsSync(archivo)?parseEnv(fs.readFileSync(archivo,'utf8')):{};
  const valor=k=>String(entorno[k]??local[k]??'').trim();
  const url=valor('SUPABASE_URL'),key=valor('SUPABASE_PUBLISHABLE_KEY');
  if(!url||!key)throw new Error('Configura SUPABASE_URL y SUPABASE_PUBLISHABLE_KEY en .env o en las variables de Netlify.');
  let parsed;
  try{parsed=new URL(url)}catch{throw new Error('SUPABASE_URL debe ser una URL HTTPS válida.')}
  if(parsed.protocol!=='https:'||parsed.username||parsed.password||parsed.search||parsed.hash)throw new Error('SUPABASE_URL debe ser una URL HTTPS sin credenciales ni parámetros.');
  if(!/^sb_publishable_[A-Za-z0-9_-]+$/.test(key))throw new Error('SUPABASE_PUBLISHABLE_KEY debe ser una clave sb_publishable_. No uses claves secretas ni service_role.');
  return {supabaseUrl:url.replace(/\/$/,''),supabasePublishableKey:key};
}
function scriptConfig(config){
  return '// Configuración pública del navegador. Generada durante la preparación del sitio.\nwindow.APP_CONFIG = Object.freeze('+JSON.stringify(config).replace(/</g,'\\u003c')+');\n';
}
module.exports={leerConfig,scriptConfig};
