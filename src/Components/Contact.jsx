import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact" dir="rtl">
      <h2 className="section-title">צור קשר</h2>
      <p className="section-subtitle">
        מלא את פרטיך ונחזור אליך בהקדם האפשרי לפגישת ייעוץ חינמית.
      </p>
      <form
        action="https://formsubmit.co/tareq.salame@gmail.com?redirect=http://localhost:3000/thankyou"
        method="POST"
        className="contact-form"
      >
        <input type="text" name="name" placeholder="שם מלא" required />
        <input type="email" name="email" placeholder="דוא״ל" required />

        {/* 📞 حقل رقم الهاتف مع قائمة للمقدمات */}
        <div className="phone-field">
          <select name="prefix" required>
            <option value="">בחר קידומת</option>
            <option value="050">050</option>
            <option value="052">052</option>
            <option value="053">053</option>
            <option value="054">054</option>
            <option value="055">055</option>
            <option value="058">058</option>
          </select>
          <input type="text" name="phone" placeholder="מס׳ טלפון" required />
        </div>

        <textarea
          name="message"
          placeholder="כתוב את ההודעה שלך כאן..."
          rows="5"
          required
        ></textarea>

        {/* הגדרות נוספות */}
        <input type="hidden" name="_captcha" value="false" />

        <button type="submit">שלח הודעה</button>
      </form>
    </section>
  );
}
