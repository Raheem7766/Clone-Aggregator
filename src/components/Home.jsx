import React from "react";
import Navbar from "./Navbar";
import ExchangeIcon from "./ExchangeIcon";
import SwapTracker from "./SwapTracker";
import "../css/home.css";
import ExchangeBox from "./ExchangeBox";
import Terms from "./Terms";
import Footer from "./Footer";
function Home() {
  return (
    <div>
      <SwapTracker />
      <div className="home">
        <div className="hometext">
          <h2>
            Exchange
            <span> 2164+ </span>
            crypto instantly, with the best rate and without registration
          </h2>
        </div>

        <ExchangeBox />
        <Terms />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
