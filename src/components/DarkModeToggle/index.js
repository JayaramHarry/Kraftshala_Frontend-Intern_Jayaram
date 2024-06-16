import React from 'react';
import './style.css';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button className={darkMode ? 'dark' : 'light'}
     onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default DarkModeToggle;
