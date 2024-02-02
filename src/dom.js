import toggleUnits from "./ui";

const renderWeatherInfo = (weatherData, isFahrenheit) => {
    console.log('renderWeatherInfo inititated');
    const display = document.querySelector('.display');
    display.textContent = '';

    const locationSection = document.createElement('div');
    locationSection.classList.add('location-section');
    display.appendChild(locationSection);

    const locationText = document.createElement('p');
    if (weatherData.region && weatherData.region !== weatherData.city) {
        locationText.textContent = `${weatherData.city} (${weatherData.region}), ${weatherData.country}`;
    } else {
        locationText.textContent = `${weatherData.city}, ${weatherData.country}`;
    }
    locationSection.appendChild(locationText);

    const conditionsSection = document.createElement('div');
    conditionsSection.classList.add('conditions-section');
    display.appendChild(conditionsSection);

    const icon = document.createElement('img');
    icon.src = weatherData.icon;
    icon.classList.add('icon');
    conditionsSection.appendChild(icon);

    const conditions = document.createElement('p');
    conditions.textContent = weatherData.condition;
    conditionsSection.appendChild(conditions);

    const tempSection = document.createElement('div');
    tempSection.classList.add('temperature-section');
    display.appendChild(tempSection)

    const temp = document.createElement('p');
    if (isFahrenheit) {
        temp.textContent = `Temperature: ${weatherData.tempF}°F / Feels like ${weatherData.feelsLikeF}°F`;
    } else {
        temp.textContent = `Temperature: ${weatherData.tempC}°C / Feels like ${weatherData.feelsLikeC}°C`;
    }
    tempSection.appendChild(temp);

    const extras = document.createElement('div');
    extras.classList.add('extras-section');
    display.appendChild(extras);

    const windSection = document.createElement('div');
    windSection.classList.add('wind-section');
    extras.appendChild(windSection);

    const windIcon = document.createElement('div');
    windIcon.innerHTML = '<i class="fa-solid fa-wind"></i>';
    windIcon.classList.add('icon');
    windSection.appendChild(windIcon);

    const windSpeed = document.createElement('p');
    if (isFahrenheit) {
        windSpeed.textContent = `${weatherData.windMPH} mph`;
    } else {
        windSpeed.textContent = `${weatherData.windKPH} kph`;
    }
    windSection.appendChild(windSpeed);
    
    const humiditySection = document.createElement('div');
    humiditySection.classList.add('humidity-section');
    extras.appendChild(humiditySection);

    const humidityIcon = document.createElement('div');
    humidityIcon.innerHTML = '<i class="fa-solid fa-water"></i>';
    humidityIcon.classList.add('icon');
    humiditySection.appendChild(humidityIcon);

    const humidity = document.createElement('p');
    humidity.textContent = `${weatherData.humidity}%`;
    humiditySection.appendChild(humidity);

    const unitsSection = document.createElement('div');
    unitsSection.classList.add('units-section');
    display.appendChild(unitsSection);

    const fahrenheit = document.createElement('p');
    fahrenheit.classList.add('units-fahrenheit');
    if (isFahrenheit) {
        fahrenheit.classList.add('active');
    }
    fahrenheit.textContent = '°F';
    unitsSection.appendChild(fahrenheit);

    const slash = document.createElement('p');
    slash.textContent = '/';
    unitsSection.appendChild(slash);

    const celsius = document.createElement('p');
    celsius.classList.add('units-celsius');
    if (!isFahrenheit) {
        celsius.classList.add('active');
    }
    celsius.textContent = '°C';
    unitsSection.appendChild(celsius);

    toggleUnits(isFahrenheit);
}

export default renderWeatherInfo;