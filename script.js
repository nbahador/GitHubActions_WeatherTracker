const city = "toronto";
const apiUrl = `https://www.metaweather.com/api/location/search/?query=${city}`;

async function fetchWeather() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    if (data.length > 0) {
        const woeid = data[0].woeid; // Get the WOEID (Where On Earth ID)
        const weatherResponse = await fetch(`https://www.metaweather.com/api/location/${woeid}/`);
        const weatherData = await weatherResponse.json();
        
        const temperature = weatherData.consolidated_weather[0].the_temp; // Today's temperature
        const time = new Date().toLocaleTimeString(); // Get current time

        // Update the temperature and time on the webpage
        document.getElementById("temperature").textContent = `${temperature}°C`;
        document.getElementById("time").textContent = `Last updated: ${time}`;
    } else {
        document.getElementById("temperature").textContent = "Error fetching data";
    }
}

// Fetch weather every 5 minutes (300000ms)
setInterval(fetchWeather, 300000);

// Initial fetch when the page loads
fetchWeather();
