"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var server = http_1.createServer(function (request, response) {
    setTimeout(function () {
        response.end("Response end");
    }, 150);
});
// server.setTimeout(100);
// server.on("timeout", (socket) => {
//   console.log('socket');
//   socket.abort();
// });
// console.log("connection timedout");
// server.timeout = 100;
server.listen(8000);
