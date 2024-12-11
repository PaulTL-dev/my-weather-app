/*a function that loops over the object data*/
function FiveDayForecast({ listContents }) {
  const newListContents = [];

  try {
    for (let x = 0; x < 4; x++) {
      const {
        main: { temp, temp_min, temp_max, humidity },
        weather: [{ description, icon, id, main }],
        wind: { deg, gust, speed },
        visibility,
        dt_txt,
      } = listContents[x];
      /*clever use x values to select objects in the list then destructure them*/
      const emoji = getEmogi(id);
      const newTemp = getTemeperature(temp);
      newListContents.push({ newTemp, description, emoji, dt_txt });
    }
  } catch (error) {
    console.log(error.message);
  }
  function getEmogi(id) {
    switch (true) {
      case id >= 200 && id < 300:
        return "⛈";
      case id >= 300 && id < 400:
        return "🌧";
      case id >= 500 && id < 600:
        return "🌧";
      case id >= 600 && id < 700:
        return "🌨";
      case id >= 700 && id < 800:
        return "🌫";
      case id == 800:
        return "☀";
      case id >= 801 && id < 810:
        return "☁";
      default:
        return "...";
    }
  }
  function getTemeperature(temp) {
    const newTemp = (temp - 273.15).toFixed(1);
    return newTemp + "°c";
  }
  return (
    <>
      <section id="forecast_MainContainer">
        <section id="forecast_ContainerTitle">
          <h2>5 Day Forecast</h2>
        </section>

        <section id="fiveDayForecast_viewContainer">
          {newListContents.map((Object, index) => (
            <div className="page" key={index}>
              <p id="item_Emoji">{Object.emoji}</p>
              <p id="item_Description">{Object.description}</p>
              <p id="item_Temp">{Object.newTemp}</p>
              <p id="item_Dt-txt">{Object.dt_txt}</p>
            </div>
          ))}
        </section>
      </section>
    </>
  );
}
export default FiveDayForecast;
