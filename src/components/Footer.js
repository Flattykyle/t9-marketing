import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} T9 Marketing. All Rights Reserved.</p>
                <div className="footer-links">
                    <a href="#hero">Home</a>
                    <a href="#services">Services</a>
                    <a href="Social-proof">Testimonials</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </footer>
    );
}