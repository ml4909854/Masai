
// const http = require("http")
// // create server by using http server
// const server = http.createServer((req , res)=>{
//     if(req.url === "/"){
//         res.end("Home page!")
//     }else if (req.url === "/about"){
// res.end("About page!")
//     }else if (req.url ==="/contact"){
//             res.end("contact Page!")
//     }else{
//         res.end("No page avaiable")
//     }
// })

// server.listen(3000 , ()=>{
//  console.log("server is running on port 3000")
// })


// Run html file using server

const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

    if (req.url === "/") {

        const filePath ="index.html"

        fs.readFile(filePath, "utf-8", (err, data) => {

            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Server Error: Cannot read file");
            } 
            else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }

        });

    } 
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Page Not Found");
    }

});

server.listen(3000, () => {
    console.log("Server running → http://localhost:3000");
});
