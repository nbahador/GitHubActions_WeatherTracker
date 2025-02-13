async function fetchWeather() {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=43.7&longitude=-79.42&current_weather=true';
    try {
        const response = await fetch(url);
        const data = await response.json();
        const temperature = data.current_weather.temperature;
        const lastUpdated = new Date().toLocaleString();
        
        // Update the page with fetched temperature and last updated time
        document.getElementById('temperature').textContent = `${temperature}°C`;
        document.getElementById('lastUpdated').textContent = `Last updated: ${lastUpdated}`;
    } catch (error) {
        document.getElementById('temperature').textContent = 'Error fetching weather data';
        console.error('Error:', error);
    }
}

// Fetch weather on load and every 5 minutes
fetchWeather();
setInterval(fetchWeather, 5 * 60 * 1000);
