const http = require('http');

const port = 5000;

const server = http.createServer((req, res) => {
    const url = req.url;
  
    if (url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>INDEX SAYFASINA HOSGELDINIZ</h1>");
    } else if (url === "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>ABOUT SAYFASINA HOSGELDINIZ</h1>");
    } else if (url === "/contact") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>CONTACT SAYFASINA HOSGELDINIZ</h1>");
    } 
  
    res.end();
  });
  
  server.listen(port, () => {
    console.log(`Sunucu port ${port} de başlatıldı.`);
  });
  