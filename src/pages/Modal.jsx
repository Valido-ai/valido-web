// Modal.js
import React from "react";
import "./Modal.css";
import Modal_logo from "../assets/cover-logo.png";
import { Color } from "ogl";
import User1 from "../assets/Ellipse 2.svg";
import User2 from "../assets/Ellipse 3.svg";
import User3 from "../assets/Ellipse 4.svg";
import User4 from "../assets/Ellipse 5.svg";
import User5 from "../assets/Ellipse 6.svg";
import User6 from "../assets/Ellipse 7.svg";

function Modal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-content">
          <div className="modal-logo"><img src={Modal_logo} alt="" /></div>
          <h2>You have been added to our <span className="highlight">waitlist</span></h2>
          <p>Thank you for joining. You'll be one of the first to know when we are ready.</p>
          <div className="avatars">
            {/* Example avatars */}
            <img src={User1} alt="user" />
            <img src={User2} alt="user" />
            <img src={User3} alt="user" />
            <img src={User4} alt="user" />
            <img src={User5} alt="user" />
            <img src={User6} alt="user" />
          </div>
          <p style={{ color: "white" }}>You are not alone <span className="highlight">100+ people</span> joined</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
