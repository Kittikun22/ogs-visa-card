import React from "react";
import Flickity from "react-flickity-component";
import { AiFillCaretRight } from "react-icons/ai";
import { RiBarChart2Fill, RiVisaLine } from "react-icons/ri";
import { FcSimCardChip } from "react-icons/fc";
import { Link } from "react-router-dom";
import "../styles/visa1.css";
import { CardInfo, TransectionVisa1 } from "../test/testData";
import TransectionBox from "./Transection/TransectionBox";
import DetailBox from "./Details/DetailBox";

function Visa1() {
  const flickityOptions = {
    initialIndex: 0,
    pageDots: true,
  };

  console.log(CardInfo);
  return (
    <>
      <div className="top">
        <div className="top-header">
          <p> All my accounts</p>
          <div className="top-date">June 10, 2018</div>
        </div>
        <Link className="chart" to="/Visa2">
          <RiBarChart2Fill />
        </Link>
      </div>

      <Flickity className={"card"} options={flickityOptions}>
        {CardInfo?.map((val, key) => {
          return (
            <>
              <Link key={key} className="card-cell" to="/Visa2">
                <div className="top-card">
                  <div className="visa-brands">
                    <RiVisaLine />
                  </div>
                  <div className="available-balance">Available Balance</div>
                </div>

                <div className="midle-card">
                  <div className="chip-icon">
                    <FcSimCardChip />
                  </div>
                  <div className="card-balance">
                    <div className="dollar">$</div>
                    <div className="balance">
                      {new Intl.NumberFormat("th", {
                        minimumFractionDigits: 2,
                      }).format(val.balance)}
                    </div>
                  </div>
                </div>
                <div className="card-no">
                  <div>{val.cardNo.slice(0, 5)}</div>
                  <div>{val.cardNo.slice(5, 9)}</div>
                  <div>{val.cardNo.slice(9, 13)}</div>
                  <div>{val.cardNo.slice(13)}</div>
                </div>
                <div className="bottom-card">
                  <div className="expire">
                    <div>EXPIRE</div>
                    <AiFillCaretRight />
                    <div className="expire-date">{val.expire}</div>
                  </div>
                  <div className="cvc-code">
                    <div>CVC CODE</div>
                    <AiFillCaretRight />
                    <div className="cvc-date">{val.cvc}</div>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </Flickity>

      <TransectionBox />
      <DetailBox Transection={TransectionVisa1} />
    </>
  );
}

export default Visa1;
