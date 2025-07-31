import React from "react";
import "../Contact.css";

export default function Contact (){
    return (
        <section className="contact"id="contact">
            <h2>Contact Us</h2>
            <p>Book a free consultation or send us a message today!</p>

            <form className="contact-form"action="https://formspree.io/f/mjkoooej"method="POST">
            <input type="text"name="name"placeholder="Your name"required/>
            <input type="email"name="email"placeholder="Your email"required/>
            <textarea name="message"placeholder="Your message"rows="5"required></textarea>

            <button type="submit">Send Message</button>
            </form>
        </section>
    );
}