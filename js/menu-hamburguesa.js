const closeB     =document.getElementById("close-b");
const logo       =document.getElementById("logo");
const menu       =document.getElementById("menu");
const hamburgesa =document.getElementById("bars");
hamburgesa.addEventListener("click",open);
closeB.addEventListener("click",close);

function open()
{
    menu.style.display="block";
    menu.style.position="relative";
    
    logo.style.display="none";
    hamburgesa.style.display="none";
    closeB.style.display="block";
    
}
function close()
{
    menu.style.display="none";
    
    
    logo.style.display="flex";
    hamburgesa.style.display="flex";
    closeB.style.display="none";
}