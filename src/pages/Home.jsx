import React, { useState } from "react";
import "../styles/global.css";
import Logo from "../assets/logo.png";
import { IoLogoLinkedin } from "react-icons/io5";
import Modal from "../pages/Modal";
import Silk from "../components/Silk";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email address");
      return;
    }

    try {
      const response = await fetch(
        "https://valido-waitlist-a5f3d8dnadh2dbem.canadacentral-01.azurewebsites.net/waitlist/user",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (data.status === "success") {
        setShowModal(true);
        setEmail("");
      } else if (data.status === "exists") {
        setError("You’re already in our waitlist. Will notify soon.");
      } else {
        setError(data.message || "Something went wrong");
      }
    } catch {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div
      className="home"
      style={{ width: "100%", height: "100vh", position: "relative" }}
    >
      {/* Background */}
      <Silk
        speed={10}
        scale={1}
        color="#692f9bff"
        noiseIntensity={0}
        rotation={0}
        opacity={0.4} // 👈 opacity control
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      {/* Foreground Content */}
      <div
        className="content"
        style={{ position: "absolute", zIndex: 1, display: "flex" }}
      >
        {/* Navbar */}
        <div className="nav">
          <img src={Logo} alt="logo" />
        </div>

        {/* Hero Banner */}
        <div className="home-banner">
          <h1>
            The wait is part of <span>journey</span>
          </h1>
          <h2>
            Join us in Reshaping <span>Hiring</span>
          </h2>
          <h3>
            First Proof of Skill Hiring Platform, AI-powered insights. Bias-free
            decisions. A future where talent truly shines.
          </h3>

          {/* Email Form */}
          <div className="email-container">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSubmit}>Get Notified</button>
          </div>

          {/* Error Message */}
          {error && <p style={{ color: "white" }}>{error}</p>}
        </div>

        {/* Footer */}
        <div className="home-footer">
          <h1>Follow us on</h1>
          <a href="https://www.linkedin.com/company/valido-hiring/" target="blank"><IoLogoLinkedin size={24} color="#fff" /></a>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default Home;
