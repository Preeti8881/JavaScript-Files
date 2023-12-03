let btn=document.querySelector('form');
btn.addEventListener('click',(e)=>{
    let PName = document.getElementById('name').value;
    let password = document.getElementById('pwd').value
    e.preventDefault();
    console.log(PName,password);
})