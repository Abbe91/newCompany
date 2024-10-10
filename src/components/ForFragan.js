import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Nav from "../components/Nav/Nav"; // Adjust the import according to your file structure
import { useLocation } from "react-router-dom";

const ForFragan = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState("");
  const [tjanst, setTjanst] = useState("");
  const [path, setPath] = useState("");
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tjanstValue = params.get("tjanst");
    const pathValue = params.get("path");
    if (tjanstValue) {
      setTjanst(tjanstValue);
    }
    if (pathValue) {
      setPath(pathValue);
    }
  }, [location]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zrzoy78", // replace with your EmailJS service ID
        "template_v5pxpfk", // replace with your EmailJS template ID
        form.current,
        "k83MhZyL8h-nwJCNd" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
          setError("");
        },
        (error) => {
          console.log(error.text);
          setError("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div>
      <Nav />
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "1rem" }}>
        <h2>Contact Admin</h2>
        {messageSent && (
          <p style={{ color: "green" }}>Message sent successfully!</p>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form
          ref={form}
          onSubmit={sendEmail}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label htmlFor="namn">Namn</label>
          <input
            type="text"
            name="namn"
            required
            style={{ marginBottom: "1rem", padding: "0.5rem" }}
          />

          <label htmlFor="date">Datum</label>
          <input
            type="date"
            name="date"
            required
            style={{ marginBottom: "1rem", padding: "0.5rem" }}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            required
            style={{ marginBottom: "1rem", padding: "0.5rem" }}
          />

          <label htmlFor="telefon">Telefon</label>
          <input
            type="tel"
            name="telefon"
            required
            style={{ marginBottom: "1rem", padding: "0.5rem" }}
          />

          <label htmlFor="typ">Ort</label>
          <input
            type="text"
            name="typ"
            required
            style={{ marginBottom: "1rem", padding: "0.5rem" }}
          />

          <label htmlFor="vill-bli-kontaktad">Vill Bli Kontaktad</label>
          <input
            type="checkbox"
            name="vill-bli-kontaktad"
            style={{ marginBottom: "1rem" }}
          />

          <label htmlFor="vill-ha-offert">Vill ha en offert</label>
          <input
            type="checkbox"
            name="vill-ha-offert"
            style={{ marginBottom: "1rem" }}
          />

          <label htmlFor="beskriv">Beskriv för oss</label>
          <textarea
            name="beskriv"
            rows="5"
            required
            style={{ marginBottom: "1rem", padding: "0.5rem" }}
          ></textarea>

          <label htmlFor="path">Path</label>
          <input
            type="text"
            name="path"
            value={path}
            readOnly
            style={{ marginBottom: "1rem", padding: "0.5rem" }}
          />

          <label htmlFor="tjanster">Tjänster</label>
          <input
            type="text"
            name="tjanster"
            value={tjanst}
            readOnly
            style={{ marginBottom: "1rem", padding: "0.5rem" }}
          />

          <button
            type="submit"
            style={{
              padding: "0.5rem",
              background: "#4890e3",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForFragan;
