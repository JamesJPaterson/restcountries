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
        // handles the response data
        const countries = data.map(country => ({
          name: country.name.common,
          population: country.population
          //Initial search for name and population
        }));
        setResponse(countries)
        console.log(countries); // To see if there's any issues and to initially see if it's working without having to show it
        
      })
      .catch(error => console.error(error));

  }
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
      <button type="submit">Search</button>
      {/* Added a search bar form with a button */}
    </form>

    {response && (
        <div>
          {response.map(country => (
            <div key={country.name}>
              <h2>{country.name}</h2>
              <p>Population: {country.population}</p>
            </div>
          ))}
        </div>
      )}
  </div>   
  )

}

export default App;
