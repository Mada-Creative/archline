import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Skills.css";

export default function Services() {
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => setShowMore(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      disable: false,
    });
  }, []);

  return (
    <div>
      <section id="services" className="skills-section">
        <h2 className="section-title">השירותים שאני מציע</h2>

        {/* שירות 1 */}
        <div className="skill-row">
          <div className="skill-text right" data-aos="fade-left">
            <h3>
              הדמיות תלת מימד <br />
              (3D Rendering)
            </h3>
            <p>
              הדמיות פוטו-ריאליסטיות שממחישות את הפרויקט עוד לפני הבנייה בפועל,
              ומרשימות כל לקוח.
            </p>
          </div>
          <div
            id="hero-model"
            className="skill-visual left"
            data-aos="fade-right"
          >
            <div className="model-container"></div>
          </div>
        </div>

        <div className="skill-row">
          <div className="skill-text right" data-aos="fade-left">
            <h3>תכנון ועיצוב פנים</h3>
            <p>
              עיצוב חכם, פונקציונלי ומודרני של חללים שמתאימים בדיוק לצרכים
              ולסגנון שלך.
            </p>
          </div>
          <div className="model-container" data-aos="fade-right"></div>
        </div>
      </section>
    </div>
  );
}

// <div className="extra-skills">
//   <div className="skill-row reverse">
//     <div className="skill-visual right" data-aos="fade-left">
//       {/* <Lottie
//       animationData={revitAnim}
//       style={{ width: 200, height: 200 }}
//     /> */}
//     </div>
//     <div className="skill-text left" data-aos="fade-right">
//       <h3>הכנת תוכניות עבודה ב-Revit</h3>
//       <p>
//         הכנת תוכניות אדריכליות מקצועיות ומדויקות באמצעות Revit – מוכנות
//         להגשה לרשויות ולקבלנים.
//       </p>
//     </div>
//   </div>

//   <div className="skill-row reverse">
//     <div className="skill-visual right" data-aos="fade-left">
//       <span style={{ fontSize: "3rem" }}>📐</span>
//     </div>
//     <div className="skill-text left" data-aos="fade-right">
//       <h3>ליווי והגשה לרשויות</h3>
//       <p>
//         טיפול בכל שלבי ההגשה לרשויות המקומיות – כולל תיאומים ואישורים.
//       </p>
//     </div>
//   </div>
// </div>
