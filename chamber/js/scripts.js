const today1 = new Date();

if (today1.getDay() == 1 || today1.getDay()==2 ){
  document.querySelector("header p").style.display='block';
}


function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerButton").classList.toggle("open");
   
}
const x = document.getElementById('hamburgerButton');
x.onclick = toggleMenu;

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
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

let lastVisited = window.localStorage.getItem("lastVisited");
let lastVisitedDisplay = document.querySelector("#lastVisited");
if (lastVisited) {
    let days = Math.round((Date.now() - lastVisited));
    lastVisitedDisplay.textContent = `You visited this page ${days} days ago.`;
} else {
    lastVisitedDisplay.textContent = `You visited this page for the first time today.`;
}
    