import React, { useState } from "react";

function ServicesExperience() {
  const [services] = useState([
    {
      title: "Wordpress Developer",
      desc: "Provide frontend services of wordpress website development",
      active: false,
    },
    {
      title: "Content Writing",
      desc: "Provide services of content writing",
      active: false,
    },
    {
      title: "Development",
      desc: "Create web websites using html, css, and javascript",
      active: true,
    },
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="btn">Know More</button>
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3>1</h3>
            <p>Year Experience</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>8</h4>
              <p>Clients</p>
            </div>
            <div className="portfolio">
              <h4>1</h4>
              <p>Year Experience</p>
            </div>
            <div className="portfolio">
              <h4>10+</h4>
              <p>Completed Projects</p>
            </div>
            <div className="portfolio">
              <h4>3</h4>
              <p>Achievements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesExperience;
