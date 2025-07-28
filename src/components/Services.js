import React,{ useEffect, useRef } from 'react';
import '../Services.css';

const services=[
    {
     title: "SEO INteligence", 
     desc:"AI-powered keyword research and technical SEO.",
     icon:(
        <svg width="40" height="40" fill="#0d47a1" viewBox="0 0 24 24">
            <path d="M10 2a8 8 0 105.29 14.29l4.7.4.71.41-1.41-4.7A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0010-12z"/>
        </svg>
     )

    },
    {
     title: "Constent Engine", 
     desc: "Generate optimized content at scale.",
     icon:(
        <svg width="40" height="40" fill="#0d47a1" viewBox="0 0 24 24">
            <path d="M3 4h18v2H3V4zm0 6h12v2H3v-2zm06h18v2H3v-2z"/>
        </svg>
     )
    },
    {
     title:"Link Building", 
     desc:"AI-discovered link opportunities with safe outreach",
     icon:(
        <svg width="40" height="40" fill="#0d47a1" viewBox="0 0 24 24">
            <path d="M3.9 12a5 5 0 017.07-7.07l1.41 1.41-1.41 1.4l9.48 7.34A3 3 0 106.34 10.5l1.41 1.41-1.41 1.41l39 12zm16.2 0a5 5 0 00-7.07-7.07l-1.41 1.41 1.41 1.41 1.41-1.41a3 3 0 014.24 4.24l-1.41 1.41 1.41 1.41L20.1 12z"/>
        </svg>
     )
    },
];

export default function Services(){
    const cardsRef=useRef([]);

    //Intersection Observer for animation
    useEffect(()=>{
        const Observer=new IntersectionObserver(
            (entries)=>{
                entries.forEach((entry)=>{
                    if(entry.isIntersecting){
                        entry.target.classList.add('show');
                    }
                });
            },
            { threshold: 0.2}
        );

        cardsRef.current.forEach((card)=>{
            if (card)Observer.observe(card);
        });

        return()=>{
            cardsRef.current.forEach((card)=>{
                if(card) Observer.unobserve(card);
            });
        };
    },[]);

    //scroll to contact section
    const scrollToContact=()=>{
        const contactSection=
    document.getElementById("contact");
        contactSection.scrollIntoView({behavior:"smooth"});
    };

    return(
        <section id="services" className="services">
            <h3>Our core Services</h3>
            <div className="service-cards">
                {services.map((service,i)=>(
                  <div 
                   className="card hidden"
                   key={i}
                   ref={(el)=>(cardsRef.current[i]=el)}
                   >
                    <div className="icon">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
                <a href={'/services/${services.title.toLowerCase().replace(/\s+/g,'-')}'}
                >
                    Learn More 
                </a>
            </div>
        ))}
        </div>
      </section>    
    );
}