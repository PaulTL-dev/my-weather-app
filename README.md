# My Weather App

A lightweight React weather dashboard built with Vite that lets users search for a city and view the current weather conditions plus a 5-day forecast.

## Features

- Search for weather by city name
- Display current temperature, humidity, wind speed, and local time
- Show weather condition and emoji-based status icon
- View a 5-day forecast
- Toggle between Celsius and Fahrenheit
- Responsive, single-page interface

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- OpenWeatherMap API

## Project Structure

```text
my-weather-app/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── src/
│   ├── App.jsx
│   ├── Body.jsx
│   ├── FiveDayForecast.jsx
│   ├── Footer.jsx
│   ├── Form.jsx
│   ├── Navigation.jsx
│   ├── index.css
│   ├── main.jsx
│   └── assets/
│       ├── icu.png
│       ├── image11.jpg
│       ├── image8.jpg
│       ├── image9.jpg
│       └── zrdc.png
└── eslint.config.js
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal (typically `http://localhost:5173`).

### Production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Usage

1. Enter a city name in the search field.
2. Click "Get Weather".
3. View the current weather and the upcoming forecast.
4. Use the temperature toggle to switch between °C and °F.

## API Notes

This app fetches current weather and forecast data from the OpenWeatherMap API. The API key is currently defined in `src/Form.jsx`.

If you want to keep your key secure for longer-term use, consider moving it to an environment variable such as a `.env` file.

## Scripts

```bash
npm run dev     # start the development server
npm run build   # build the app for production
npm run lint    # run ESLint checks
npm run preview # preview the production build
```

## Notes

This project is a simple frontend weather application and is intended for learning/demo purposes. It does not currently include backend services, authentication, or persistent storage.
