const http = require("http");
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type" : 'text/html; charset=UTF-8'
    });
    res.write("<h1>Hello nodeJs</h1>");
    res.write("<p>반갑습니다.</p>");
    res.end("<p>끝 입니다.</p>");
});
server.listen(5000);
server.on("listening", () => {
    console.log("서버가 5000번 포트에서 대기 중입니다.");
});
server.on("error", (error) => {
    console.log(error);
});