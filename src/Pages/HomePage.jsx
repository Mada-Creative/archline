import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import AboutUs from "../Components/AboutUs";
import Skills from "../Components/Skills";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <Skills />
      <Testimonials />
      <Contact />
    </div>
  );
}
