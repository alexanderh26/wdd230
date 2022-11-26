const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=43.82&lon=111.79&appid=c17b4cb84d9bf3024d9122973523ac72'

const getWeather = async() =>{
    const response = await fetch(apiUrl);
    jsObject = await response.json();

    let temp = kelvinToFahrenheit(jsObject.main.temp);
    document.querySelector('#temp').textContent= temp;

    let wind = jsObject.wind.speed;
    document.querySelector('#wind').textContent=wind;
    let temp_int = parseInt(temp);
    let wind_int = parseInt(wind);
    windchill(temp_int,wind_int);

};

const kelvinToFahrenheit = (kelvin) =>{
    const f = (kelvin -273.15)*1.8 +32 ;
    return f.toFixed(0);
}
const windchill = (temp, wind) =>{
    const windchill = document.querySelector('#windchill');
    const windDegree = document.querySelector('#windDegree');

    windchill.textContent ='N/A';
    if (temp <= 50 && wind >= 3) {
        let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(wind,0.16)) + (0.4275*temp*Math.pow(wind,0.16)));
        windchill.textContent = chill.toFixed(0);
        windDegree.innerHTML = '&#8457;';
}
}
getWeather();