import React, { useEffect, useState } from "react";
import axios from "axios";

import CountryInfo from "./components/CountryInfo";

function App() {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState([]);
  const [showInfo, setShowInfo] = useState({});

  const hook = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      console.log("promise solved, data received");
      setCountries(res.data);
      //console.log(res.data);
    });
  };

  useEffect(hook, []);

  const infohook = () => {
    setShowInfo(filter.length === 1 ? { ...filter[0] } : {});
  };
  useEffect(infohook, [filter]);

  const handleSearch = (e) => {
    setCountry(e.target.value);
    setFilter(
      countries.filter(
        (nation) =>
          nation.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1
      )
    );
    // console.log(filter);
  };

  const displayNations = () => {
    return (
      <ul>
        {filter.map((nation) => (
          <li key={nation.name}>
            {nation.name}{" "}
            <button onClick={() => setShowInfo(nation)}>show</button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h1>Find a Country</h1>
      <input
        placeholder="search for a country"
        onChange={handleSearch}
        value={country}
      />
      {filter.length > 10 ? (
        <p>Too many countries matched, please specify</p>
      ) : (
        displayNations()
      )}
      {filter.length > 10
        ? "Search For a Country"
        : showInfo.name && <CountryInfo showInfo={showInfo} />}
      {country === "" ? (
        ""
      ) : filter.length === 0 ? (
        <p>No Matches Found!</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
