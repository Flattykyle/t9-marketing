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
       </header>

       {/*Floating Menu Button*/}
       <div className="menu-toggle"onClick={()=>setMenuOpen(!menuOpen)}>
         ☰
       </div>

       {/*Sliding Navigation*/}
       <nav className={menuOpen ? "open":""}>
        <a href="#hero"onClick={()=>setMenuOpen(false)}>Home</a>
        <a href="#services"onClick={()=>setMenuOpen(false)}>Services</a>
        <a href="#contact"onClick={()=>setMenuOpen(false)}>Contact</a>
       </nav>

       {/*Background overlay*/}
       {menuOpen && <div className="overlay"onClick={()=>setMenuOpen(false)}></div>}
      </>
    );
}