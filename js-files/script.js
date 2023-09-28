const ham = document.querySelector(".ham-menu")
const links = document.querySelector(".links")
const resume = document.getElementById("res")


ham.addEventListener("click", ()=>{
    ham.classList.toggle("active")
    links.classList.toggle("active")
})


resume.addEventListener("click", () => {
    window.open('https://drive.google.com/file/d/1XRiQXaDu2NZya42hpRvX6hER-CgJksh2/view?usp=sharing', '_blank');
    
})






