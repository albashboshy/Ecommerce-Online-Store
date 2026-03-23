import React, { useState } from "react";
import Pagetransition from "../../components/pagetransition";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // مثال: تحقق بسيط من البريد وكلمة المرور
    if (formData.email.includes("@") && formData.password.length >= 6) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
      setError("");
      setFormData({ email: "", password: "" });
    } else {
      setError("Invalid email or password");
      setTimeout(() => setError(""), 2000);
      setSuccess(false);
      setFormData({ email: "", password: "" });
    }
  };

  return (
    <Pagetransition>
      <div style={styles.respon}>
         <div style={styles.container}  >
      <h1 style={styles.title}>Login </h1>

      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="your email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="your password"
          value={formData.password}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>

      {error && <p style={styles.error}>{error}</p>}
      {success && <p style={styles.success}>login successfully ✅</p>}
    </div>
      </div>
    </Pagetransition>
  );
}

const styles = {
  respon:{
    minHeight:"75vh"
  },
  container: {
    maxWidth: "400px",
    margin: "80px auto",
    padding: "30px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    
  },
  title: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    width: "100%",
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
  error: {
    color: "red",
    textAlign: "center",
    marginTop: "15px",
  },
  success: {
    color: "green",
    textAlign: "center",
    marginTop: "15px",
  },
};