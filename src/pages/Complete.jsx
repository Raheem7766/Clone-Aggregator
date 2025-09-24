import React, { useEffect, useState } from "react";
import { FiChevronsRight } from "react-icons/fi";
import "../css/complete.css";
import { FaChevronLeft, FaChevronRight, FaUnlockAlt } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useParams } from "react-router-dom";
import { IoCopy, IoEye, IoEyeOff } from "react-icons/io5";
import eth from "../assets/eth.webp";
import bnb from "../assets/bnb.webp";

export default function Complete() {
  const { id } = useParams();

  const handleCopy = () => {
    if (id) navigator.clipboard.writeText(id);
  };

  const [showInputHash, setShowInputHash] = useState(false);
  const [showOutputHash, setShowOutputHash] = useState(false);

  const hashValue1 =
    "33db241102b166ef3562e7f57502f5b374162dd2e5e728708e2d1b1d49d0fd8c";
  const hashValue2 =
    "33db241102b166ef3562e7f57502f5b374162dd2e5e728708e2d1b1d49d0fd8c";

  const [chunkSize, setChunkSize] = useState(28);

  useEffect(() => {
  const updateSize = () => {
    if (window.innerWidth <= 320) {
      setChunkSize(23); // very small screens (mobile portrait)
    } else if (window.innerWidth < 480) {
      setChunkSize(30); // small mobile
    } else if (window.innerWidth < 770) {
      setChunkSize(36); // tablet
    } else if (window.innerWidth < 1200) {
      setChunkSize(55); // laptop
    } else {
      setChunkSize(28); // large screens
    }
  };

    updateSize(); 
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const formatHash = (hash, showFull) => {
    if (showFull) {
      return hash.match(new RegExp(`.{1,${chunkSize}}`, "g")).join("\n");
    }
    return `${hash.substring(0, chunkSize)}...`;
  };

  return (
    <div className="complete">
      <div className="complete1">
        Home <FiChevronsRight size={12} /> <span>Complete</span>
      </div>

      <div className={`complete2 ${showInputHash ? "completeH" : ""}`}>
        <div className="complete3">
          <div>
            <FaChevronLeft size={14} color="#65F0BF" />
            <span>Back</span>
          </div>
          <div className="five">5 OF 5</div>
          <span className="comp">Completed</span>
        </div>

        <div className="complete4">
          <IoIosCheckmarkCircleOutline size={34} color="#65F0BF" />
          <h3>Your transaction is complete!</h3>
        </div>

        <p className="completeP">
          Please, check your funds in your wallet. The exchange process is
          completed.
        </p>

        <div className="completeRateId">
          <div className="completeRate">
            <div className="completeRate1">
              <FaUnlockAlt size={16} color="#ABB6C1" />
              <h3>Floating Rate:</h3>
            </div>
            <h4>1 BTC ≈ 375.81522 XMR</h4>
          </div>
          <div className="completeRate">
            <h3>Transaction ID:</h3>
            <div className="completeRate1">
              <h4 style={{ color: "#65F0BF" }}>{id}</h4>
              <IoCopy
                size={16}
                color="#ABB6C1"
                onClick={handleCopy}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>

        <div className="completeInfo">
          <h2>Transaction info</h2>

          <div className="completeInfo1">
            <div className="completeInfoleft">
              <div className="completeIcon">
                <img src={bnb} alt="" />
              </div>
              <div
                className={`completeLine ${
                  showInputHash ? "completeLineEx" : " "
                }`}
              ></div>
              <div className="completeIcon">
                <img src={eth} alt="" />
              </div>
            </div>

            <div className="completeInforight">
              {/* First hash (BTC input) */}
              <div className="completeSend">
                {/* <div className="completeIcon">
              <img src={bnb} alt="" />
            </div> */}
                <div className="completeSend1">
                  <h3>You send</h3>
                  <h4>0.00044412 BTC</h4>
                </div>
                <div className="hashP">
                  <div className="completeSend1 hash">
                    <h3>Input hash</h3>
                    <div className="hashNum">
                      <h4
                        className={
                          showInputHash ? "hash-multiline" : "hash-singleline"
                        }
                      >
                        {formatHash(hashValue1, showInputHash)}
                      </h4>
                      <div className="hashIcon">
                        <IoEye
                          size={16}
                          onClick={() => setShowInputHash(!showInputHash)}
                          style={{ cursor: "pointer", color: "#ABB6C1" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="completeSend1 hash1">
                    <h3>Deposit BTC address</h3>
                    <h4>bc1qcyf7rm4vqm53qst8aqavwyjqy8e4tka2s3dh50</h4>
                  </div>
                </div>
              </div>

              {/* <div className="completeLine" 
          style={{ height: showInputHash ? "80px" : "36px" }}
          ></div> */}
              {/* Second hash (XMR output) */}
              <div className="completeSend completeget">
                {/* <div className="completeIcon">
              <img src={eth} alt="" />
            </div> */}
                <div className="completeSend1">
                  <h3>You get</h3>
                  <h4>0.16690706 XMR</h4>
                </div>
                <div className="hashP hashPP">
                  <div className="completeSend1 hash">
                    <h3>Input hash</h3>
                    <div className="hashNum">
                      <h4
                        className={
                          showOutputHash ? "hash-multiline" : "hash-singleline"
                        }
                      >
                        {formatHash(hashValue2, showOutputHash)}
                      </h4>
                      <div className="hashIcon">
                        <IoEye
                          size={16}
                          onClick={() => setShowOutputHash(!showOutputHash)}
                          style={{ cursor: "pointer", color: "#ABB6C1" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="completeSend1 hash1">
                    <h3>Recipient XMR address</h3>
                    <h4>bc1qcyf7rm4vqm53qst8aqavwyjqy8e4tka2s3dh50</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="completeTrans">
            <h2>Transaction details</h2>
            <FaChevronRight color="#96A1AA" size={14} />
          </div>
          <div className="completeBtn">
            <button>New Exchange</button>
          </div>
        </div>
      </div>
    </div>
  );
}
