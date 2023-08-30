// const http = require("http");

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "content-Type": "text/html" });
//     res.end("<p>Hello World~!!</p>");
//   })
//   .listen(3000, () => {
//     console.log("3000번 포트 서버 접속 완료~!!");
//   });

//   // localhost = 127.0.0.1 (Internet Protocol)
//   // Port = 서버 내 프로세스 구분 번호

const http = require("http");
// postMan
http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200);
      res.end("main url");
    } else if (req.url === "/upload") {
      res.writeHead(200);
      res.end("upload url");
    } else if (req.url === "/delete") {
      res.writeHead(200);
      res.end("delete url");
    } else {
      res.writeHead(404);
      res.end("Not found!!!");
    }
  })
  .listen(3000, () => {
    console.log("3000번 포트 서버 접속 완료~!!");
  });
