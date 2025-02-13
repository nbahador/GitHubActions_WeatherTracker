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
1. The app fetches data from the **MetaWeather API**.
2. It displays the current temperature in Celsius.
3. The temperature is updated automatically every 5 minutes.


