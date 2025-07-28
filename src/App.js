import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import DashboardLayout from './components/DashboardLayout';


function App(){
  return(
    <DashboardLayout>
      <h1>Dashboard Home</h1>
      <p>This is where analytics and client data will go.</p>
    </DashboardLayout>,
    <div className="app">
      <Header/>
      <Hero/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default App;