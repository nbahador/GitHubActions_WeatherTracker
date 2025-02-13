const apiKey = "YOUR_OPENWEATHER_API_KEY";  // You need to replace this with your API key
const city = "Toronto";
const units = "metric"; // For Celsius temperature

async function fetchWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`);
    const data = await response.json();

    if (data.main) {
        const temperature = data.main.temp;
        const time = new Date().toLocaleTimeString();

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
