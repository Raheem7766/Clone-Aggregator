import React, { useEffect, useState } from "react";
import "../css/ExchnageBox.css";
import star from "../assets/star.png";
import { FaExchangeAlt } from "react-icons/fa";
import { MdSwapVerticalCircle } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { MdRefresh } from "react-icons/md";
import rubic from "../assets/rubic.webp";
import { FaChevronDown } from "react-icons/fa6";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

function ExchangeBox() {
  const [activeTab, setActiveTab] = useState("exchange"); // default tab
  const [countdown, setCountdown] = useState(9);
  const [hovered, setHovered] = useState(false);
  const [isSwapped, setIsSwapped] = useState(false); // 👈 new state

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      // restart countdown automatically
      setCountdown(9);
    }
  }, [countdown]);

  return (
    <>
      <div className="exchange-container">
        <div className="exchange-header">
          <div className="exchnage-head">
            <div className="find">
              We find the best exchange Web3 routes in one click
            </div>
            <div className="see">
              <div className="dot"></div>{" "}
              <h2>
                See our <span className="bold">349</span> reviews on
              </h2>
              <img src={star} alt="" className="star" />
            </div>
          </div>

          {/* Tab buttons */}
          <div className="exchnage-tab-btn">
            <div className="exchangetab">
              <button
                className={`exchnagebtn ${
                  activeTab === "exchange" ? "active" : ""
                }`}
                onClick={() => setActiveTab("exchange")}
              >
                <FaExchangeAlt /> Exchange
              </button>
              <button
                className={`exchnagebtn ${activeTab === "dex" ? "active" : ""}`}
                onClick={() => setActiveTab("dex")}
              >
                <MdSwapVerticalCircle /> DEX swap
              </button>
            </div>
          </div>
        </div>

        {/* Wallet tab content */}
        <div className="exchange-wallet">
          {activeTab === "exchange" && (
            <>
              <div className="wallet-head">
                <div className="wallet-head-count">
                  <div className="wallet-count">1 OF 3</div>
                  <h3>Connect Wallet</h3>
                </div>
                <div className="wallet-head-auto">
                  Auto refreshes in {countdown} sec
                  <div className="refresh">
                    <MdRefresh size={22} color="#FFFFFF" className="refresh-icon" />
                  </div>
                  <VscSettings size={22} color="#FFFFFF" />
                </div>
              </div>

              <div className="amount">
                {/* If swapped → render right first */}
                {!isSwapped ? (
                  <>
                    {/* Left (You Pay) */}
                    <div className="amount-pay">
                      <div className="amountPar">
                        <div className="amountleft">
                          <div className="pay-balance">
                            You pay
                            <h4 className="payCount">
                              <input type="text" />
                            </h4>
                            <div className="paytext">
                              <h3>Balance: </h3>
                              <div className="payWallet">Connect wallet</div>
                            </div>
                          </div>
                        </div>
                        <div className="amountright">
                          <div className="pay-balance righttext">
                            Rubic
                            <div className="Wallet-render">
                              <div className="wallet-Icon">
                                <img src={rubic} alt="" />
                              </div>
                              RBC
                              <FaChevronDown size={10} color="#ABB5C0" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Arrow Button */}
                    <div
                      className="arrow"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      onClick={() => setIsSwapped(true)} // 👈 click to swap
                    >
                      <div className="arrow1">
                        {hovered ? <FaArrowLeft size={13} /> : <FaArrowRight size={13} />}
                      </div>
                    </div>

                    {/* Right (You Get) */}
                    <div className="amount-pay">
                      <div className="amountPar">
                        <div className="amountleft">
                          <div className="pay-balance">
                            You get
                            <h4 className="payCount">
                              <input type="text" />
                            </h4>
                            <div className="paytext">
                              <h3>Balance: </h3>
                              <div className="payWallet">Connect wallet</div>
                            </div>
                          </div>
                        </div>
                        <div className="amountright">
                          <div className="pay-balance righttext">
                            Tester USD
                            <div className="Wallet-render">
                              <div className="wallet-Icon">
                                <img src={rubic} alt="" />
                              </div>
                              USDT
                              <FaChevronDown size={10} color="#ABB5C0" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Right first (You Get) */}
                    <div className="amount-pay">
                      <div className="amountPar">
                        <div className="amountleft">
                          <div className="pay-balance">
                            You get
                            <h4 className="payCount">
                              <input type="text" />
                            </h4>
                            <div className="paytext">
                              <h3>Balance: </h3>
                              <div className="payWallet">Connect wallet</div>
                            </div>
                          </div>
                        </div>
                        <div className="amountright">
                          <div className="pay-balance righttext">
                            Tester USD
                            <div className="Wallet-render">
                              <div className="wallet-Icon">
                                <img src={rubic} alt="" />
                              </div>
                              USDT
                              <FaChevronDown size={10} color="#ABB5C0" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Arrow Button */}
                    <div
                      className="arrow"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      onClick={() => setIsSwapped(false)} // 👈 click back
                    >
                      <div className="arrow1">
                        {hovered ? <FaArrowRight size={13} /> : <FaArrowLeft size={13} />}
                      </div>
                    </div>

                    {/* Left second (You Pay) */}
                    <div className="amount-pay">
                      <div className="amountPar">
                        <div className="amountleft">
                          <div className="pay-balance">
                            You pay
                            <h4 className="payCount">
                              <input type="text" />
                            </h4>
                            <div className="paytext">
                              <h3>Balance: </h3>
                              <div className="payWallet">Connect wallet</div>
                            </div>
                          </div>
                        </div>
                        <div className="amountright">
                          <div className="pay-balance righttext">
                            Rubic
                            <div className="Wallet-render">
                              <div className="wallet-Icon">
                                <img src={rubic} alt="" />
                              </div>
                              RBC
                              <FaChevronDown size={10} color="#ABB5C0" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </>
          )}

          {activeTab === "dex" && (
            <div className="wallet-tab">
              <h3>DEX Swap Wallet</h3>
              <p>Here you can swap tokens instantly on DEX ⚡</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ExchangeBox;
