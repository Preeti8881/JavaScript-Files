

//Array-Jt is an homogenous and heterogenous type of data
let myArray=[
    1,
    "string",
    true,
    false,
    function a() {},
    {},
    null,
    undefined,
    10n
];
console.log(myArray);



let b={};
let array=[];
console.log(array);
console.log(typeof array);

//how to check array
console.log(Array.isArray(array));//true
console.log(Array.isArray(b));//false


console.log(array instanceof Array);//true
console.log(b instanceof Array);//false

//how to add an values to an array
array[0]=100;
array[48]=true;
array[100]="thursday";
console.log(array);

let boost=[100,200,300];
console.log((boost[3]=400));
console.log(boost);

//how to check the length of an array
console.log((boost[4]=500));
console.log(boost);
console.log(boost.length);

//how to fetch an array value
console.log(boost[2]);

//how to update an existing  array value
console.log((boost[3]="four hundred"));
console.log(boost);

//how to delete the valueof an array
console.log(delete boost[0]);//at oth index empty
console.log(boost);


//ARRAY METHODS
//1.Push

let myPet=["gandhi","waste","fellow"];
console.log(myPet);

//push
//to add the value to behind of an existing array
//push effects the original length of an array
// pushArray=myPet.push("definitely");
// console.log(pushArray);
// console.log(myPet);

//2.Unshift
//Unshift is adding the values from the beginning of Array
//Unshift effects the Original length of an array
// let unshift=myPet.unshift(840);
// console.log(unshift);
// console.log(myPet);

//3.Pop
//Pop method removes an value from the end of an array
//Pop does not accepts any arguments
//Pop effects the original length of an array
// let popAry-myPet.pop();
// console.log(popAry);
// console.log(myPet);

//4.Shift
//Shift method will remove an value from the beginning of an array
//Shift does not accepts any arguments
//Shift effects the original length of an array
// let shiftAry=myPet.shift();
// console.log(shiftAry);
// console.log(myPet);

//5.Slice
//Slice is used to extract an piece of value from an existing value
//It accepts one argument or two arguments,In that it includes first one(arg) and excludes second one(arg)
//It does not effect original length of an array 
//minus value in an argument indicates that values from the end
// let sliceAry=myPet.slice(1,2);
// let sliceAry1=myPet.slice(-3,-1)
//  console.log(sliceAry);
// console.log(sliceAry1);
// console.log(myPet);

//It creates an Shallow copy from an array and we can create n no.of shallow copies and manipulate
// let shallowCopy=myPet.slice();
// console.log(shallowCopy);
// console.log(myPet);

//6.Splice
//It accepts one argument or two arguments,In that it includes first one(arg) and excludes second one(arg) or three arguments(first one index,second-how many values want to remove from that index,third-elements to add from the removed element index)
//It effects the original length of an array
// let spliceAry=myPet.splice(0,1,"hello");//At the 0th index remove 1 value and the add hello there(hello,Waste,fellow)
// console.log(spliceAry);
// console.log(myPet);


//let array11=[30,60,90,120,150,180];
// let splice=array11.splice(0,3); When it is 0 in the first argument it excludes last argument
// let splice1=array11.splice(1,4); When it is greater than 0 in the first argument it includes last argument
// console.log(splice1);  
// console.log(splice);
// console.log(array11);

//If splice has three arguments-last one indicates index includes,2nd one -how many elements wants to be remove element index ,3rd one-from that removed element index how many elements want to add
// let splice3=array11.splice[1,3,2,4,6,8];
// console.log(splice3);
// console.log(array11);

//7.Find
let array9=[10,20,9,51,800,556];

//find method in javascript returns the first array element which satisfies the conditon
//find is an hof
let findA=array9.find(function (ele) {
    return ele>50 && ele<100
});
console.log(findA);

//8.findIndex
//findIndex in an JS will return the index of an array element which satisfies the condition
// let findIndex=array9.findIndex(function(index) {
//     return index <30;
// })
// console.log(index);


//9.Flat
//Flat is JS will nested array into an single array
// let nest=[100,[200,900,[500,[125]],70]];
// let flat=nest.flat(3);
// console.log(flat);

//10.Concat
//concat in JS will add or merge more than two arrays
// let str=["abc","abd"];
// let concatA=array11.concat(array9,nest,str);
// console.log(concatA);

//11.JOIN
// let result=["javascript","is","beautiful","language"];
// let join=result.join(".");
// console.log(join);
// console.log(typeof join);

//12.Reverse
// let rev=[30,50,250];
// let str1=["aa","cc"];
// let res=str1.reverse();
// console.log(res);

//13.Sort
//let ss=["cbc","bca","abc"];

let number=[22,40,540,100,11,10,230];
//return -1: don't swap
//return 1:Swap
//return 0:Current place

let sort=number.sort(function(cur,next){
    if(cur<next){
        return 1;
    }else{
        return -1;
    }
});
let sort1=number.sort(function(cur,next){
    if(cur<next){
        return -1;
    }else{
        return 1;
    }
});
console.log(sort1);

//Ascending using arrow function
let sort2=number.sort((cur,next)=> cur-next);
console.log(sort2);

//Descending using arrow function
let sort3=number.sort((cur,next)=> cur-next);
console.log(sort3);

//15.Some and Every
//Some method in JS will return true when some elements of an array will satisfies the given CSSCondition

let numbers=[330,440,110,550];
let some=numbers.some(function(ele){
    return ele>500;
});
console.log(some);

//every array method in JS will true when every element in an array will satisfies the condiotion
let every=numbers.every(function(ele){
    return ele>500;
});
console.log(every);

//Map filter reduce
//MAP METHOD
//Map will iterate through each and every array element and transform to new data called transform data
//Defn-Map method is used to loop an given array to a new array with transformed data.
//DEfn-
let birthYear=[1990,2000,2001,1990,1999,2002];
let map=birthYear.map(function(ele){
    return 2023-ele;
});
console.log(map);

for(let values in birthYear){  //in means index
    console.log(values);
}
let age=[];
for(let values of birthYear){ //of means values
    let ages=2023-values;
    age.push(ages);
}
console.log(age);


//FILTER METHOD
//filter method in JS filter the each array element with a given condition
let transaction=[200,-100,-40000,1000];

// let filter=transaction.filter(function (ele){
//     return ele>0;
// });
// console.log(filter);

let deposit=transaction.filter(function (ele){
    return ele>0;
});
console.log(deposit);

let withdrawal=transaction.filter(function (ele){
    return ele<0;
    0;
});
console.log(withdrawal);

let w=transaction.filter(()=>{});



//REDUCE METHOD
//reduce method in JS reduce or tells the given array element into an single value
//the result value stored in accumulator
let num=[33,20,50,66,74];
let reduce=num.reduce(function(acc,ele){
    return acc+ele;

},0);
console.log(reduce);

//De-structuring of an array
//Unpack all the elements and store it in different different variable
let newArray=[34,44,79,84,74];
let [a,b1,c,d,e]=newArray
console.log(a,b1,d,e);//34,44,84,74
//console.log(a,b,c,d,e,f);34,44,79,84,79,undefined

let details=["john","fransisc",34,"female"];
let [firstname,lastname,age1,gender="male"]=details
console.log(firstname);
console.log(lastname);
console.log(age1);
console.log(gender);//if there is female in array it will take first array element

function topResult(){
    return["suresh","ramesh","nandini","narmada","kamlesh"];
}
let[result3,result1,result2]=topResult();
console.log(result1,result2,result3);

//Spread operator(...)
//defn-Spread operator in JS extract all the array elements and displayed individually
//extract all the variables of an array and display individual value
//we can reduce the syntax,if there is n no of values


let spread=[300,400,500,600,700,750];

let fSpread=[
    spread[0],
    spread[1],
    spread[2],
    spread[3],
    spread[4],
    spread[5],
];
console.log(fSpread);
console.log(...spread);//300 400 500 600 700 750

let str10="hello";
console.log(...str10);//h e l l o

let num1=[1,2,3,4];
console.log(...num1);//1 2 3 4

function addition(p,q,r,s) {
    return p+q+r+s;

}
console.log(addition(...num1));//10

let aa=[20,40,60];
let bb=[10,70,90];
let cc=[...aa,...bb];
console.log(cc);//20 40 60 10 70 90 length-6

//Rest Operator
//Rest in JS collects remaining elements of an array
let rest=[90,180,30,60,360,720];
console.log(...rest);

let [a1,z1,...other]=rest;
console.log(a1,z1,other);//30 60 360,720

let nextLevel=[2,3,4,[50,60,],[80,90,[50,[80,85],105]]];
let[m,n,o,[a2,b2],[c1,d1,[e1,[f,g],h]]]=nextLevel;
console.log(m);
console.log(n);
console.log(o);
console.log(a2);
console.log(b2);
console.log(c1);
console.log(d1);
console.log(e1);
console.log(f);
console.log(g);
console.log(h);









