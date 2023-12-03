// var aa="global"
// let bb="script"
// if(true)
// {
//     var cc="global block"
//     let dd="block"


// }

// function test(){
//     var a=13;
//     let b=14;
//     console.log(a);
//     console.log(b);
// }
// test()

// console.log(a);
// console.log(b);


// var p=100;//check for global variable first
// function demo(){
//     var a=200;
//     console.log(this.a);
// }
// demo()


var id=100;
let obj={
    id:200,
    name:"preeti",
    m:function(){
console.log(this.id)}
}
obj.m()


//Own words
//When let & cont are declared globally then the scope is Script,if it is declared inside any block like if,while then the scope is Block
//If we try to print the variable which is not declared then it will display not defined
//whenever the variable is only declared but not initiaised ,it will display undefined