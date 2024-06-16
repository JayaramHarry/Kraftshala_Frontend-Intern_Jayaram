import React, { useState } from 'react';
import Weather from './components/Weather';
import SearchBar from './components/SearchBar';
import DarkModeToggle from './components/DarkModeToggle';
import './App.css';

const App = () => {

  const [darkMode, setDarkMode] = useState(false);
  const [locations, setLocations] = useState([]);

  const addLocation = (location) => {
    setLocations([...locations, location]);
  };

  const removeLocation = (index) => {
    const updatedLocations = [...locations];
    updatedLocations.splice(index, 1);
    setLocations(updatedLocations);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header>
        <h1>Weather App</h1>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>
      <main>
        <SearchBar onSearch={addLocation} />
        <Weather locations={locations} removeLocation={removeLocation} />
      </main>
    </div>
  );
}

export default App;
