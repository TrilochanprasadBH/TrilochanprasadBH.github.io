import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="contactSection-logo">
                <h2>TRILOCHANPRASAD B HILLI</h2>
              </div>
              <p>
               Whats more exiciting than working for a company that compliments my skills and aids in mutual growth! 
               <p>I am open to work.</p>
              </p>
              <ul className="contactCircles">
                <a
                  href="https://www.linkedin.com/in/trilochanprasad-b-hilli-7a1871106/"
                  target="_blank"
                >
                  <li>
                    <FaLinkedin className="contactIcon" />
                  </li>
                </a>
                <a href="https://github.com/TrilochanprasadBH" target="_blank">
                  <li>
                    <FaGithub className="contactIcon" />
                  </li>
                </a>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
