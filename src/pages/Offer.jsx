import React, { useState } from "react";
import { FiChevronsRight } from "react-icons/fi";
import {
  FaArrowLeft,
  FaChevronDown,
  FaChevronRight,
  FaChevronUp,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  GoChevronDown,
  GoChevronLeft,
  GoChevronRight,
  GoChevronUp,
} from "react-icons/go";
import "../css/offer.css";
import changenow from "../assets/changenow.svg";
import eth from "../assets/eth.webp";
import bnb from "../assets/bnb.webp";
import { IoChevronDown } from "react-icons/io5";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { LuDot } from "react-icons/lu";
import reviewImg from "../assets/reviewImg.svg";
import ArrowImg from "../assets/ArrowImg.svg";
import ArrowImg1 from "../assets/ArrowImg1.svg";
import Daimond from "../assets/Daimond.svg";
import why1 from "../assets/why1.svg";
import why2 from "../assets/why2.svg";
import why3 from "../assets/why3.svg";
import why4 from "../assets/why4.svg";
import reviewstar from "../assets/reviewstar.svg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const reviewstrust = [
  {
    name: "Beun Beunson",
    date: "Nov 18, 2023",
    title: "Help Desk Is Very Good",
    text: "I have found the help desk to be very courteous and helpful. Highly recommended!",
  },
  {
    name: "John Rios",
    date: "Nov 14, 2023",
    title: "Safe",
    text: "I was skeptical the first but seeing how professional website looked was I decided to give it a chance. Definitely would use again.",
  },
  {
    name: "Alice Martin",
    date: "Nov 10, 2023",
    title: "Great Experience",
    text: "Fast and reliable service, super happy with my experience!",
  },
  {
    name: "David Lee",
    date: "Nov 8, 2023",
    title: "Very Professional",
    text: "Customer support was quick and knowledgeable.",
  },
  {
    name: "Sophia Chen",
    date: "Nov 6, 2023",
    title: "Excellent Platform",
    text: "Super easy to use and transparent. I trust it.",
  },
  {
    name: "Michael Scott",
    date: "Nov 4, 2023",
    title: "Loved It",
    text: "Process was smooth and quick. Will recommend to friends.",
  },
  {
    name: "Emma Brown",
    date: "Nov 2, 2023",
    title: "Secure & Fast",
    text: "Felt safe and everything worked seamlessly.",
  },
  {
    name: "Oliver White",
    date: "Oct 30, 2023",
    title: "Top Service",
    text: "High quality and very reliable.",
  },
  {
    name: "Liam Johnson",
    date: "Oct 28, 2023",
    title: "Amazing!",
    text: "Best service I've used in a while.",
  },
  {
    name: "Mia Wilson",
    date: "Oct 26, 2023",
    title: "Perfect",
    text: "Absolutely satisfied with the service. Keep it up!",
  },
];

const faqData = [
  {
    question: "Instant Crypto Exchange Aggregator",
    answer: `Swapzone is a non-custodial instant crypto exchange aggregator that helps users scan 
    the network of registered exchanges globally and gives them a comprehensive list of those 
    that support a particular trading or swap pair.

    Our platform ensures crypto trading stays uninterrupted and gives users more flexibility and choice. 
    With 18+ registered crypto exchanges and 1000+ supported cryptocurrencies, Swapzone users can make 
    more informed buying decisions using a string of parameters, such as price, ratings, transaction speed, and more.

    It's fair to say that Swapzone instant crypto exchange aggregator brings the best crypto trading 
    deals in one place, allowing you to make the most of your swaps and conversions.`,
  },
  {
    question: "Swapzone's Crypto API",
    answer:
      "Swapzone provides a developer-friendly crypto API for seamless integration into apps.",
  },
  {
    question: "How Swapzone Works",
    answer:
      "We connect with multiple exchanges and aggregate their rates to give you the best deal.",
  },
  {
    question: "How We Compare Rates",
    answer:
      "We fetch data from 18+ exchanges and show you the best available price in real-time.",
  },
  {
    question: "How To Swap Cryptocurrency",
    answer:
      "Simply choose the currency pair, enter the amount, and follow the steps to complete your swap.",
  },
];

function Offer() {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [XRPId, setXRPId] = useState("");
  const [refundXRPId, setrefundXRPId] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [refundAddress, setRefundAddress] = useState("");
  const [email, setEmail] = useState("");
  const [promocode, setPromocode] = useState("");
  const [showExtraFields, setShowExtraFields] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);

  const handlePaste = async (setter) => {
    try {
      const text = await navigator.clipboard.readText();
      setter(text);
    } catch (err) {
      console.error("Clipboard read failed: ", err);
    }
  };

  const toggleExtraFields = () => {
    setShowExtraFields(!showExtraFields);
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const accordionData = [
    {
      title: "Transaction Processing",
      content: (
        <>
          <p>ChangeNOW does NOT support smart contract transactions.</p>
          <p>
            Please send your deposit as a standard transfer to ensure smooth
            processing. Deposits sent via smart contracts may be delayed or
            incur additional processing fees.
          </p>
          <p>For questions, contact our support team:</p>
          <p>Email: support@swapzone.io</p>
          <p>Telegram: @swapzoneio</p>
        </>
      ),
    },
    {
      title: "Financial Claims",
      content: (
        <>
          <div className="claim">
            <div className="claim1">RESOLVED</div>
            <div className="claim2">
              <p>Technical or communication error on the provider's side</p>
              <div className="claimnum">
                <div className="claimnum1">
                  <h3>
                    Deposit: <span>$0-100</span>
                  </h3>
                  <h3>
                    Took: <span>264 days</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="claim">
            <div className="claim1">RESOLVED</div>
            <div className="claim2">
              <p>Technical or communication error on the provider's side</p>
              <div className="claimnum">
                <div className="claimnum1">
                  <h3>
                    Deposit: <span>$0-100</span>
                  </h3>
                  <h3>
                    Took: <span>264 days</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="claim">
            <div className="claim1">RESOLVED</div>
            <div className="claim2">
              <p>Technical or communication error on the provider's side</p>
              <div className="claimnum">
                <div className="claimnum1">
                  <h3>
                    Deposit: <span>$0-100</span>
                  </h3>
                  <h3>
                    Took: <span>617 days</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="claim">
            <div className="claim1">RESOLVED</div>
            <div className="claim2">
              <p>Long-term retention of funds for KYC</p>
              <div className="claimnum">
                <div className="claimnum1">
                  <h3>
                    Deposit: <span>$1,000-10,000 </span>
                  </h3>
                  <h3>
                    Took: <span>617 days</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Refund Policy",
      content: (
        <>
          <div className="policy">
            <p>
              ChangeNOW applies different refund processing times depending on
              the deposit type:
            </p>
            <ul>
              <li>
                If your deposit was sent in a supported token or network, the
                refund will be processed within 24 hours.
              </li>
              <li>
                If your deposit was sent to an ETH-like address (0x) but the
                token or network is not supported by ChangeNOW's API, the refund
                will typically be completed within a business week.
              </li>
              <li>
                If your deposit was sent to a non-ETH-like network that
                ChangeNOW does not support for this asset, it will be reviewed
                on a case-by-case basis.
              </li>
            </ul>
            <p>
              ChangeNOW does not impose any additional charges for refunds,
              except for standard network fees. In cases of user errors like
              sending a deposit without a memo or sending coins to an
              incompatible network, an additional comission of up to 50 USD may
              be applied.
            </p>
            <p>
              If you have any questions regarding your refund, feel free to
              reach out to our support team.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "KYC/AML",
      content: (
        <p className="aml">
          Transactions are checked automatically following the confidential
          criteria formulated by the service. Each KYC case is individually
          followed by ChangeNOW representatives. Users might need ID
          confirmation, a selfie, and an outgoing transaction from the address
          used in the exchange to prove the ownership. ChangeNOW has the right
          to share acquired data with the authorities for investigative
          purposes. The KYC procedure is considered failed if a user does not
          share the requested data or sends false information. In the case of
          KYC check failure, the exchange sum is sent back to the user within 24
          hours. The addresses featured in failed KYC cases may be highlighted
          in the common blacklist available to all the exchange services.
        </p>
      ),
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "David",
      action: "Swapped sol to btc",
      date: "August 29, 2025",
      platform: "changenow",
      rating: 4.0,
      comment: "Good",
      avatar: reviewImg,
      platformImg: changenow,
    },
    {
      id: 2,
      name: "Sarah",
      action: "Swapped eth to usdt",
      date: "September 2, 2025",
      platform: "changenow",
      rating: 4.5,
      comment: "Smooth transaction!",
      avatar: reviewImg,
      platformImg: changenow,
    },
    {
      id: 3,
      name: "Mike",
      action: "Swapped btc to xmr",
      date: "September 10, 2025",
      platform: "changenow",
      rating: 5.0,
      comment: "Fast and reliable.",
      avatar: reviewImg,
      platformImg: changenow,
    },
    {
      id: 4,
      name: "Alice",
      action: "Swapped ltc to eth",
      date: "September 12, 2025",
      platform: "changenow",
      rating: 4.2,
      comment: "Quick and easy.",
      avatar: reviewImg,
      platformImg: changenow,
    },
    {
      id: 5,
      name: "John",
      action: "Swapped doge to btc",
      date: "September 13, 2025",
      platform: "changenow",
      rating: 3.8,
      comment: "Took a bit longer than expected.",
      avatar: reviewImg,
      platformImg: changenow,
    },
    {
      id: 6,
      name: "Emily",
      action: "Swapped xrp to usdt",
      date: "September 14, 2025",
      platform: "changenow",
      rating: 4.7,
      comment: "Loved the experience!",
      avatar: reviewImg,
      platformImg: changenow,
    },
    {
      id: 7,
      name: "Chris",
      action: "Swapped ada to btc",
      date: "September 15, 2025",
      platform: "changenow",
      rating: 4.3,
      comment: "Pretty good service.",
      avatar: reviewImg,
      platformImg: changenow,
    },
    {
      id: 8,
      name: "Sophia",
      action: "Swapped dot to eth",
      date: "September 16, 2025",
      platform: "changenow",
      rating: 4.9,
      comment: "Super fast swap!",
      avatar: reviewImg,
      platformImg: changenow,
    },
    {
      id: 9,
      name: "Daniel",
      action: "Swapped avax to sol",
      date: "September 17, 2025",
      platform: "changenow",
      rating: 3.5,
      comment: "Could be better.",
      avatar: reviewImg,
      platformImg: changenow,
    },
    {
      id: 10,
      name: "Olivia",
      action: "Swapped trx to btc",
      date: "September 18, 2025",
      platform: "changenow",
      rating: 5.0,
      comment: "Perfect service, highly recommend!",
      avatar: reviewImg,
      platformImg: changenow,
    },
  ];

  const handleShowMore = () => {
    setVisibleCount(reviews.length);
  };

  const [current, setCurrent] = useState(0);
  const itemsPerPage = 3;
  const maxIndex = reviewstrust.length - itemsPerPage;

  const prevSlide = () => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAsk = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="offer">
        <div className="offer1">
          Home <FiChevronsRight size={12} /> <span>Exchange Offer</span>
        </div>

        <h2>Compare and swap crypto at the best rates.</h2>
        <h3>
          Find the best offer for <span>Bitcoin</span> to <span>Monero</span>{" "}
          from 18 exchanges on 12-09-2025
        </h3>
        <div className="offer2">
          <div className="offer3">
            <FaArrowLeft
              color="#E4E4E4"
              size={25}
              cursor="pointer"
              onClick={() => navigate("/exchange/btc/xmr")}
            />
            <h3>Exchange</h3>
          </div>
          <div className="offer4">
            <div className="offer5">
              <h2>Enter transaction details</h2>

              {/* Address to receive XMR */}
              <div className="offerInput">
                <input
                  type="text"
                  id="xmrAddress"
                  placeholder=" "
                  className="inputBox"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <label htmlFor="xmrAddress">Address to receive XMR</label>
                {address === "" && (
                  <h4
                    onClick={() => handlePaste(setAddress)}
                    style={{ cursor: "pointer" }}
                  >
                    PASTE
                  </h4>
                )}
              </div>

              {/* Extra Fields Toggle */}
              <div className="offerextra" onClick={toggleExtraFields}>
                EXTRA FIELD{" "}
                {showExtraFields ? (
                  <GoChevronUp size={16} />
                ) : (
                  <GoChevronDown size={16} />
                )}
              </div>

              {/* Extra Fields (conditionally shown) */}
              {showExtraFields && (
                <div className="extraFieldsContainer">
                  {/* XRP ID */}
                  <div className="offerInput">
                    <input
                      type="text"
                      id="XRPId"
                      placeholder=" "
                      className="inputBox"
                      value={XRPId}
                      onChange={(e) => setXRPId(e.target.value)}
                    />
                    <label htmlFor="XRPId">
                      Destination Tag XRP (optional)
                    </label>
                    {XRPId === "" && (
                      <h4
                        onClick={() => handlePaste(setXRPId)}
                        style={{ cursor: "pointer" }}
                      >
                        PASTE
                      </h4>
                    )}
                  </div>

                  {/* XRP ID */}
                  <div className="offerInput">
                    <input
                      type="text"
                      id="refundXRPId"
                      placeholder=" "
                      className="inputBox"
                      value={refundXRPId}
                      onChange={(e) => setrefundXRPId(e.target.value)}
                    />
                    <label htmlFor="refundXRPId">
                      Refund Destination Tag XRP (optional)
                    </label>
                    {refundXRPId === "" && (
                      <h4
                        onClick={() => handlePaste(setrefundXRPId)}
                        style={{ cursor: "pointer" }}
                      >
                        PASTE
                      </h4>
                    )}
                  </div>

                  {/* Payment ID */}
                  <div className="offerInput">
                    <input
                      type="text"
                      id="paymentId"
                      placeholder=" "
                      className="inputBox"
                      value={paymentId}
                      onChange={(e) => setPaymentId(e.target.value)}
                    />
                    <label htmlFor="paymentId">Payment ID XMR (optional)</label>
                    {paymentId === "" && (
                      <h4
                        onClick={() => handlePaste(setPaymentId)}
                        style={{ cursor: "pointer" }}
                      >
                        PASTE
                      </h4>
                    )}
                  </div>

                  {/* Refund Address */}
                  <div className="offerInput">
                    <input
                      type="text"
                      id="refundAddress"
                      placeholder=" "
                      className="inputBox"
                      value={refundAddress}
                      onChange={(e) => setRefundAddress(e.target.value)}
                    />
                    <label htmlFor="refundAddress">
                      Address to refund BTC (optional)
                    </label>
                    {refundAddress === "" && (
                      <h4
                        onClick={() => handlePaste(setRefundAddress)}
                        style={{ cursor: "pointer" }}
                      >
                        PASTE
                      </h4>
                    )}
                  </div>

                  {/* Email */}
                  <div className="offerInput">
                    <input
                      type="email"
                      id="email"
                      placeholder=" "
                      className="inputBox"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="email">Email (optional)</label>
                    {email === "" && (
                      <h4
                        onClick={() => handlePaste(setEmail)}
                        style={{ cursor: "pointer" }}
                      >
                        PASTE
                      </h4>
                    )}
                  </div>

                  {/* Promocode */}
                  <div className="offerInput">
                    <input
                      type="text"
                      id="promocode"
                      placeholder=" "
                      className="inputBox"
                      value={promocode}
                      onChange={(e) => setPromocode(e.target.value)}
                    />
                    <label htmlFor="promocode">Promocode (optional)</label>
                    {promocode === "" && (
                      <h4
                        onClick={() => handlePaste(setPromocode)}
                        style={{ cursor: "pointer" }}
                      >
                        PASTE
                      </h4>
                    )}
                  </div>
                </div>
              )}

              {/* Terms and Conditions */}
              <div className="offerread">
                <input
                  type="checkbox"
                  id="termsCheckbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                />
                <label htmlFor="termsCheckbox">
                  I've read and agreed to the <span>Terms of service,</span>{" "}
                  <span>Privacy Policy</span> and ChangeNOW{" "}
                  <span>Terms of Use</span>
                </label>
              </div>

              {/* Proceed Button */}
              <button onClick={() => navigate("/exchange/transaction")}>
                PROCEED TO EXCHANGE
              </button>
            </div>
            <div className="offer6">
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
            </div>
          </div>
          <div className="provider">
            <div className="provider1">
              <div className="metric">
                <div className="metric1">
                  <h1>Provider Metrics</h1>
                  <div className="metric2">
                    <p>NO HIDDEN FEES</p>
                    <p>RELIABLE PARTNER SUPPORT</p>
                    <p>FAST TRANSACTION</p>
                  </div>
                </div>
                <div className="metric3">
                  <div className="metric4">
                    <div className="ratingMet">4.8</div>
                    <div className="reviews">121 REVIEWS</div>
                  </div>
                </div>
              </div>
              <div className="metriclist">
                <div className="token">
                  Tokens <span>780</span>
                </div>
                <div className="token">
                  Est: <span>2017</span>
                </div>
                <div className="token">
                  ETA: <span>26 min</span>{" "}
                  <AiOutlineExclamationCircle size={16} />
                </div>
                <div className="token">
                  KYC: <span>Rare</span>{" "}
                  <AiOutlineExclamationCircle size={16} />
                </div>
                <div className="token">
                  OFC: <span>0/4</span> <AiOutlineExclamationCircle size={16} />
                </div>
              </div>
              <div className="metricmade">
                <div className="metricmade1">
                  <div className="metricmade2">
                    <div className="speedparent">
                      <div className="speed">
                        <div className="speed1">4.8</div>
                      </div>
                      <h3>Transaction</h3>
                      <h4>
                        Speed{" "}
                        <AiOutlineExclamationCircle
                          size={10}
                          className="speedsvg"
                        />
                      </h4>
                    </div>
                    <div className="speedparent">
                      <div className="speed">
                        <div className="speed1">5.0</div>
                      </div>
                      <h3>EQUAL TO</h3>
                      <h4>
                        ESTIMATED{" "}
                        <AiOutlineExclamationCircle
                          size={10}
                          className="speedsvg"
                        />
                      </h4>
                    </div>
                    <div className="speedparent">
                      <div className="speed">
                        <div className="speed1">4.6</div>
                      </div>
                      <h3>REFUND</h3>
                      <h4>
                        POLICY{" "}
                        <AiOutlineExclamationCircle
                          size={10}
                          className="speedsvg"
                        />
                      </h4>
                    </div>
                    <div className="speedparent">
                      <div className="speed">
                        <div className="speed1">4.6</div>
                      </div>
                      <h3>PARTNER</h3>
                      <h4>
                        SUPPORT{" "}
                        <AiOutlineExclamationCircle
                          size={10}
                          className="speedsvg"
                        />
                      </h4>
                    </div>
                  </div>
                  <div className="metricmade3">
                    <div className="metricnum">
                      <div className="metriccircle"></div>
                      <div className="metricnum1">
                        <h3>2nd of 18th</h3>
                        <h2>38.38%</h2>
                        <h3 className="mbo">Exchanges</h3>
                      </div>
                    </div>
                    <div className="metricli">
                      <h3>
                        <LuDot color="#66F0BF" size={20} /> MADE BY ChangeNOW
                      </h3>
                      <h3>
                        <LuDot color="#4D5256" size={20} /> REST OF ALL
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="provider2">
              <h5>Additional info</h5>
              <div className="accordion">
                {accordionData.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <div
                      className="accordion-header"
                      onClick={() => toggleAccordion(index)}
                    >
                      <span>{item.title}</span>
                      {activeAccordion === index ? (
                        <FaChevronUp size={17} color="#66F0BF" />
                      ) : (
                        <FaChevronDown size={17} color="#66F0BF" />
                      )}
                    </div>
                    <div
                      className="accordion-content"
                      style={{
                        display: activeAccordion === index ? "block" : "none",
                      }}
                    >
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
              <div className="learn">
                Learn more about ChangeNOW <FaChevronRight color="#66F0BF" />
              </div>
            </div>
          </div>
          <div className="review">
            <h2>Reviews</h2>
            {reviews.slice(0, visibleCount).map((review) => (
              <div className="review1" key={review.id}>
                <div className="review2">
                  <div className="review3">
                    <img src={review.avatar} alt={review.name} />
                    <h5>{review.name}</h5>
                    <h5>{review.action}</h5>
                    <h5>{review.date}</h5>
                    <h5>
                      by <img src={review.platformImg} alt={review.platform} />{" "}
                      {review.platform}
                    </h5>
                  </div>
                  <div className="reviewnum">{review.rating}</div>
                </div>
                <h1>{review.comment}</h1>
              </div>
            ))}
            {visibleCount < reviews.length && (
              <div className="show-more-btn reviewbtn">
                <button onClick={handleShowMore}>Show More</button>
              </div>
            )}
          </div>
          <div className="crypto">
            <h2>How crypto swap works</h2>
            <div className="crypto1">
              <div className="crypto2">
                <div className="arrownum">
                  <div className="cryptonum">1</div>
                  <img src={ArrowImg} alt="" />
                </div>
                <p>Choose the crypto pair you want to exchange</p>
              </div>
              <div className="crypto2">
                <div className="arrownum">
                  <div className="cryptonum cryptonum1">2</div>
                  <img src={ArrowImg1} alt="" />
                </div>
                <p>Choose the best offer for your pair</p>
              </div>
              <div className="crypto2">
                <div className="arrownum">
                  <div className="cryptonum">3</div>
                  <img src={ArrowImg} alt="" />
                </div>
                <p>Enter your wallet addres to receive coins</p>
              </div>
              <div className="crypto2">
                <div className="arrownum">
                  <div className="cryptonum cryptonum1">4</div>
                  <img src={ArrowImg1} alt="" />
                </div>
                <p>Send your deposit to the generated address</p>
              </div>
              <div className="crypto2">
                <div className="arrownum">
                  <div className="cryptonum">5</div>
                  <img src={ArrowImg} alt="" />
                </div>
                <p>Wait for your swap to be done</p>
              </div>
            </div>
          </div>
          <div className="why">
            <h2>Why Swapzone</h2>
            <div className="why1">
              <div className="why2">
                <div className="whyimg">
                  <img src={why1} alt="" />
                </div>
                <h4>Best Rate</h4>
                <p>
                  We're showing the offers from the most popular and reliable
                  exchange providers. Pick the best offer for your crypto pair!
                </p>
              </div>
              <div className="why2">
                <div className="whyimg">
                  <img src={why2} alt="" />
                </div>
                <h4>Higher Security</h4>
                <p>
                  We check all exchangers for the risk of freezing funds. Your
                  funds will definitely reach you!
                </p>
              </div>
              <div className="why2">
                <div className="whyimg">
                  <img src={why3} alt="" />
                </div>
                <h4>24/7 live support</h4>
                <p>
                  We are here to help you with any issue at every stage of the
                  transaction. Feel free to contact us!
                </p>
              </div>
              <div className="why2">
                <div className="whyimg">
                  <img src={why4} alt="" />
                </div>
                <h4>1600+ currencies available</h4>
                <p>
                  It's really hard not to find the crypto you need on Swapzone :
                </p>
              </div>
            </div>
          </div>
          <div className="trust">
            <div className="trust1">
              <h2>Reviews from Trustpilot</h2>
              <div className="trustchev">
                <GoChevronLeft size={25} color="#66F0BF" onClick={prevSlide} />
                <GoChevronRight size={25} color="#66F0BF" onClick={nextSlide} />
              </div>
            </div>

            <div className="trust2">
              {reviewstrust
                .slice(current, current + itemsPerPage)
                .map((review, idx) => (
                  <div key={idx} className="trust3">
                    <div className="trusttop">
                      <h3>{review.name}</h3>
                      <img src={reviewstar} alt="stars" />
                    </div>
                    <p>{review.date}</p>
                    <h2>{review.title}</h2>
                    <h4>{review.text}</h4>
                  </div>
                ))}
            </div>
          </div>
          <div className="ask">
            <h2>Frequently asked questions</h2>
            <div className="ask-accordion">
              {faqData.map((item, index) => (
                <div key={index} className="ask-item">
                  <button
                    className="ask-question"
                    onClick={() => toggleAsk(index)}
                  >
                    {item.question}
                    {openIndex === index ? (
                      <IoIosArrowUp size={20} className="ask-icon" />
                    ) : (
                      <IoIosArrowDown size={20} className="ask-icon" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div
                      className={`ask-answer ${
                        openIndex === index ? "show" : ""
                      }`}
                    >
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offer;
