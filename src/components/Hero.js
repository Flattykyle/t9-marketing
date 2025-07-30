import React from 'react';
import '../Hero.css';

export default function Hero(){
    return(
     <section className="hero" id="hero">
        <div className="hero-content">
            <h1>Grow Your Business with <span>T9 Marketing</span></h1>
            <p>We help brands stand out online through strategy-driven Marketing
                campaigns and creative solutions that deliver real results.
            </p>
            <a href="#contact"className="cta.btn">Get Started</a>
        </div>        
     </section>
    );
}