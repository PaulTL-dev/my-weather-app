function Body(props) {
  return (
    <>
      <section id="container_Displayed_WeatherData">
        <h1>Current Weather</h1>
        <div id="container_primaryContent">
          <p className="data">{props.city}</p>
          <p className="data">{props.Localtime}</p>
          <p id="emoji">{props.graphic}</p>
          <p id="temperature-value">{props.tempValue}</p>
          <p id="condition">{props.condition}</p>
        </div>

        <div id="container_secondaryContent">
          <p className="secondaryData">Wind: {props.windSpeed}</p>
          <p className="secondaryData">Humidity: {props.humidityLevel}</p>
        </div>
      </section>
    </>
  );
}

export default Body;
