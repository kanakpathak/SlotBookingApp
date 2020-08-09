import React, { useState } from "react";

export const SlotContext = React.createContext({});

export const SlotProvider = props => {
  const [slot, setSlot] = useState({
    id: -1,
    isBooked: false,
    userDetail: {
      firstName: "",
      lastName: "",
      mobileNo: ""
    }
  });

  return (
    <SlotContext.Provider value={{ slot, setSlot }}>
      {props.children}
    </SlotContext.Provider>
  );
};
