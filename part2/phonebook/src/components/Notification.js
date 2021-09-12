import React from "react";

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }
  return (
    <div className={`notification ${message.type}`}>
      <p>
        <strong>{message.text}</strong>
      </p>
    </div>
  );
};

export default Notification;
