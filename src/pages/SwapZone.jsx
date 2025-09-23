import React, { useState, useRef, useEffect } from "react";
import { FiChevronsRight } from "react-icons/fi";
import "../css/SwapZone.css";
import eth from "../assets/eth.webp";
import bnb from "../assets/bnb.webp";
import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import ZoneRightCont from "../components/ZoneRightCont";
import { useNavigate } from "react-router-dom";

export default function SwapZone() {
  const [hovered, setHovered] = useState(false);
  const [left, setLeft] = useState({ value: "0.1", symbol: "ETH", img: eth });
  const [right, setRight] = useState({ value: "0.2", symbol: "BNB", img: bnb });

  const [isLeftDropdownOpen, setIsLeftDropdownOpen] = useState(false);
  const [isRightDropdownOpen, setIsRightDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Popular");

  const leftDropdownRef = useRef(null);
  const rightDropdownRef = useRef(null);
  const leftCurrencyListRef = useRef(null);
  const rightCurrencyListRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isLeftDropdownOpen &&
        leftDropdownRef.current &&
        !leftDropdownRef.current.contains(event.target)
      ) {
        setIsLeftDropdownOpen(false);
      }

      if (
        isRightDropdownOpen &&
        rightDropdownRef.current &&
        !rightDropdownRef.current.contains(event.target)
      ) {
        setIsRightDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLeftDropdownOpen, isRightDropdownOpen]);

  const handleSwap = () => {
    const l = left;
    const r = right;
    setLeft(r);
    setRight(l);
  };

  const onArrowKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleSwap();
    }
  };

  const currencyCategories = {
    Popular: [
      { symbol: "BTC", name: "Bitcoin", img: bnb },
      { symbol: "ETH", name: "Ethereum", img: eth },
      { symbol: "BNB", name: "Binance Coin", img: bnb },
      { symbol: "SOL", name: "Solana", img: eth },
    ],
    "Gainers 24h": [
      {
        symbol: "AVAX",
        name: "Avalanche",
        img: bnb,
      },
      {
        symbol: "MATIC",
        name: "Polygon",
        img: eth,
      },
    ],
    "Losers 24h": [
      {
        symbol: "DOGE",
        name: "Dogecoin",
        img: bnb,
      },
      {
        symbol: "SHIB",
        name: "Shiba Inu",
        img: bnb,
      },
    ],
    Stablecoins: [
      {
        symbol: "USDT",
        name: "Tether",
        img: eth,
      },
      {
        symbol: "USDC",
        name: "USD Coin",
        img: bnb,
      },
      {
        symbol: "DAI",
        name: "Dai",
        img: eth,
      },
    ],
    Memcoins: [
      {
        symbol: "PEPE",
        name: "Pepe",
        img: bnb,
      },
      {
        symbol: "FLOKI",
        name: "Floki Inu",
        img: eth,
      },
    ],
    "Layer 2": [
      {
        symbol: "OP",
        name: "Optimism",
        img: bnb,
      },
      {
        symbol: "ARB",
        name: "Arbitrum",
        img: eth,
      },
    ],
    Other: [
      {
        symbol: "XMR",
        name: "Monero",
        img: bnb,
      },
      {
        symbol: "ADA",
        name: "Cardano",
        img: eth,
      },
    ],
  };

  const filteredCategories = {};

  Object.keys(currencyCategories).forEach((category) => {
    const filteredCurrencies = currencyCategories[category].filter(
      (currency) =>
        currency.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
        currency.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredCurrencies.length > 0) {
      filteredCategories[category] = filteredCurrencies;
    }
  });

  const scrollToCategory = (category, isLeftDropdown) => {
    setActiveCategory(category);
    const currencyListRef = isLeftDropdown
      ? leftCurrencyListRef
      : rightCurrencyListRef;

    if (currencyListRef.current) {
      const categoryElement = currencyListRef.current.querySelector(
        `[data-category="${category}"]`
      );
      if (categoryElement) {
        categoryElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="zone">
      <div className="zone1">
        Home <FiChevronsRight size={12} /> <span>Exchange Bitcoin</span>
      </div>

      <h2>Exchange BTC to XMR with the Lowest Fees</h2>
      <h3>
        Find the best offer for <span>Bitcoin</span> to <span>Monero</span> from
        18 exchanges on 11-09-2025
      </h3>

      <div className="zone2">
        <div className="zone3">
          {/* LEFT BOX */}
          <div className="zone4">
            <h4>You Send</h4>
            <div className="zone4Input" ref={leftDropdownRef}>
              <input
                type="text"
                value={left.value}
                onChange={(e) => setLeft({ ...left, value: e.target.value })}
                placeholder="0.00"
              />
              <div
                className="zonedrop"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLeftDropdownOpen(!isLeftDropdownOpen);
                  setIsRightDropdownOpen(false);
                  setSearchTerm("");
                  setActiveCategory("Popular");
                }}
              >
                <div className="zone-wallet-Icon">
                  <img src={left.img} alt={left.symbol} />
                </div>
                <span>{left.symbol}</span>
                {isLeftDropdownOpen ? (
                  <FaChevronUp size={10} color="#ABB5C0" />
                ) : (
                  <FaChevronDown size={10} color="#ABB5C0" />
                )}
              </div>
              {isLeftDropdownOpen && (
                <div className="currency-dropdown zone-currency-dropdown">
                  <div className="dropdown-search">
                    <div className="search-input">
                      <BiSearch size={16} color="#98A4AE" />
                      <input
                        type="text"
                        placeholder="Search a currency"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
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
                    <div className="category-tabs zone-list">
                      {Object.keys(currencyCategories).map((category, i) => (
                        <div
                          key={i}
                          className={`category-tab ${
                            activeCategory === category ? "active" : ""
                          }`}
                          onClick={() => scrollToCategory(category, true)}
                        >
                          <h3>{category}</h3>
                        </div>
                      ))}
                    </div>
                    <div
                      className="currency-list-container zone-list1"
                      ref={leftCurrencyListRef}
                    >
                      {Object.keys(filteredCategories).map((category, i) => (
                        <div
                          key={i}
                          className="currency-category"
                          data-category={category}
                        >
                          <h3 className="category-title">{category}</h3>
                          <div className="currency-items">
                            {filteredCategories[category].map((coin, index) => (
                              <div
                                className="zone-drop"
                                key={index}
                                onClick={() => {
                                  setLeft({
                                    ...left,
                                    symbol: coin.symbol,
                                    img: coin.img,
                                  });
                                  setIsLeftDropdownOpen(false);
                                  setSearchTerm("");
                                }}
                              >
                                <img src={coin.img} alt={coin.symbol} />
                                <div className="zone-code">
                                  <span>{coin.symbol}</span>
                                  <h4>{coin.name}</h4>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* SWAP BUTTON */}
          <div
            className="arrow zonearrow"
            role="button"
            tabIndex={0}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={handleSwap}
            onKeyDown={onArrowKey}
            aria-label="swap currencies"
            style={{ cursor: "pointer" }}
          >
            <div className="arrow1">
              {hovered ? (
                <FaArrowLeft size={13} color="white" />
              ) : (
                <FaArrowRight size={13} color="white" />
              )}
            </div>
          </div>

          {/* RIGHT BOX */}
          <div className="zone4">
            <h4>You Get</h4>
            <div className="zone4Input" ref={rightDropdownRef}>
              <input
                type="text"
                value={right.value}
                onChange={(e) => setRight({ ...right, value: e.target.value })}
                placeholder="0.00"
              />
              <div
                className="zonedrop"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsRightDropdownOpen(!isRightDropdownOpen);
                  setIsLeftDropdownOpen(false);
                  setSearchTerm("");
                  setActiveCategory("Popular");
                }}
              >
                <div className="zone-wallet-Icon">
                  <img src={right.img} alt={right.symbol} />
                </div>
                <span>{right.symbol}</span>
                {isRightDropdownOpen ? (
                  <FaChevronUp size={10} color="#ABB5C0" />
                ) : (
                  <FaChevronDown size={10} color="#ABB5C0" />
                )}
              </div>
              {isRightDropdownOpen && (
                <div className="currency-dropdown zone-currency-dropdown">
                  <div className="dropdown-search">
                    <div className="search-input">
                      <BiSearch size={16} color="#98A4AE" />
                      <input
                        type="text"
                        placeholder="Search a currency"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
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
                    <div className="category-tabs zone-list">
                      {Object.keys(currencyCategories).map((category, i) => (
                        <div
                          key={i}
                          className={`category-tab ${
                            activeCategory === category ? "active" : ""
                          }`}
                          onClick={() => scrollToCategory(category, false)}
                        >
                          <h3>{category}</h3>
                        </div>
                      ))}
                    </div>
                    <div
                      className="currency-list-container zone-list1"
                      ref={rightCurrencyListRef}
                    >
                      {Object.keys(filteredCategories).map((category, i) => (
                        <div
                          key={i}
                          className="currency-category"
                          data-category={category}
                        >
                          <h3 className="category-title">{category}</h3>
                          <div className="currency-items">
                            {filteredCategories[category].map((coin, index) => (
                              <div
                                className="zone-drop"
                                key={index}
                                onClick={() => {
                                  setRight({
                                    ...right,
                                    symbol: coin.symbol,
                                    img: coin.img,
                                  });
                                  setIsRightDropdownOpen(false);
                                  setSearchTerm("");
                                }}
                              >
                                <img src={coin.img} alt={coin.symbol} />
                                <div className="zone-code">
                                  <span>{coin.symbol}</span>
                                  <h4>{coin.name}</h4>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="fee1">
            <p>
              Swapzone fee: <span>0%</span>
            </p>
            <button onClick={() => navigate("/exchange/offer")}>
              Quick Exchange
            </button>
          </div>
        </div>
        <div className="zoneright">
          <ZoneRightCont />
        </div>
      </div>
    </div>
  );
}
