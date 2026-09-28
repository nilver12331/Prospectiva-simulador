const fs=require('node:fs');
const path=require('node:path');
const {leerConfig,scriptConfig}=require('./config-publica');
const raiz=path.resolve(__dirname,'..');
const destino=path.resolve(raiz,'dist');
const config=leerConfig(raiz);
// Solo se reemplaza la carpeta generada dist de este proyecto.
if(path.dirname(destino)!==raiz||path.basename(destino)!=='dist')throw new Error('Destino de publicación inválido.');
if(fs.existsSync(destino)&&fs.lstatSync(destino).isSymbolicLink())throw new Error('dist no puede ser un enlace.');
fs.rmSync(destino,{recursive:true,force:true});
fs.mkdirSync(destino,{recursive:true});
for(const archivo of ['index.html','ingreso.html','programas.html','fase1.html','fase2.html','fase3.html','consola.html','consola2.html','consola3.html','netlify.toml']){
  fs.copyFileSync(path.join(raiz,archivo),path.join(destino,archivo));
}
for(const carpeta of ['css','js','img','datos']){
  fs.cpSync(path.join(raiz,carpeta),path.join(destino,carpeta),{recursive:true,
    filter:archivo=>!path.basename(archivo).startsWith('.')&&!fs.lstatSync(archivo).isSymbolicLink()});
}
fs.writeFileSync(path.join(destino,'js','config.js'),scriptConfig(config),'utf8');
console.log('Sitio preparado en dist/. .env no se incluye en la publicación.');
