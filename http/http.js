const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {


    res.writeHead(200, "text/html")
    if (req.url === "/favicon.ico")
        res.end("by")
    else if (req.url === '/')
        res.end(fs.readFileSync("index.html"));
    else if (req.url === '/about')
        res.end(fs.readFileSync("about.html"));
    else if (req.url === '/contact')
        res.end(fs.readFileSync("contact.html"));
    else if (req.url === '/maravise')
        res.end(fs.readFileSync("maravise.html"));
    else
        res.end("Kaik sarkhu address nakho..")

});

server.listen(3000, () => {
    console.log("Server Started @http://localhost:3000");
});