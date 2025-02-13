## Project Structure

```plaintext
GitHubActions_WeatherTracker/
│
├── .github/
│   └── workflows/
│       └── fetch-weather.yml       # Automates the weather data update every 5 minutes
│
├── index.html                      # Displays the weather data
├── script.js                       # Fetches weather data from MetaWeather and updates the webpage
├── README.md                       # Project documentation
└── package.json                    # Project dependencies and configurations


## How It Works
1. **Data Fetching**: The app retrieves real-time weather data from the **MetaWeather API**.
2. **Temperature Display**: It then displays the current temperature in **Celsius** on the webpage.
3. **Automatic Updates**: Every **5 minutes**, the temperature data is automatically refreshed to ensure the displayed information is up-to-date.



