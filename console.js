const string = "abc";
const number = 1;
const boolean = true;
const obj = {
    outside : {
        inside : {
            key : 'value'
        }
    }
};

console.time("전체 시간");
console.log("쉼표를 구분해서 여러값을 찍을수 있는 평범한 로그");
console.log(string, number, boolean);

console.error("에러메시지를 담은 로그"); //에러 출력
console.table([{name : "제로", birthday: 1999}, {name : "일", birthday: 2000}]); //배열을 테이블 형식으로
console.dir(obj, {colors: false, depth: 2}); // 객체, option 방식으로 출력
console.dir(obj, {colors: true, depth: 1});

console.time("시간 측정");
for(let i = 0; i < 1000000000; i++){};
console.timeEnd("시간 측정");
console.timeEnd("전체 시간");

// console.trace("레이블"); 
/*
var 변수 = setTimeout(콜백함수, 밀리초); clearTimeout(변수);
var 변수 = setInterval(콜백함수, 밀리초); clearInterval(변수);
var 변수 = setImmediate(콜백함수); ==> 콜백함수 즉시 실행 clearImmediate(변수);

*/

//파일경로 __filename(파일경로), __dirname(디렉토리 경로)
console.log(__filename);
console.log(__dirname);
