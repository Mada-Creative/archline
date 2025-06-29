import React, { useEffect } from "react";
import ModelViewer from "./ModelViewer";
import "./Hero.css"; // تأكد أنك تنشئ هذا الملف للتنسيق
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <div id="hero" className="hero-container">
      <div className="hero-text">
        <h1 className="hero-title" data-aos="fade-up">
          Archline
        </h1>
        <h3 className="hero-subtitle" data-aos="fade-up">
          By Samer Abo Mokh
        </h3>
        <p className="hero-tagline" data-aos="fade-up">
          חושבים • מעצבים • מיישמים
        </p>
      </div>
      <div className="hero-model" data-aos="fade-up">
        <ModelViewer />
        <a
          className="CTAButton"
          href="https://wa.me/972525272910?text=שלום, אני מעוניין לקבוע פגישת ייעוץ חינמית."
          target="_blank"
          rel="noopener noreferrer"
        >
          הזמן פגישת ייעוץ חינמית
        </a>
      </div>
    </div>
  );
}
