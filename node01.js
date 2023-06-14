// console.log("자바스크립트를 실행합니다.");
// 1. 자바스크립트의 첫 번째 특징 => 이벤트 기반 언어
//                             (이벤트 리스너의 콜백함수를 등록하는 것)
// function first(){
//     second();
//     console.log("첫 번째");
// }

// function second(){
//     third();
//     console.log("두 번째");
// }

// function third(){
//     console.log("세 번째")
// }

// first();

//2. none blocking
// function run(){
//     console.log("3초 후에 실행");
// }

// blocking - 하나의 프로그램이 완료된 시점에 그 다음것을 실행.
// none blocking - 프로그램 완료를 기다리지 않고 그 다음 프로그램을 실행.

// console.log("시작");
// setTimeout(run, 3000);
// console.log("끝");

//3. Single Thread <--> Multi Thread
// Single Thread
// 컴퓨터 자원 사용이 적다, Multi Thread 방식보다 쉽다.
// paypal, ebay, AirBNB ect...

// javascript --> jscript ==> ES6

// var --> let --> const
// if(true){
//     var x = "x";
// }
// console.log(x);

// if(true){
//     let y = "y";
//     const z = "z";
//     console.log(y);
//     console.log(z);
// }

//let, const 변수는 함수 스코프에 적용을 받는다.

// let a = 10;
// a = 12;

// console.log(a);

// var num1 = 1;
// var num2 = 2;
// var result = 3;
// var string = num1 + "더하기" + num2 + "는 \"" + result + "\"";

// console.log(string);

// const n1 = 1;
// const n2 = 2;
// const rs = n1 + n2;
// const str = `${n1}더하기${n2}는 "${rs}"`;
// console.log(str);

// literal
// var sayNode = function(){
//     console.log("Node");
// }
// var es = "ES";
// var oldObj = {
//     sayJS : function(){
//         console.log("JS");
//     },
//     sayNode : sayNode
// };

// oldObj[es + 6] = "Fantastic";

// oldObj.sayNode(); // Node
// oldObj.sayJS(); //JS

// console.log(oldObj.ES6); //Fantastic

// const newObj = {
//     sayJS(){
//         console.log("JS");
//     },
//     sayNode,
//     [es + 6] : "Fantastic"
// }
// newObj.sayNode(); //Node
// newObj.sayJS(); //JS
// console.log(newObj.ES6); //Fantastic

