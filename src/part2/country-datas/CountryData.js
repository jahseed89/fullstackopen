import React, { useState, useEffect } from "react";
import axios from "axios";

const CountryData = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("No country found");
  const [countryInfo, setCountryInfo] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  const WEATHER_API_KEY = "be4c5dbd64216a3139b6386547761184";

  useEffect(() => {
    fetchCountryData(searchTerm);
  }, [searchTerm]);

  const fetchCountryData = (country) => {
    console.log("fetching country data...");
    // Check if the search input has at least two characters
    if (country.length >= 2) {
      axios
        .get(`https://restcountries.com/v2/name/${country}?fullText=false`)
        .then((response) => {
          if (response.data.length > 0) {
            console.log(response.data);
            // Map the response data to an array of country names
            const countryNames = response.data.map((country) => country.name);
            setCountries(countryNames); // Show the country names that match the filter
          } else {
            setCountries([]); // Reset the displayed country if no results
            setError("Country not found"); // Set error message if no results
          }
        })
        .catch((error) => {
          console.log(`Error fetching countries data: ${error}`);
          setCountries([]); // Reset the displayed country on error
          setError("Error fetching country data"); // Set error message on error
        });
    }
  };
  // *******Getting country information***********
  const getCountryInfo = (countryName) => {
    axios
      .get(`https://restcountries.com/v2/name/${countryName}?fullText=true`)
      .then((response) => {
        if (response.data.length > 0) {
          console.log(response.data);
          setCountryInfo(response.data[0]);
          console.log("country code:", response.data[0].region);
        } else {
          setCountryInfo(null);
        }
      })
      .catch((error) => {
        console.log("Error fetching country data:", error);
        setCountryInfo(null);
      });
  };
  // *******Getting country weather information***********
  const getCountryWeather = (countryName) => {
    axios
        .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${WEATHER_API_KEY}&units=metric`
        )
        .then((weatherResponse) => {
            if (weatherResponse) {
            setWeatherData(weatherResponse.data);
            console.log(
                `here is the weather data: ${weatherResponse.data}`
            );
            }
        })
      .catch((error) => {
        console.log("Error fetching country data:", error);
        setWeatherData(null);
      });
  };

//   ************function to handle search input ******************
  const countryHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to construct the weather icon URL
  const getWeatherIconUrl = (iconCode) => {
    return `https://openweathermap.org/img/w/${iconCode}.png`;
  };

  return (
    <div>
      <form>
        find Country:{" "}
        <input
          type="text"
          name="search"
          placeholder="search for country"
          onChange={countryHandler}
        />
      </form>
      {countries.length > 0 ? (
        <ul>
          {countries.map((currCountry, index) => {
            return (
              <li key={index} style={{ listStyle: "none" }}>
                {currCountry}{" "}
                <button onClick={async () => {
                    await getCountryInfo(currCountry)
                    await getCountryWeather(currCountry)
                }}>
                  country details
                </button>{" "}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>{error}</p>
      )}
      {countryInfo && (
        <div>
          <h1>{countryInfo.name}</h1>
          <p>
            <span>Capital: </span>
            <span>{countryInfo.capital}</span>
          </p>
          <p>
            <span>Area: </span>
            <span>{countryInfo.area}</span>
          </p>
          <h2>Language</h2>
          <ul>
            {countryInfo.languages.map((language, index) => {
              return <li key={index}>{language.name}</li>;
            })}
          </ul>
          <img
            src={countryInfo.flags.png}
            alt="country flag"
            style={{ width: "100px", height: "auto" }}
          />

          {weatherData && (
            <div>
              <h1>Weader in {countryInfo.capital}</h1>
              <p>Temperature: {weatherData.main.temp} °C</p>
              <img src={getWeatherIconUrl(weatherData.weather[0].icon)} alt="weather icon"  />
              <p>Description: {weatherData.weather[0].description}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CountryData;
