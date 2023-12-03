var a;//declaration
a=1;//initialization
var a = 1;//declaration and initialization
console.log(a);//1

var a//re-declaration
a=200;//re-initializarion
var a=200;
console.log(a);//200

var c;
console.log(c);

//let
let myVariable;//declaration
myVariable="your variable";//initialization
console.log(myVariable);

let myVariable1="you variable";
myVariable="is not everyone variable";//re-initialization
console.log(myVariable);

let simpleOne=100;
simpleOne="not simple";
console.log(simpleOne);

//by default keyword is var before the identifier
greeting="hello";
console.log(greeting);

//const
const pi=3.142;//possible both declaration and initialization
console.log(pi);

var a=200;
let a1=400;
console.log(a);//not possible if let a