const hamburguer = document.querySelector(".btn-hamburguer")
const navMenu = document.querySelector(".nav-menu")
let windowSize = screen.width
let contador = 0

hamburguer.addEventListener("click",()=>{
    navMenu.classList.toggle("nav-menu-visible")
    hamburguer.setAttribute("src","images/icon-close.svg")
    contador++
    if(contador%2==0){
        hamburguer.setAttribute("src","images/icon-hamburger.svg")
    }
    if(contador%2==1){
        hamburguer.setAttribute("src","images/icon-close.svg")
    }
})