import React, { useEffect, useRef, useState } from "react";
import { FiChevronDown, FiChevronUp, FiChevronsRight } from "react-icons/fi";
import "../css/faq.css";
import faq from "../assets/faq.png";
import faq1 from "../assets/faq1.png";
import faq3 from "../assets/faq3.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const faqData = [
  {
    question: "What is Exolix?",
    answer:
      "Exolix is a secure and anonymous crypto exchange service with fixed rates which is free of registration and any limits. Launched in 2018, Exolix gained recognition as a fast and secure exchange. Exolix provides its customers with the highest standards of confidentiality, as you do not have to register to make a transaction. The system also fixes the exchange rate at the beginning of the transaction, thus, users are protected from market volatility. In addition, Exolix does not have maximum limits, which allows everyone to exchange any amount of cryptocurrencies. The main mission of Exolix is to make an exchange process fast, easy and secure and we fulfill this intent with dignity.",
  },
  {
    question: "How does Exolix work?",
    answer:
      "Integrated into the largest cryptocurrency exchange platforms, Exolix trading algorithm provides its customers with the most profitable rate. Exolix chooses the best price on the market and offers it to users",
  },
  {
    question: "Why trust us?",
    answer:
      "Exolix ensures confidentiality, security, and transparency with no hidden fees or maximum exchange limits.",
  },
  {
    question: "Do I need to create an account or register?",
    answer:
      "No, Exolix is a fully anonymous platform as our team is completely committed to the idea of anonymity in the cryptocurrency world. We do not require any personal data to complete an exchange.",
  },
];

const walletData = [
  {
    question: "Wallet address",
    answer:
      "A wallet is a digital place where you can store your cryptocurrency coins. As a rule, each coin has its own official wallet which you can find on the official website of the coin.Each cryptocurrency wallet address has a unique combination of numbers and letters in the length of 26-35 characters or a tag with a private key.",
  },
  {
    question: "The recipient's address",
    answer:
      "In any transaction, there is always a sender and a recipient. The recipient’s address is a unique wallet address to receive currency you want to purchase. The recipient’s wallet address has to be valid for the currency you want to receive.",
  },
  {
    question: "How quick will my transaction be processed?",
    answer:
      "Usually it takes from 5 to 30 minutes to process the transaction. However, if the transaction’s volume is high, processing may take longer. Thus, you should take into account that different coins require different time to confirm the transaction.",
  },
  {
    question: "Transaction Hash",
    answer:
      "A hash is a unique ID code that is assigned to each new transaction made by users in blockchain. Whenever you make a payment, you receive a hash (or the tx ID) displayed in your wallet. Using this combination of letters and numbers you can view the details of this transfer in blockchain.",
  },
  {
    question: "Transaction ID",
    answer:
      "Transaction ID is a unique number of an exchange. With transaction ID you can contact support in case of any problems.",
  },
  {
    question: "Can I cancel a transaction?",
    answer:
      "Please, check all payment details carefully. Blockchain transactions are irreversible. After the transaction is included in a block, it cannot be rolled back.",
  },
  {
    question: "What are the deposit/withdrawal fees?",
    answer:
      "Exolix does not charge any fees, since we have a fixed rate. User sees the exact amount he will receive before the exchange. Exolix fixes this amount and the user receives the sum indicated at the beginning of the exchange process. There will be no other fees during the transaction.",
  },
];

const affiliateData = [
  {
    question: "How does the affiliate program work?",
    answer:
      "The main benefit of the Exolix’ Affiliate program is that you receive up to 2% of each successful transaction that has come from your account. Special conditions can be negotiated. We offer several options of cooperation with Exolix: API integration, widgets and referral links and banners. For more information, please visit https://exolix.com/affiliate-program.",
  },
  {
    question: "How can I become a partner?",
    answer:
      "Becoming an Exolix affiliate is simple. Just click the “Affiliate program” button on the main page and then click “Become a partner” to sign up and choose affiliate tools that work best for you, and you are all set.",
  },
  {
    question: "Which tools can I use to work with you?",
    answer:
      "Exolix offers several options of cooperation: API integration, widgets, referral links and banners. Choose the option which works for you best.",
  },
  {
    question: "How much profit can I get?",
    answer:
      "The commission rate is determined individually. For details and to discuss your specific conditions, please contact us at partnerships@exolix.com directly.",
  },
];

function Accordion({ data, defaultOpenIndex = null }) {
  const [activeIndex, setActiveIndex] = useState(defaultOpenIndex);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleAccordion(index)}>
            <h4>{item.question}</h4>
            {activeIndex === index ? (
              <FiChevronUp size={22} />
            ) : (
              <FiChevronDown size={22} />
            )}
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

function Faq() {
  const aboutRef = useRef(null);
  const transactionsRef = useRef(null);
  const affiliateRef = useRef(null);
  const navRef = useRef(null);
const [active, setActive] = useState("about");

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="faq">
      <div className="faq1">
        Home <FiChevronsRight size={12} /> <span>FAQ</span>
      </div>

      <div className="faq2">
        <h2>Frequently Asked Questions</h2>
        <div className="faq3">
          <div className="faqdata">
            <div ref={aboutRef} className="faq4">
              <div className="faq5">
                <img src={faq} alt="" />
                <h3>About Exolix</h3>
              </div>

              <Accordion data={faqData} defaultOpenIndex={0} />
            </div>
            <div ref={transactionsRef} className="faq4 faq6">
              <div className="faq5">
                <img src={faq1} alt="" />
                <h3>Transactions</h3>
              </div>

              <Accordion data={walletData} />
            </div>
            <div ref={affiliateRef} className="faq4 faq6">
              <div className="faq5">
                <img src={faq3} alt="" />
                <h3>Affiliate program</h3>
              </div>

              <Accordion data={affiliateData} />
            </div>
          </div>
          <div className="faq8">
      <div
        className={`faqbtn ${active === "about" ? "active" : "faqbtn1"}`}
        onClick={() => {
          setActive("about");
          scrollToSection(aboutRef);
        }}
      >
        About
      </div>

      <div
        className={`faqbtn ${active === "transactions" ? "active" : "faqbtn1"}`}
        onClick={() => {
          setActive("transactions");
          scrollToSection(transactionsRef);
        }}
      >
        Transactions
      </div>

      <div
        className={`faqbtn ${active === "affiliate" ? "active" : "faqbtn1"}`}
        onClick={() => {
          setActive("affiliate");
          scrollToSection(affiliateRef);
        }}
      >
        Affiliate program
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
