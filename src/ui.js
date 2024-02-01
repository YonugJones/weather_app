// eslint-disable-next-line import/no-cycle
import getWeather from "./api";
import renderWeatherInfo from "./dom";

const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', (event) => {
    event.preventDefault(); 
    console.log('search button clicked');
    getWeather();
    renderWeatherInfo();
});