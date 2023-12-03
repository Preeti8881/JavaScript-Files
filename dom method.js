//Dom Methods
//1.getElementById
//it return an object which element having an id as well as value as document object
//it is used to target single html element

let  elementId=document.getElementById("demo");
console.log(elementId,typeof elementId);

//innerHTML(property of DOM)
//Which displays the text by taking the behaviour of the specific tag
elementId.innerHTML="<h1>I want to change</h1>";


//innerText(property of DOM)
//it dispays text but does not take behaviour of tag
//elementId.innerText="<h1>I too want to change</h1>";
//elementId.innerText="Web technology";

//styling tht html element
elementId.style.color="red";
elementId.style.fontSize="50px";



//2.get elements by class method
     //getelementsByclassName return an object of html document which targets the elements having a class of value
     //getelementsByclassName returns in the form of html collection
     //why bczz it targets the elements in a descendent as well as in normal way

     let elementscls=document.getElementsByClassName('test');
     console.log(elementscls, typeof elementscls);
     console.log(Array.isArray(elementscls));//false
     elementscls[2].innerHTML="changed";

     //Array.from(elementscls)--it will convert collection into an array

     //to style the class element
     elementscls[1].style.color='red';
     elementscls[0].style.backgroundColor='red';

     //3.get elements by Tag name
     //getelementby tag name return the object by the element which is having only tag
     //It return interms of html collection bcz  it targets the document which is having multiple or same tags
      elementsTag=document.getElementsByTagName("article");
      console.log(elementsTag);
    
      elementsTag[1].style.backgroundColor="blue";
      //elementTag[0].innerHTML="<h1>this is article</h1>";




      // get element by tag name-When u r targetting the element which is not present in html it will give collection 
        //get element by class,query,queryselector all-Empty(node list)
        //get element by id-null
        let d=document.querySelectorAll('.test');
        console.log(d);

        let queryS=document.querySelector('.test');
        console.log(queryS);
        queryS.innerText="It is changed";
        // queryS.style.color="blue";
        // queryS.style.fontSize="100px";


        let allQuery=document.querySelectorAll('.test');
        console.log(allQuery);
        allQuery[0].style.backgroundColor="red";
        allQuery[0].innerHTML="heading";

        //Creating Element
        let createEle=document.createElement('h1');
        console.log(createEle);
        let createEle1=document.createElement('div');
        console.log(createEle1);
        createEle.innerText="Yes I am heading one";

        createEle1.innerText="Yes I am div";
        //createEle.innerText="Yes I am heading one";


        //append and appendchild
       
       
        //appendChild in as JS method
        //appendChild takes an element as an argument(as its last child)to insert on another element
        //it takes only one element
        //it does not takes string as an argument

        
        createEle.appendChild(createEle1);
        console.log(document.body.appendChild(createEle));
        //document.body.appendChild(createEle)

        //append
        //append in an JS method 
        //append takes an 'n' no of elements to insert on another element
        //it takes string as an argument

        let div1=document.createElement('h2');
        console.log(div1);
        div1.innerText="I am heading two"
        let div2=document.createElement('aside');
        console.log(div2);
        div2.innerText="I am aside tag"
        document.body.append(div1,div2);
        //

      

