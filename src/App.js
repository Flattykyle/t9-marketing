import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SocialProof from "./components/SocialProof";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App(){
  return(
    <>
     <Header/>
     <Hero/>
     <Services/>
     <SocialProof/>
     <Contact/>
     <Footer/>
    </>
  );
}

export default App;