import React, { useState } from 'react';
import '../css/Navbar.css';
import logo from "../assets/logo.svg";
import { FaChevronDown } from "react-icons/fa6";

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

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    name: "English",
    flag: ukFlag
  });

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
    { name: "日本語", flag: jpFlag }
  ];


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="nav-brand">
          <img src={logo} alt="Logo" />
          
          <div className={`flag-dropdown ${isDropdownOpen ? "flag-dropdownBG" :""}`} onClick={toggleDropdown}>
            <img src={selectedLanguage.flag} alt={selectedLanguage.name} />
            <FaChevronDown className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`} />
            
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
          <li><a href="/how-to-use">How it works</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Affiliate Program</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;