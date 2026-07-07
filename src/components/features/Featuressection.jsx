import React from "react";
import "./Featuressection.css";
import Right from "../../assets/Right.png"; // apni image yahan rakho

const avatars = [
  { id: 1, url: "https://randomuser.me/api/portraits/women/12.jpg" },
  { id: 2, url: "https://randomuser.me/api/portraits/men/45.jpg" },
  { id: 3, url: "https://randomuser.me/api/portraits/women/68.jpg" },
  { id: 4, url: "https://randomuser.me/api/portraits/men/23.jpg" },
  { id: 5, url: "https://randomuser.me/api/portraits/women/33.jpg" },
  { id: 6, url: "https://randomuser.me/api/portraits/men/60.jpg" },
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
          <span className="j-icon i1"><img src={avatars[0].url} alt="" /></span>
          <span className="j-icon i2"><img src={avatars[1].url} alt="" /></span>
          <span className="j-icon i3"><img src={avatars[2].url} alt="" /></span>
          <span className="j-icon i4"><img src={avatars[3].url} alt="" /></span>
          <span className="j-icon i5"><img src={avatars[4].url} alt="" /></span>
          <span className="j-icon i6"><img src={avatars[5].url} alt="" /></span>
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