import { useState } from "react";
function Form({ displayWeatherData, displayForecastData }) {
  const [cityName, setCityName] = useState("");
  const apikey = "89e05916ae724d34b8c58f8a64c27519";
  function handleOnChange(event) {
    setCityName(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (cityName) {
      try {
        const weatherDataJson = await getWeatherData(cityName);
        const weatherForecastDataJson = await getWeatherForecastData(cityName);
        displayWeatherData(weatherDataJson);
        displayForecastData(weatherForecastDataJson);
      } catch (err) {
        if (err instanceof TypeError) {
          console.log(err.name);
        } else {
          console.log(err.name);
        }
      }
    } else {
      displayErrorMessage("Enter City Name");
    }
  }

  async function getWeatherData(city) {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${10101}&appid=${apikey}`;
    try {
      const responseObject = await fetch(apiurl);

      if (!responseObject.ok) {
        throw new Error(
          displayErrorMessage(`Error ${responseObject.status} : City Not Found`)
        );
      }
      return await responseObject.json();
    } catch (error) {
      if (error instanceof TypeError) {
        displayErrorMessage("NETWORK ERROR : No Internet connection");
      } else {
        console.log(error.name);
      }
    }
  }

  async function getWeatherForecastData(city) {
    const apiurlforecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${10101}&appid=${apikey}`;
    try {
      const responseforecast = await fetch(apiurlforecast);

      if (!responseforecast.ok) {
        throw new Error(
          displayErrorMessage(
            `${responseObject.status} : City Not Found for WeatherForecast`
          )
        );
      }
      return await responseforecast.json();
    } catch (error) {
      if (error instanceof TypeError) {
        displayErrorMessage(
          "NETWORK ERROR : No Internet connection for WeatherForecast"
        );
      } else {
        console.log(error.name);
      }
    }
  }
  async function displayErrorMessage(error_message) {
    alert(error_message);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div id="search-bar">
          <input
            id="search"
            type="text"
            onChange={handleOnChange}
            placeholder="Enter City Name"
          ></input>
          <button type="submit" id="search-button">
            Get Weather
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
