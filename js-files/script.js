const ham = document.querySelector(".ham-menu")
const links = document.querySelector(".links")

ham.addEventListener("click", ()=>{
    ham.classList.toggle("active")
    links.classList.toggle("active")
})
