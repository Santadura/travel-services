import { useState } from "react";

import "./TravelChatWidget.css";

import { FaPhoneAlt, FaFacebookMessenger } from "react-icons/fa";

import { SiZalo } from "react-icons/si";

export default function TravelChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="contact-floating">
        <button className="contact-item phone">
          <FaPhoneAlt />
        </button>

        <button className="contact-item zalo">
          <SiZalo />
        </button>

        <button className="contact-item messenger">
          <FaFacebookMessenger />
        </button>
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
