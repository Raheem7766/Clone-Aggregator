import React, { useState } from "react";
import "../css/affiliate.css";
import { FiChevronsRight } from "react-icons/fi";
import { MdConnectedTv, MdOutlineChevronRight } from "react-icons/md";
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
import { CiUser, CiWallet } from "react-icons/ci";
import start1 from "../assets/start1.svg";
import start2 from "../assets/start2.svg";
import start3 from "../assets/start3.svg";
import link from "../assets/link.png";
import create from "../assets/create.svg";
import { PiDeviceMobile } from "react-icons/pi";
import { RiCoinLine } from "react-icons/ri";
import widget from "../assets/widget.png";
import place1 from "../assets/place1.svg";
import place2 from "../assets/place2.svg";

function Affiliate() {
  const [sliderValue, setSliderValue] = useState(500);
  const [volume, setVolume] = useState(650);
  const [share, setShare] = useState(0.5);

  const handleSliderChange = (e) => {
    const value = parseFloat(e.target.value);
    const max = 1000;
    const percentage = (value / max) * 100;

    setSliderValue(value);

    const newVolume = Math.round(value * 0.65 + 325);
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
                  <div className="volumeget">
                    <h4>You get</h4>
                    <p>
                      ~3.25 <span>BTC</span>
                    </p>
                  </div>
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
              <div className="affiliate3 apibtn">
                <button>
                  Become a partner <MdOutlineChevronRight />
                </button>
                <h3>How it works?</h3>
              </div>
            </div>
            <div className="api3">
              <img src={api1} alt="" />
            </div>
          </div>
          <div className="api4">
            <div className="api5">Best for:</div>
            <div className="allwallet">
              <div className="api6">
                <CiWallet size={24} color="#FFFFFF" />
                Wallets
              </div>
              <div className="api7 api8">
                <CiWallet size={24} color="#FFFFFF" />
                Payment systems
              </div>
              <div className="api7 api9">
                <CiWallet size={24} color="#FFFFFF" />
                Aggregators
              </div>
              <div className="api7 api10">
                <CiWallet size={24} color="#FFFFFF" />
                Crypto services
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="start">
        <h2>How does it work?</h2>
        <div className="start1">
          <div className="startline"></div>
          <MdOutlineChevronRight
            size={20}
            color="#dfdfe3"
            className="starticon"
          />
          <div className="startline1"></div>
          <MdOutlineChevronRight
            size={20}
            color="#dfdfe3"
            className="starticon1"
          />
          <div className="start2">
            <img src={start1} alt="" />
            <h3>Implement Exolix API</h3>
            <p>Integrate our API into your system</p>
          </div>
          <div className="start2 start3">
            <img src={start2} alt="" />
            <h3>Share it with audience</h3>
            <p>Convert your active clients to successful exchanges</p>
          </div>
          <div className="start2 start4">
            <img src={start3} alt="" />
            <h3>Get monthly payouts in BTC</h3>
            <p>Receive from 0.5% to 2% of each transaction</p>
          </div>
        </div>
        <div className="startbtn">
          <button>Get Started</button>
        </div>
      </div>

      <div className="api link">
        <div className="api1">
          <div className="apitop">
            <div className="api3">
              <img src={link} alt="" />
            </div>
            <div className="api2">
              <h2>Referral links</h2>
              <p>
                Share our service link with your audience and receive profit in
                BTC from every referrals’ transaction
              </p>
              <div className="go2">
                <div className="go3">
                  <IoMdCheckmark />
                </div>
                <p>Easy integration in a couple of minutes</p>
              </div>
              <div className="go2 gotop">
                <div className="go3">
                  <IoMdCheckmark />
                </div>
                <p>Wide variety of links/banners to attract your audience</p>
              </div>
              <div className="go2 gotop">
                <div className="go3">
                  <IoMdCheckmark />
                </div>
                <p>Simple actions for substantial profit</p>
              </div>
              <div className="affiliate3 apibtn">
                <button>
                  Become a partner <MdOutlineChevronRight />
                </button>
                <h3>How it works?</h3>
              </div>
            </div>
          </div>
          <div className="api4 link1">
            <div className="api5">Best for:</div>
            <div className="allwallet allwallet1">
              <div className="api6">
                <CiUser size={24} color="#FFFFFF" />
                Bloggers & Opinion leaders
              </div>
              <div className="api7">
                <MdConnectedTv size={24} color="#FFFFFF" />
                News websites
              </div>
              <div className="api7 link2">
                <CiWallet size={24} color="#FFFFFF" />
                Exchange rate aggregators
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="start">
        <h2>How does it work?</h2>
        <div className="start1">
          <div className="startline"></div>
          <MdOutlineChevronRight
            size={20}
            color="#dfdfe3"
            className="starticon"
          />
          <div className="startline1"></div>
          <MdOutlineChevronRight
            size={20}
            color="#dfdfe3"
            className="starticon1"
          />
          <div className="start2">
            <img src={create} alt="" />
            <h3>Create link</h3>
            <p>Create and copy referral link</p>
          </div>
          <div className="start2 start3">
            <img src={start2} alt="" />
            <h3>Drive your traffic</h3>
            <p>
              Place the link or banner to your website/blog/social media and
              invite your users to exchange with Exolix
            </p>
          </div>
          <div className="start2 start4">
            <img src={start3} alt="" />
            <h3>Get monthly payouts</h3>
            <p>Receive from 0.5% to 2% of each transaction</p>
          </div>
        </div>
        <div className="startbtn">
          <button>Get Started</button>
        </div>
      </div>

      <div className="api">
        <div className="api1">
          <div className="apitop">
            <div className="api2">
              <h2>Widgets</h2>
              <p>
                Implement Exolix’ Widget into your service or application and
                let your users exchange cryptocurrencies without leaving your
                platform!
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
                <p>Ampler opportunities for your users</p>
              </div>
              <div className="go2 gotop">
                <div className="go3">
                  <IoMdCheckmark />
                </div>
                <p>Users stay on your platform</p>
              </div>
              <div className="affiliate3 apibtn">
                <button>
                  Become a partner <MdOutlineChevronRight />
                </button>
                <h3>How it works?</h3>
              </div>
            </div>
            <div className="api3">
              <img src={widget} alt="" />
            </div>
          </div>
          <div className="api4 widge">
            <div className="api5">Best for:</div>
            <div className="allwallet allwallet1">
              <div className="api6">
                <RiCoinLine size={24} color="#FFFFFF" />
                Coins & Tokens websites
              </div>
              <div className="api7 widge1">
                <PiDeviceMobile size={24} color="#FFFFFF" />
                Mobile Applications
              </div>
              <div className="api7 widge2">
                <CiUser size={24} color="#FFFFFF" />
                Publishers’ and advisers’ websites
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="start">
        <h2>How does it work?</h2>
        <div className="start1">
          <div className="startline"></div>
          <MdOutlineChevronRight
            size={20}
            color="#dfdfe3"
            className="starticon"
          />
          <div className="startline1"></div>
          <MdOutlineChevronRight
            size={20}
            color="#dfdfe3"
            className="starticon1"
          />
          <div className="start2 widgep">
            <img src={place1} alt="" />
            <h3>Place widget</h3>
            <p>Copy the script and place it to the source code of your web page</p>
          </div>
          <div className="start2 start3">
            <img src={place2} alt="" />
            <h3>Get transactions</h3>
            <p>
              Convert your active sessions to exchanges
            </p>
          </div>
          <div className="start2 start4">
            <img src={start3} alt="" />
            <h3>Get monthly payouts in BTC</h3>
            <p>Receive from 0.5% to 2% of each transaction</p>
          </div>
        </div>
        <div className="startbtn">
          <button>Get Started</button>
        </div>
      </div>
    </>
  );
}

export default Affiliate;
