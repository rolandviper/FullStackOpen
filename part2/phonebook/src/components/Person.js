import React from "react";

const Person = ({ persons }) => {
  return persons.map((person, i) => (
    <li key={i}>
      Name: {person.name} - tel: {person.number}
    </li>
  ));
};

export default Person;
