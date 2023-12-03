//1.Anonymous Function
//a function which does not have function name
//we cant't execute anonymous function bcz it doesn't have function name

//to execute anonymous function 1.named function 2.function with expression 3.IIFE
//syntax for anonymous

// function{

// }
// ()


//2.Named Function
// a function which has a function name is called Named function
//happy is argument and name is parameter
function demo(){
    console.log("Hello this is named function");
}
demo();

demo();

//passing an argument for the function
function test(name){
    alert(name +" Ganesh Chaturthi");

}
test("Happy");

//function with expression
let a=function(){
    console.log("this is function with expression function");
};
a();
//console.log(a());//undefined bcz of log statements


//First Class Function
//Defn-When we are using function with expression,we are passing function s an value for the expression that value we call it as first class


//arrow Function
//to reduce the syntax we go for arrow function

//()=>(we call it as fat arrow)
let c=(a,d)=>
{
    console.log(a+d);
};
c(10,77);
let f=()=>{

}





//First Rule

let ArrFun=() =>
console.log("hello");
ArrFun();

//Second Rule

let ArrFun1=() =>{
    let festivalG="gannu";
    console.log(festivalG);
};
ArrFun1();

//Third Rule

let ArrFun2=() =>{
    let day="monday";
    return day;

};
ArrFun2();
console.log(ArrFun2());

//Fourth Rule

let ArrFun3=()=>{
    let comngDay="Wednesday";
    console.log(comngDay);
};
//console.log(ArrFun3());//Undefined bcz of two log statements
ArrFun3();


//fifth rule when we are using return keyword use brcess
 //othr wise will get error

 let arrowF=(a,b)=>{
    return a+b;
   }
  
   console.log(arrowF(2,3));
  
  //6.IIFE(Immediate Invoking Function Expression)
  //anonymous
  //1.put the function inside the expression called parenthesis
  // (function(){
  //   console.log('hii');
  
  // })
  // ();
  
  
  //Uses of IIFE
  //the varibale declared inside the lIFE won't pollute the outside the things
  //1.It won't pollute the global variable it means the variables declared the inside the IIFE is totaly different from the variables declared outside the IIFE
  //2.we use IIFE for data privacy
  
  // var ab=20;
  // (function ae(){
  //   let ab=30;
  //   console.log(ab);
  // }) 
  
  
  
  (function()
  {
    console.log("hii");
  })
  ();
  
  (function()
  {
    console.log("hello");
  })
  ();
  
  (function()
  {
    console.log("bye");
  
  })
  ();
  
  
  
  
  
  
  var vari="your name"
  function demo(name,day)
  {
    console.log("this is first one " +name + 'is' + day);
  }
  
  demo(vari,21);
  
  
  var vari="my name"
  function demo1(name,day)
  {
    console.log("this is second one " +name + 'is' + day);
  }
  demo1(vari,21);
  
  
  
  
  
  
  ////
  let name1='abc';
  function demo23(wish,grid)
  {
    console.log('1st IIFE hello'+wish+grid);
  
  
  }
  
  demo23('GM',name1)
  
  
  
  let name12='abc';
  function demo23(wish,grid)
  {
    console.log('2nd IIFE hello'+wish+grid);
  
  
  }
  
  demo23('GM',name12)
  
  
  
  
  
  let name123='abc';
  (function demo23(wish,grid)
  {
    console.log('1st IIFE hello'+wish+grid);
  
  
  })
  
  ('GM',name123);
  
  
  
  let name1234='abc';
  (function demo23(wish,grid)
  {
    console.log('2nd IIFE hello'+wish+grid);
  
  
  })
  
  ('GM', name1234);
  
  
  //sumne madiradu
//   let a1=2;
//   function c(p,q)
//   {
//     console.log("areey"+p+q);
//   }
//   c("nod", a1);
  
  
//   let a12=2;
//   function c(p,q)
//   {
//     console.log("nodu illi"+p+q);
//   }
//   c("nod", a12);
  
  
//   //sir madisiradu
//   (function(){
  
  
//     let a1=2;
//     function c(p,q)
//     {
//       console.log("areey"+p+q);
//     }
//     c("nod", a1);
  
  
//   })
//   ();
  
  
//   (function (){
  
  
  
//     let a12=2;
//   function c(p,q)
//   {
//     console.log("nodu illi"+p+q);
//   }
//   c("nod", a12);
  
//   })
//   ();
  
  //Nested Function
  // the function using inside the another function
  // we acheive closure and lexical scope in nested function
  //FEC=>function execution context
  
  
  //Closure-It allows to access the outer function scope from the inner function scope
  
  //Lexical Scope- the ability of javascript engine to search for that variable in the outer scope which is not present in the current scope..
  
  function gp(){
                 let a=100;
                 let b=200;
                           function p(){
                                        let d=300;
                                        console.log(a);
                              
                                                       function c(){
                                                                    console.log(b);
                                                                     console.log(d);
                                                                    
  
                                                                    }
                                                                    c()
                                         }
                                         p()
                }
                gp();
  
  
    //create 4 closure
    function grand(){
         let p=200;
         let q=300;
         let r=500;
         let s=800;
                   function pt(){
                              console.log(p);
                              console.log(q);
                               function child8(){
                                console.log(r);
                                console.log(s);
  
                               }
                               child();
                   }
                   pt();
  
    }
    grand();
  
    //this keyword value change accordingly where we are using the this keyword
    console.log(this);//window
    console.log(window);//window
  
    console.log(this===window);//true
  
    function aa(){
      console.log(this);//window
    }
    aa();
  
    //when your are using this keyword inside the normal function of object it is pointing to the object
    let obj={
      id:100,
      guest:function(){
        console.log(this.id);//100
      }
  
    }
  console.log(obj);
    obj.guest();
  
  
    //when your using this keyword inside the arrow function of object will get undefined 
    //bcz this keyword does not works in arrow function
  
  let obj1={
    id:200,
    guest:()=>{
      console.log(this.id);
      let st=500;
    }
  }
  obj1.guest();


//7.CallBack Function

  function callback()
      {
     console.log("might be");
      }
      
     function demo(a)
     {
        console.log("this is venkat home");
        callback()
    }
     demo(callback)

     let add=(a,b)=>a+b;
     let sub=(a,b)=>a-b;
     let calculator=(p1,p2,test)=>{
        return test(p1,p2)
     }
     console.log(calculator(10,20,add));
     console.log(calculator(100,20,sub));




     //Generator Function

     function demo()
{
    return "hello";

}
let d=demo();
console.log(d);

//the use of gnerator function
// to make efficient to iterate the values to make asynchronous


//normal function
function test()
{
    console.log("this is normal function");
}
test()


//defn-generator funcn will returns an generator object that is stored in one variable and print that variable
//syntax for generator function
// function* generatorFun()
// {
// console.log("this is generator function");
// }
// let generator=generatorFun()
// console.log(generator);

function* generatorFun()
{
    yield 32;
    yield "Preeti"
    yield "46"
    yield "GM"
    yield 29;
    yield 90;
    return "PP";
}
let generator=generatorFun();
console.log(generator.next());
// console.log(generator);
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator);


//print the values of generator by using for 
for(let name of generator)
{
    console.log(name);
}