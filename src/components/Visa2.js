import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { RiBarChart2Fill } from "react-icons/ri";
import { BsCalendar2Event } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../styles/visa2.css";
import { CardInfo, TransectionVisa2 } from "../test/testData";
import TransectionBox from "./Transection/TransectionBox";
import DetailBox from "./Details/DetailBox";

function Visa2() {
  return (
    <>
      <div className="top2">
        <div className="top-header2">
          <Link className="chart2" to="/">
            <RiBarChart2Fill />
          </Link>
          <div className="calender">
            <BsCalendar2Event />
          </div>
        </div>

        <div className="card-balance">
          <div className="available-balance2">Available Balance</div>
          <div className="balance2">
            <div className="dollar2">$ </div>
            <div className="balance-amount">
              {new Intl.NumberFormat("th", {
                minimumFractionDigits: 2,
              }).format(CardInfo[0].balance)}
            </div>
          </div>
          <div className="card-date2">June 9, 2018</div>
        </div>

        <div className="card-no-box">
          <div className="card-no">
            <div>{CardInfo[0].cardNo.slice(0, 5)}</div>
            <div>{CardInfo[0].cardNo.slice(5, 9)}</div>
            <div>{CardInfo[0].cardNo.slice(9, 13)}</div>
            <div>{CardInfo[0].cardNo.slice(13)}</div>
          </div>

          <div className="card-detail">
            <div className="expire">
              <div>EXPIRE</div>
              <AiFillCaretRight />
              <div className="expire-date">{CardInfo[0].expire}</div>
            </div>

            <div className="cvc-code">
              <div>CVC CODE</div>
              <AiFillCaretRight />
              <div className="cvc-date">{CardInfo[0].cvc}</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "relative", top: "-70px" }}>
        <TransectionBox />
        <DetailBox Transection={TransectionVisa2} />
      </div>
    </>
  );
}

export default Visa2;
