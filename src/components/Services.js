import React from "react";
import "../Services.css";

export default function Services (){
    const services=[
        {
        title:"SEO Optimisation", description:"Improve your website ranking and drive organic traffic",
        icon:"🔍",
    },

    {
     title: "Social Media Marketing",description: "Engage your audience with powerful social strategies.",
     icon: "📱",
    },
    {
        title:"Content Creation",
        description:"High-quality content that connects with your customers.",
        icon:"✍"
    },
];

return (
    <section className="services"id="services">
        <h2>Our Services</h2>
        <div className="service-cards">
            {services.map((service, index)=>(
                <div className="service-card"key={index}>
                    <div className="icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <a href="#contact"className="learn-more">Learn More</a>
                </div>
            ))}
        </div>
    </section>
);
}