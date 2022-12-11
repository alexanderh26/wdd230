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
            list.addEventListener('click', () => {
                table.innerHTML='';
                cards.innerHTML='';
                temples.forEach(temple =>{
                    displayTable(temple);
                });
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
    image.setAttribute('src', business.image);
    image.setAttribute('alt', '${temple.name} image');
    card.appendChild(image);

    let h2 = document.createElement('h2');
    h2.textContent= temple.name;
    card.appendChild(h2);

    let address = document.createElement('p');
    address.textContent=temple.address;
    card.appendChild(address);

    let phone = document.createElement('p');
    phone.textContent = temple.phone;
    card.appendChild(phone);

   let services = document.createElement('p');
   services.textContent = temple.services;
   card.appendChild(services);

   let history = document.createElement('p');
   history.textContent = temple.history;
   card.appendChild(history);

   let closure = document.createElement('p');
   closure.textContent = temple.closure;
   card.appendChild(closure);

    document.querySelector('div.cards').appendChild(card);
}

function displayTable (temple) {
    let tableRow = document.createElement('tr');

    let name = document.createElement('td');
    name.textContent = temple.name;
    tableRow.appendChild(name);

   let address = document.createElement('td');
   address.textContent=temple.address;
   tableRow.appendChild(address);

   let phone = document.createElement('td');
   phone.textContent = temple.phone;
   tableRow.appendChild(phone);

   let services = document.createElement('td');
   services.textContent = temple.services;
   tableRow.appendChild(services);

   let history = document.createElement('td');
   history.textContent = temple.history;
   tableRow.appendChild(history);

   let closure = document.createElement('td');
   closure.textContent = temple.clsoure;
   tableRow.appendChild(closure);

   document.querySelector('table').appendChild(tableRow);



}


