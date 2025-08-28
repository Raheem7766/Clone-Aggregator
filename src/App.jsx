import logo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ExchangeIcon from "./components/ExchangeIcon";
import Work from "./pages/Work"
import Footer from "./components/Footer";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Affiliate from "./pages/Affiliate";

function App() {
  return (
    <>
      <Navbar />
      <ExchangeIcon />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-to-use" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/affiliate-program" element={<Affiliate />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
