import React, { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [filterPersons, setFilterPersons] = useState(persons);

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
