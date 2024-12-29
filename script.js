const weatherInput = document.querySelector('.weatherEntery');
const searchbtn = document.querySelector('#searchBtn');
const weatherImg = document.querySelector('.weatherImg');
const temp = document.querySelector('.temp');
const description = document.querySelector('.cloudy');
const speed = document.querySelector('.speed');
const humid = document.querySelector('.humidity');
const body = document.getElementsByTagName('body');

async function checkWeather(city){
    const apiKey = "14b1a5794c92e67f39be7da1771fc1e3";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const weatherData = await fetch(`${url}`);
    const data = await weatherData.json();
    console.log(data);

    temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
    speed.innerHTML = `${data.wind.speed}km`;
    humid.innerHTML = `${data.main.humidity}%`;
    description.innerHTML = `${data.weather[0].description}`;

    switch(data.weather[0].main){
        case 'Clouds':
            weatherImg.src = "cloud.png";
            break;
        case 'Clear':
            weatherImg.src = "clear.png";
            break;
        case 'Rain':
            weatherImg.src = "rain.png";
            break;
        case 'Mist':
            weatherImg.src = "mist.png";
            break;
        case 'Snow':
            weatherImg.src = "snow.png";
            break;
    }

}

searchbtn.addEventListener('click', ()=>{
    checkWeather(weatherInput.value);
});
