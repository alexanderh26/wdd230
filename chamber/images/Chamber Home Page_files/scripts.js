function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerButton").classList.toggle("open");
   
}
const x = document.getElementById('hamburgerButton');
x.onclick = toggleMenu;

const today= new Date();
    document.querySelector("footer div span").textContent = today.getFullYear();
    document.getElementById("lastupdatedate").textContent = document.lastModified;
    