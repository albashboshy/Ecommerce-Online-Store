import React, { useState } from "react";
import PageTransition from "../components/pagetransition";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  // لتحديث الحقول عند الكتابة
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // عند الضغط على إرسال
  const handleSubmit = (e) => {
    e.preventDefault();



    // إعادة تعيين النموذج وإظهار رسالة تأكيد
    setFormData({ name: "", email: "", message: "" });
    setSubmitted(true);

    // إزالة رسالة التأكيد بعد 3 ثواني
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <PageTransition>
    <div style={styles.containerForm}>
        <div>
      <h1 style={styles.title}>Contact Us</h1>

      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Your E-mail"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
          mailto="mailto:mahmoud181712@gmail"

        />

        <textarea
          name="message"
          placeholder="your Message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
          style={styles.textarea}
          resize="none"
        />

        <button type="submit" style={styles.button}>Submit</button>
      </form>

      {submitted && <p style={styles.success}>your message sent successfully✅</p>}

      <div style={styles.info}>
        <p>📞 Phone: <span>+0965 66989078 </span></p>
        <p>✉  E-mail:  <span>mahmoud181712@gmail.com</span></p>
        <p>🌍 Location: <span> Kuwait </span></p>
      </div>
      </div>
    </div>
    </PageTransition>
  );
}

const styles = {
  containerForm: {
    display: "grid",
    gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",
    maxWidth: "768px",
    margin: "50px auto",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",

    cursor: "pointer",
    
  },
  title: {
    textAlign: "center",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginTop: "20px",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    width: "100%",
  },
  textarea: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    width: "100%",
    resize: "vertical",
  },
  button: {
    padding: "14px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "#fff",
  },
  success: {
    marginTop: "15px",
    color: "green",
    textAlign: "center",
    fontWeight: "bold",
  },
  info: {
    marginTop: "30px",
    textAlign: "center",
    color: "#555",
    cursor: "pointer",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    fontStyle:"italic",
    fontSize:"16px"
  }
};