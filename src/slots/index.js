import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DisplaySlot from "./displaySlots";
import { SlotContext } from "../context/slotContext";
import "../styles/slots.css";

const SlotsContainer = () => {
  const { setSlot } = useContext(SlotContext);
  const onClickHandler = index => {
    let detail = null;
    if (localStorage.getItem("bookings")) {
      detail = JSON.parse(localStorage.getItem("bookings"))[index];
    }
    setSlot({ id: index, ...detail });
  };

  const bookings = localStorage.getItem("bookings")
    ? JSON.parse(localStorage.getItem("bookings"))
    : {};

  return (
    <div className="slotComponent">
      <h1 className="header">Book a Time Slot</h1>
      <div className="slotsContainer">
        {new Array(9).fill("1").map((item, index) => {
          return (
            <Link to="/userform" key={index + 100}>
              <DisplaySlot
                key={index}
                slotId={index}
                onClick={() => onClickHandler(index)}
                isBooked={bookings[index] ? bookings[index].isBooked : false}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SlotsContainer;
