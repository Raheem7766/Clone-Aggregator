import React from "react";
import "../css/about.css";
import { FiChevronsRight } from "react-icons/fi";
import about from "../assets/about.png";
import icon1 from "../assets/icon-1.png";
import icon2 from "../assets/icon-2.png";
import icon3 from "../assets/icon-3.png";
import icon4 from "../assets/icon-4.png";
import icon5 from "../assets/icon-5.png";
import icon6 from "../assets/icon-6.png";
import press from "../assets/presskit.png"
import { HiDownload } from "react-icons/hi";

function About() {
  return (
    <>
      <div className="about">
        <div className="about1">
          Home <FiChevronsRight size={12} /> <span>About us</span>
        </div>
        <div className="about2">
          <div className="about3">
            <h2>About us</h2>
            <p>
              Exolix is an instant and secure crypto exchange service with fixed
              and floating rates which is free of registration and any limits.
              Launched in 2018, Exolix gained recognition as a fast and secure
              exchange. Exolix provides its customers with the highest standards
              of confidentiality, as you do not have to register to make a
              transaction.
            </p>
            <p>
              The system also fixes the exchange rate at the beginning of the
              transaction, thus, users are protected from market volatility. In
              addition, Exolix does not have maximum limits, which allows
              everyone to exchange any amount of cryptocurrencies.
            </p>
            <p>
              The main mission of Exolix is to make an exchange process fast,
              easy and secure and we fulfil this intent with dignity.
            </p>
          </div>
          <div className="about4">
            <img src={about} alt="" />
          </div>
        </div>
        <div className="about5">
          <h3>Our features</h3>
          <div className="about6">
            <div className="about7">
              <img src={icon1} alt="" />
              <h4>Exchange any amount</h4>
              <p>
                You can easily exchange any amount of a cryptocurrency in one
                transaction. We do not have a maximum limit
              </p>
            </div>
            <div className="about7 about8">
              <img src={icon2} alt="" />
              <h4>Act safely</h4>
              <p>
                Follow our "Terms of use" and you can rest assured that we will
                not ask for your personal data to complete the exchange
              </p>
            </div>
            <div className="about7 about8">
              <img src={icon3} alt="" />
              <h4>Enjoy a fixed rate</h4>
              <p>
                We have a fixed rate function that you can select at the stage
                of creating an exchange to protect yourself from price surges
              </p>
            </div>
            <div className="about7">
              <img src={icon4} alt="" />
              <h4>Registration-free</h4>
              <p>
                We maintain the highest standards of confidentiality as the main
                idea of cryptocurrency
              </p>
            </div>
            <div className="about7 about8">
              <img src={icon5} alt="" />
              <h4>Transparency</h4>
              <p>
                The exchange process is fully transparent as the user can track
                every stage of his order and the transaction’s status
              </p>
            </div>
            <div className="about7 about8">
              <img src={icon6} alt="" />
              <h4>Reliable Support</h4>
              <p>
                Our support is online 24/7 to assist you with any questions
                related to our service
              </p>
            </div>
          </div>
        </div>
        <div className="about9">
            <div className="about10">
                <img src={press} alt="" />
            </div>
            <div className="about11">
                <h1>Press kit</h1>
                <p>Here you will find all media resources from our platform</p>
                <button>Download <HiDownload /></button>

            </div>
        </div>
      </div>
    </>
  );
}

export default About;
