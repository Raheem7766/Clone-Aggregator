import React, { useState } from "react";
import "../css/SwapTracker.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SwapTracker() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleTrack = () => {
    if (transactionId.trim() !== "") {
      navigate(`/complete/${transactionId}`);
    }
  };

  return (
    <>
      <div className={`swap-tracker ${isExpanded ? "expanded" : ""}`}>
        <div className="tracker-header" onClick={toggleExpand}>
          <h2>Swap Tracker</h2>
          {isExpanded ? (
            <FaChevronUp size={12} />
          ) : (
            <FaChevronDown size={12} />
          )}
        </div>

     {isExpanded && (
        <div className="swap-head">
          <div className="input-container">
          <input
              type="text"
              className="input-field-material"
              placeholder="Enter your transaction ID"
              id="transaction3"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
            />
            <label htmlFor="transaction3" className="input-label">
              Transaction ID
            </label>
            <button onClick={handleTrack}>Track your swap</button>
          </div>
        </div>
      )}

      </div>
    </>
  );
}

export default SwapTracker;