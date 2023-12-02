const apiKey = 'f058526311143e5cb733488ac3a08791'; 
const searchButton = document.getElementById('search-button');
const locationInput = document.getElementById('location-input');
const locationName = document.getElementById('location-name');
const temperature = document.getElementById('temperature');
const weatherDescription = document.getElementById('weather-description');
const weatherInfo = document.querySelector('.weather-info');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    fetchWeatherData(location);
});

async function fetchWeatherData(location) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
    const data = await response.json();

    if (data.cod === 200) {
        locationName.textContent = data.name;
        temperature.textContent = `${Math.round(data.main.temp - 273.15)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        weatherInfo.style.display = 'block';
    } else {
        alert('Location not found. Please try again.');
    }
}
