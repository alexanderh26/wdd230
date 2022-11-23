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