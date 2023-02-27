 //Get HTML Elements
 const navbar =  document.getElementById("navbar");
 const menuiconEL = document.getElementById("iconmenu");
 const closeicon = document.getElementById("iconclose");
 const icons = document.querySelector(".menu-icon");
 const menubar = document.querySelector(".menu");
 const menuitems = document.querySelectorAll(".menuitems");

 //navbar toggle
 function togglemenu(){
  if(menubar.classList.contains("activemenu")){
    menubar.classList.remove("activemenu");
    closeicon.style.display = "none";
    menuiconEL.style.display = "block"
  }else{
    menubar.classList.add("activemenu");
    closeicon.style.display = "block";
    menuiconEL.style.display = "none";
  }
 };

 
menuitems.forEach((elem)=>{
  elem.addEventListener("click",togglemenu);
});

 
icons.addEventListener("click",togglemenu);


//navbar fixed 
window.addEventListener('scroll', function() {
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});



