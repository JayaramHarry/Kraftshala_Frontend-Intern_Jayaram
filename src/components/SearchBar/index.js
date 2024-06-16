// import React, { useState } from 'react';
// import './style.css';

// const SearchBar = ({ onSearch }) => {
//   const [query, setQuery] = useState('');

//   const handleInputChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const handleSearch = () => {
//     const newLocation = {
//       name: query,
//       type: 'city',
//     };
//     onSearch(newLocation);
//     setQuery('');
//   };

//   return (
//     <div className="search-bar">
//       <input type="text" value={query} onChange={handleInputChange} placeholder="Enter city name" />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// export default SearchBar;

import React, { useState } from 'react';
import './style.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    if (query.trim() === '') {
      alert('Please enter a valid city name.');
      return;
    }
    
    const newLocation = {
      name: query,
      type: 'city',
    };
    
    onSearch(newLocation);
    setQuery('');
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
