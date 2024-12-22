import React from "react";
import "./Contactus.css";

const Contactus = () => {
  return (
    <div className="about-contact-container">
      {/* About Us Section */}
      <section className="about-header">
        <h1>
          Welcome to <span className="highlight">Notes Buddy</span>
        </h1>
        <p>Your companion in productivity and seamless note-taking.</p>
      </section>

      <section className="about-container">
        <div className="about-content">
          <h2>About Notes Buddy</h2>
          <p>
            <span className="highlight">Notes Buddy</span> is designed to
            simplify the way you create, manage, and share your notes. We
            understand that ideas can strike anytime, anywhere. That's why our
            platform ensures your notes are always organized, accessible, and
            ready to help you succeed.
          </p>
          <p>
            Whether you're a student, a professional, or someone brainstorming
            ideas, Notes Buddy is the perfect tool for capturing your thoughts
            and staying organized.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://img.freepik.com/free-vector/business-team-discussing-ideas-creative-light-bulb-concept_74855-19691.jpg"
            alt="About Notes Buddy"
          />
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-header">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Get in touch with us for any queries, feedback, or support.</p>
      </section>

      <section className="contact-container">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Write your message"></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <p>© 2024 Notes Buddy. All rights reserved.</p>
        <p>
          Contact us at{" "}
          <a href="mailto:support@notesbuddy.com">support@notesbuddy.com</a>
        </p>
      </footer>
    </div>
  );
};

export default Contactus;
