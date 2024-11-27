const http = require("http");
const PORT = 8080;

// request - запрос, response - ответ
http.createServer((req, res)=>{
    console.log(req.url);
    console.log(req.method);

    res.setHeader("Content-Type", "text/html; charset=utf=8");
    res.write("<h1>Hello daun</h1>")

    res.end();
}).listen(PORT);
console.log("server connect");