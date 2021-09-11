import React, { useEffect, useState } from "react";
import axios from "axios";

const api = process.env.REACT_APP_API_KEY;

const CountryInfo = ({
  showInfo: { name, capital, population, flag, languages },
}) => {
  const [weather, setWeather] = useState({});

  const weatherHook = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${api}`
      )
      .then((res) => {
        console.log("weather received");
        console.log(res.data);
        setWeather(res.data);
      });
  };
  useEffect(weatherHook, [capital]);

  return (
    <div>
      <h2>{name}</h2>
      <h4>Information:</h4>
      <p>
        <em>Capital:</em>
        {capital}
      </p>
      <p>
        <em>Population:</em>
        {population}
      </p>
      <h4>Languages</h4>
      <ul>
        {languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <p>Flag of {name}</p>
      <img
        src={flag}
        width="30%"
        border="5px solid black"
        alt={"flag of " + name}
      />

      <p>
        <strong>Weather in {capital}</strong>
      </p>
      {Object.keys(weather).length !== 0 && (
        <>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather.map(
              (val) => val.icon
            )}@2x.png`}
            alt={
              "Icon of weather at" +
              capital +
              "which is " +
              weather.weather.map((val) => val.main + " " + val.description)
            }
          />
          <p>
            {weather.weather.map((val) => val.main + " " + val.description)}
          </p>
          <p>
            <strong>Temperature:</strong> {weather.main.temp}&#8451;{" "}
            {weather.main.pressure} hPa
          </p>
          <p>
            <strong>Wind:</strong>
            {weather.wind.speed} m/s at {weather.wind.deg} &deg;
          </p>
        </>
      )}
    </div>
  );
};

export default CountryInfo;
