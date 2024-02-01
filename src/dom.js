const renderWeatherInfo = () => {
    const display = document.querySelector('.display');

    const locationSection = document.createElement('div');
    display.appendChild(locationSection);

    const cityName = document.createElement('p');
    locationSection.appendChild(cityName);
    const stateName = document.createElement('p');
    locationSection.appendChild(stateName);
}

export default renderWeatherInfo;