import React, {useState} from "react";
import '../Header.css';

export default function Header(){
    const [menuOpen, setMenuOpen]=useState(false);

    return(
      <>
       {/*Header*/}
       <header className="header">
        <div className="logo">
            <img src="/t9logo.jpg"alt="T9 Marketing"/>
        </div>

        {/*Desktop menu*/}
        <nav className="desktop-menu">
            <a href="#hero">Home</a>
            <a href="#services">Services</a>
            <a href="contact">Contact</a>
        </nav>

        {/*Mobile menu toggle*/}
        <div className="menu-toggle"onClick={()=>setMenuOpen(!menuOpen)}>
            ☰
        </div>
       </header>

       {/*Mobile sliding menu*/}
       <nav className={`mobile-menu ${menuOpen ? "open":""}`}>
        <a href="#hero"onClick={()=>setMenuOpen(false)}>Home</a>
        <a href="#services"onClick={()=>setMenuOpen(false)}>Services</a>
        <a href="#contact"onClick={()=>setMenuOpen(false)}>Contact</a>
       </nav>

       {/*Background overlay*/}
       {menuOpen && <div className="overlay"onClick={()=>setMenuOpen(false)}></div>}
      </>
    );
}