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
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });

    // Filter the names based on the current input
    const filteredPersons = persons.filter((person) =>
      person.name.toLowerCase().includes(value.toLowerCase())
    );

    // Update the filtered names state
    setFilteredNames(filteredPersons);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const warningMsg = persons.some(
      (person) => person.number === values.number
    );

    if (warningMsg) {
      window.alert("Sorry this number is been registered");
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
      <PersonsFrom onSubmit={handleSubmit} textValue={values.name} textOnchange={handleChange} numValue={values.number} numOnchange={handleChange} />
      <h2>Numbers</h2>
        {filteredNames.length > 0 ? (
          filteredNames.map((person) => (
            <Persons key={person.id} name={person.name} number={person.number} />
          ))
        ) : (
          <p><span>{persons.name}</span> <span>{persons.number}</span></p>
        )}
    </div>
  );
};

export default PhonebookApp;