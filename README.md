- **# GitHub Actions Weather Tracker**
  - A simple weather tracker application
  - Fetches the current temperature from a weather API
  - Displays the current temperature to the user
  - Deployment is triggered automatically by a scheduled GitHub Actions workflow

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
