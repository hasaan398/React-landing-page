import React from "react";
import heroImg from "../../assets/hero.png"; // apna image yahan rakho
import "./Hero.css";
import {
  FaShapes,
  FaAtom,
  FaCubes,
  FaDharmachakra,
  FaCircleNotch,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        
        {/* Left side content */}
        <div className="hero-left">
    <h1 className="hero-title">
  <span className="highlight">Teach</span> students worldwide
</h1>

          <p className="hero-subtext">
          Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.
          </p>
          <div className="hero-actions">
            <button className="btn btn-signup">Sign Up Free</button>
            <button className="btn btn-demo">View Demo</button>
          </div>

          {/* Trusted by section */}
          <div className="hero-trusted">
            <p className="trusted-text">
              Trusted by <br /> leading companies
            </p>
            <div className="trusted-icons">
              <FaCircleNotch />
              <FaDharmachakra />
              <FaCubes />
              <FaShapes />
              <FaAtom />
            </div>
          </div>
          
        </div>

        {/* Right side image */}
        <div className="hero-right">
          <img src={heroImg} alt="Hero" />
        </div>
      </div>
    </section>
  );
}

export default Hero;