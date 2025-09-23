import logo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ExchangeIcon from "./components/ExchangeIcon";
import Work from "./pages/Work";
import Footer from "./components/Footer";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Affiliate from "./pages/Affiliate";
import SwapZone from "./pages/SwapZone";
import Offer from "./pages/Offer";
import Transaction from "./pages/Transaction";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <ExchangeIcon />
              <Home />
            </>
          }
        />
        <Route
          path="/how-to-use"
          element={
            <>
              <ExchangeIcon />
              <Work />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <ExchangeIcon />
              <About />{" "}
            </>
          }
        />
        <Route
          path="/faq"
          element={
            <>
              <ExchangeIcon />
              <Faq />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <ExchangeIcon />
              <Contact />
            </>
          }
        />
        <Route path="/affiliate-program" element={<Affiliate />} />
        <Route path="/exchange/btc/xmr" element={<SwapZone />} />
        <Route path="/exchange/offer" element={<Offer />} />
        <Route path="/exchange/transaction" element={<Transaction />} />
      </Routes>
      <Footer />  
    </>
  );
}

export default App;
