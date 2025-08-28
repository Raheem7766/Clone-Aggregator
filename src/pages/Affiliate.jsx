import React, { useState } from "react";
import "../css/affiliate.css";
import { FiChevronsRight } from "react-icons/fi";
import { MdOutlineChevronRight } from "react-icons/md";
import best1 from "../assets/best1.svg";
import best2 from "../assets/best2.svg";
import best3 from "../assets/best3.svg";
import best4 from "../assets/best4.svg";
import best5 from "../assets/best5.svg";
import best6 from "../assets/best6.svg";
import provide1 from "../assets/provide1.svg";
import provide2 from "../assets/provide2.svg";
import provide3 from "../assets/provide3.svg";
import { IoMdCheckmark } from "react-icons/io";
import api1 from "../assets/api1.png";
import { CiWallet } from "react-icons/ci";

function Affiliate() {
  const [sliderValue, setSliderValue] = useState(500);
  const [volume, setVolume] = useState(650);
  const [share, setShare] = useState(0.5);

  const handleSliderChange = (e) => {
    const value = parseFloat(e.target.value);
    const max = 1000;
    const percentage = (value / max) * 100;

    setSliderValue(value);

    // Update values (customize these calculations as needed)
    const newVolume = Math.round(value * 0.65 + 325); // Approximate range 325-975
    const newShare = (value / max).toFixed(1);

    setVolume(newVolume);
    setShare(newShare);
  };

  const percentage = (sliderValue / 1000) * 100;

  return (
    <>
      <div className="affiliate">
        <div className="program"></div>
        <div className="affiliate1">
          <div className="affiliate2">
            Home <FiChevronsRight size={12} /> <span>Affiliate program</span>
          </div>
          <h2>
            Become our affiliate partner within 5 minutes & start earning just
            now!
          </h2>
          <div className="affiliate3">
            <button>
              Become a partner <MdOutlineChevronRight />
            </button>
            <h3>Login Now</h3>
          </div>
        </div>
      </div>
      <div className="exoli">
        <h2>Why Exolix?</h2>
        <p>
          Exolix is a secure and anonymous crypto exchange service with fixed
          and floating rates which is free of registration and any limits.
        </p>
        <div className="exoli1">
          <div className="exoli2">
            <img src={best1} alt="" />
            <p>Up to 2% fee from each transaction</p>
          </div>
          <div className="exoli2">
            <img src={best2} alt="" />
            <p>Income calculated in BTC</p>
          </div>
          <div className="exoli2">
            <img src={best3} alt="" />
            <p>Over 2172 coins to exchange for your users</p>
          </div>
          <div className="exoli2">
            <img src={best4} alt="" />
            <p>Best rates among leading exchange services</p>
          </div>
          <div className="exoli2">
            <img src={best5} alt="" />
            <p>
              An intuitive interface so that each user makes exchanges easily
            </p>
          </div>
          <div className="exoli2">
            <img src={best6} alt="" />
            <p>Your resource mentioned on our platform as a partner</p>
          </div>
        </div>
      </div>
      <div className="exoli3">
        <div className="exoli4">
          <div className="exoli5">
            <h2>
              The more transactions' volume is - the higher profit you get!
            </h2>
            <div className="volume">
              <div className="volume-section">
                {/* Chart Grid Background */}
                <div className="chart-grid">
                  <div
                    className="grid-line grid-vertical"
                    style={{ left: "10%" }}
                  ></div>
                  <div
                    className="grid-line grid-vertical"
                    style={{ left: "20%" }}
                  ></div>
                  <div
                    className="grid-line grid-vertical"
                    style={{ left: "30%" }}
                  ></div>
                  <div
                    className="grid-line grid-vertical"
                    style={{ left: "40%" }}
                  ></div>
                  <div
                    className="grid-line grid-vertical"
                    style={{ left: "50%" }}
                  ></div>
                  <div
                    className="grid-line grid-vertical"
                    style={{ left: "60%" }}
                  ></div>
                  <div
                    className="grid-line grid-vertical"
                    style={{ left: "70%" }}
                  ></div>
                  <div
                    className="grid-line grid-vertical"
                    style={{ left: "80%" }}
                  ></div>
                  <div
                    className="grid-line grid-vertical"
                    style={{ left: "90%" }}
                  ></div>

                  <div
                    className="grid-line grid-horizontal"
                    style={{ top: "20%" }}
                  ></div>
                  <div
                    className="grid-line grid-horizontal"
                    style={{ top: "40%" }}
                  ></div>
                  <div
                    className="grid-line grid-horizontal"
                    style={{ top: "60%" }}
                  ></div>
                  <div
                    className="grid-line grid-horizontal"
                    style={{ top: "80%" }}
                  ></div>
                </div>

                {/* Stats Section */}
                <div className="stats-row">
                  <div className="stat-item">
                    <h3>Transactions' volume</h3>
                    <h2>{volume}</h2>
                  </div>
                  <div className="stat-item">
                    <h3>Your share</h3>
                    <h2>{share}</h2>
                  </div>
                </div>

                {/* Slider Section */}
                <div className="slider-section">
                  <div className="slider-container">
                    <div className="slider-track-bg"></div>
                    <div
                      className="slider-track-fill"
                      style={{ width: `${percentage}%` }}
                    ></div>
                    <div
                      className="slider-thumb"
                      style={{ left: `${percentage}%` }}
                    ></div>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={sliderValue}
                      className="slider-input"
                      onChange={handleSliderChange}
                    />
                  </div>
                  <div className="slider-labels">
                    <span>0 BTC</span>
                    <span>1000 BTC</span>
                  </div>
                </div>
              </div>
              <div className="volume2">
                <div className="volumeimg">
                  <h4>You get</h4>
                  <p>
                    ~3.25 <span>BTC</span>
                  </p>
                  <button>Try now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="provide">
        <h2>We provide 3 options for our partners</h2>
        <div className="provide1">
          <div className="provide2">
            <img src={provide2} alt="" />
            <h3>API - Integration of exchange flow</h3>
            <p>
              We provide an API for integrating fixed and floating rate exchange
              flows. You can manage your profits from exchanges by varying
              exchange rates. Our API is easy to use and transparent — check it
              out yourself.
            </p>
            <button>Try now</button>
          </div>
          <div className="provide2 provide3">
            <img src={provide1} alt="" />
            <h3>Referral links</h3>
            <p>
              Making noticeable content? Invite your audience to exchange with
              us and gain BTC for every attracted user.
            </p>
            <button>Try now</button>
          </div>
          <div className="provide2 provide3">
            <img src={provide3} alt="" />
            <h3>Exchange widget</h3>
            <p>
              Add an exchange service to your site. Set up Exolix widget on your
              website and make a profit in BTC for every exchange.
            </p>
            <button>Try now</button>
          </div>
        </div>
      </div>

      <div className="api">
        <div className="api1">
          <div className="apitop">
            <div className="api2">
              <h2>Exolix’ API</h2>
              <p>
                Implement our API into your system and start earning from your
                users’ exchanges
              </p>
              <div className="go2">
                <div className="go3">
                  <IoMdCheckmark />
                </div>
                <p>High-quality exchange service on your own platform</p>
              </div>
              <div className="go2 gotop">
                <div className="go3">
                  <IoMdCheckmark />
                </div>
                <p>
                  Saved time and money on the development of an exchange service
                </p>
              </div>
              <div className="go2 gotop">
                <div className="go3">
                  <IoMdCheckmark />
                </div>
                <p>Ampler opportunities for your users</p>
              </div>
            </div>
            <div className="api3">
              <img src={api1} alt="" />
            </div>
          </div>
          <div className="api4">
            <div className="api5">Best for:</div>
            <div className="api6">
              <CiWallet size={24} color="#FFFFFF" />
              Wallets
            </div>
            <div className="api7">
              <CiWallet size={24} color="#FFFFFF" />
              Payment systems
            </div>
            <div className="api7">
              <CiWallet size={24} color="#FFFFFF" />
              Aggregators
            </div>
            <div className="api7">
              <CiWallet size={24} color="#FFFFFF" />
              Crypto services
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Affiliate;
