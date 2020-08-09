import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import DisplayUserForm from "./userForm";
import { SlotContext } from "../context/slotContext";

const UserForm = () => {
  const { slot, setSlot } = useContext(SlotContext);
  const history = useHistory();

  const checkValiditity = () => {
    const detail = slot.userDetail;
    const alphareg = /^[A-Za-z]+$/;
    const numreg = /^[0-9]+$/;
    if (
      detail &&
      detail.firstName.match(alphareg) &&
      detail.lastName.match(alphareg) &&
      detail.mobileNo.match(numreg)
    ) {
      return true;
    }
    return false;
  };

  const onSave = () => {
    if (!checkValiditity()) {
      // eslint-disable-next-line no-alert
      alert(
        "Please ensure, name has only alphabets, and mobile no. only numbers"
      );
    } else {
      const payload = {
        ...slot,
        isBooked: true
      };
      const localData = JSON.parse(localStorage.getItem("bookings"));
      localStorage.setItem(
        "bookings",
        JSON.stringify({ ...localData, [slot.id]: payload })
      );

      setSlot({
        id: -1,
        isBooked: false,
        userDetail: {
          firstName: "",
          lastName: "",
          mobileNo: ""
        }
      });
      history.push("/");
    }
  };
  const onChangeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;
    setSlot({
      ...slot,
      userDetail: { ...slot.userDetail, [name]: value }
    });
  };

  return (
    <div className="form">
      <DisplayUserForm
        onSave={onSave}
        onChangeHandler={onChangeHandler}
        value={slot.userDetail}
      />
    </div>
  );
};

export default UserForm;
