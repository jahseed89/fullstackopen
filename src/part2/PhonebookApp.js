import React, { useState } from "react";

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
      <div>
        <p>
          Fliter shown with{" "}
          <input type="text" name="search" onChange={handleChange} />
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Add new</h2>
        <div>
          Name:{" "}
          <input
            type="text"
            value={values.name}
            onChange={handleChange}
            name="name"
          />
          <br />
          Numbers:{" "}
          <input
            type="number"
            value={values.number}
            onChange={handleChange}
            name="number"
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
        <h2>Numbers</h2>
        {/* {persons.map(person => <p key={person.id}>{person.name} <span>{person.number}</span></p>)} */}
        {filteredNames.length > 0 ? (
          filteredNames.map((person) => (
            <p key={person.id}>
              {person.name} <span>{person.number}</span>
            </p>
          ))
        ) : (
          <p>No user Found.</p>
        )}
      </form>
    </div>
  );
};

export default PhonebookApp;
