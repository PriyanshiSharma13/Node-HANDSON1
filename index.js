// Create Web Server - HTTP module

import http from 'http';
import fs from 'fs';

// Type1-

// creating server instance
// const server = http.createServer((req,res) => {
//     res.setHeader('Content-Type','text/plain');
//     res.end('Response from Server !!');
// });

// whenever a change is made(here res.end was added), we cannot see instant results, so ctrl+c , then cls and then hit the server again

// listening server
// server.listen(9000,"localhost",() => {
//     console.log("Server running at http://localhost:9000");
// });

// Type2-

// const server = http.createServer((req,res) => {
//     res.setHeader('Content-Type','text/plain');
//     res.end('Response from Server1 !!');
// });

// const PORT = process.env.PORT || 9000;
// const HOST = 'localhost';

// server.listen( PORT, HOST, () => {
//     console.log("Server running at http://localhost:9000");
// });

//--------------------------------------------------------------------

// http module - HTML

// url Routing

// url Routing for html tag-
// const server = http.createServer((req,res) => {
//     res.writeHead(200, "OK", { 'Content-Type': 'text/html' })

//     res.end("<h1>HOME PAGE</h1>");
//     if(req.url === '/'){
//         res.end("<h1>HOME PAGE</h1>"); 
//     }
//     else if(req.url === '/about'){
//         res.end("<h1>ABOUT PAGE</h1>");
//     }
//     else if(req.url === '/contact'){
//         res.end("<h1>CONTACT PAGE</h1>");
//     }
//     else{
//         res.end("<h1>404 PAGE NOT FOUND !! :(</h1>");
//     }
// });

// const PORT = process.env.PORT || 9000;
// const HOST = 'localhost';

// server.listen( PORT, HOST, () => {
//     console.log("Server running at http://localhost:9000");
// });

//------------------------------------------------------------------

// url Routing for html page-

const server = http.createServer((req,res) => {
    res.writeHead(200, "OK", { 'Content-Type': 'text/html' })

    if(req.url === '/'){
        fs.readFile( './pages/home.html', (error,data) => {
            if(error){
                throw error;
            }
            res.end(data);
        })
    }
    else if(req.url === '/about'){
        fs.readFile( './pages/about.html', (error,data) => {
            if(error){
                throw error;
            }
            res.end(data);
        })
    }
    else if(req.url === '/contact'){
        fs.readFile( './pages/contact.html', (error,data) => {
            if(error){
                throw error;
            }
            res.end(data);
        })
    }
    else{
        res.end("<h1>PAGE NOT FOUND !! :(</h1>");
    }
});

const PORT = process.env.PORT || 9000;
const HOST = 'localhost';

server.listen( PORT, HOST, () => {
    console.log("Server running at http://localhost:9000");
});

//---------------------------------------------------------------------

// http module - JSON

// let http = require('http');

// var app = http.createServer((req,res) => {
//     var jsondata = {
//         id: 1,
//         name: "Priyanshi",
//         subject: "Node JS"
//     }
//     res.setHeader( 'Content-Type', 'application/json');
//     res.write(JSON.stringify(jsondata));
//     res.end();
// });
// app.listen(9000);
