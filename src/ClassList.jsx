import React from 'react';

const classes = [
  { id: 1, name: 'Yoga', time: '8:00 AM' },
  { id: 2, name: 'HIIT', time: '10:00 AM' },
  { id: 3, name: 'Spin Class', time: '6:00 PM' },
];

const ClassList = ({ onSelect }) => {
  return (
    <div>
      <h2>Available Classes</h2>
      <ul>
        {classes.map((cls) => (
          <li key={cls.id}>
            <strong>{cls.name}</strong> — {cls.time}
            <button onClick={() => onSelect(cls)} style={{ marginLeft: 10 }}>
              Book
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassList;
