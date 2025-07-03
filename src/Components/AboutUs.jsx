import React from "react";
import "./AboutUs.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutUs() {
  const [clientCount, setClientCount] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  useEffect(() => {
    let count = 0;
    const target = 27; // 🔢 عدل العدد الحقيقي للعملاء
    const interval = setInterval(() => {
      count++;
      setClientCount(count);
      if (count >= target) clearInterval(interval);
    }, 200); // السرعة
  }, []);

  return (
    <section className="about-section">
      <div id="about" className="about-wrapper">
        <div className="about-text">
          <h2 className="section-title" data-aos="fade-up">
            קצת עליי
          </h2>
          <p data-aos="fade-up">
            אני סאמר אבו מוך, אדריכל שמונע מתשוקה לעיצוב חללים שמרגשים ומשרתים
            אנשים. אני מאמין שכל פרויקט הוא איזון בין יופי לפונקציונליות, ושם לב
            לפרטים הקטנים ביותר כדי לממש את חזון הלקוח.
          </p>

          <div data-aos="fade-up" className="clients-counter">
            <h3 data-aos="fade-up">
              +<span>{clientCount}</span>
            </h3>
            <p data-aos="fade-up">לקוחות מרוצים</p>
          </div>
        </div>

        <div className="about-timeline" data-aos="fade-up">
          <div className="timeline-item" data-aos="fade-up">
            <span className="timeline-year" data-aos="fade-up">
              2022
            </span>
            <span className="timeline-event" data-aos="fade-up">
              סיימתי את לימודי האדריכלות
            </span>
          </div>
          <div className="timeline-item" data-aos="fade-up">
            <span className="timeline-year" data-aos="fade-up">
              2023
            </span>
            <span className="timeline-event" data-aos="fade-up">
              השלמתי את הפרויקט העצמאי הראשון שלי
            </span>
          </div>
          <div className="timeline-item" data-aos="fade-up">
            <span className="timeline-year" data-aos="fade-up">
              2024
            </span>
            <span className="timeline-event" data-aos="fade-up">
              הקמתי את משרד Archline
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
