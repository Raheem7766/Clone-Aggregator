import React, { useState } from "react";
import "../css/Terms.css";
import limit from "../assets/limit.png";
import secure from "../assets/secure.png";
import incognito from "../assets/incognito.png";
import transaction from "../assets/transactions.png";
import time from "../assets/time.png";
import champion from "../assets/champion.png";
import visits from "../assets/visits.png";
import star from "../assets/star.png";
import star5 from "../assets/5_star.svg";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import best1 from "../assets/best1.svg";
import best2 from "../assets/best2.svg";
import best3 from "../assets/best3.svg";
import best4 from "../assets/best4.svg";
import best5 from "../assets/best5.svg";
import best6 from "../assets/best6.svg";
import { IoMdCheckmark } from "react-icons/io";
import app from "../assets/app-store.svg";
import google from "../assets/google-play.svg";
import comp from "../assets/apps_compressed.svg";
import trade from "../assets/trade.png";
import bit from "../assets/bit.png";
import crypt from "../assets/crypt.png";
import coin from "../assets/coin.png";
import hedge from "../assets/hedge.png";
import bittrade from "../assets/bittrade.png";
import bextexch from "../assets/bextexch.png";
import group from "../assets/group.png";
import exod from "../assets/exod.png";
import mone from "../assets/mone.png";
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

function Terms() {
  const slides = [
    {
      title: "Legitimate coin swap",
      description:
        "Legitimate coin swap. I was able to trade Zano for Solana. Relatively low fees. I admit I was kind of skeptical, but I glad everything worked out.",
      author: "Terrell",
      date: "27 Aug 2025",
      star: star5,
    },
    {
      title: "Processing delay but resolved",
      description:
        "Tried to swap and it stuck at processing for like 10 mins. Then it moved. Kinda stressful, but support answer was fast",
      author: "Deen Duran",
      date: "24 Aug 2025",
      star: star5,
    },
    {
      title: "Not fast this time",
      description:
        "It worked, but not fast this time.Took almost 25 mins to complete.",
      author: "Ronald Carson",
      date: "24 Aug 2025",
      star: star5,
    },
    {
      title: "Спасибо большое службе поддержки,за…",
      description:
        "Спасибо большое службе поддержки,за оказанное содействие, внимание и быстрому реагированию проблемы . С уважением и искренней благодарностью !",
      author: "Sofron",
      date: "23 Aug 2025",
      star: star5,
    },
  ];

  const [index, setIndex] = useState(0);
  const slidesToShow = 2;

  const handleNext = () => {
    if (index < slides.length - slidesToShow) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const cards = [
    {
      id: 1,
      image: trade,
      description:
        "Large cryptocurrency investors will enjoy limitless exchanging with pretty much all coins available on the platform and we consider Exolix to be one of the most legit bitcoin investment sites.",
    },
    {
      id: 2,
      image: bit,
      description:
        "The exchange process at Exolix is characterized by absolute transparency since users can track every stage of the order and its status. The possibility to make fast, easy, and secure transactions is the",
    },
    {
      id: 3,
      image: crypt,
      description:
        "Exolix is your go-to site whenever you want to trade coins or tokens without boundaries, KYC, or account registration. The platform offers you a massive list of over 500 coins, completely free of limits.",
    },
    {
      id: 4,
      image: coin,
      description:
        "Since Exolix offers account-free cryptocurrency trading you don’t need to worry about how much you exchange. If you are a big investor or a large trader looking for a platform with high limits, you have landed on",
    },
    {
      id: 5,
      image: hedge,
      description:
        "When it comes to safety and security, Exolix does not collect information from users and does not store any funds which is important. Crypto enthusiasts that prefer to remain anonymous will benefit from using a",
    },
    {
      id: 6,
      image: bittrade,
      description:
        "The project has highly qualified specialists, who are always ready to answer questions and help in any difficult or controversial situation. Support will always try to satisfy all your requests by being the most",
    },
    {
      id: 7,
      image: bextexch,
      description:
        "The platform has a highly-intuitive interface with very straightforward options. Through a user-friendly design, Exolix attracts both professional speculators and starting traders.",
    },
    {
      id: 8,
      image: group,
      description:
        "Exolix was created by a team of experts from the blockchain industry who want to make a significant mark on the crypto economy. Today Exolix is an instant and secure crypto exchange service with no KYC and",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleNextpress = () => {
    if (startIndex + 4 < cards.length) {
      setStartIndex(startIndex + 4);
    }
  };

  const handlePrevpress = () => {
    if (startIndex - 4 >= 0) {
      setStartIndex(startIndex - 4);
    }
  };

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

  return (
    <>
      <div className="terms">
        <div className="term">
          <div className="term1">
            <div className="term2">
              <img src={limit} alt="" />
              <span> No limits</span>
            </div>
            <div className="any">Any amount</div>
          </div>
          <div className="limitParent">
            <p className="limitP">
              We do not have maximum limits, which allows everyone to exchange
              any amount of cryptocurrencies
            </p>
          </div>
        </div>
        <div className="term">
          <div className="term1">
            <div className="term2">
              <img src={secure} alt="" />
              <span> Private & Secure</span>
            </div>
            <div className="any">Self-custody</div>
          </div>
          <div className="limitParent">
            <p className="limitP">
              Have full control of holding and managing your digital assets. We
              do not have access to your funds.
            </p>
          </div>
        </div>
        <div className="term termig">
          <div className="term1">
            <div className="term2">
              <img src={incognito} alt="" />
              <span> No Sign-up</span>
            </div>
            <div className="any">Incognito</div>
          </div>
          <div className="limitParent">
            <p className="limitP">
              Make an exchange with or without creating a personal account.
              Registration is optional and entirely up to you.
            </p>
          </div>
        </div>
      </div>

      <div className="stats">
        <h1>24-hour Statistics</h1>
        <p>
          Exolix is an instant and secure crypto exchange service with fixed &
          floating rates which is free of registration and any limits.
        </p>
        <div className="stats1">
          <div className="stats2">
            <div className="statsImg">
              <img src={transaction} alt="" />
            </div>
            <div className="stats3">
              <h3>46340</h3>
              <p>Transactions made</p>
            </div>
          </div>
          <div className="stats2 ">
            <div className="statsImg">
              <img src={time} alt="" />
            </div>
            <div className="stats3">
              <h3>5</h3>
              <p>Average processing time</p>
            </div>
          </div>
          <div className="stats2 ">
            <div className="statsImg">
              <img src={champion} alt="" />
            </div>
            <div className="stats3">
              <h3>BTC-XMR</h3>
              <p>Champion pair</p>
            </div>
          </div>
          <div className="stats2">
            <div className="statsImg">
              <img src={visits} alt="" />
            </div>
            <div className="stats3">
              <h3>1960</h3>
              <p>Visits today</p>
            </div>
          </div>
        </div>
      </div>

      <div className="says">
        <div className="says1">
          <h2>What Customers Say</h2>
          <img src={star} alt="" />
        </div>
        <div className="says2 overflow-hidden relative">
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${index * (100 / slidesToShow)}%)`,
            }}
          >
            {slides.map((s, i) => (
              <div
                key={i}
                className={`says3 ${
                  i === 1 ? "index2" : i === 2 ? "index3" : ""
                }`}
              >
                <div className="says4">
                  <h2>{s.title}</h2>
                  <p>{s.description}</p>
                  <div className="saysParent">
                    <div className="saysauth">
                      <h3>{s.author}</h3>
                      <h4>.</h4>
                      <p>{s.date}</p>
                    </div>
                    <img src={s.star} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {index < slides.length - slidesToShow && (
            <div className="saysarrow1" onClick={handleNext}>
              <GoArrowRight size={35} />
            </div>
          )}

          {index > 0 && (
            <div className="saysarrow2" onClick={handlePrev}>
              <GoArrowLeft size={35} />
            </div>
          )}
        </div>
      </div>

      <div className="best">
        <h2>What Makes Exolix the Best Platform to Buy Cryptocurrency?</h2>
        <p>
          We are not afraid to claim that Exolix is one of the best
          crypto-buying platforms available on the market; neither should you.
        </p>
        <div className="best1">
          <div className="best2">
            <img src={best5} alt="" />
            <h2>Competitive</h2>
            <p>
              We aggregate prices of various liquidity providers to offer the
              best rate for user.
            </p>
          </div>
          <div className="best2">
            <img src={best4} alt="" />
            <h2>Transperent</h2>
            <p>
              We make sure the whole exchange process is straightforward, so
              users have the option to track a transaction’s status.
            </p>
          </div>
          <div className="best2">
            <img src={best3} alt="" />
            <h2>Affordable</h2>
            <p>
              Take advantage of the crypto platform with the most attractive and
              favorable service charges.
            </p>
          </div>
          <div className="best2 best3">
            <img src={best2} alt="" />
            <h2>Fast</h2>
            <p>
              Our service maintains high transaction processing speed: it takes
              5 to 30 minutes to process a transaction, depending on the volume
              of pending requests.
            </p>
          </div>
          <div className="best2 best3">
            <img src={best1} alt="" />
            <h2>User-friendly</h2>
            <p>
              The service was created by a group of experts from the blockchain
              industry; they were eager to deliver the most convenient and
              user-friendly platform to buy cryptocurrency.
            </p>
          </div>
          <div className="best2 best3">
            <img src={best6} alt="" />
            <h2>Professionals</h2>
            <p>
              Our online support service is always here to assist you. Get
              answers to any questions 24/7.
            </p>
          </div>
        </div>
      </div>

      <div className="go">
        <div className="go1">
          <h2>Crypto on the go!</h2>
          <p>
            Download Exolix mobile application to exchange cryptocurrencies
            anywhere.
          </p>
          <div className="go2">
            <div className="go3">
              <IoMdCheckmark />
            </div>
            <p>Competitive and fixed rate</p>
          </div>
          <div className="go2 go4">
            <div className="go3">
              <IoMdCheckmark />
            </div>
            <p>2140+ cryptocurrencies available</p>
          </div>
          <div className="go5">
            <img src={app} alt="" />
            <img src={google} alt="" />
          </div>
        </div>
        <div className="go1 go6">
          <img src={comp} alt="" />
        </div>
      </div>

      <div className="press">
        <div className="presshead">
          <div className="press1">
            <h2>Press about us</h2>
            <p>Exolix is a secure and anonymous crypto exchange</p>
          </div>
          <div className="press2">
            <div className="presschev" onClick={handlePrevpress}>
              <GoArrowLeft size={30} />
            </div>
            <div className="presschev" onClick={handleNextpress}>
              <GoArrowRight size={30} />
            </div>
          </div>
        </div>

        <div className="press3">
          {cards.slice(startIndex, startIndex + 4).map((card) => (
            <div key={card.id} className="press4">
              <img src={card.image} alt="" />
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="join">
        <h2>Join our partner list</h2>
        <div className="join1">
          {images.map((imgSrc, index) => (
            <div key={index} className="join2">
              <img src={imgSrc} alt={`logo-${index}`} />
            </div>
          ))}
        </div>
        <button>Become Exolix partner</button>
      </div>
    </>
  );
}

export default Terms;
