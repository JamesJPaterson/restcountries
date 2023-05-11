import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://restcountries.com/v3.1/name/${query}`)
      .then(response => response.json())
      .then(data => {
        // handle the response data
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
  
}

export default App;
