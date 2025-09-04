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
            />
            <label
              htmlFor="transaction3"
              className="input-label"
            >
              Transaction ID
            </label>
            <button>Track your swap</button>
          </div>
        </div>
      )}

      </div>
    </>
  );
}

export default SwapTracker;