const requestURL = "/Users/alexanderholloway/Desktop/School stuff/WDD230/wdd230-1/chamber/data.json"
function displayBusinesses(business){
    let card = document.createElement ('section');
    let h2 = document.createElement('h2');
    h2.textContent = business.name;
    card.appendChild(h2);
    document.querySelector('div.cards').appendChild(card);
}
fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject);
        const businesses = jsonObject['businesses'];
        businesses.forEach(displayBusinesses);




    });
    
   