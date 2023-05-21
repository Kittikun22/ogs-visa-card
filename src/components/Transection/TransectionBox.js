import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import "../../styles/transection.css";

function TransectionBox() {
  return (
    <div className="transection">
      <div className="income">
        <div className="descrip">Income</div>
        <div className="trans-count">
          <FaArrowDown />
          <div>$9,302.00</div>
        </div>
      </div>
      <div className="expense">
        <div className="descrip">Expense</div>
        <div className="trans-count ">
          <FaArrowUp />
          <div>$2,790.00</div>
        </div>
      </div>
    </div>
  );
}

export default TransectionBox;
