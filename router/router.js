const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = 8080;
const ext_files={
    ".html" : "text/html",
    ".js" : "text/javascript",
    ".css" : "text/css",
    ".png" : "image/png",
    ".jpg" : "image/jpg",
    ".mp4" : "video/mp4",
}


function staticFile(res, file_path, ext){
    res.setHeader("Content-Type", ext_files[ext]);
    fs.readFile("./public"+file_path, (error, data)=>{
        if(error){
            res.statusCode=404;
            res.end();
        }
        res.end(data);
    });
}

// request - запрос, response - ответ
http.createServer((req, res)=>{
    const url = req.url;

    switch(url){
        case "/":
            staticFile(res, "/index.html", ".html");
            break;
        case "/murdakilla":
            staticFile(res, "/MurdaKilla.html", ".html");
            break;
        case "/horus":
            staticFile(res, "/horus.html", ".html");
            break;
        default:
            let extname = path.extname(url); //get ext file
            extname = String(extname).toLocaleLowerCase();
            // l(extname);
            if (extname in ext_files){
                staticFile(res, url, extname)
            }
            else{
                res.statusCode = 404;
                res.end();
            }

    }

}).listen(PORT);

/* 
  n          ,    ..l,o,./nnkmo'\k        m c dx    m  gbhetfyg678ynu 
*/