//PROTOTYPE


let obj={
    fruit:"apple",
};

let myObj={
    veg:"cucumber",
    color:"green",
};


//obj.__proto__=myObj;
console.log(obj.color);


myObj.__proto__=obj;




console.log(myObj.fruit);//undefined






//lucky sir

// let yourObj={
//     festival:"KannadaRajyotsava",
// };

// yourObj.__proto__={
//     flower:"Rose",
// };
// console.log(yourObj);
// //console.log(myObj.festival);


// console.log(obj);
// console.log(myObj);

// //console.log(obj.fruit);

// //obj.__proto__=myObj;
// myObj.__proto__=yourObj;




 // console.log(obj.veg);
// console.log(obj.color);


// console.log(obj.festival);
// console.log(myObj.festival);

