import React from "react";
import "../styles/slots.css";

const DisplaySlot = props => {
  const bgColor = props.isBooked ? "booked" : "empty";
  const getSlotTime = idx => {
    const time = idx + 9;
    const stTime =
      time > 12 ? (time % 12).toString() + " PM" : time.toString() + " AM";
    return stTime;
  };

  return (
    <div className={`slot slot-${bgColor}`} onClick={props.onClick}>
      {getSlotTime(props.slotId)} -{getSlotTime(props.slotId + 1)}
    </div>
  );
};

export default DisplaySlot;
