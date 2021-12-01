import React from "react";

export default function Form() {
  return (
    <div className="form">
      <label>
        Contact Name<span>*</span>
        <input type="text"></input>
      </label>
      <label>
        Contact Number<span>*</span>
        <input type="text"></input>
      </label>
      <label>
        Contact Email<span>*</span>
        <input type="text"></input>
      </label>
    </div>
  );
}
