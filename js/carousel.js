var n = 0;
var img1 = document.getElementById("img-1");
var img2 = document.getElementById("img-2");
var img3 = document.getElementById("img-3");

var right2 = document.getElementById("rightButton2");
var right1 = document.getElementById("rightButton1");
var right3 = document.getElementById("rightButton3");
right1.addEventListener("click", right);
right2.addEventListener("click", right);
right3.addEventListener("click", right);

var left1 = document.getElementById("leftButton1");
var left2 = document.getElementById("leftButton2");
var left3 = document.getElementById("leftButton3");
left1.addEventListener("click", left);
left2.addEventListener("click", left);
left3.addEventListener("click", left);

function left()
{
   console.log(n);
   
  switch (n) {
     case 0:
      img1.style.display= "none";
      img2.style.display= "none";
      img3.style.display= "flex";
      img3.style.width="100%";
      
      n=2;
       
        
        break;
      case 1:
      img1.style.display= "flex";
      img2.style.display= "none";
      img3.style.display= "none";
         n=n-1;
        
        
        break;
     default:
      img1.style.display= "none";
      img2.style.display= "flex";
      img3.style.display= "none";
      
        n = n-1;
        
        break;
  }
}
function right()
{
   console.log(n);
   
  switch (n) {
     case 0:
      img1.style.display= "none";
      img2.style.display= "flex"
      img3.style.display= "none";
      n=n+1;
        
        
        break;
      case 1:
      img1.style.display= "none";
      img2.style.display= "none";
      img3.style.display= "flex"
       
      n=n+1;
       
        
        break;
     default:
      img1.style.display= "flex"
      img2.style.display= "none";
      img3.style.display= "none";
      
        n = 0;
        
        break;
  }
}



