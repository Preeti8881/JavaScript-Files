// let btn=document.querySelector('form');
// btn.addEventListener('submit',(e)=>{     //value and any function
//     let idName=document.getElementById('name').value;
//     let pass=document.getElementById('pass').value;
//     let mail=document.getElementById('mail').value;
//     //e.preventDefault();//it is the method which will prevent the data to go to database/somewhere else,it will give the data 
//     console.log(idName,pass,mail);
// })



//preventDefault
//defn-it is the method  which prevents the client data to go to the server and displays in the user interface

//normally when we submit the form data has to go to database in order to prevent the data to go to somewhere else we need prevent default method to show in the user interface




let btn=document.querySelector('button');
btn.addEventListener('click',()=>{
    let idName=document.getElementById('name').value;
    let pass=document.getElementById('pass').value;
    let div=document.querySelector('div');
    div.innerHTML=`${idName} and ${pass}`;
    div.style.color="red";
    div.style.fontSize="50px";

});