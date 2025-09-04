import React, { useEffect, useState } from "react";
import "../../css/ExchnageBox.css";
import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";
import rubic from "../../assets/rubic.webp";
import eth from "../../assets/eth.webp";
import weth from "../../assets/weth.webp";
import usdc from "../../assets/usdc.webp";
import wepe from "../../assets/wepe.webp";
import bnb from "../../assets/bnb.webp";
import steth from "../../assets/steth.webp";
import wsteth from "../../assets/wsteth.webp";
import link from "../../assets/link.webp";
import wbeth from "../../assets/wbeth.webp";
import wbtc from "../../assets/wbtc.webp";
import { MdRefresh } from "react-icons/md";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

function DexTab() {
  const [loading, setLoading] = useState(true);
  const [leftPay, setLeftPay] = useState(0.1);
  const [rightPay, setRightPay] = useState(0.0);

  const [countdown, setCountdown] = useState(9);

  const [leftDropdownOpen, setLeftDropdownOpen] = useState(false);
  const [leftSearch, setLeftSearch] = useState("");
  const [leftFocused, setLeftFocused] = useState(false);
  const [leftCurrency, setLeftCurrency] = useState({
    code: "BTC",
    name: "Btc",
    img: bnb,
  });

  const [rightDropdownOpen, setRightDropdownOpen] = useState(false);
  const [rightSearch, setRightSearch] = useState("");
  const [rightFocused, setRightFocused] = useState(false);
  const [rightCurrency, setRightCurrency] = useState({
    code: "RBC",
    name: "Rubic",
    img: rubic,
  });
  const [hovered, setHovered] = useState(false);
  const [isSwapped, setIsSwapped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const cryptocurrencies = [
    { code: "ETH", name: "Ethereum", img: eth },
    { code: "RBC", name: "Rubic", img: rubic },
    { code: "WETH", name: "Wrapped Ether", img: weth },
    { code: "USDC", name: "USD Coin", img: usdc },
    { code: "WEPE", name: "Wall Street Pepe", img: wepe },
    { code: "BNB", name: "BNB", img: bnb },
    { code: "BTC", name: "Btc", img: steth },
    { code: "USDT", name: "Tether", img: wsteth },
    { code: "SOL", name: "Solana", img: link },
    { code: "ADA", name: "Cardano", img: wbeth },
    { code: "WTC", name: "Wbtc", img: wbtc },
  ];

  const filteredLeft = cryptocurrencies.filter(
    (c) =>
      c.name.toLowerCase().includes(leftSearch.toLowerCase()) ||
      c.code.toLowerCase().includes(leftSearch.toLowerCase())
  );

  const filteredRight = cryptocurrencies.filter(
    (c) =>
      c.name.toLowerCase().includes(rightSearch.toLowerCase()) ||
      c.code.toLowerCase().includes(rightSearch.toLowerCase())
  );

  const handleSwap = () => {
    const lc = leftCurrency;
    const rc = rightCurrency;
    const lp = leftPay;
    const rp = rightPay;

    setLeftCurrency(rc);
    setRightCurrency(lc);

    setLeftPay(rp);
    setRightPay(lp);

    setIsSwapped((s) => !s);
  };

  return (
    <div className="dexswap">
      {/* LEFT SIDE */}
      <div className="dexleft">
        <div className="wallet-head">
          <div className="wallet-head-count">
            <div className="wallet-count">1 OF 3</div>
            <h3>Start exchange</h3>
          </div>
          <div className="wallet-head-auto mblauto">
            <span>Auto refreshes in {countdown} sec</span>
            <div className="refresh">
              <MdRefresh size={22} color="#FFFFFF" className="refresh-icon" />
            </div>
          </div>
        </div>

        <div
          className={`dex-send ${leftDropdownOpen ? "dex-send-border" : ""}`}
        >
          <label
            className={`dex-label ${leftDropdownOpen ? "dex-label-top" : ""}`}
          >
            You send
          </label>

          <div className="pay-balance">
            <h4 className="payCount">
              {loading ? (
                <div className="dexSkeleton"></div>
              ) : (
                <input type="text" value={leftPay} />
              )}
            </h4>
          </div>

          <div
            className="dexdrop"
            onClick={() => setLeftDropdownOpen(!leftDropdownOpen)}
          >
            <div className="imgdiv">
              {leftCurrency.img && (
                <img src={leftCurrency.img} alt={leftCurrency.code} />
              )}
            </div>
            <div className="dexcode">
              <h3>{leftCurrency.code}</h3>
              <h4>{leftCurrency.name}</h4>
            </div>
            <FaChevronDown size={10} color="#ABB5C0" className="dexchev" />
          </div>

          {leftDropdownOpen && (
            <div
              className={`dex-dropdown ${leftFocused ? "dex-send-active" : ""}`}
            >
              <div className="search-input">
                <BiSearch size={20} color="#98A4AE" />
                <input
                  type="text"
                  placeholder="Search"
                  value={leftSearch}
                  onFocus={() => setLeftFocused(true)}
                  onBlur={() => setLeftFocused(false)}
                  onChange={(e) => setLeftSearch(e.target.value)}
                />
                <FaChevronUp
                  size={10}
                  color="#ABB5C0"
                  onClick={() => setLeftDropdownOpen(false)}
                />
              </div>

              <div className="dropdown-list">
                {filteredLeft.map((crypto) => (
                  <div
                    key={crypto.code}
                    className="currency-option"
                    onClick={() => {
                      setLeftCurrency(crypto);
                      setLeftDropdownOpen(false);
                      setLeftSearch("");
                    }}
                  >
                    <div className="wallet-Icon">
                      <img src={crypto.img} alt={crypto.code} />
                    </div>
                    <div className="currency-info">
                      <span className="currency-code">{crypto.code}</span>
                      <span className="currency-name">{crypto.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="dexamount">
          <span>
            Min: <strong>0.001 BTC</strong>
          </span>
          <span>
            Max: <strong>5.079 BTC</strong>
          </span>
        </div>
        <p className="fee">No extra fees</p>
      </div>

      <div
        className="arrow dexarrow"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleSwap}
      >
        {isSwapped ? (
          <>
            <FaLongArrowAltLeft size={17} className="arrowleft1" />
            <FaLongArrowAltRight size={17} className="arrowright1" />
          </>
        ) : (
          <>
            <FaLongArrowAltRight size={17} className="arrowright" />
            <FaLongArrowAltLeft size={17} className="arrowleft" />
          </>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="dexleft dexright">
        <div className="wallet-head-auto">
          Auto refreshes in {countdown} sec
          <div className="refresh">
            <MdRefresh size={22} color="#FFFFFF" className="refresh-icon" />
          </div>
        </div>

        <div
          className={`dex-send ${rightDropdownOpen ? "dex-send-border" : ""}`}
        >
          <label
            className={`dex-label ${rightDropdownOpen ? "dex-label-top" : ""}`}
          >
            You get
          </label>

          <div className="pay-balance">
            <h4 className="payCount">
              {loading ? (
                <div className="dexSkeleton"></div>
              ) : (
                <input type="text" value={rightPay} readOnly />
              )}
            </h4>
          </div>

          <div
            className="dexdrop getdrop"
            onClick={() => setRightDropdownOpen(!rightDropdownOpen)}
          >
            <div className="imgdiv">
              {rightCurrency.img && (
                <img src={rightCurrency.img} alt={rightCurrency.code} />
              )}
            </div>
            <div className="dexcode">
              <h3>{rightCurrency.code}</h3>
              <h4>{rightCurrency.name}</h4>
            </div>
            <FaChevronDown size={10} color="#ABB5C0" className="dexchev" />
          </div>

          {rightDropdownOpen && (
            <div
              className={`dex-dropdown ${
                rightFocused ? "dex-send-active" : ""
              }`}
            >
              <div className="search-input">
                <BiSearch size={20} color="#98A4AE" />
                <input
                  type="text"
                  placeholder="Search"
                  value={rightSearch}
                  onFocus={() => setRightFocused(true)}
                  onBlur={() => setRightFocused(false)}
                  onChange={(e) => setRightSearch(e.target.value)}
                />
                <FaChevronUp
                  size={10}
                  color="#ABB5C0"
                  onClick={() => setRightDropdownOpen(false)}
                />
              </div>

              <div className="dropdown-list">
                {filteredRight.map((crypto) => (
                  <div
                    key={crypto.code}
                    className="currency-option"
                    onClick={() => {
                      setRightCurrency(crypto);
                      setRightDropdownOpen(false);
                      setRightSearch("");
                    }}
                  >
                    <div className="wallet-Icon">
                      <img src={crypto.img} alt={crypto.code} />
                    </div>
                    <div className="currency-info">
                      <span className="currency-code">{crypto.code}</span>
                      <span className="currency-name">{crypto.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="dexamount dexamountright">1 BTC ≈ 395.25863017 XMR</div>

        <div className="btns dexbtn ">
          <button className="btn2">Exchange Now</button>
        </div>
      </div>

      <div className="mblamount">
        <div className="dexamount mbldex">
          <span>
            Min: <strong>0.001 BTC</strong>
          </span>
          <span>
            Max: <strong>5.079 BTC</strong>
          </span>
        </div>
        <div className="dexamount dexamountright mbldex">
          1 BTC ≈ 395.25863017 XMR
        </div>
      </div>
      <p className="fee mblfee">No extra fees</p>
    </div>
  );
}

export default DexTab;
