import React, { useState } from 'react';
import ClassList from './ClassList';
import BookingForm from './BookingForm';
import Confirmation from './Confirmation';

const App = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [bookingInfo, setBookingInfo] = useState(null);

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>Fitness Class Booking</h1>
      {!selectedClass && !bookingInfo && (
        <ClassList onSelect={setSelectedClass} />
      )}
      {selectedClass && !bookingInfo && (
        <BookingForm
          fitnessClass={selectedClass}
          onSubmit={setBookingInfo}
          onCancel={() => setSelectedClass(null)}
        />
      )}
      {bookingInfo && (
        <Confirmation info={bookingInfo} onReset={() => {
          setBookingInfo(null);
          setSelectedClass(null);
        }} />
      )}
    </div>
  );
};

export default App;

