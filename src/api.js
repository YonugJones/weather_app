const apiKey = '6ec94825a2e54e1e93b194332242301';
let weatherData;

const getWeather = async () => {
    console.log('getting weather...');
    try {
        const citySearch = document.getElementById('search-input').value; 
        if (citySearch !== '') {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${citySearch}`, {mode: 'cors'})
            const cityWeather = await response.json();
            weatherData = {
                'city': cityWeather.location.name,
                'region': cityWeather.location.region,
                'country': cityWeather.location.country,
                'tempF': cityWeather.current.temp_f,
                'condition': cityWeather.current.condition.text,
                'icon': cityWeather.current.condition.icon,
                'feelsLikeF': cityWeather.current.feelslike_f,
                'tempC': cityWeather.current.temp_c,
                'feelsLikeC': cityWeather.current.feelslike_c,
                'windMPH': cityWeather.current.wind_mph,
                'windKPH': cityWeather.current.wind_kph,
                'humidity': cityWeather.current.humidity
            }
            return weatherData;
        } 
        return null;
    } catch (error) {
        return null;
    }
}

export default getWeather;