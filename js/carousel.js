var n = 0;
var img1 = document.getElementById("img-1");
var img2 = document.getElementById("img-2");
var img3 = document.getElementById("img-3");

var left1 = document.getElementById("leftButton1");
var left2 = document.getElementById("leftButton2");
var left3 = document.getElementById("leftButton3");
left1.addEventListener("click", left);
left2.addEventListener("click", left);
left3.addEventListener("click", left);

function left()
{
  switch (n) {
     case 0:
      img1.style.display= "none";
      img2.style.display= "flex"
      img3.style.display= "none";
      n=n+1;
        console.log(n);
        
        break;
      case 1:
      img1.style.display= "none";
      img2.style.display= "none";
      img3.style.display= "flex"
         n=n+1;
        console.log(n);
        
        break;
     default:
      img1.style.display= "flex"
      img2.style.display= "none";
      img3.style.display= "none";
      console.log("1");
        n = 0
        
        break;
  }
}


/*function left()
{
    if (n=0)
    {
        //img1.style.width= "100%";
        //img2.style.width= "0";
        //img3.style.width= "0";
        console.log(n);
        n++;
        
     }
     else if(n=1) 
     {
        //img1.style.width= "0";
        //img2.style.width= "100%";
        //img2.style.width= "0";
        console.log(n);
        n++;
         
     }
     else if(n=2)
     {
        //img1.style.width= "0";
        //img2.style.width= "0";
        //img3.style.width= "100%";
        console.log(n);
        n= 0;
         
         
     }
     

    
}*/
