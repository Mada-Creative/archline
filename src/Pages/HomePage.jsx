import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import AboutUs from "../Components/AboutUs";
import Skills from "../Components/Skills";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <Skills />
      <Testimonials />
      <Contact />
      <footer className="mada-footer">
        <p>
          <span className="by">Designed & Developed by</span>{" "}
          <span className="mada-brand">
            Mada Creative<sup>®</sup>
          </span>
        </p>
      </footer>
    </div>
  );
}
