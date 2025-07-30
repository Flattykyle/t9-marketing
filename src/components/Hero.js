import React from "react";
import "../Hero.css";

export default function Hero() {
    return (
        <section className="hero"id="hero">
            <div className="hero-content">
                <h1>Grow Your Business with<span>T9 Marketing</span></h1>
                <p>We provide result-driven digital marketing services to help your business stand out online and reach more customers.</p>
                <a href="#contact"className="cta-btn">Get Started</a>
            </div>
        </section>
    );
}