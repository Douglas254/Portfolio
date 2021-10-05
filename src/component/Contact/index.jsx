import React from "react";
import "./style.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact me!</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7761302987788!2d36.77815591487524!3d-1.3096160360217441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a794d2ec013%3A0x44f5d235fd4bf605!2sKibera%20Dr%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1624729119537!5m2!1sen!2ske"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
        title="location Map"
      ></iframe>

      <h4>Phone</h4>
      <p>+2547 42 608 717</p>
      <h4>Email</h4>
      <p>douglasobara97@gmail.com</p>
      <h4>Address</h4>
      <p>34567, NAIROBI 00100.</p>
    </div>
  );
};

export default Contact;
