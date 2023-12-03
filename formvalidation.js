function formValidation()
{
    let user=document.getElementById('username').value;
    let pass=document.getElementById('password').value;
    let cpass=document.getElementById('cpassword').value;
    let num=document.getElementById('mnum').value;
    let mail=document.getElementById('mailid').value;
 

    if(user=="")
    {
        document.getElementById('user1').innerHTML="please fill out the filed";
        return false;

    }
    if((user.length<7) || (user.length>15))
    {
     document.getElementById('user1').innerHTML="please enter the character between  7 to 15"
     return false;
    }
    if(!isNaN(user))  //returns true if a value is NaN else returns false,it will convert value to a number
    {
        document.getElementById('user1').innerHTML="please enter the string";
        return false;
    }
    if(pass=="")
    {
        document.getElementById('pass1').innerHTML="password can not be an empty";
        return false;
    }
    if((pass.length<5) || (pass.length>10))
    {
     document.getElementById('pass1').innerHTML="the password range should be between 5 to 10 ";
     return false;
    }
    if(cpass="")
    {
        document.getElementById('cpass1').innerHTML="the cpassword cant be an empty ";
        return false;

    }
    if((cpass.length<5) || (cpass.length>10))
    {
     document.getElementById('cpass1').innerHTML="the password length ";
     return false;
    }
    if(cpass!=pass)
    {
        document.getElementById('cpass1').innerHTML="password is not matching";
        return false;
    }
  if(num=="")
  {
    document.getElementById('mnum1').innerHTML="number cant be empty";
    return false;

  }
  if(isNaN(num))
  {
    document.getElementById('mnum1').innerHTML="strings are not allowed";
    return false;
  }
  if((num.length<0)||(num.length>10))
  {
    document.getElementById('mnum1').innerHTML="the length of the number should be 10 digit";
    return false;
  }

  
   
}