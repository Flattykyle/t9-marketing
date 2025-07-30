import React, {useState} from "react";
import "../Header.css";

export default function Header(){
    const [menuOpen, setMenuOpen]=useState(false);

    return (
        <>
         <header className="header">
            <div className="logo">
                <img src="/t9logo.jpg"alt="T9 Marketing"/>
            </div>

            {/*Mobile Menu Toggle*/}
            <div className="menu-toggle"onClick={()=>setMenuOpen(!menuOpen)}>
                ☰
            </div>
         </header>

         {/*Mobile Sliding Menu*/}
         <nav className={`mobile-menu ${menuOpen ? "open":""}`}>
            <a href="#hero"onClick={()=>setMenuOpen(false)}>Home</a>
            <a href="#services"onClick={()=>setMenuOpen(false)}>Services</a>
            <a href="#contact"onClick={()=>setMenuOpen(false)}>Contact</a>
         </nav>

         {/*Overly*/}
         {menuOpen && <div className="overlay"onClick={()=>setMenuOpen(false)}></div>}
        </>
    );
}