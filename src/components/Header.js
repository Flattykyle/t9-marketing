import React, {act, useEffect, useState} from "react";
import "../Header.css";

export default function Header(){
    const[menuOpen, setMenuOpen]=useState(false);
    const[isScrolled, setIsScrolled]=useState(false);
    const[activeLink, setActiveLink]=useState("#hero");

    useEffect(()=>{
        const handleScroll=()=> {
            setIsScrolled(window.scrollY > 50);

        const sections=["#hero", "#services", "#social-proof", "#contact"];
        for(let section of sections) {
            const element=document.querySelector(section);
            if(element){
            const top=Element.offsetTop-80;
            const bottom=top + Element.offsetHeight;
            if(window.scrollY>=top && window.scrollY <bottom) {
                setActiveLink(section);
            }
        }
        }
    };

    window.addEventListener("scroll",handleScroll);
    return ()=>window.removeEventListener("scroll", handleScroll);
    },[]);

    return (
        <>
         <header className={`header ${isScrolled ? "scrolled":""}`}>
            <div className="logo">
                <img src="/t9logo.jpg"alt="T9 Marketing"/>
            </div>

            {/*Desktop Menu*/}
            <nav className="desktop-menu">
                <a href="#hero" className={activeLink==="#hero" ? "active":""}>Home</a>
                <a href="#services"className={activeLink==="#services" ? "active":""}>Services</a>
                <a href="#social-proof"className={activeLink==="#social-proof" ? "active":""}>Testimonials</a>
                <a href="#contact"className={activeLink==="#contact" ? "active":""}>Contact</a>
            </nav>

            {/*Mobile Menu Toggle*/}
            <div className="menu-toggle"onClick={()=>setMenuOpen(!menuOpen)}>
                ☰
            </div>
         </header>

         {/*Mobile Sliding Menu*/}
         <nav className={`mobile-menu ${menuOpen ? "open":""}`}>
            <a href="#hero"onClick={()=>setMenuOpen(false)}>Home</a>
            <a href="#services"onClick={()=>setMenuOpen(false)}>Services</a>
            <a href="social-proof"onClick={()=>setMenuOpen(false)}>Testimonials</a>
            <a href="#contact"onClick={()=>setMenuOpen(false)}>Contact</a>
         </nav>

         {/*Overly*/}
         {menuOpen && <div className="overlay"onClick={()=>setMenuOpen(false)}></div>}
        </>
    );
}