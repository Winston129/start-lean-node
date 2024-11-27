const http = require("http");
const fs = require("fs");
const PORT = 8080;

// request - запрос, response - ответ
http.createServer((req, res)=>{
    let url = req.url;
    console.log(url);

    res.setHeader(
        "Content-Type",
        "text/htm; charset=utf=8;"
    );
    switch(url)
    {
        case "/":
            console.log("main page");
            res.write("<h1>Hello daun</h1>");
            break;
        case "/youdaun":
            console.log("console page");
            let data_html = fs.readFileSync
            (
                "./index.html",
                {
                    encoding:"utf8",
                    flag:"r",
                }
            );
            res.write(data_html);
            break;
    }

    res.end();
}).listen(PORT);