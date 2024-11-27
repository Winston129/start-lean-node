const http = require("http");
const PORT = 8080;

// request - запрос, response - ответ
http.createServer((req, res)=>{
    let url = req.url;
    console.log(url);

    switch(url)
    {
        case "/":
            console.log("main page");
            res.write("<h1>Hello daun</h1>")
            break;
        case "/console":
            console.log("console page");
            res.write("<h1>console</h1>");
        // default:
        //     console.log("ERROR");
        //     res.write("<h1>ERROR 404</h1>");
    }

    res.end();
}).listen(PORT);