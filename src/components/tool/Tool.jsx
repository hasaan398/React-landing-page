import React from "react";
import "./Tool.css";
import {
  FaImage,
  FaFire,
  FaCamera,
  FaInfinity,
  FaWifi,
  FaChartLine,
  FaCloud,
} from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";

function Tools() {
  return (
    <section className="tools">
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
          <div className="tools-blob"></div>

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
            <FaImage />
          </div>
          <div className="tool-icon icon-orange">
            <SiAdobephotoshop />
          </div>
          <div className="tool-icon icon-blue">
            <FaFire />
          </div>
          <div className="tool-icon icon-dark">
            <FaCamera />
          </div>
          <div className="tool-icon icon-teal">
            <FaInfinity />
          </div>
          <div className="tool-icon icon-lightblue">
            <FaWifi />
          </div>
          <div className="tool-icon icon-red">
            <FaChartLine />
          </div>
          <div className="tool-icon icon-gradient">
            <FaCloud />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tools;