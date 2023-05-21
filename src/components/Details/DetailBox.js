import React from "react";
import { FaArrowDown, FaArrowUp, FaHandHoldingUsd } from "react-icons/fa";
import { BsCalendar2Event } from "react-icons/bs";
import { BiRestaurant, BiShoppingBag, BiCoinStack } from "react-icons/bi";
import "../../styles/detail.css";

function DetailBox({ Transection }) {
  const checkCategory = (cate) => {
    switch (cate) {
      case "restaurant":
        return <BiRestaurant />;
      case "salary":
        return <FaHandHoldingUsd />;
      case "salary2":
        return <BiCoinStack />;
      case "shoping":
        return <BiShoppingBag />;
    }
  };

  const checkArrow = (val) => {
    switch (val) {
      case "income":
        return <FaArrowDown className="arrow" />;
      case "expense":
        return <FaArrowUp className="arrow" />;
    }
  };
  return (
    <>
      <div className="topic-movement">
        <div>Detail of movements</div>
        <BsCalendar2Event />
      </div>
      {Transection?.map((val, key) => {
        return (
          <div className="movement-box" key={key}>
            <div className="icon">{checkCategory(val.category)}</div>
            <div className="movement-detail ">
              <div className="subject">{val.name}</div>
              <div className="date">{val.date}</div>
            </div>
            {val.type === "income" ? (
              <div className="movement-trans movement-income">
                <span>{val.amount}</span>
                {checkArrow(val.type)}
              </div>
            ) : (
              <div className="movement-trans movement-expense">
                <span>{val.amount}</span>
                {checkArrow(val.type)}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}

export default DetailBox;
