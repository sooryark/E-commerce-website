 //Get HTML Elements
 const navbar =  document.getElementById("navbar");
 const menuiconEL = document.getElementById("iconmenu");
 const closeicon = document.getElementById("iconclose");
 const icons = document.querySelector(".menu-icon");
 const menubar = document.querySelector(".menu");
 const menuitems = document.querySelectorAll(".menuitems");
 const cards = document.querySelectorAll(".productitem");
 const homebtn = document.getElementById("home");
 const shopbtn = document.getElementById("shop");
 const blogbtn = document.getElementById("blogel");
 const aboutbtn = document.getElementById("about");
 const contactbtn = document.getElementById("contact");
 const cartbtn = document.getElementById("cart");
 const searchbtn = document.getElementById("searchbtn");
 const carttitle = document.getElementById("cart-title")
 const cartboxel  = document.querySelector(".cart-box")
 const cartbg = document.querySelector(".cartbg");
const bodyEl = document.querySelector(".container")
const cartclose = document.getElementById("cartclose");
const shopbtnEl = document.getElementById("shop-btn")



icons.addEventListener("click",togglemenu);

menuitems.forEach((elem)=>{
  elem.addEventListener("click",togglemenu);
});

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




//navbar fixed 
window.addEventListener('scroll', function() {
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});


//change pages

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
contactbtn.addEventListener("click",()=>{
  window.location.href="contact.html"
})


//search shop buttons
function seachbuttons(){
  const buttons = document.querySelectorAll(".searchbutton");
  buttons.forEach((button)=>{
  button.addEventListener("click",(e)=>{
  const filterbtn = e.target.dataset.filter;
  cards.forEach((box)=>{
    if(filterbtn == "all"){
      box.style.display = "block"
    }else{
      let data = box.dataset.item;
      if(filterbtn == data){
        box.style.display = "block";
      }else{
        box.style.display = "none";
      }
    }
  })
})
  })
  
}
seachbuttons()


//search shop input

searchbtn.addEventListener("keyup",(e)=>{
  let searchvalue = e.target.value.toLowerCase().trim();
  //console.log(searchvalue)
 cards.forEach((card)=>{
  let data = card.dataset.item;
 let btnfilter = card.dataset.item.filter;
 console.log(btnfilter)
  if(data.includes(searchvalue)){
    card.style.display = "block";
  }else{
    card.style.display = "none";
  }
 })
 
});

//cart btn open and close
cartbtn.addEventListener("click",()=>{
  cartbg.classList.add("cartbg-active");
 
 });
 cartclose.addEventListener("click",()=>{
   cartbg.classList.remove("cartbg-active");
 });
 

 //creat cart element

 function creatCart(carthead,cartimgEl,cartprice){
  return `
  <div class="cart-box">
     <div class="cart-img">
      <img src="${cartimgEl}" class="cart-imgelement">
      <p class="cart-price">${cartprice}</p>
     </div>
     <div class="cart-details">
      <p class="cart-title">${carthead}</p>
      <input type="number" class="cart-quantity" value="1">
      <p class="noofitem"></p>
     </div>
     <div>
     <button class="place-order">Place order</button>
     </div>
      <button class="removebtn"><i class="fa-solid fa-trash-can"></i></button>
   </div>
   `;
 }



  
let cartarr = []
  
 document.addEventListener("DOMContentLoaded",()=>{
  const addcartbtn = document.querySelectorAll(".addtocart");
  addcartbtn.forEach((addcart)=>{
    addcart.addEventListener(("click"),function(){
      let cartcontainer = this.parentElement;
      let carthead = cartcontainer.querySelector(".carthead").innerHTML;
      let cartimgEl = cartcontainer.querySelector("img").src;
      let cartprice = cartcontainer.querySelector(".price").innerHTML;
      let cartObj = {carthead}
      cartarr.push(cartObj)
     
      notification()
      //orderBtn()
    
       console.log(this.parentElement);
       let cartitems = creatCart(carthead,cartimgEl,cartprice);
       let element = document.createElement("div");
       element.innerHTML = cartitems;
       cartbg.append(element);
       
       

       const alertEl = document.querySelector(".alertel");
       const placeorderbtn = document.querySelectorAll(".place-order");
       const alertclosebtn = document.getElementById("alertclose");
        placeorderbtn.forEach((btn)=>{
         btn.addEventListener(("click"),()=>{
           alertEl.style.display = "block";
         })
        });
        alertclosebtn.addEventListener(("click"),()=>{
          alertEl.style.display= "none";
         })
  

       const removecart = document.querySelectorAll(".removebtn");
      removecart.forEach((btnel)=>{
    btnel.addEventListener("click",function(){
      if(confirm("Are you sure to Remove")){
        this.parentElement.parentElement.remove();
      }

    })
  });

  const quantitychange = document.querySelectorAll(".cart-quantity");
  quantitychange.forEach((quantityel)=>{
    quantityel.addEventListener("change",function(){
      if(this.value < 1){
        this.value=1;
      }
      updatetotal()
    })
  });
        
     })
    })
   
  })
 
  
  function notification(){
    if(cartarr.length > 0){
      //console.log(cartarr)
      const cartcount = document.querySelector(".cart-count")
      const audioEl = document.getElementById("audioel")
        cartcount.style.display = "block";
        audioEl.play()
        alert("Your Item added to card")
    }else{
      cartcount.style.display = "none";
    }
  }
   

 
 

  function updatetotal(){
    const total = document.querySelector(".total-cart");
  const cardbox = document.querySelectorAll(".cart-box");
  let totalEl = 0;
  cardbox.forEach((elem)=>{
   let priceel = elem.querySelector(".cart-price");
   let price = parseFloat(priceel.innerHTML.replace("Rs-",""));
   console.log(price);
   const inputel = elem.querySelector(".cart-quantity").value;
   const noofitem = elem.querySelector(".noofitem");
  //console.log(inputel);
  
   noofitem.innerText = `Rs- ${inputel * price}`;
   //console.log(totalEl);
   totalEl += (price*inputel)
   total.innerHTML = `Total-price: ` + totalEl;

  });

}




 
 


