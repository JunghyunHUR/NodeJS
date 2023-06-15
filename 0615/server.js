const http = require("http");
const fs = require("fs").promises;

http.createServer(async (req, res) => {
    try{
        console.log(req.method, req.url);
        if(req.method === 'GET'){
            if(req.url === '/'){
                const data = await fs.readFile('/front.html');
                res.writeHead(200, {
                    "Content-type" : "text/html; charset=utf-8"
                });
                return res.end(data);
            }else if(req.url === '/about'){
                const data = await fs.readFile("./about.html");
                res.writeHead(200, {
                    "Content-type" : "text/html; charset=utf-8"
                });
                return res.end(data);
            }
            //만약 주소가 /도 아니고 /about 도 아니면
            try{
                const data = await fs.readFile(`.${req.url}`);
                return res.end(data);
            }catch(err){
                //404에러를 출력시킨다.
            }
        }
        res.writeHead(404);
        return res.end("NOT FOUND");
    }catch(err){
        console.error(err);
        res.writeHead(500, {"Content-type" : "text/html; charset=utf-8"});
        res.end(err.message);
    }
}).listen(5000, () => {
    console.log("5000번 포트에서 서버가 대기 중 입니다.");
});