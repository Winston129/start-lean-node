const http = require("http");
const fs = require("fs");
const PORT = 8080;

var path_html = "./public/index.html";
// var path_img = "./public/api/Murda_Killa.png";

// request - запрос, response - ответ
http.createServer((req, res)=>{
    let url = req.url;
    console.log(url);

    res.setHeader( "Content-Type", "text/html; charset=utf=8;");
    switch(url)
    {
        case "/":
            console.log("main page");
            res.write("<h1>Hello</h1>");
            res.end();
            break;
        case "/murdakilla":
            console.log("'Murda Killa' page");
            let data_html = fs.readFileSync (path_html,{encoding:"utf8", flag:"r",});
            res.write(data_html);
            res.end();
            break;
        default:
            //asynchrony
            if(url.includes("/api")){
                fs.readFile("./public"+url, {}, (error, data)=>{
                    if(error){
                        console.error();
                    }
                    res.setHeader("Content-Type", "image/png");
                    res.write(data);
                    res.end();
                });
            }
            else{
                console.log("error");
                res.write("<h1>ERROR 404</h1>");
                res.end();
            }
    }
}).listen(PORT); 