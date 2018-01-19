//1.
var http = require('http');
var fs = require('fs');
//2.
var server = http.createServer(function (req, resp) {
    //3.
    if (req.url === "/myPage") {
        fs.readFile("AppPages/MyPage.html", function (error, pgResp) {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }
             
            resp.end();
        });
    } else if (req.url === "/pageCreate") {
        //4.
        fs.readFile("AppPages/pageCreate.html", function (error, pgResp) {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }
             
            resp.end();
        });
        
    } else {
        fs.readFile("AppPages/main.html", function (error, pgResp) {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }
             
            resp.end();
        });
        // resp.writeHead(200, { 'Content-Type': 'text/html' });
        // resp.write("<h1>Product Manager</h1><br /><br />Decide where you wanna go to... ");
        // resp.end();
    }
});
//5.
server.listen(5050);
 
console.log('Server Started listening on 5050');