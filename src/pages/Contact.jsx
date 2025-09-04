import React from "react";
import "../css/contact.css";
import { FiChevronsRight } from "react-icons/fi";
import mail from "../assets/mail.png";

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact1">
          Home <FiChevronsRight size={12} /> <span>Contact</span>
        </div>
        <div className="contact2">
          <div className="contact3">
            <h2>Contact</h2>
            <p>Please, send an email if you have any questions or concerns</p>
            <div className="mblmail">
              <div className="mblmail1">
                <h3>Email for marketing</h3>
                <div className="mail">
                  <img src={mail} alt="" />
                  <p>marketing@exolix.com</p>
                </div>
              </div>
              <div className="mblmail2">
                <h3 className="part">Email for partnerships</h3>
                <div className="mail">
                  <img src={mail} alt="" />
                  <p>partnerships@exolix.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact4">
            <h2>Can't find what you're looking for?</h2>
            <h4>For support, please fill in the form</h4>
            <input
              type="text"
              placeholder="Enter your email address"
              name=""
              id=""
            />
            <textarea name="" placeholder="Your message" id=""></textarea>
            <button>Send message</button>
            <h3>or</h3>
            <p>
              Write us to <span>support@exolix.com</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
