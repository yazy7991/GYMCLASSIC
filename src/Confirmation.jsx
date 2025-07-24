import React from 'react';

const Confirmation = ({ info, onReset }) => {
  return (
    <div>
      <h2>Booking Confirmed!</h2>
      <p><strong>Name:</strong> {info.name}</p>
      <p><strong>Email:</strong> {info.email}</p>
      <p><strong>Class:</strong> {info.fitnessClass.name} at {info.fitnessClass.time}</p>
      <button onClick={onReset}>Book Another</button>
    </div>
  );
};

export default Confirmation;
