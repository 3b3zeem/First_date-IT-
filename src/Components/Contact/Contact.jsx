import { Link } from "react-router-dom";
import "./Contact.css";
import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";

import Aos from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <React.Fragment>
      <div className="Contact-block">
        <div className="Container-contact">
          <div className="image-of-contact">
            <h2>Get in Touch!</h2>
            <p>We will love to talk to you, get started by filling the details below and submit.</p>
          </div>
          <div className="contant-of-contact">
            <h3 className="text-contact">Contact US</h3>
            <form className="coll">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="input-feild5"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="input-feild5"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject"
                className="input-feild5"
              />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="input-feild5"
              />
              <button
                className="btn-readyc3"
                type="submit"
                onClick={sendMessage}
              >
                Send Message
              </button>
            </form>
            <div className="link2">
              <p>
                If you don't have an account, create one: <br />
                <Link to="/registration">Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ContactUsPage;
