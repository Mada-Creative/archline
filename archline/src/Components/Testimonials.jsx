import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "رنا أبو حسين",
    quote:
      "الخدمة كانت ممتازة، والنتيجة أحلى من المتوقع! شكراً على الاحترافية والاهتمام.",
  },
  {
    name: "יואב לוי",
    quote: "העבודה הייתה מקצועית, מהירה ומדויקת. ממליץ בחום!",
  },
  {
    name: "نور سلامة",
    quote: "كل خطوة بالمشروع كانت واضحة ومدروسة. التعامل راقي، والنتيجة رائعة.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="section-title">מה אומרים עלינו?</h2>
      <div className="testimonials-container">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <p className="testimonial-quote">“{t.quote}”</p>
            <p className="testimonial-name">– {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
