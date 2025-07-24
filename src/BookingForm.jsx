import React, { useState } from 'react';

const BookingForm = ({ fitnessClass, onSubmit, onCancel }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (name && email) {
      onSubmit({ name, email, fitnessClass });
    }
  };

  return (
    <div>
      <h2>Booking for: {fitnessClass.name} at {fitnessClass.time}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label><br />
          <input value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <button type="submit">Book Class</button>
        <button type="button" onClick={onCancel} style={{ marginLeft: 10 }}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
