import React from "react";

export default function Left() {
  return (
    <div className="left">
      <div className="left-box">
        <h1 className="kyc-form">KYC Form</h1>
        <p>Complete and submit the form to accept payments.</p>

        <button type="button" className="btn selected">
          Contact
          <img src="./greater.svg" alt=""></img>
        </button>

        <button type="button" className="non-selected">
          Business Overview <img src="./greater.svg" alt=""></img>
        </button>

        <button type="button" className="non-selected">
          Business Details <img src="./greater.svg" alt=""></img>
        </button>
      </div>
    </div>
  );
}
