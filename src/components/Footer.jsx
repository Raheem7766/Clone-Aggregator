import React, { useEffect, useState } from "react";
import "../css/footer.css";
import logo from "../assets/logo.svg";
import { BsFillSendFill } from "react-icons/bs";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoBitcoin } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SiCoinmarketcap } from "react-icons/si";
import app from "../assets/app-store.svg";
import google from "../assets/google-play.svg";
import star from "../assets/star.png";
import kyc from "../assets/kyc.svg";
import exod from "../assets/exod.png";
import mone from "../assets/Mone.png";
import edge from "../assets/edge.png";
import cake from "../assets/cake.png";
import bitcoin from "../assets/bitcoin.png";
import dcent from "../assets/dcent.png";
import temple from "../assets/temple.svg";
import hand from "../assets/hand.png";
import swapp from "../assets/swapp.svg";
import zone from "../assets/zone.png";
import space from "../assets/space.png";
import xaman from "../assets/xaman.png";
import contl from "../assets/contl.png";
import frame from "../assets/frame.png";
import monero from "../assets/monero.png";
import rabbit from "../assets/rabbit.svg";
import flash from "../assets/flash.svg";
import cap from "../assets/cap.png";
import cloud from "../assets/cloud.png";
import Mone from "../assets/Mone.png";
import noto from "../assets/noto.svg";
import zenx from "../assets/zenx.png";
import troca from "../assets/troca.svg";
import coinsdo from "../assets/coinsdo.png";
import starg from "../assets/starg.png";

function Footer() {
  const images = [
    exod,
    mone,
    edge,
    cake,
    bitcoin,
    dcent,
    temple,
    hand,
    swapp,
    zone,
    space,
    xaman,
    contl,
    frame,
    monero,
    rabbit,
    flash,
    cap,
    cloud,
    Mone,
    noto,
    zenx,
    troca,
    coinsdo,
    starg,
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(11);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(4);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(7); 
      } else {
        setVisibleCount(11); 
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  const visibleImages = [
    ...images.slice(startIndex, startIndex + visibleCount),
    ...images.slice(0, Math.max(0, startIndex + visibleCount - images.length)),
  ];


  return (
    <>
      <div className="footer">
        <div className="footer1">
          <div className="footer2">
            <img src={logo} alt="" />
            <div className="foot">Cryptocurrency Exchange</div>
          </div>
          <div className="footer3">
            <div className="footer4">
              <h3>Company</h3>
              <h4>How it works</h4>
              <h4>About Us</h4>
              <h4>Blog</h4>
              <h4>In press</h4>
              <h4>FAQ</h4>
              <h4>Contact</h4>
            </div>
            <div className="footer4">
              <h3>For partners</h3>
              <h4>Affiliate Program</h4>
              <h4>API Documentation</h4>
              <h4>Press Kit</h4>
            </div>
            <div className="footer4 footpair">
              <h3>Exchange pairs</h3>
              <h4>
                BNB to USDT <span>BTC to XMR</span>
              </h4>
              <h4>
                XMR to USDT <span>USDT to XMR</span>
              </h4>
              <h4>
                BTC to USDT <span>SOL to ETH</span>
              </h4>
              <h4>
                SOL to USDT <span>USDT to LTC</span>
              </h4>
              <h4>
                ETH to USDT <span>BTC to ETH</span>
              </h4>
              <h4>
                XMRE to ETH <span>USDT to ETH</span>
              </h4>
              <h4>
                USDT to BTC <span>XMR to BTC</span>
              </h4>
            </div>
            <div className="footer4 footprice">
              <h3>Crypto prices</h3>
              <h4>TRON TRX Price</h4>
              <h4>Cardano ADA Price</h4>
              <h4>TetherUS USDT Price</h4>
              <h4>Ripple XRP Price</h4>
              <h4>Solana SOL Price</h4>
              <h4>Bitcoin BTC Price</h4>
              <h4>Monero XMR Price</h4>
              <h4>Litecoin LTC Price</h4>
              <h4>Ethereum ETH Price</h4>
            </div>
            <div className="footer4 footcom">
              <h3>Community</h3>
              <div className="footicon">
                <BsFillSendFill size={18}/>
                <BiSolidRightTopArrowCircle size={20} />
                <FaXTwitter size={19} />
                <FaFacebookF size={19} />
                <IoLogoBitcoin size={19} />
                <FaLinkedin size={19} />
                <FaDiscord size={19} />
                <FaInstagramSquare size={19} />
                <SiCoinmarketcap size={19} />
              </div>
              <h4>Download our mobile app</h4>
              <div className="footimg">
                <img src={app} alt="" />
                <img src={google} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="footbottom">
          <div className="footbottom1">
            <div className="footbottom2">
              <div className="rate">
                Rate us on <img src={star} alt="" />
                <img src={kyc} alt="" className="kyc" />
              </div>
              <div className="use">
                <h3>Terms of use</h3>
                <h3>Privacy policy</h3>
                <h3>AML/KYC</h3>
              </div>
              <div className="copy">
                <p>Copyright © 2018 - 2025 Exolix.</p>
              </div>
            </div>
            <div className="footbottom3">
              <div className="last">
                {visibleImages.map((imgSrc, index) => (
                  <div key={index} className="footbottomimg ">
                    <img
                      src={imgSrc}
                      alt={`logo-${index}`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
