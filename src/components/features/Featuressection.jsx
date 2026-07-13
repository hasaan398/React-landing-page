import React from "react";
import "./Featuressection.css";
import Right from "../../assets/Right.png"; // apni image yahan rakho

// apni avatar images yahan rakho
import u1 from "../../assets/u1.png";
import u2 from "../../assets/u2.png";
import u3 from "../../assets/u3.png";
import u4 from "../../assets/u4.png";
import u5 from "../../assets/u5.png";
import u6 from "../../assets/u6.png";
import u7 from "../../assets/u7.png";
import u8 from "../../assets/u8.png";
import u9 from "../../assets/u9.png";
import u10 from "../../assets/u10.png";
import u11 from "../../assets/u11.png";
import u12 from "../../assets/u12.png";

// Har avatar ki position % mein (top/left) + size, Figma design ke hisaab se
const avatars = [
  { src: u1, name: "u1", top: "70%", left: "15%", size: 100 },
  { src: u2, name: "u2", top: "60%", left: "30%", size: 38 },
  { src: u3, name: "u3", top: "85%", left: "30%", size: 30 },
  { src: u4, name: "u4", top: "95%", left: "5%", size: 35 },
  { src: u5, name: "u5", top: "60%", left: "1%", size: 40 },
  { src: u6, name: "u6", top: "25%", left: "10%", size: 34 },
  { src: u7, name: "u7", top: "10%", left: "30%", size: 46 },
  { src: u8, name: "u8", top: "20%", left: "95%", size: 80 },
  { src: u9, name: "u9", top: "60%", left: "98%", size: 100 },
  { src: u10, name: "u10", top: "80%", left: "90%", size: 42 },
  { src: u11, name: "u11", top: "75%", left: "70%", size: 50 },
  { src: u12, name: "u12", top: "50%", left: "80%", size: 44 },
];

function FeaturesSection() {
  return (
    <>
      {/* --- All the cool features block --- */}
      <section className="features-block">
        <div className="features-container">
          <div className="features-left">
            <h2 className="features-title">
              All the cool <span className="highlight">features</span>
            </h2>
            <p className="features-subtext">
              Mauris consequat, cursus pharetra et, habitasse rhoncus quis
              odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit
              pellentesque quisque cras ullamcorper. Ultrices in amet,
              ullamcorper non viverra a, neque orci.
            </p>
            <a href="#" className="features-link">
              View all the features &rarr;
            </a>
          </div>

          <div className="features-right">
            <img src={Right} alt="Cool features preview" />
          </div>
        </div>
      </section>

      {/* --- Join a world of learning block --- */}
      <section className="join-block">
        <div className="join-icons">
          {avatars.map((a, i) => (
            <img
              key={i}
              src={a.src}
              alt=""
              className={`j-icon icon-${a.name}`}
              style={{
                top: a.top,
                left: a.left,
                width: `${a.size}px`,
                height: `${a.size}px`,
              }}
            />
          ))}
        </div>

        <div className="join-content">
          <h2 className="join-title">Join a world of learning</h2>
          <p className="join-subtext">
            Malesuada ut aliquam ut ac est nisi, interdum etiam dignissim.
            <br />
            Risus elit et fringilla habitant ut facilisi.
          </p>
          <button className="join-btn">Sign Up Now</button>
        </div>
      </section>
    </>
  );
}

export default FeaturesSection;