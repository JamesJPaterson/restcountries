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
      // here we call on the data we got and we name it country and call each individual bit of information
      <div key={country.name.common} className="country">
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Region: {country.region}</p>
        <p>Population: {country.population.toLocaleString()}</p>
        <p>Languages: {Object.values(country.languages).join(", ")}</p>
        <p>Currency: {Object.values(country.currencies)[0].name}</p>
        <img src={country.flags.png} alt="Flag of {country.name.common}" />
      </div>
    ))}
  </div>
)}


  </div>   
  )

}

export default App;
