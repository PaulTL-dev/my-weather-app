import Footer from "./Footer";
import Body from "./Body";
import Form from "./Form";
import FiveDayForecast from "./FiveDayForecast";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("...");
  const [speed, setSpeed] = useState("...");
  const [emoji, setEmoji] = useState("");
  const [iconId, setIconId] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [foreCast, setForeCast] = useState("");
  const [btnvalue, setBtnvalue] = useState("°C");

  async function displayWeather(dataOneObjectJson) {
    const {
      name,
      main: { temp, temp_min, temp_max, humidity },
      weather: [{ description, icon, id, main }],
      wind: { deg, gust, speed },
      sys: { sunrise, sunset, country },
      timezone,
      visibility,
    } = dataOneObjectJson;

    setName(name);
    setHumidity(humidity);
    setDescription(description);
    setEmoji(getEmogi(id));
    setSpeed(speed);
    setIconId(icon);

    getTemeperature(temp);
    getLocaltime(timezone);
  }
  async function displayWeatherForecast(dataTwoObjectJson) {
    const { list } = dataTwoObjectJson;
    setForeCast(list);
  }
  function displayErrorMessage(error_message) {
    alert(error_message);
  }

  function getLocaltime(timeZone) {
    const now = new Date();
    const localTimeInMs = now.getTime() + timeZone * 1000;
    const localTime = new Date(localTimeInMs);
    setTimeZone(localTime.toLocaleString());
  }
  function getTemeperature(temp) {
    const newTemp = (temp - 273.15).toFixed(1);
    setTemp(newTemp + "°C");
  }
  function getEmogi(weatherid) {
    switch (true) {
      case weatherid >= 200 && weatherid < 300:
        return "⛈";
      case weatherid >= 300 && weatherid < 400:
        return "🌧";
      case weatherid >= 500 && weatherid < 600:
        return "🌧";
      case weatherid >= 600 && weatherid < 700:
        return "🌨";
      case weatherid >= 700 && weatherid < 800:
        return "🌫";
      case weatherid == 800:
        return "☀";
      case weatherid >= 801 && weatherid < 810:
        return "☁";
      default:
        return "?";
    }
  }
  function handleOnclick(t) {
    if (btnvalue === "°C") {
      setBtnvalue("°F");
    } else {
      setBtnvalue("°C");
    }
  }
  async function getIconId(iconId) {
    const urlpng = `https://openweathermap.org/img/wn/${iconId}@2x.png`;
    const responsePng = await fetch(urlpng);
    return responsePng;
  }

  return (
    <>
      <header>
        <Form
          displayWeatherData={displayWeather}
          displayForecastData={displayWeatherForecast}
          getError_message={displayErrorMessage}
        />
        <button id="unit-button" onClick={handleOnclick}>
          {btnvalue}
        </button>
      </header>
      <main>
        <Body
          city={name}
          tempValue={temp}
          condition={description}
          humidityLevel={humidity + "%"}
          windSpeed={speed + " " + "m/s"}
          graphic={emoji}
          Localtime={timeZone}
        />
        <FiveDayForecast listContents={foreCast} />
      </main>
      <Footer />
    </>
  );
}

export default App;
