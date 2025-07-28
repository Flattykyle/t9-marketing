import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';

function App(){
  return(
    <div className="app">
      <Header/>
      <Hero/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default App;