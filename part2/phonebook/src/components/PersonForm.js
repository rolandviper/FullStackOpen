import React from "react";

const PersonForm = ({
  addDetails,
  newName,
  newNumber,
  handleAddName,
  handleAddNumber,
}) => {
  return (
    <form onSubmit={addDetails}>
      <div>
        name: <input value={newName} onChange={handleAddName} />
        <br></br>
        number: <input value={newNumber} onChange={handleAddNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
