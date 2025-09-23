import React from "react";
import { FiChevronsRight } from "react-icons/fi";
import "../css/transaction.css";
import { IoChevronDown, IoCopy } from "react-icons/io5";
import QR from "../assets/QR.png";
import changenow from "../assets/changenow.svg";
import eth from "../assets/eth.webp";
import bnb from "../assets/bnb.webp";

function Transaction() {
  const orderId = "68cd56b01050383ccd4c7513";
  const orderId1 = "3C3iQnkv5SSpb4QBaXQJKZn5nqSQU5t3Wm";

  const handleCopy = () => {
    navigator.clipboard.writeText(orderId);
  };
  const handleCopy1 = () => {
    navigator.clipboard.writeText(orderId1);
  };

  return (
    <>
      <div className="transaction">
        <div className="transaction1">
          Home <FiChevronsRight size={12} /> <span>Status</span>
        </div>
        <div className="transaction2">
          <div className="transleft">
            <div className="transaction3">
              <div className="transactionTop">
                <h3>Send deposit</h3>
                <span>Time left</span>
                <span className="time">Time is out</span>
              </div>
              <div className="transactionbody">
                <div className="transactionbody1">
                  <h3>Amount</h3>
                  <div className="transnum">
                    <span>0.05 BTC</span>
                    <h4 className="transcode">BTC</h4>
                    <IoCopy color="#66F0BF" />
                  </div>
                  <h3>To this address</h3>
                  <div className="transnum">
                    <span>{orderId1}</span>
                    <IoCopy color="#66F0BF" onClick={handleCopy1} />
                  </div>
                </div>
                <div className="transactionbody2">
                  <img src={QR} alt="" />
                </div>
              </div>
            </div>
            <div className="transaction3">
              <div className="transactionTop transactionTop1 ">
                <h3>Waiting for deposit</h3>
                <div className="transorder">
                  <span>ORDER ID</span>
                  <span className="transordernum">{orderId}</span>
                  <IoCopy
                    color="#66F0BF"
                    className="cursor-pointer"
                    onClick={handleCopy}
                  />
                </div>
              </div>
              <p className="trannsP">
                Your deposit address is ready. Please send the exact amount to
                the provided address or scan the QR code.
              </p>
              <p className="trannsP">
                Your deposit address is ready. Please send the exact amount to
                the provided address or scan the QR codeMake sure to use the
                correct network and include the memo or destination tag if
                required for your transaction to process smoothly..
              </p>
              <div className="transList">
                <div className="transwait">WAITING FOR DEPOIST</div>
                <div className="transline"></div>
                <div className="transwait transconfirm">CONFIRMING</div>
                <div className="transline"></div>
                <div className="transwait transconfirm">EXCHANGE</div>
                <div className="transline"></div>
                <div className="transwait transconfirm">SENDING</div>
                <div className="transline"></div>
                <div className="transwait transconfirm">FINISHED</div>
              </div>
            </div>
          </div>
          <div className="transright">
            <div className="transaction4 offer6">
              <h2>
                Exchange via <img src={changenow} alt="" /> ChangeNOW
              </h2>
              <div className="offer7">
                <div className="offerrate">
                  <img src={eth} alt="" />
                  <IoChevronDown size={10} color="#616B73" />
                  <img src={bnb} alt="" />
                </div>
                <div className="offer8">
                  <div className="offercont">
                    <h4>
                      0.05 BTC <span>BTC</span>
                    </h4>
                  </div>
                  <h3>Fixed rate</h3>
                  <div className="offercont">
                    <h4>
                      ~20.64462504 XMR <span className="offercolor">XMR</span>
                    </h4>
                    <h3>~$5,661.25</h3>
                  </div>
                </div>
              </div>
              <div className="transaddress">
                <h4>Address to receive eth</h4>
                <p>0x635bf4bd6aa836f9e8c6a742125dab33 b42573dc</p>
              </div>
            </div>
            <div className="transaction4 offer6 transleave">
              <h3>LEAVE YOUR E-MAIL</h3>
              <p className="trannsP">
                We will contact you if we need your involvement to proceed with
                the transaction.
              </p>
              <input type="text" placeholder="Email Address" name="" id="" />
              <button>SEND</button>
              <div className="transOr">
                <div className="transOr1"></div>
                <h3>OR</h3>
                <div className="transOr1"></div>
              </div>
              <h3>ASK A QUESTION TO OUR SUPPORT TEAM</h3>
              <h4>support@swapzone.io</h4>
            </div>
          </div>
        </div>
        <p className="trannsp bottomP">
          Please be aware that some of the listed services may perform AML/KYC
          procedures to prevent criminal activity. Remember that it is the
          user’s responsibility to conduct due diligence prior to proceeding
          with an exchange deal. Swapzone cannot be held liable for any crypto
          exchange losses, delays, computer malfunctions, or any other damages
          associated with any action taken, regardless of the user’s
          interpretation of the information provided on cryptocurrency exchange
          services or crypto exchange offers.
        </p>
      </div>
    </>
  );
}

export default Transaction;
