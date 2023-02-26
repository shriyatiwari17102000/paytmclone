import React from "react";
import finance1 from "../images/finance1.png";
import finance2 from "../images/finance2.webp";

const Financial = () => {
  return (
    <div className="finance">
      <h1 className="finance_head">Financial Services by Paytm</h1>
      <img src={finance1} className="finance_img2" />
      <h2 className="finance_h2">India's most sincere bank.</h2>
      <p className="finance_para">
        Paytm Payments Bank offers secure, transparent and risk-free banking at
        your fingertips. With instant account opening, virtual debit card and
        zero balance requirements, experience the future of banking today.
      </p>
      <img src={finance2} className="finance_img" />
      <button className="finance_btn">Learn More</button>
    </div>
  );
};

export default Financial;
