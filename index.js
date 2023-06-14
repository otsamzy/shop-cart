 const select = document.querySelector(".colors-option");

 select.addEventListener("click", e =>{
    btn = e.target
    if( btn.classList.contains("color")){
      document.querySelector(".colors-option .active").classList.remove("active")
       btn.classList.add("active");

       document.querySelector(".image-container .active").classList.remove("active");

       document.querySelector(`.image-container .${btn.id}`).classList.add("active")
    }
   
 })