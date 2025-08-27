import React from 'react';
import '../css/ExchangeIcon.css';
import { BsFillSendFill } from "react-icons/bs";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoBitcoin } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SiCoinmarketcap } from "react-icons/si";

function ExchangeIcon() {

  return (
    <div className="exchange-icon-container" >
        <BsFillSendFill color='#ABB6C1'/>
        <BiSolidRightTopArrowCircle color='#ABB6C1' size={20}/>
        <FaXTwitter color='#ABB6C1' size={19}/>
        <FaFacebookF color='#ABB6C1' size={19}/>
        <IoLogoBitcoin color='#ABB6C1' size={19}/>
        <FaLinkedin color='#ABB6C1' size={19}/>
        <FaDiscord color='#ABB6C1' size={19}/>
        <FaInstagramSquare color='#ABB6C1' size={19}/>
        <SiCoinmarketcap color='#ABB6C1' size={19}/>
    </div>
  );
}

export default ExchangeIcon;