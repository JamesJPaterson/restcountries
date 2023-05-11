import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(null);


  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://restcountries.com/v3.1/name/${query}`)
      .then(response => response.json())
      .then(data => {
        setResponse(data);
      })
      // removed excess and returned data
  }
  
  return (
    <div>
      <header>
      <h1>RestCountriesApp</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
        <button type="submit">Search</button>
        {/* Added a search bar form with a button */}
      </form>

      {response && (
  <div>
    {response.map(country => (
      <div key={country.name.common} className="country">
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Region: {country.region}</p>
        <p>Population: {country.population}</p>
      </div>
    ))}
  </div>
)}


  </div>   
  )

}

export default App;
