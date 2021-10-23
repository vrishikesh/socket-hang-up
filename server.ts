import { createServer } from "http";

const server = createServer((request, response) => {
  setTimeout(() => {
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
