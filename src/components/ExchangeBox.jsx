import React, { useEffect, useState } from "react";
import "../css/ExchnageBox.css";
import star from "../assets/star.png";
import { FaExchangeAlt } from "react-icons/fa";
import { MdSwapVerticalCircle } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { MdRefresh } from "react-icons/md";
import { FaChevronDown, FaChevronUp, FaChevronRight } from "react-icons/fa6";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import rubic from "../assets/rubic.webp";
import eth from "../assets/eth.webp";
import weth from "../assets/weth.webp";
import usdc from "../assets/usdc.webp";
import wepe from "../assets/wepe.webp";
import bnb from "../assets/bnb.webp";
import steth from "../assets/steth.webp";
import wsteth from "../assets/wsteth.webp";
import link from "../assets/link.webp";
import wbeth from "../assets/wbeth.webp";
import wbtc from "../assets/wbtc.webp";
import DexTab from "./tabs/DexTab";

function ExchangeBox() {
  const [activeTab, setActiveTab] = useState("exchange");
  const [countdown, setCountdown] = useState(9);
  const [hovered, setHovered] = useState(false);
  const [isSwapped, setIsSwapped] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pay, setPay] = useState(0.1);
  const [isLeftDropdownOpen, setIsLeftDropdownOpen] = useState(false);
  const [isRightDropdownOpen, setIsRightDropdownOpen] = useState(false);
  const [selectedLeftCurrency, setSelectedLeftCurrency] = useState({
    code: "RBC",
    name: "Rubic",
    icon: rubic,
  });
  const [selectedRightCurrency, setSelectedRightCurrency] = useState({
    code: "USDT",
    name: "Tether",
    icon: usdc,
  });

  const [searchTerm, setSearchTerm] = useState("");

  // Sample cryptocurrency data
  const cryptocurrencies = [
    { code: "ETH", name: "Ethereum", icon: eth },
    { code: "RBC", name: "Rubic", icon: rubic },
    { code: "WETH", name: "Wrapped Ether", icon: weth },
    { code: "USDC", name: "USD Coin", icon: usdc },
    { code: "WEPE", name: "Wall Street Pepe", icon: wepe },
    { code: "BNB", name: "BNB", icon: bnb },
    { code: "BTC", name: "Bitcoin", icon: steth },
    { code: "USDT", name: "Tether", icon: wsteth },
    { code: "SOL", name: "Solana", icon: link },
    { code: "ADA", name: "Cardano", icon: wbeth },
    { code: "WTC", name: "Wbtc", icon: wbtc },
  ];

  const filteredCryptos = cryptocurrencies.filter(
    (crypto) =>
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      crypto.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setCountdown(9);
    }
  }, [countdown]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleLeftCurrencySelect = (crypto) => {
    setSelectedLeftCurrency(crypto);
    setIsLeftDropdownOpen(false);
    setSearchTerm("");
  };

  const handleRightCurrencySelect = (crypto) => {
    setSelectedRightCurrency(crypto);
    setIsRightDropdownOpen(false);
    setSearchTerm("");
  };

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
        <div className={`exchange-wallet ${activeTab === "dex" ? "dex" : ""}`}>
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
                    <MdRefresh
                      size={22}
                      color="#FFFFFF"
                      className="refresh-icon"
                    />
                  </div>
                  <VscSettings size={22} color="#FFFFFF" />
                </div>
              </div>

              <div className="amount">
                {!isSwapped ? (
                  <>
                    {/* Left (You Pay) */}
                    <div className="amount-pay">
                      <div className="amountPar">
                        <div className="amountleft">
                          <div className="pay-balance">
                            You pay
                            <h4 className="payCount">
                              {loading ? (
                                <div className="skeleton"></div>
                              ) : (
                                <input type="text" value={pay} />
                              )}
                            </h4>
                            <div className="paytext">
                              <h3>Balance: </h3>
                              <div className="payWallet">Connect wallet</div>
                            </div>
                          </div>
                        </div>
                        <div className="amountright">
                          <div className="pay-balance righttext">
                            {selectedLeftCurrency.name}
                            <div className="Wallet-render">
                              <div className="wallet-Icon">
                                {loading ? (
                                  <div className="Imgskeleton"></div>
                                ) : (
                                  <img
                                    src={selectedLeftCurrency.icon}
                                    alt={selectedLeftCurrency.name}
                                  />
                                )}
                              </div>
                              {loading ? (
                                <div className="textskeleton"></div>
                              ) : (
                                <span>{selectedLeftCurrency.code}</span>
                              )}
                              {isLeftDropdownOpen ? (
                                <FaChevronUp size={10} color="#ABB5C0" />
                              ) : (
                                <FaChevronDown
                                  size={10}
                                  color="#ABB5C0"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setIsLeftDropdownOpen(!isLeftDropdownOpen);
                                  }}
                                />
                              )}
                            </div>
                            {/* Dropdown Menu */}
                            {isLeftDropdownOpen && (
                              <div className="currency-dropdown">
                                <div className="dropdown-search">
                                  <div className="search-input">
                                    <BiSearch size={20} color="#98A4AE" />
                                    <input
                                      type="text"
                                      placeholder="Search by name from 100 coins"
                                      value={searchTerm}
                                      onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                      }
                                    />
                                    <FaChevronUp
                                      size={10}
                                      color="#ABB5C0"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setIsLeftDropdownOpen(false);
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="dropdown-list">
                                  {filteredCryptos.map((crypto) => (
                                    <div
                                      key={crypto.code}
                                      className="currency-option"
                                      onClick={() =>
                                        handleLeftCurrencySelect(crypto)
                                      }
                                    >
                                      <div className="wallet-Icon">
                                        <img src={crypto.icon} alt="" />
                                      </div>
                                      <div className="currency-info">
                                        <span className="currency-code">
                                          {crypto.code}
                                          <span className="currency-name">
                                            {crypto.name}
                                          </span>
                                        </span>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Arrow Button */}
                    <div
                      className="arrow"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      onClick={() => setIsSwapped(true)}
                    >
                      <div className="arrow1">
                        {hovered ? (
                          <FaArrowLeft size={13} />
                        ) : (
                          <FaArrowRight size={13} />
                        )}
                      </div>
                    </div>

                    {/* Right (You Get) */}
                    <div className="amount-pay">
                      <div className="amountPar">
                        <div className="amountleft">
                          <div className="pay-balance">
                            You get
                            <h4 className="payCount">
                              {loading ? (
                                <div className="skeleton"></div>
                              ) : (
                                <input type="text" value={pay} />
                              )}
                            </h4>
                            <div className="paytext">
                              <h3>Balance: </h3>
                              <div className="payWallet">Connect wallet</div>
                            </div>
                          </div>
                        </div>
                        <div className="amountright">
                          <div className="pay-balance righttext">
                            {selectedRightCurrency.name}
                            <div className="Wallet-render">
                              <div className="wallet-Icon">
                                {loading ? (
                                  <div className="Imgskeleton"></div>
                                ) : (
                                  <img
                                    src={selectedRightCurrency.icon}
                                    alt={selectedRightCurrency.name}
                                  />
                                )}
                              </div>
                              {loading ? (
                                <div className="textskeleton"></div>
                              ) : (
                                <span>{selectedRightCurrency.code}</span>
                              )}
                              {isRightDropdownOpen ? (
                                <FaChevronUp size={10} color="#ABB5C0" />
                              ) : (
                                <FaChevronDown
                                  size={10}
                                  color="#ABB5C0"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setIsRightDropdownOpen(
                                      !isRightDropdownOpen
                                    );
                                  }}
                                />
                              )}
                            </div>
                            {/* Right Dropdown Menu */}
                            {isRightDropdownOpen && (
                              <div className="currency-dropdown currency-dropdown-right">
                                <div className="dropdown-search">
                                  <div className="search-input">
                                    <BiSearch size={20} color="#98A4AE" />
                                    <input
                                      type="text"
                                      placeholder="Search by name from 100 coins"
                                      value={searchTerm}
                                      onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                      }
                                    />
                                    <FaChevronUp
                                      size={10}
                                      color="#ABB5C0"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setIsRightDropdownOpen(false);
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="dropdown-list">
                                  {filteredCryptos.map((crypto) => (
                                    <div
                                      key={crypto.code}
                                      className="currency-option"
                                      onClick={() =>
                                        handleRightCurrencySelect(crypto)
                                      }
                                    >
                                      <div className="wallet-Icon">
                                        <img src={crypto.icon} alt="" />
                                      </div>
                                      <div className="currency-info">
                                        <span className="currency-code">
                                          {crypto.code}
                                          <span className="currency-name">
                                            {crypto.name}
                                          </span>
                                        </span>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Right first (You Get) - when swapped */}
                    <div className="amount-pay">
                      <div className="amountPar">
                        <div className="amountleft">
                          <div className="pay-balance">
                            You get
                            <h4 className="payCount">
                              {loading ? (
                                <div className="skeleton"></div>
                              ) : (
                                <input type="text" value={pay} />
                              )}
                            </h4>
                            <div className="paytext">
                              <h3>Balance: </h3>
                              <div className="payWallet">Connect wallet</div>
                            </div>
                          </div>
                        </div>
                        <div className="amountright">
                          <div className="pay-balance righttext">
                            {selectedRightCurrency.name}
                            <div className="Wallet-render">
                              <div className="wallet-Icon">
                                {loading ? (
                                  <div className="Imgskeleton"></div>
                                ) : (
                                  <img
                                    src={selectedRightCurrency.icon}
                                    alt={selectedRightCurrency.name}
                                  />
                                )}
                              </div>
                              {loading ? (
                                <div className="textskeleton"></div>
                              ) : (
                                <span>{selectedRightCurrency.code}</span>
                              )}
                              {isRightDropdownOpen ? (
                                <FaChevronUp size={10} color="#ABB5C0" />
                              ) : (
                                <FaChevronDown
                                  size={10}
                                  color="#ABB5C0"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setIsRightDropdownOpen(
                                      !isRightDropdownOpen
                                    );
                                  }}
                                />
                              )}
                            </div>
                            {/* Right Dropdown Menu */}
                            {isRightDropdownOpen && (
                              <div className="currency-dropdown">
                                <div className="dropdown-search">
                                  <div className="search-input">
                                    <BiSearch size={20} color="#98A4AE" />
                                    <input
                                      type="text"
                                      placeholder="Search by name from 100 coins"
                                      value={searchTerm}
                                      onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                      }
                                    />
                                    <FaChevronUp
                                      size={10}
                                      color="#ABB5C0"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setIsRightDropdownOpen(false);
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="dropdown-list">
                                  {filteredCryptos.map((crypto) => (
                                    <div
                                      key={crypto.code}
                                      className="currency-option"
                                      onClick={() =>
                                        handleRightCurrencySelect(crypto)
                                      }
                                    >
                                      <div className="wallet-Icon">
                                        <img src={crypto.icon} alt="" />
                                      </div>
                                      <div className="currency-info">
                                        <span className="currency-code">
                                          {crypto.code}
                                          <span className="currency-name">
                                            {crypto.name}
                                          </span>
                                        </span>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Arrow Button */}
                    <div
                      className="arrow"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      onClick={() => setIsSwapped(false)}
                    >
                      <div className="arrow1">
                        {hovered ? (
                          <FaArrowRight size={13} />
                        ) : (
                          <FaArrowLeft size={13} />
                        )}
                      </div>
                    </div>

                    {/* Left second (You Pay) - when swapped */}
                    <div className="amount-pay">
                      <div className="amountPar">
                        <div className="amountleft">
                          <div className="pay-balance">
                            You pay
                            <h4 className="payCount">
                              {loading ? (
                                <div className="skeleton"></div>
                              ) : (
                                <input type="text" value={pay} />
                              )}
                            </h4>
                            <div className="paytext">
                              <h3>Balance: </h3>
                              <div className="payWallet">Connect wallet</div>
                            </div>
                          </div>
                        </div>
                        <div className="amountright">
                          <div className="pay-balance righttext">
                            {selectedLeftCurrency.name}
                            <div className="Wallet-render">
                              <div className="wallet-Icon">
                                {loading ? (
                                  <div className="Imgskeleton"></div>
                                ) : (
                                  <img
                                    src={selectedLeftCurrency.icon}
                                    alt={selectedLeftCurrency.name}
                                  />
                                )}
                              </div>
                              {loading ? (
                                <div className="textskeleton"></div>
                              ) : (
                                <span>{selectedLeftCurrency.code}</span>
                              )}
                              {isLeftDropdownOpen ? (
                                <FaChevronUp size={10} color="#ABB5C0" />
                              ) : (
                                <FaChevronDown
                                  size={10}
                                  color="#ABB5C0"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setIsLeftDropdownOpen(!isLeftDropdownOpen);
                                  }}
                                />
                              )}
                            </div>
                            {/* Left Dropdown Menu when swapped */}
                            {isLeftDropdownOpen && (
                              <div className="currency-dropdown currency-dropdown-right">
                                <div className="dropdown-search">
                                  <div className="search-input">
                                    <BiSearch size={20} color="#98A4AE" />
                                    <input
                                      type="text"
                                      placeholder="Search by name from 100 coins"
                                      value={searchTerm}
                                      onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                      }
                                    />
                                    <FaChevronUp
                                      size={10}
                                      color="#ABB5C0"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setIsLeftDropdownOpen(false);
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="dropdown-list">
                                  {filteredCryptos.map((crypto) => (
                                    <div
                                      key={crypto.code}
                                      className="currency-option"
                                      onClick={() =>
                                        handleLeftCurrencySelect(crypto)
                                      }
                                    >
                                      <div className="wallet-Icon">
                                        <img src={crypto.icon} alt="" />
                                      </div>
                                      <div className="currency-info">
                                        <span className="currency-code">
                                          {crypto.code}
                                          <span className="currency-name">
                                            {crypto.name}
                                          </span>
                                        </span>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="slip">
                <div className="slip1">
                  <div className="slip2">
                    <IoInformationCircleOutline size={16} color="#737F8B" />
                    <p>Route ETH = </p>
                  </div>
                  <div className="slip2 slip3">
                    <IoInformationCircleOutline size={16} color="#737F8B" />
                    <p>
                      Slippage Tolerance: 1%{" "}
                      <FaChevronRight size={8} color="#717D89" />{" "}
                    </p>
                  </div>
                </div>
                <div className="slip1">
                  <div className="slip2">
                    <IoInformationCircleOutline size={16} color="#737F8B" />
                    <p>
                      Route ETH <FaChevronRight size={8} color="#717D89" /> USDT{" "}
                    </p>
                  </div>
                  <div className="slip2 slip3">
                    <BsFillFuelPumpFill size={16} color="#737F8B" />
                    <p>Slippage Tolerance: 1% </p>
                  </div>
                </div>
              </div>
              <div className="btns">
                <button className="btn1">
                  <div className="wallet-Icon walletbg">
                    {loading ? (
                      <div className="Imgskeleton"></div>
                    ) : (
                      <img src={rubic} alt="" />
                    )}
                  </div>
                  Ethereum <FaChevronDown size={14} />
                </button>
                <button className="btn2">Connect wallet</button>
              </div>
            </>
          )}

          {activeTab === "dex" && (
            <div>
              <DexTab />
            </div>
          )}
        </div>
        <p className="term">
          By clicking Exchange you agree with <span>Terms of Use</span> and <span>Privacy Policy</span>
        </p>
      </div>
    </>
  );
}

export default ExchangeBox;
