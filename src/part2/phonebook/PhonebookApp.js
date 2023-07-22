import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import PersonsFrom from "./PersonsFrom";
import Persons from "./Persons";
import personServer from "../../server/personServer";
import Notifier from "./Notifier";
import { v4 as uuidv4 } from 'uuid';

const PhonebookApp = () => {
  const [persons, setPersons] = useState([]);
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    personServer
      .getAll()
      .then((response) => {
        setPersons(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("fail", error);
      });
  }, []);

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
        id: uuidv4(), // Generate a unique id using uuid
      };

      personServer
        .create(personObj)
        .then((response) => {
          setPersons(persons.concat(response.data));
          setValues({ name: "", number: "" });
          setNotification(`${personObj.name} has been added sussessfully`)

          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
        .catch((error) => {
          console.log("fail", error);
        });
    }
  };

  const deletPerson = id => {
    personServer
    .del(id)
    .then((response) => {
      console.log(response.data)
      setPersons(persons.filter((personToDel) => personToDel.id !== id));
    })
    .catch((error) => {
      console.log(`Error deleting person, ${error}`);
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notifier notifier={notification} />
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
              handleDelete={() => deletPerson(person.id)}
            />
          ))
        : persons.map((person) => (
            <Persons
              key={person.id}
              name={person.name}
              number={person.number}
              handleDelete={() => deletPerson(person.id)}
            />
          ))}
    </div>
  );
};

export default PhonebookApp;
