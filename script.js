const city = "toronto";
const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=43.7&longitude=-79.42&current_weather=true`;

async function fetchWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data && data.current_weather) {
            const temperature = data.current_weather.temperature;  // Today's temperature
            const time = new Date().toLocaleTimeString();  // Get current time

            // Update the temperature and time on the webpage
            document.getElementById("temperature").textContent = `${temperature}°C`;
            document.getElementById("time").textContent = `Last updated: ${time}`;
        } else {
            console.error("No weather data found");
            document.getElementById("temperature").textContent = "Error fetching data";
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById("temperature").textContent = "Error fetching data";
    }
}

// Fetch weather every 5 minutes (300000ms)
setInterval(fetchWeather, 300000);

// Initial fetch when the page loads
fetchWeather();
