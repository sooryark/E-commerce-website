 //Get HTML Elements
 const navbar =  document.getElementById("navbar");
 const menuiconEL = document.getElementById("iconmenu");
 const closeicon = document.getElementById("iconclose");
 const mainimgEl = document.getElementById("mainimg");
 const smallpic = document.querySelectorAll(".smallimg");
 const colorEl = document.querySelectorAll(".color");
 const icons = document.querySelector(".menu-icon");
 const menubar = document.querySelector(".menu");
 const menuitems = document.querySelectorAll(".menuitems");
 const cards = document.querySelectorAll(".cards");
 const homebtn = document.getElementById("home");
 const shopbtn = document.getElementById("shop");
 const blogbtn = document.getElementById("blogel");
 const aboutbtn = document.getElementById("about");

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

/*
smallpic[0].addEventListener("click",()=>{
mainimgEl.src = smallpic[0].src;
})
smallpic[1].addEventListener("click",()=>{
mainimgEl.src = smallpic[1].src;
})
smallpic[2].addEventListener("click",()=>{
mainimgEl.src = smallpic[2].src;
})
smallpic[3].addEventListener("click",()=>{
mainimgEl.src = smallpic[3].src;
})

colorEl[0].addEventListener("click",()=>{
mainimgEl.src = smallpic[0].src;
})
colorEl[1].addEventListener("click",()=>{
mainimgEl.src = smallpic[1].src;
})
colorEl[2].addEventListener("click",()=>{
mainimgEl.src = smallpic[2].src;
})
colorEl[3].addEventListener("click",()=>{
mainimgEl.src = smallpic[3].src;
})
*/

for(i=0;i<cards.length;i++){
 let cardsval = cards[i];
  cardsval.addEventListener("click",()=>{
    window.location.href = "product.html"
   });
}
for(i=0;i<homebtn.length;i++){
 let homebtnEL = homebtn[i];
  homebtnEL.addEventListener("click",()=>{
    window.location.href = "index.html"
   });
}

homebtn.addEventListener("click",()=>{
  window.location.href="index.html"
})
shopbtn.addEventListener("click",()=>{
  window.location.href="shop.html"
})
blogbtn.addEventListener("click",()=>{
  window.location.href="blog.html"
})
aboutbtn.addEventListener("click",()=>{
  window.location.href="about.html"
})
