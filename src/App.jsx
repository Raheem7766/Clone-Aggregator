import logo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Work from "./pages/work";
import Navbar from "./components/Navbar";
import ExchangeIcon from "./components/ExchangeIcon";

function App() {
  return (
    <>
      <Navbar />
      <ExchangeIcon />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-to-use" element={<Work />} />
      </Routes>
    </>
  );
}

export default App;
