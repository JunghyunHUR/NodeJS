// import {odd, even} from "./var";
// import checkOddOrEven from "./func";

const {odd, even} = require("./var");
const checkNumber = require("./func");

function checkStringOddOrEven(str){
    if(str.length % 2) return odd;
    return even;
}
console.log(checkNumber(10));
console.log(checkStringOddOrEven("반갑습니다요."));