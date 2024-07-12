const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, { "content-type": "text/plain" });
        res.end("Get mathod called");
    }
    else if (req.method === "POST" && req.url === "/submit") {
        res.writeHead(200, { "content-type": "text/plain" });
        res.end("Post mathod called");
    }
    else if (req.method === "PUT" && req.url.startsWith("/update/")) {
        const id = req.url.split("/");

        res.writeHead(200, { "content-type": "text/plain" });
        res.end("Put mathod called with id " + id[2]);
    }
    else if (req.method === "DELETE" && req.url.startsWith("/delete/")) {
        const id = req.url.split("/");
        res.writeHead(200, { "content-type": "text/plain" });
        res.end("Delete mathod called with id " + id[2]);
    }
    else {
        res.writeHead(404, { "content-type": "text/plain" });
        res.end("Please enter right URL");
    }
})

server.listen(3000, () => {
    console.log("Server started @http://localhost:3000");
})