import React, { useState, useEffect } from "react";
import axios from "axios";

const CountryData = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("No country found");
  const [countryInfo, setCountryInfo] = useState(null);

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
    } else {
      // If the search input has less than two characters, reset the displayed country and error messages
      setCountries([]);
      setError(null);
    }
  };
  // *******Getting country information***********
  const getCountryInfo = (countryInfo) => {
    axios
      .get(`https://restcountries.com/v2/name/${countryInfo}?fullText=true`)
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

  const countryHandler = (event) => {
    setSearchTerm(event.target.value);
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
                <button onClick={() => getCountryInfo(currCountry)}>
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
            <span>Code: </span>
            <span>{countryInfo.callingCodes}</span>
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
        </div>
      )}
    </div>
  );
};

export default CountryData;
