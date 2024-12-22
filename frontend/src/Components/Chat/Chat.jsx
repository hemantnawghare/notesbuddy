import React from "react";
import "./Chat.css";
import Footer from "../Footer/Footer";

const Chat = () => {
  const whatsappLink = "https://chat.whatsapp.com/your-group-link"; // Replace with your WhatsApp group link

  return (
    <>
    <div className="join-community-container">
      <h1>Join the Notes Buddy Community</h1>
      <p>
        Connect with like-minded individuals, share knowledge, and grow
        together! Be a part of our vibrant community where you can exchange
        notes, ask questions, and get guidance from peers.
      </p>
      <div className="whatsapp-invite">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp Logo"
          className="whatsapp-logo"
        />
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <button className="join-btn">Join Our WhatsApp Group</button>
        </a>
        
      </div>
    </div>
    <div className="footer">
            <Footer />
    </div>
    </>
  );
};

export default Chat;
