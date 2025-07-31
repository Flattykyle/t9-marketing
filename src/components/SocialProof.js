import React from "react";
import "./SocialProof.css";

export default function SocialProof(){
    const testimonials=[
        {
            name:"Frankline Kyle",
            company:"BrightTech",
            feedback:"T9 Marketing helped us double our online sales in just 3 months!",
            image:"https://via.placeholder.com/80"
        },

        {
            name:"Frankline Omollo",
            company:"Kenyan Arcade",
            feedback:"Their SEO strategies brought us to the first pages of Google!",
            image:"https://via.placeholder.com/80"
        },

        {
            name:"Njeri Kyle",
            company:"cosmetics",
            feedback:"The team is proffessional, creative, and always on time.",
            image:"https://via.placeholder.com/80"
        }
    ];

    return (
        <section className="social-proof"id="social-proof">
            <h2>What Our Clients Say</h2>
            <div className="testimonials">
                {testimonials.map((t, index)=>(
                    <div className="testimonial-card"key={index}>
                        <img src={t.image}alt={t.name}/>
                        <p>"{t.feedback}"</p>
                        <h4>{t.name}</h4>
                        <span>{t.company}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}