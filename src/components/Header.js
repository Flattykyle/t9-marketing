import React, {useState} from "react";
import '../Header.css';

export default function Header(){
    const [menuOpen, setMenuOpen]=useState(false);

    return(
        <header className="header">

            {/*Logo*/}
            <div className="logo">
                <img src="/t9logo.jpg" alt="T9 Marketing"/>
            </div>

            {/*Hamburger menu icon*/}
            <div className="menu-toggle"onClick={()=>setMenuOpen(!menuOpen)}>
                 ☰
            </div>

            {/*Navigation*/}
            <nav className={menuOpen ?"open":""}>
                {menuOpen && <div className="overlay"onClick={()=>setMenuOpen(false)}></div>}
              <a href="#hero"onClick={()=>setMenuOpen(false)}>Home</a>
              <a href="#services"onClick={()=>setMenuOpen(false)}>Services</a>
              <a href="#contact"onClick={()=>setMenuOpen(false)}>Contact</a>
            </nav>
        </header>
    );
}