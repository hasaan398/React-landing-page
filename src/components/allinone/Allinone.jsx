import React, { useRef } from "react";
import "./Allinone.css";
import desktop from "../../assets/desktop.png";
import Col from "../../assets/Col.png";
import { FaCheck, FaGlobeAmericas, FaGraduationCap, FaSmile, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";
const courses = [
  {
    tag: "Featured",
    title: "The map of mathematics",
    text: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    theme: "cream",
  },
  {
    tag: "Popular",
    title: "Design for how people think",
    text: "Aliquam ut euismod condimentum elementum ultricies volutpat sit non.",
    theme: "orange",
  },
  {
    tag: "New",
    title: "International & commercial law",
    text: "Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui.",
    theme: "blue",
  },
];

const stats = [
  { icon: <FaGlobeAmericas />, value: "195", label: "user countries" },
  { icon: <FaGraduationCap />, value: "1M", label: "valued teachers" },
  { icon: <FaSmile />, value: "17M", label: "happy students" },
];

const testimonials = [
  {
    text: "Lacus vestibulum ultrices dui nec nisi, velutpat cullen risi. Morbi congue elementum nisl aliquet quis sit amet erat porta magna aliquam.",
    name: "Helen Jenny",
    role: "Product Designer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Odio lacinia ornare id quam et. Erat sodales duis vitae eleifend id at nisl. Etiam faucibus, dolor consectetur felis, integer maiores etiam.",
    name: "Ralph Edwards",
    role: "Math Teacher",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Sapien luctus egestas id nisi et mattis. Odio auctor amet, sapien tellus, felis nulla. Habitant, consequat felis viverra euismod at feugiat.",
    name: "Hellena John",
    role: "Psychology Student",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    text: "World adipiscing purus consectetur donec a. Sit lorem tempor nunc, ultricies dolor. Nunc consectetur velit id porttitor nibh.",
    name: "Kelly Edwards",
    role: "Web Developer",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

function AllInOneSection() {
  const scrollRef = useRef(null);

  const scrollByCard = (direction) => {
    const cardWidth = scrollRef.current.querySelector(".testimonial-card")?.offsetWidth || 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -(cardWidth + 24) : cardWidth + 24,
      behavior: "smooth",
    });
  };

  return (
    <section className="aio-section">

      <div className="aio-block">
        <div className="aio-left">
          <h2 className="aio-title">
            An <span className="highlight">all-in-one</span> app that makes it easier
          </h2>


          <ul className="aio-checklist">
            <li><span className="check-icon"><FaCheck /></span> Est ut in pharetra magna adipiscing ornare aliquam.</li>
            <li><span className="check-icon"><FaCheck /></span> Tellus arcu sed consequat ac velit ut eu blandit.</li>
            <li><span className="check-icon"><FaCheck /></span> Ullamcorper ornare in et egestas dolor orci.</li>
          </ul>

          <a href="#" className="aio-link">Find more about the app &rarr;</a>
        </div>

        <div className="aio-right">
          <div className="aio-blob"></div>
          <div className="aio-thumbnail">
            <img src={desktop} alt="App demo" />
          </div>

          <div className="aio-courses">
            {courses.map((course, index) => (
              <div className={`course-card theme-${course.theme}`} key={index}>
                <span className="course-tag">{course.tag}</span>
                <p className="course-title">{course.title}</p>
                <p className="course-text">{course.text}</p>
                <button className="course-btn">Take Lesson</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="ms-block">
        <div className="ms-left">
          <img src={Col} alt="International students and teachers" />
        </div>

        <div className="ms-right">
          <h2 className="ms-title">Meet international students & teachers</h2>
          <p className="ms-subtext">
            Morbi ut egestas dignissim pharetra, sed amet. Tempus purus
            venenatis faucibus nunc, at nibh, orci. Eget commodo eget aliquam
            facilisi tellus hendrerit. Placerat ipsum ut tellus arcu,
            faucibus aenean lorem lobortis integer.
          </p>
          <a href="#" className="ms-link">Explore teachers and students &rarr;</a>
        </div>
      </div>

      <div className="stats-block">
        <img src={c1} alt="Stat 1" className="stat-icon" />
        <img src={c2} alt="Stat 2" className="stat-icon" />
        <img src={c3} alt="Stat 3" className="stat-icon" /> 
      </div>

      <div className="testimonials-block">
        <div className="testimonials-header">
          <h2 className="testimonials-title">What everyone says</h2>
          <div className="testimonials-arrows">
            <span onClick={() => scrollByCard("left")}><FaChevronLeft /></span>
            <span onClick={() => scrollByCard("right")}><FaChevronRight /></span>
          </div>
        </div>

        <div className="testimonials-grid" ref={scrollRef}>
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <img className="author-avatar" src={t.avatar} alt={t.name} />
                <div>
                  <p className="author-name">{t.name}</p>
                  <p className="author-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default AllInOneSection;