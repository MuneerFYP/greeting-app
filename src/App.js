
import React from 'react';
import GreetingCard from './GreetingCard';
import "./App.css"

function App() {
  return (
    <div className='b'>
      <div className='heading'>Simple Gretting Template</div>
      <GreetingCard occasion="Happy Birthday" recipient="Muhammad Muneer Ahmed" />
      <GreetingCard />
    </div>
  );
}

export default App;
