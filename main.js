

const menu = document.querySelector(".header-right > a");
const hamburgerMenuOpen = document.querySelector(".hamburger-menu");
const hamburgerMenuclose = document.querySelector(".hamburger-menu > a");




menu.addEventListener("click", function(){
    
    hamburgerMenuOpen.classList.add("active");

    
    

});

hamburgerMenuclose.addEventListener("click", function(){

    hamburgerMenuOpen.classList.remove("active");

});
