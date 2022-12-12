function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerButton").classList.toggle("open");
   
}
const x = document.getElementById('hamburgerButton');
x.onclick = toggleMenu;

let lastVisited = window.localStorage.getItem("lastVisited");
let lastVisitedDisplay = document.querySelector("#lastVisited");
if (lastVisited) {
    let days = Math.round((Date.now() - lastVisited));
    lastVisitedDisplay.textContent = `You visited this page ${days} days ago.`;
} else {
    lastVisitedDisplay.textContent = `You visited this page for the first time today.`;
}


const today= new Date();

    document.querySelector("footer div span").textContent = today.getFullYear();
    document.getElementById("lastupdatedate").textContent = document.lastModified;
    
   // select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;



    
  
submit = document.querySelector('#submit');
submit.addEventListener('click', () => {
    window.location.href="/thanks.html";
});