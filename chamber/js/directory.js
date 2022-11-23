const requestURL = 'https://alexanderh26.github.io/wdd230/chamber/data.json';
const list = document.querySelector('#list');
const table = document.querySelector('.table');
const grid = document.querySelector('#grid');
const cards = document.querySelector('.cards');
const displayItems = document.querySelector('.displayItems');
async function getData (requestURL) {
    const response = await fetch(requestURL);
        if (response.ok){
            const data = await response.json();
            const businesses = data['businesses'];
            businesses.forEach(business => {
                displayCards(business);
            });
            list.addEventListener('click', () => {
                table.innerHTML='';
                cards.innerHTML='';
                businesses.forEach(business =>{
                    displayTable(business);
                });
            });
            grid.addEventListener('click',()=>{
                table.innerHTML='';
                cards.innerHTML='';
                businesses.forEach(business => {
                    displayCards(business);
                });
            });
        }
}
getData(requestURL);
function displayCards(business) {
    let card = document.createElement('section');

    let image = document.createElement('img');
    image.setAttribute('src', business.image);
    image.setAttribute('alt', '${business.name} image');
    card.appendChild(image);

    let h2 = document.createElement('h2');
    h2.textContent= business.name;
    card.appendChild(h2);

    let address = document.createElement('p');
    address.textContent=business.address;
    card.appendChild(address);

    let phone = document.createElement('p');
    phone.textContent = business.phone;
    card.appendChild(phone);

    let website = document.createElement('a');
    website.setAttribute('href',business.website);
    website.textContent = 'Website';
    card.appendChild(website);

    document.querySelector('div.cards').appendChild(card);
}

function displayTable (business) {
    let tableRow = document.createElement('tr');

    let name = document.createElement('td');
    name.textContent = business.name;
    tableRow.appendChild(name);

   let address = document.createElement('td');
   address.textContent=business.address;
   tableRow.appendChild(address);

   let phone = document.createElement('td');
   phone.textContent = business.phone;
   tableRow.appendChild(phone);

   let website = document.createElement('td');
   website.innerHTML = `<a href="${business.website}">Website</a>`;

   document.querySelector('table').appendChild(tableRow);



}
let lastVisited = window.localStorage.getItem("lastVisited");
let lastVisitedDisplay = document.querySelector("#lastVisited");
if (lastVisited) {
    let days = Math.round((Date.now() - lastVisited));
    lastVisitedDisplay.textContent = `You visited this page ${days} days ago.`;
} else {
    lastVisitedDisplay.textContent = `You visited this page for the first time today.`;
}const today1 = new Date();

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