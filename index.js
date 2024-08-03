const http = require("http");
let PORT = 3000;




const server =  http.createServer((req, res) => {

        console.log(req.url);

        if(req.url === '/'){
            res.statusCode = 200;
            res.setHeader('content-Type', 'text/html');
            res.end('<h1> This is Hello World</h1>');
        } 
        else if(req.url === '/about'){
            res.statusCode = 200;
            res.setHeader('content-Type', 'text/html');
            res.end('<h1> This is About Page</h1>');
        }
        else if(req.url === '/contact'){
            res.statusCode = 200;
            res.setHeader('content-Type', 'text/html');
            res.end('<h1> This is Contact Page</h1>');
        }
        else if(req.url === '/service'){
            res.statusCode = 200;
            res.setHeader('content-Type', 'text/html');
            res.end('<h1>This is Service Page</h1>');
        }
        else{
            res.statusCode = 404;
            res.setHeader('content-Type', 'text/html');
            res.end('<h1>Page Not Found</h1>');
        }
    });


server.listen(PORT, () => {
    console.log(`server is runing http://localhost:${PORT}`);
});