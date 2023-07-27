import React, { useState } from "react";
import axios from "axios";

const CountryData = () => {
  const [value, setValue] = useState("");
  const [showCountry, setShowCountry] = useState([]);
  const [error, setError] = useState("No country found");
  const [countryInfo, setCountryInfo] = useState(null);
  const [flag, setFlag] = useState(null);
  const [languages, setLanguages] = useState([]);

  const onSearch = (e) => {
    e.preventDefault();
    fetchCountryData(value); // Fetch country data when the form is submitted
  };

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
            setShowCountry(countryNames); // Show the country names that match the filter
          } else {
            setShowCountry(null); // Reset the displayed country if no results
            setError("Country not found"); // Set error message if no results
          }
        })
        .catch((error) => {
          console.log("Error fetching country data:", error);
          setShowCountry(null); // Reset the displayed country on error
          setError("Error fetching country data"); // Set error message on error
        });
    } else {
      // If the search input has less than two characters, reset the displayed country and error messages
      setShowCountry(null);
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
          setFlag(response.data[0].flags);
          setLanguages(response.data[0].languages);
        } else {
          setCountryInfo(null);
          setFlag(null);
          setLanguages([]);
        }
      })
      .catch((error) => {
        console.log("Error fetching country data:", error);
        setCountryInfo(null);
        setFlag(null);
        setLanguages([]);
      });
  };

  const countryHandler = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        find Country:{" "}
        <input
          type="text"
          name="search"
          placeholder="search for country"
          onChange={countryHandler}
        />
      </form>
      {showCountry.length > 0 ? (
        <ul>
          {showCountry.map((currCountry, index) => {
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
          <h2>Language</h2>
          <ul>
            {languages.map((language, index) => {
              return <li key={index}>{language.name}</li>;
            })}
          </ul>
          {flag && (
            <img
              src={flag.png}
              alt="country flag"
              style={{ width: "100px", height: "auto" }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default CountryData;
