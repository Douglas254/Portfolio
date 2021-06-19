import "./style.css";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <a
        href="http://youtube.com/"
        style={{ color: "#ff0000" }}
        target="_blank"
      >
        <i className="fa fa-youtube-square" aria-hidden="true"></i>
      </a>
      <a
        href="http://www.facebook.com/profile.php?id="
        style={{ color: "#1877f2" }}
        target="_blank"
      >
        <i className="fa fa-facebook-square" aria-hidden="true"></i>
      </a>
      <a
        href="http://www.linkedin.com/in/"
        style={{ color: "#0a66c2" }}
        target="_blank"
      >
        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
      </a>
      <a
        href="http://twitter.com/"
        style={{ color: "#1da1f2" }}
        target="_blank"
      >
        <i className="fa fa-twitter" aria-hidden="true"></i>
      </a>
    </footer>
  );
};

export default Footer;
