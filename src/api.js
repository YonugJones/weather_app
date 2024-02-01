const apiKey = '6ec94825a2e54e1e93b194332242301';
let weatherData;

const getWeather = async () => {
    try {
        const citySearch = document.getElementById('search-input').value; 
        if (citySearch !== '') {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${citySearch}`, {mode: 'cors'})
            const cityWeather = await response.json();
            console.log('getting weather');
            console.log(cityWeather);
            weatherData = {
                'city': cityWeather.location.name,
                'state': cityWeather.location.region,
                'country': cityWeather.location.country,
                'tempF': cityWeather.current.temp_f,
                'condition': cityWeather.current.condition.text,
                'icon': cityWeather.current.condition.icon,
                'tempFFeelsLike': cityWeather.current.feelslike_f,
                'tempC': cityWeather.current.temp_c,
                'tempCFeelsLike': cityWeather.current.feelslike_c,
            }
            console.log(weatherData);
            return weatherData;
        } 
            console.log('no city inputed');
            return null;
        
    } catch (error) {
        throw new Error('error');
    }
}

export default getWeather;