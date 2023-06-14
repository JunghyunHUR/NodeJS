// 요청, 응답 ==> request, response
const http = require('http');

http.createServer((req, res) => {
    //여기에 어떻게 응답할 지 작성
    res.writeHead(200, {
        "Content-Type" : "text/html;charset=utf-8"
    });
    res.write("<h1>노드JS를 이용한 서버입니다.</h1>");
    res.write("<p>그게 다 입니다.</p>");
}).listen(5000, () => {
    console.log("5000번 포트에서 서버가 대기 중 입니다!");
});