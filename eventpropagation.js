// let div=document.getElementById('demo');
// div.addEventListener('click',(e)=>{
// console.log(e.target);
// })


let gp=document.getElementById('grandparent');
gp.addEventListener('click',()=>{
    console.log("grand parent bubbling");
    // a.stopPropagation();
})

let p=document.getElementById('parent');
p.addEventListener('click',(b)=>{
    console.log("parent bubbling");
    b.stopPropagation();
})

let c=document.getElementById('child');
c.addEventListener('click',(e)=>{
    console.log("child bubbling");
 e.stopPropagation();

})

let gp1=document.getElementById('grandparent');
gp1.addEventListener('click',(d)=>{
    console.log("grand parent capture");
    d.stopPropagation();
},{capture:true})
// d.stopPropagation();


let p1=document.getElementById('parent');
p1.addEventListener('click',()=>{
    console.log("parent capture");
},{capture:true})

let c1=document.getElementById('child');
c1.addEventListener('click',()=>{
    console.log("child capture");
},{capture:true})

document.addEventListener('click',()=>{
    console.log("document bubbling");
})

document.addEventListener('click',()=>{
    console.log("document capturing");
},{capture:true})



