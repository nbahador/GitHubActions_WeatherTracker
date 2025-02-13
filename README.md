# GitHub Actions Weather Tracker

A simple weather tracker that fetches the current temperature and displays it. 
The deployment is triggered automatically by a scheduled action.

## Live Demo

Check out the live version of the weather tracker here:  
[Weather Tracker Live](https://nbahador.github.io/GitHubActions_WeatherTracker/)

## Project Structure

```plaintext
GitHubActions_WeatherTracker/
│
├── .github/
│   └── workflows/
│       └── deploy.yml              # Automates the deployment to GitHub Pages
│
├── index.html                      # Displays the weather data on the web page
├── package.json                    # Project dependencies and configurations
├── README.md                       # Project documentation
└── weather.js                       # Fetches weather data from Open-Meteo API and updates the webpage
