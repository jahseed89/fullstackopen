import React, { useState } from "react";
import Filter from "./Filter";
import PersonsFrom from "./PersonsFrom";
import Persons from "./Persons";

const PhonebookApp = () => {
  const [persons, setPersons] = useState([
    {
      name: "Arto Hellas",
      number: "09049043493",
    },
    {
      name: "Ben Stiks",
      number: "98174638393",
    },
    {
      name: "James Atoobi",
      number: "98383930384",
    },
  ]);

  const [values, setValues] = useState({
    name: "",
    number: "",
  });

  const [filteredNames, setFilteredNames] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    // Filter the names based on the current input
    const filteredPersons = persons.filter((person) =>
      person.name.toLowerCase().includes(value.toLowerCase())
    );
    // Update the filtered names state
    setFilteredNames(filteredPersons);
  };

  const handleNameAndNum = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation if name or number already exist
    const warningMsg = persons.some(
      (person) => person.number === values.number || person.name === values.name
    );

    // Validation for empty input fild
    const emptyInput = values.name === "" || values.number === "";

    if (warningMsg) {
      window.alert("Sorry this information already exist pls try another");
    } else if (emptyInput) {
      window.alert("Input must not be empty");
    } else {
      let personObj = {
        name: values.name,
        number: values.number,
        id: persons.length + 1,
      };
      setPersons(persons.concat(personObj));
      setValues({ name: "", number: "" });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleChange} />
      <PersonsFrom
        onSubmit={handleSubmit}
        textValue={values.name}
        textOnchange={handleNameAndNum}
        numValue={values.number}
        numOnchange={handleNameAndNum}
      />
      <h2>Numbers</h2>
      
      {filteredNames.length > 0
        ? filteredNames.map((person) => (
            <Persons
              key={person.id}
              name={person.name}
              number={person.number}
            />
          ))
        : persons.map((person) => (
            <Persons
              key={person.id}
              name={person.name}
              number={person.number}
            />
          ))}
    </div>
  );
};

export default PhonebookApp;
