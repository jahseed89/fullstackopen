import React, { useState } from "react";
import axios from "axios";

const CountryData = () => {
  const [value, setValue] = useState("");
  const [showCountry, setShowCountry] = useState(null);
  const [error, setError] = useState(null);


  const onSearch = (e) => {
    e.preventDefault();
    fetchCountryData(value); // Fetch country data when the form is submitted
  };

  const fetchCountryData = (country) => {
    console.log("fetching country data...");
    axios
      .get(`https://restcountries.com/v2/name/${country}`)
      .then((response) => {
        if (response.data.length > 0) {
            console.log(response.data)
          setShowCountry(response.data[0].name); // Show the first result if any
          setError(null); // Reset error state
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
        <button type="submit">Search</button> {/* Add a search button */}
      </form>
      {showCountry && <p>Country: {showCountry}</p>}
      {error && <p>Error: {error}</p>}
      <div>
        <h1>Language</h1>
        {/* <img src={} alt="country flag" /> */}
      </div>
    </div>
  );
};

export default CountryData;
