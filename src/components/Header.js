import React from "react";
import '../Header.css';
import logo from '../assets/t9logo.jpg';

export default function Header(){
    return(
        <header className="header">
            <div className="logo-wrap">
                <img src={logo} alt="T9 Marketing Logo" className="logo"/>
                <h1 className="brand-title">T9 Marketing</h1>
            </div>
            <nav className="nav">
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
              <button className="cta">Get Strategy</button>
      </nav>
    </header>
    );
}