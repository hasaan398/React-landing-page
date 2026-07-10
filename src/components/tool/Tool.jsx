import React from "react";
import "./Tool.css";
import vector from "../../assets/vector.png"; 
import blob from "../../assets/blob.png";
import i1 from "../../assets/i1.png";
import i2 from "../../assets/i2.png";
import i3 from "../../assets/i3.png";
import i4 from "../../assets/i4.png";
import i5 from "../../assets/i5.png";
import i6 from "../../assets/i6.png";
import i7 from "../../assets/i7.png";
import i8 from "../../assets/i8.png";
import i9 from "../../assets/i9.png";

function Tools() {
  return (
    <section className="tools">
      <div className="blob">
      {/* Decorative background blobs + dots, positioned behind content */}
      <img src={vector} alt="" className="tools-decoration" />
 <img src={blob} alt="" className="decoration" />
 </div>
      <div className="tools-container">
        <h2 className="tools-title">
          All the <span className="highlight">tools</span> that you need
        </h2>

        <p className="tools-subtext">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris.
          <br />
          Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
        </p>

        <div className="tools-mockup-wrapper">
          <div className="browser-mockup">
            <div className="browser-topbar">
              <div className="browser-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="browser-url">uteach.com</div>
              <div className="browser-arrows">
                <span>&#8249;</span>
                <span>&#8250;</span>
              </div>
            </div>
            <div className="browser-body"></div>
          </div>
        </div>

        <div className="tools-icons">
          <div className="tool-icon icon-green">
            <img src={i1} alt="Tool 1" />
          </div>
          <div className="tool-icon icon-orange">
            <img src={i2} alt="Tool 2" />
          </div>
          <div className="tool-icon icon-blue">
            <img src={i3} alt="Tool 3" />
          </div>
          <div className="tool-icon icon-dark">
            <img src={i4} alt="Tool 4" />
          </div>
          <div className="tool-icon icon-teal">
            <img src={i5} alt="Tool 5" />
          </div>
          <div className="tool-icon icon-lightblue">
            <img src={i6} alt="Tool 6" />
          </div>
          <div className="tool-icon icon-red">
            <img src={i7} alt="Tool 7" />
          </div>
          <div className="tool-icon icon-gradient">
            <img src={i8} alt="Tool 8" />
          </div>
             <div className="tool-icon icon-gradient">
            <img src={i9} alt="Tool 9" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tools;