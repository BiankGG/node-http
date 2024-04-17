

const TopInfoWeb = require('./data.js')
const http = require("node:http");
const server = http.createServer((req, res) => {
  console.log("request recived");
  res.end(`<!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${TopInfoWeb.titulo}</title>
  </head>
  <body>
      <h1>${TopInfoWeb.titulo}</h1>
      <h2>${TopInfoWeb.subtitulo}</h2>
      <p>${TopInfoWeb.descripcion}</p>
      <p>${TopInfoWeb.autor}</p>
      <h1>${TopInfoWeb.compañia}</h1>
      <h3>${TopInfoWeb.idioma}</h3>
      <h4>${TopInfoWeb.categoria}</h4>
  </body>
  </html>`);
});

server.listen(0, () => {
  console.log(
    `server listening on port http://localhost:${server.address().port}`
  );
});


// writeHead(200, { 'Content-Type': 'text/plain' }); res.end('ok'); }); copy.
//  If response.writeHead() method is called and this method has not been called, it ...