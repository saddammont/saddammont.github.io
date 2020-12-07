$(window).scroll(function(event) {
    var scrollTop = $(window).scrollTop();
   
    if(scrollTop >= 130){
      document.querySelector('header').style.backgroundColor='#000000';
    }
  
   if(scrollTop < 130){
      document.querySelector('header').style.backgroundColor='rgba(0, 0, 0, 0.3)';
    }
  
  });
