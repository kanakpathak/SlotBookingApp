import React from "react";
import { Link } from "react-router-dom";
import "../styles/userForm.css";

const DisplayUserForm = props => {
  const arr = ["firstName", "lastName", "mobileNo"];
  return (
    <div className="userForm">
      {/* disply slots */}
      {arr.map((item, index) => {
        return (
          <div key={index}>
            <h4 className="userTag">{item.toUpperCase()}</h4>
            <input
              name={item}
              className="userTag"
              type="text"
              onChange={props.onChangeHandler}
              value={props.value ? props.value[item] : ""}
            />
          </div>
        );
      })}

      {/* display buttons */}
      <span style={{ margin: "20px" }}>
        <Link to="/">
          <button
            style={{
              background: "grey"
            }}
          >
            Cancel
          </button>
        </Link>
        <button
          style={{
            background: "#4CAF50"
          }}
          onClick={props.onSave}
        >
          Save
        </button>
      </span>
    </div>
  );
};

export default DisplayUserForm;
