import React from 'react';
import './app.css';
import Header from './Header';
import TinderCards from './TinderCards';
import Swipebuttons from './Swipebuttons';


function App() {
  return (
    <div className ="app">
     {/*header*/}
     <Header />
     {/* tinder card */}
     <TinderCards />
     {/* Swipebuttons */}
     <Swipebuttons />
    </div>
  );
}

export default App;
