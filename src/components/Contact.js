import React,{useState} from 'react';
import '../Contact.css';

export default function Contact(){
    const[isSent, setIsSent]=useState(false);

    return(
        <section id='contact' className="contact">
            <h3>Book Your Free Strategy Consultations</h3>
            <p className="intro-text">
                Fill out the form below and our team will reach out to schedule your session.
            </p>

            <form className="contact-form"
                action="https://formspree.io/f/xldlnryy" 
                method="POST"
                onSubmit={()=>setIsSent(true)}
            >
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" placeholder="Your Full Name"required/>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email"placeholder="your@example.com"required/>
                </div>

                <div className="form-group">
                    <label>Phone</label>
                    <input type="tel"placeholder="+123456789"/>
                </div>
                
                <div className="form-group">
                    <label>Business Name</label>
                    <textarea type="text"placeholder="Tell us what you want to achieve....."/>
                </div>

                <div className="form-group">
                    <label>Goals</label>
                    <textarea type="text" placeholder="message"/>
                </div>

                <button type="submit"className="cta">
                    Request Consultation
                </button>

                {isSent && <p className="success">Message sent! We will contact you soon.</p>}
            </form>
        </section>
    );
}