import React, { useState, useRef, useEffect } from "react";
import "../css/Navbar.css";
import logo from "../assets/logo.svg";
import { FaChevronDown, FaDiscord, FaFacebookF, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import ukFlag from "../assets/flags/ukFlag.png";
import deFlag from "../assets/flags/deFlag.png";
import frFlag from "../assets/flags/frFlag.png";
import ruFlag from "../assets/flags/ruFlag.png";
import ptFlag from "../assets/flags/ptFlag.png";
import czFlag from "../assets/flags/czFlag.png";
import esFlag from "../assets/flags/esFlag.png";
import itFlag from "../assets/flags/itFlag.png";
import plFlag from "../assets/flags/plFlag.png";
import uaFlag from "../assets/flags/uaFlag.png";
import trFlag from "../assets/flags/trFlag.png";
import krFlag from "../assets/flags/krFlag.png";
import cnFlag from "../assets/flags/cnFlag.png";
import jpFlag from "../assets/flags/jpFlag.png";
import { useNavigate } from "react-router-dom";
import { IoIosMenu, IoLogoBitcoin } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { BsFillSendFill } from "react-icons/bs";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { FaInstagramSquare } from "react-icons/fa";
import { SiCoinmarketcap } from "react-icons/si";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    name: "English",
    flag: ukFlag,
  });
  const [isExpanded, setIsExpanded] = useState(false);

  const dropdownRef = useRef(null);

  const languages = [
    { name: "English", flag: ukFlag },
    { name: "Deutsch", flag: deFlag },
    { name: "Français", flag: frFlag },
    { name: "Русский", flag: ruFlag },
    { name: "Português", flag: ptFlag },
    { name: "Česky", flag: czFlag },
    { name: "Español", flag: esFlag },
    { name: "Italiano", flag: itFlag },
    { name: "Polski", flag: plFlag },
    { name: "Український", flag: uaFlag },
    { name: "Türkçe", flag: trFlag },
    { name: "한국어", flag: krFlag },
    { name: "中文", flag: cnFlag },
    { name: "日本語", flag: jpFlag },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  const navigate = useNavigate();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="nav-brand">
          <img src={logo} alt="Logo" onClick={() => navigate("/")} />
          <div
            ref={dropdownRef}
            className={`flag-dropdown ${isDropdownOpen ? "flag-dropdownBG" : ""}`}
            onClick={toggleDropdown}
          >
            <img src={selectedLanguage.flag} alt={selectedLanguage.name} />
            <FaChevronDown
              className={`dropdown-arrow ${isDropdownOpen ? "open" : ""}`}
            />

            {isDropdownOpen && (
              <div className="language-dropdown">
                {languages.map((language) => (
                  <div
                    key={language.name}
                    className="language-option"
                    onClick={() => selectLanguage(language)}
                  >
                    <img src={language.flag} alt={language.name} />
                    <span>{language.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <ul className="nav-menu">
          <li>
            <a href="/how-to-use">How it works</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/faq">FAQ</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/affiliate-program">Affiliate Program</a>
          </li>
        </ul>
        <div className="mobileMenu">
          <div onClick={toggleExpand}>
            {isExpanded ? (
              <RxCross2 color="#FFFFFF" size={35} />
            ) : (
              <IoIosMenu color="#FFFFFF" size={35} />
            )}
          </div>
          {isExpanded && (
            <>
              <div className="mobileMenu1">
                <nav className="nav-menu1">
                  <a href="/how-to-use">How it works</a>
                  <a href="/about">About Us</a>
                  <a href="/faq">FAQ</a>
                  <a href="/contact">Contact</a>
                  <a className="affi" href="/affiliate-program">
                    Affiliate Program
                  </a>
                </nav>
                <div className="follow">
                  <h3>Follow us</h3>
                  <div className="followicon">
                    <div className="socaillink">
                      <BsFillSendFill color="#ABB6C1" />
                      <BiSolidRightTopArrowCircle color="#ABB6C1" size={20} />
                      <FaXTwitter color="#ABB6C1" size={19} />
                      <FaFacebookF color="#ABB6C1" size={19} />
                      <IoLogoBitcoin color="#ABB6C1" size={19} />
                      <FaLinkedin color="#ABB6C1" size={19} />
                      <FaDiscord color="#ABB6C1" size={19} />
                      <FaInstagramSquare color="#ABB6C1" size={19} />
                      <SiCoinmarketcap color="#ABB6C1" size={19} />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
