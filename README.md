## Basic Structure:

```plaintext
GitHubActions_WeatherTracker/
│
├── .github/
│   └── workflows/
│       └── fetch-weather.yml
│
├── index.html
├── script.js
├── README.md
└── package.json


index.html  --->  This file will display the weather data.

script.js  ---> This file will fetch the weather data from MetaWeather and update the webpage.

fetch-weather.yml ----> automate the update of the weather data every 5 minutes.

## How It Works
1. The app fetches data from the **MetaWeather API**.
2. It displays the current temperature in Celsius.
3. The temperature is updated automatically every 5 minutes.

