// Servidor estático mínimo para probar el simulador en local: node herramientas/servir.js [puerto]
const http=require("http"),fs=require("fs"),path=require("path");
const raiz=path.join(__dirname,".."),puerto=+(process.argv[2]||8090);
const tipos={".html":"text/html; charset=utf-8",".js":"text/javascript; charset=utf-8",".css":"text/css; charset=utf-8",".json":"application/json",".svg":"image/svg+xml",".png":"image/png",".ico":"image/x-icon"};
http.createServer((req,res)=>{
 let p=decodeURIComponent(req.url.split("?")[0]); if(p==="/") p="/index.html";
 const f=path.join(raiz,p);
 fs.readFile(f,(err,d)=>{ if(err){res.writeHead(404);res.end("no");return}
  res.writeHead(200,{"Content-Type":tipos[path.extname(f)]||"application/octet-stream","Cache-Control":"no-store"}); res.end(d) });
}).listen(puerto,()=>console.log("http://localhost:"+puerto));
