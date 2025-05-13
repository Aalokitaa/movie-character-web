import React, { useState } from 'react';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([
    'Harry Potter',
    'Hermione Granger',
    'Ron Weasley',
    'Albus Dumbledore',
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Characters</h1>
        <ul>
          {characters.map((character, index) => (
            <li key={index}>{character}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;