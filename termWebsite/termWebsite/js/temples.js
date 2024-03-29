const LIKES_KEY = "temple-likes";

function initTempleLikes(){
    let likes_string = localStorage.getItem(LIKES_KEY);
    if (likes_string==null){
        likes_string="[]";
        localStorage.setItem(LIKES_KEY, likes_string);
    }
}


const requestURL = 'https://alexanderh26.github.io/wdd230/termWebsite/termWebsite/temples.json';
const list = document.querySelector('#list');
const table = document.querySelector('.table');
const grid = document.querySelector('#grid');
const cards = document.querySelector('.cards');
const displayItems = document.querySelector('.displayItems');
async function getData (requestURL) {
    const response = await fetch(requestURL);
        if (response.ok){
            const data = await response.json();
            const temples = data['temples'];
            temples.forEach(temple => {
                displayCards(temple);
            });
            
            grid.addEventListener('click',()=>{
                table.innerHTML='';
                cards.innerHTML='';
                temples.forEach(temple => {
                    displayCards(temple);
                });
            });
        }
}
getData(requestURL);
function displayCards(temple) {
    let card = document.createElement('section');

    let image = document.createElement('img');
    image.setAttribute('src', temple.image);
    image.setAttribute('alt', '${temple.name} image');
    card.appendChild(image);

    let h2 = document.createElement('h2');
    h2.textContent= temple.name;
    card.appendChild(h2);

let addressTitle =document.createElement('h4');
addressTitle.textContent="Address:";
card.appendChild(addressTitle);

    let address = document.createElement('p');
    address.textContent=temple.address;
    card.appendChild(address);
let phoneTitle=document.createElement('h4');
phoneTitle.textContent="Phone:";
card.appendChild(phoneTitle);

    let phone = document.createElement('p');
    phone.textContent = temple.phone;
    card.appendChild(phone);

    let serviceTitle=document.createElement('h4');
    serviceTitle.textContent="Services:";
    card.appendChild(serviceTitle);

   let services = document.createElement('p');
   services.textContent = temple.services;
   card.appendChild(services);

   let historyTitle=document.createElement('h4');
historyTitle.textContent="History:";
card.appendChild(historyTitle);

   let history = document.createElement('p');
   history.textContent = temple.history;
   card.appendChild(history);

let closureTitle=document.createElement('h4');
closureTitle.textContent="Closures:";
card.appendChild(closureTitle);

   let closure = document.createElement('p');
   closure.textContent = temple.closure;
   card.appendChild(closure);

   let liked = document.createElement("p");
   liked.innerHTML=`<input class="mycheck" id="check-${temple.id}" type="checkbox" onclick="likeTemple(this);"> Like This Temple!`;
   card.appendChild(liked);

    document.querySelector('div.cards').appendChild(card);
}

function likeTemple(item){
    let likes_string = localStorage.getItem(LIKES_KEY);
    let likeslist = JSON.parse(likes_string);
    if (item.checked){
        if (!likeslist.includes(item.id)){
            likeslist.push(item.id);
        }
    }
    else{
        if (likeslist.includes(item.id)){
            likeslist.splice(likeslist.indexOf(item.id), 1);
        }
    }
    localStorage.setItem(LIKES_KEY, JSON.stringify(likeslist));
}

// This function checks an individual box for a like
function displayLike(item){
    let obj = document.getElementById(item);
    obj.checked = true;
}



// Call the init function when the page loads
initTempleLikes();


            // Turn the string value from local storage into a Java array
            let likes_string = localStorage.getItem(LIKES_KEY);
            let likeslist = JSON.parse(likes_string);            

            // Set the likes
            likeslist.forEach(displayLike);
        




