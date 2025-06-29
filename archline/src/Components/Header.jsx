import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Header.css";
import Archline from "./../images/archLine.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkProps = {
    smooth: true,
    duration: 500,
    offset: -70,
    onClick: toggleMenu,
  };

  return (
    <div>
      <div className="appbar">
        <div className="logo">
          <img src={Archline} alt="Logo" />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
        <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="hero" {...linkProps}>
                עמוד הבית
              </Link>
            </li>
            <li>
              <Link to="about" {...linkProps}>
                קצת עליי
              </Link>
            </li>
            <li>
              <Link to="services" {...linkProps}>
                השירותים
              </Link>
            </li>
            {/* <li>
              <Link to="projects" {...linkProps}>
                פרויקטים
              </Link>
            </li> */}
            <li>
              <Link to="testimonials" {...linkProps}>
                המלצות
              </Link>
            </li>
            <li>
              <Link to="contact" {...linkProps}>
                צור קשר
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
