import { Link } from "react-router-dom";
import "./Contact.css";
import React, { useState } from "react";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendMessage = () => {
    alert(
      "Your message has been sent!\n\n" + JSON.stringify(formData, null, 2)
    );
  };

  return (
    <div className="box">
      <div className="form">
        <h2>Contact Us</h2>

        <div className="input">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
          />
          <i />
        </div>

        <div className="input">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
          />
          <i />
        </div>

        <div className="input">
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Subject"
          />
          <i />
        </div>

        <div className="input">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          />
          <i />
        </div>

        <button onClick={sendMessage}>Send Message</button>

        <div className="link2">
          <p>
            If you don't have an account, create one: <br />{" "}
            <Link to="/registration">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
