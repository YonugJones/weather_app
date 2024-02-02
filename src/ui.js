import getWeather from "./api";
import renderWeatherInfo from "./dom";

function toggleUnits(isFahrenheit) {
    console.log('toggleUnits initiated');
    const fahrenheit = document.querySelector('.units-fahrenheit');
    const celsius = document.querySelector('.units-celsius');

    if (fahrenheit && celsius) {
        fahrenheit.addEventListener('click', async () => {
            if (!isFahrenheit) {
                const weatherData = await getWeather();
                renderWeatherInfo(weatherData, true);
            }
        });

        celsius.addEventListener('click', async () => {
            if (isFahrenheit) {
                const weatherData = await getWeather();
                renderWeatherInfo(weatherData, false);
            }
        });
    }
}

const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const isFahrenheit = true; 
    const weatherData = await getWeather();
    if (weatherData) {
        renderWeatherInfo(weatherData, isFahrenheit);
    }
});

export default toggleUnits;