// Servidor estático mínimo para probar el simulador en local: node herramientas/servir.js [puerto]
const http=require("http"),fs=require("fs"),path=require("path");
const raiz=path.join(__dirname,".."),puerto=+(process.argv[2]||8090);
const {leerConfig,scriptConfig}=require('./config-publica');
const config=scriptConfig(leerConfig(raiz));
const tipos={".html":"text/html; charset=utf-8",".js":"text/javascript; charset=utf-8",".css":"text/css; charset=utf-8",".json":"application/json",".svg":"image/svg+xml",".png":"image/png",".ico":"image/x-icon"};
const servidor=http.createServer((req,res)=>{
 let p;
 try{p=decodeURIComponent(req.url.split("?")[0]).replace(/\\/g,'/')}catch{res.writeHead(400);res.end('Solicitud inválida');return}
 if(p.split('/').some(s=>s.startsWith('.'))){res.writeHead(404);res.end('no');return}
 if(p==="/") p="/programas.html";
 if(p==='/js/config.js'){res.writeHead(200,{'Content-Type':'text/javascript; charset=utf-8','Cache-Control':'no-store'});res.end(config);return}
 const f=path.resolve(raiz,'.'+p);
 if(!f.startsWith(path.resolve(raiz)+path.sep)){res.writeHead(404);res.end('no');return}
 fs.readFile(f,(err,d)=>{ if(err){res.writeHead(404);res.end("no");return}
  res.writeHead(200,{"Content-Type":tipos[path.extname(f)]||"application/octet-stream","Cache-Control":"no-store"}); res.end(d) });
}).listen(puerto,()=>console.log("http://localhost:"+servidor.address().port));
