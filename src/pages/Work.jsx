import React from "react";
import "../css/Work.css";
import { FiChevronsRight } from "react-icons/fi";
import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";

function work() {
  return (
    <>
      <div className="work">
        <div className="work1">
          Home <FiChevronsRight size={12} /> <span>How it works</span>
        </div>
        <h2>How it works</h2>
        <h3>There are 4 simple steps</h3>
        <div className="work2">
          <div className="work3">
            <h4>1 Step</h4>
            <h1>Enter exchange details</h1>
            <p>
              For example, let's swap Bitcoin to Ethereum. In the "You Send"
              field, choose "BTC" from the drop-down menu and type the amount of
              coins you would like to exchange. Then, in the "You Get" field,
              select "ETH". After that, the "You Get" field will automatically
              calculate the amount you will receive. Then click the "Exchange"
              button.
            </p>
          </div>
          <div className="work4">
            <img src={step1} alt="" />
          </div>
        </div>
        <div className="work2">
          <div className="work3">
            <h4>2 Step</h4>
            <h1>Deposit</h1>
            <p>
              Exolix will generate the Bitcoin deposit address for you. Send the
              necessary amount of the cryptocurrency to it and after we receive
              your coins, the exchange process will begin
            </p>
          </div>
          <div className="work4 work5">
            <img src={step2} alt="" />
          </div>
        </div>
        <div className="work2">
          <div className="work3">
            <h4>3 Step</h4>
            <h1>Exchanging</h1>
            <p>
              Let Exolix do all work to find the best rates on the market and
              process the exchange as fast as possible. Your ETH will be sent to
              you just in a few minutes
            </p>
          </div>
          <div className="work4 work5">
            <img src={step3} alt="" />
          </div>
        </div>
        <div className="work2">
          <div className="work3">
            <h4>4 Step</h4>
            <h1>Complete</h1>
            <p>
              After the exchange finished you will see all transaction details.
              And that’s it!
            </p>
          </div>
          <div className="work4 work5">
            <img src={step4} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default work;
