import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Person from "./components/Person";

//module for REST to data
import dataService from "./services/dataService";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [filterPersons, setFilterPersons] = useState(persons);

  //use effect to get data
  const hook = () => {
    console.log("effect hook");
    dataService.getAll().then((res) => {
      console.log("promise done");
      setPersons(res);
      //console.log(res);
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
      const id = persons
        .filter((person) => person.name === newName)
        .map((person) => person.id);
      const res = window.confirm(
        `${newName} is already added, update the number with a new one?`
      );
      if (res) {
        dataService
          .updateData(id, nameObj)
          .then((res) => {
            setPersons(
              persons.map((person) => (person.id === res.id ? res : person))
            );
          })
          .catch((err) => console.log(err));
        setNewName("");
        setNumber("");
        return;
      }
    }

    dataService
      .createData(nameObj)
      .then((returnData) => {
        setPersons(persons.concat(returnData));
        window.confirm("Added new data");
      })
      .catch((err) => console.log(err));

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
          <Person persons={persons} setPersons={setPersons} />
        ) : (
          <Person persons={filterPersons} setPersons={setPersons} />
        )}
      </ul>
    </div>
  );
};

export default App;
