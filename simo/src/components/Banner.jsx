/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";


function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div style={{
            paddingTop:'50px'
          }}className="banner-img">
            <img width={300} height={300} src="/simran.jpeg" alt="simran" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Simran Bai</h6>
            <h3>Software Developer</h3>
            <p>
            Motivated and skilled software developer with a passion for 
            creating visually appealing and user friendly websites.seeking 
            internship or part time software developer role to apply my development 
            expertise, contribute to projects and continue expanding my coding skills 
            while pursuing my degree in computer science
            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
