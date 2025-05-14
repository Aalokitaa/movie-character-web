import './App.css';

function App() {
  const symptoms = [
    { symptom: 'Dry Skin', solution: 'Use a moisturizer with hyaluronic acid and drink plenty of water.' },
    { symptom: 'Oily Skin', solution: 'Use a gentle cleanser and apply an oil-free moisturizer.' },
    { symptom: 'Acne', solution: 'Use products with salicylic acid or benzoyl peroxide and avoid touching your face.' },
    { symptom: 'Dark Circles', solution: 'Get enough sleep, stay hydrated, and use an eye cream with vitamin C.' },
    { symptom: 'Sunburn', solution: 'Apply aloe vera gel and use a soothing moisturizer with SPF.' },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome Back Here!</h1>
        <p>Let's know your symptoms and find solutions:</p>
        <ul>
          {symptoms.map((item, index) => (
            <li key={index}>
              <strong>{item.symptom}:</strong> {item.solution}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
