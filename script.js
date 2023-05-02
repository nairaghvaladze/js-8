document.body.style.backgroundColor="Antiquewhite";
document.body.style.textAlign="center";
document.body.style.fontSize="20px";
document.body.style.fontWeight="500";
document.body.style.color="blueviolet";
var b=document.getElementById("text");
b.innerHTML="ორი რიცხვის ჯამის, სხვაობის, გამრავლების და გაყოფის ფუნქცია";
b.style.color="blueviolet";


function add(){
   
     a =parseInt(document.getElementById("number1").value);
    
     b=parseInt(document.getElementById("number2").value);
     c=document.getElementById("text1");
    
           
            sum = a + b ;
      
    
    document.getElementById("text1").value=sum;
    c.innerHTML="ჯამი=" +sum;
    c.style.color="blueviolet";
    
  

    
      


}
function sub(){
   
    a =parseInt(document.getElementById("number1").value);
    b=parseInt(document.getElementById("number2").value);
    c=document.getElementById("text1");
   
          
           sxvaoba = a - b ;
     
   
   document.getElementById("text1").value=sxvaoba;
   c.innerHTML="სხვაობა=" +sxvaoba;
   c.style.color="blueviolet";

   
     
}
function mult()
{ a=document.getElementById("number1").value;
b=document.getElementById("number2").value;
c=document.getElementById("text1");


if (a==0 || b==0) {
    c.innerHTML=" თუ ერთ-ერთი თანამამრავლი 0-ის ტოლია ნამრავლიც 0-ის ტოლია";
   c.style.color="red";
   return;

}

else {
  namr=a*b;
  c.innerHTML="  ნამრავლი = " + namr;
  c.style.color="blueviolet";
 
}

}
function div()
{ a=document.getElementById("number1").value;
b=document.getElementById("number2").value;
c=document.getElementById("text1");


if ( b==0) {
    c.innerHTML=" 0-ზე გაყოფა არ შეიძლება";
   c.style.color="red";
   return;

}

else {
 gana=a/b;
  c.innerHTML="  განაყოფი= " +  gana;
  c.style.color="blueviolet";
 
}

}



