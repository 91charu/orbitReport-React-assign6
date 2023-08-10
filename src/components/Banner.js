
import React from 'react';
import styles from './styling.css';

function Banner() {
  return (
    <header className={styles.banner}>
      <h1>Orbit Report</h1>
      <p>Click on the buttons to see the satellites in that orbit type</p>
    </header>
  );
}

export default Banner;
