import React from "react";

import Form from "./Form.js";

export default function Right() {
  return (
    <div className="right">
      <header className="header">
        <p>Contact Info</p>
        <img src="./Cross.svg"></img>
      </header>

      <Form />

      <footer className="footer">
        <div className="buttons">
          <button type="button" className="btn">
            Save
          </button>
          <button type="button" className="btn save-next">
            Save &amp; Next
          </button>
        </div>
      </footer>
    </div>
  );
}
