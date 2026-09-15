import { useState } from "react";

import "./TravelChatWidget.css";

import { FaPhoneAlt, FaFacebookMessenger } from "react-icons/fa";

import { SiZalo } from "react-icons/si";
import { contactInfo } from "../../contact";

export default function TravelChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="contact-floating">
        <a
          className="contact-item phone"
          href={`tel:${contactInfo.phoneHref}`}
          aria-label={`Call ${contactInfo.phone}`}
        >
          <FaPhoneAlt />
        </a>

        <button className="contact-item zalo">
          <SiZalo />
        </button>

        <a
          className="contact-item messenger"
          href={contactInfo.facebookUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Message 2PAVE Travel on Facebook"
        >
          <FaFacebookMessenger />
        </a>
      </div>

      <button className="chat-button" onClick={() => setOpen(!open)}>
        💬
      </button>

      {open && (
        <div className="chat-box">
          <div className="chat-header">
            <div className="brand-wrapper">
              <div className="brand-icon">🌐</div>

              <div>
                <div className="chat-title">2pave Travel Concierge</div>

                <div className="chat-status">🟢 Ready to help</div>
              </div>
            </div>

            <button className="close-button" onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>

          <div className="chat-content">
            <div className="time">01:07</div>

            <div className="message bot">
              Hello 👋
              <br />
              <br />
              Welcome to 2pave.
              <br />
              <br />
              I'm your travel assistant. I can help you discover destinations,
              find the right journey, and answer your travel questions.
            </div>

            <div className="quick-actions">
              <button>🏝 Explore destinations</button>

              <button>🌏 International journeys</button>

              <button>✈ Find my perfect trip</button>

              <button>💰 Check travel budget</button>

              <button>💬 Talk to an expert</button>
            </div>
          </div>

          <div className="chat-input">
            <input placeholder="Ask about your next journey..." />

            <button>🖼</button>

            <button>➤</button>
          </div>

          <div className="powered">
            <b>2pave</b>
            <br />
            Travel beyond ordinary
          </div>
        </div>
      )}
    </>
  );
}
