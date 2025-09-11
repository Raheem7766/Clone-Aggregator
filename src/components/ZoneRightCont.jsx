import { useState } from "react";
import { FaChevronDown, FaLock } from "react-icons/fa";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import changenow from "../assets/changenow.svg";
import "../css/SwapZone.css";
import { GrRefresh } from "react-icons/gr";

const providers = [
  {
    id: 1,
    logo: changenow,
    name: "ChangeNOW",
    rating: "4.8/5 121 reviews",
    time: "26 min",
    kyc: "Rare",
    ofc: "0/4",
    coinValue: "20.61109806",
    coinSymbol: "XMR",
    usdValue: "~$5,613.38",
    type: "floating",
  },
  {
    id: 2,
    logo: changenow,
    name: "FixedFloat",
    rating: "4.6/5 144 reviews",
    time: "15 min",
    kyc: "Often",
    ofc: "1/4",
    coinValue: "10.50000000",
    coinSymbol: "BTC",
    usdValue: "~$25,123.45",
    type: "fixed",
  },
  {
    id: 3,
    logo: changenow,
    name: "SimpleSwap",
    rating: "4.7/5 98 reviews",
    time: "30 min",
    kyc: "Sometimes",
    ofc: "2/4",
    coinValue: "5.23450000",
    coinSymbol: "ETH",
    usdValue: "~$16,223.10",
    type: "floating",
  },
  {
    id: 4,
    logo: changenow,
    name: "Godex",
    rating: "4.9/5 201 reviews",
    time: "20 min",
    kyc: "Rare",
    ofc: "0/4",
    coinValue: "50.00000000",
    coinSymbol: "LTC",
    usdValue: "~$3,512.77",
    type: "fixed",
  },
  {
    id: 5,
    logo: changenow,
    name: "LetsExchange",
    rating: "4.5/5 75 reviews",
    time: "40 min",
    kyc: "Often",
    ofc: "3/4",
    coinValue: "100.25000000",
    coinSymbol: "DOGE",
    usdValue: "~$12,876.22",
    type: "floating",
  },
  {
    id: 6,
    logo: changenow,
    name: "Exolix",
    rating: "4.4/5 65 reviews",
    time: "12 min",
    kyc: "Optional",
    ofc: "1/4",
    coinValue: "1.00500000",
    coinSymbol: "BNB",
    usdValue: "~$505.77",
    type: "fixed",
  },
];

export default function ZoneRightCont() {
  const [visibleCount, setVisibleCount] = useState(4);
  const [activeTab, setActiveTab] = useState("all");

  const handleShowMore = () => {
    setVisibleCount(providers.length);
  };

  const filteredProviders =
    activeTab === "all"
      ? providers
      : providers.filter((p) => p.type === activeTab);

  return (
    <div>
      <div className="zoneright1">
        <div className="zonerightt">
          <div className="zone-best">
            BEST MATCH <FaChevronDown size={10} />{" "}
          </div>
          <div className="zone-tab">
            <div
              className={`zone-best ${activeTab === "all" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("all");
                setVisibleCount(4);
              }}
            >
              ALL RATES
            </div>
            <div
              className={`zone-best ${activeTab === "fixed" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("fixed");
                setVisibleCount(4);
              }}
            >
              <FaLock /> FIXED
            </div>
            <div
              className={`zone-best ${activeTab === "floating" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("floating");
                setVisibleCount(4);
              }}
            >
              ~ FLOATING
            </div>
          </div>
        </div>
        <div className="ref">
          <GrRefresh size={20} />
          REFRESH SEARCH
        </div>
      </div>

      {filteredProviders.slice(0, visibleCount).map((item) => (
        <div className="rightcont" key={item.id}>
          {/* top section */}
          <div className="rightcont1">
            <div className="rightconthead">
              <img src={item.logo} alt={item.name} />
              <h2>{item.name}</h2>
              <h5>{item.rating}</h5>
            </div>
            <div className="rightconthead1">
              <h1>
                Time: <span>{item.time}</span>
              </h1>
              <h1>
                KYC: <span className="rare">{item.kyc}</span>
              </h1>
              <h1>
                OFC:{" "}
                <span className="rare">
                  {item.ofc}{" "}
                  <HiOutlineExclamationCircle color="#A3A9B0" size={20} />
                </span>
              </h1>
            </div>
          </div>

          {/* bottom section */}
          <div className="rightcont2">
            <div className="rightnum">
              <FaLock color="white" />
              <p>
                {item.coinValue} <span>{item.coinSymbol}</span>
              </p>
            </div>
            <h4>{item.usdValue}</h4>
            <button>EXCHANGE</button>
          </div>
        </div>
      ))}

      {/* Show More Offers Button */}
      {visibleCount < filteredProviders.length && (
        <div className="show-more-btn">
          <button onClick={handleShowMore}>Show More Offers</button>
        </div>
      )}
    </div>
  );
}
