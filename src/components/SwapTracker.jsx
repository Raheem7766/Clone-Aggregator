import React, { useState } from "react";
import "../css/SwapTracker.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function SwapTracker() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className={`swap-tracker ${isExpanded ? "expanded" : ""}`}>
        <div className="tracker-header" onClick={toggleExpand}>
          <h2>Swap Tracker</h2>
          {isExpanded ? (
            <FaChevronUp color="#ABB6C1" size={12} />
          ) : (
            <FaChevronDown color="#ABB6C1" size={12} />
          )}
        </div>

        {isExpanded && (
          <div className="swap-head">
            <div className="input-group">
              <label htmlFor="transactionId">Transaction ID</label>
              <input
                type="text"
                id="transactionId"
                placeholder="Enter your transaction ID"
                className="transaction-input"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default SwapTracker;