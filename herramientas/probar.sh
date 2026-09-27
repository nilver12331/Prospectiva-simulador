#!/usr/bin/env bash
# Recorre los 21 momentos de cada carrera en Chrome headless y reporta errores.
# Uso: bash herramientas/probar.sh [puerto]   (levanta y baja su propio servidor)
set -e
cd "$(dirname "$0")/.."
PUERTO="${1:-8097}"
CH="/c/Program Files/Google/Chrome/Application/chrome.exe"
[ -f "$CH" ] || CH="/c/Program Files (x86)/Google/Chrome/Application/chrome.exe"
[ -f "$CH" ] || { echo "No encuentro Google Chrome"; exit 1; }
node herramientas/servir.js "$PUERTO" >/dev/null 2>&1 &
SRV=$!
trap 'kill $SRV 2>/dev/null; rm -f prueba.html' EXIT
sleep 1
sed -E 's#<script src="js/tema.js[^"]*"></script>#&\n<script src="herramientas/prueba.js"></script>#' consola.html > prueba.html
for E in $(node -e 'global.window={};global.DATOS=window.DATOS={};for(const f of require("fs").readdirSync("datos").filter(x=>/\.js$/.test(x))) new Function(require("fs").readFileSync("datos/"+f,"utf8"))();console.log(Object.keys(DATOS).join(" "))'); do
  echo "===== $E"
  "$CH" --headless=new --disable-gpu --no-sandbox --virtual-time-budget=90000 --dump-dom "http://localhost:$PUERTO/prueba.html?escuela=$E" 2>/dev/null \
   | node -e 'const s=require("fs").readFileSync(0,"utf8");const m=s.match(/<pre id="resultado">([\s\S]*?)<\/pre>/);console.log(m?m[1].replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/&quot;/g,"\""):"SIN RESULTADO")'
done
