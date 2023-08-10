
import React from 'react';
import styles from './styling.css';

const Buttons = ({ filterByType, setSat, displaySats, satData }) => {
  return (
    <div className={styles['flex-container']}>
      {displaySats.map((sat, id) => (
        <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
        </button>
      ))}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;
