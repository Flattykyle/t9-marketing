import React,{ useState } from "react";
import "../Contact.css";

export default function Contact (){
    const [isSubmitted, setIsSubmitted]= useState(false);

    return (
        <section className="contact"id="contact">
            <h2>Contact Us</h2>
            <p>Book a free consultation or send us a message today!</p>

            {isSubmitted?(
                <div className="confirmation">
                    Thank you! Your message has been sent. We will get back to you shortly.
                </div>
            ) : (
            <form className="contact-form"action="https://formspree.io/f/mjkoooej"method="POST"
            onSubmit={()=>setIsSubmitted(true)}>
            <input type="text"name="name"placeholder="Your name"required/>
            <input type="email"name="email"placeholder="Your email"required/>
            <textarea name="message"placeholder="Your message"rows="5"required></textarea>

            <button type="submit">Send Message</button>
            </form>
            )}
        </section>
    );
}