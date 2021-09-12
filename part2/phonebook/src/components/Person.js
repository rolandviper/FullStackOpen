import React from "react";
import dataService from "../services/dataService";

const Person = ({ persons, setPersons }) => {
  const deleteHandler = (person) => {
    const action = window.confirm(`Do you want to delete ${person.name}`);
    const setArry = () => {
      setPersons(persons.filter((name) => name !== person));
    };
    if (action) {
      dataService
        .deleteData(person.id)
        .then(setArry())
        .catch((err) => console.log(err));
    }
  };

  return persons.map((person, i) => (
    <li key={i}>
      Name: {person.name} - tel: {person.number} -{" "}
      <button
        onClick={() => {
          deleteHandler(person);
        }}
      >
        Delete
      </button>
    </li>
  ));
};

export default Person;
