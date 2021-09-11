import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Person from "./components/Person";

import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [filterPersons, setFilterPersons] = useState(persons);

  //use effect to get data
  const hook = () => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((res) => {
      console.log("promise done");
      setPersons(res.data);
      //console.log(res.data);
    });
  };
  useEffect(hook, []);

  //Add Details
  const addDetails = (e) => {
    e.preventDefault();
    const perArray = persons.map((e) => e.name);
    const nameObj = {
      name: newName,
      number: newNumber,
    };

    if (perArray.includes(`${nameObj.name}`)) {
      console.log("got duplicate");
      window.confirm(`${newName} is already added, please add another name`);
      return;
    }

    setPersons(persons.concat(nameObj));
    setNewName("");
    setNumber("");
  };

  const handleAddName = (e) => {
    setNewName(e.target.value);
  };
  const handleAddNumber = (e) => {
    setNumber(e.target.value);
  };

  //Filter names
  const handleFilter = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
    //console.log(persons);
    setFilterPersons(
      persons.filter(
        (p) => p.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
      )
    );
    //console.log(filterPersons);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} handler={handleFilter} />
      <h3>Add a new person and number:</h3>
      <PersonForm
        addDetails={addDetails}
        newName={newName}
        newNumber={newNumber}
        handleAddName={handleAddName}
        handleAddNumber={handleAddNumber}
      />
      <h2>Numbers</h2>
      <ul>
        {filter === "" ? (
          <Person persons={persons} />
        ) : (
          <Person persons={filterPersons} />
        )}
      </ul>
    </div>
  );
};

export default App;
