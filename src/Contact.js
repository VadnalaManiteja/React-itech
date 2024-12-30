import React from "react";
import "./Contact.css"; // Import the CSS file
import Upload from "./Upload_file";

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="contact-input"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="contact-input"
          />
        </label>
        <label>
          Mobile:
          <input
            type="tel"
            name="mobile"
            placeholder="Enter your mobile"
            required
            className="contact-input"
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            placeholder="Enter your message"
            required
            className="contact-textarea"
          ></textarea>
        </label>
        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>
     
     {/* <div className="container my-5">
     <Upload />
     </div> */}
    </div>
    
  
  );
}

export default Contact;
