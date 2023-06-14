const path = require("path");
const string = __filename;

//path.sep => /, path.delimiter => ;
console.log(path.dirname(string)); // __dirname
console.log(path.basename(string)); // 파일이름 출력
console.log(path.extname(string)); // 확장자이름 출력