import React from "react";
import paytm2 from "../images/paytm2.png";
import header_img from "../images/header_img.png";
import { DiApple } from "react-icons/di";
import { FaGooglePlay } from "react-icons/fa";
import Recharge from "./Recharge";

const Header = () => {
  return (
    <div className="header">
      <img className="head_img1 s1" src={paytm2} />

      <h1 className="head_h1 s1">India's Most-loved Payments App</h1>
      <p className="head_p s1">
        Recharge & pay bills, book flights & movie tickets, open a savings
        account, invest in stocks & mutual funds, and do a lot more.
      </p>
      <div>
        <img src={header_img} className="head_img" />
      </div>
      <div className="head_s5">
        <button className="head_btn s1">
          Download Paytm App{" "}
          <a href="https://apps.apple.com/us/app/paytm-secure-upi-payments/id473941634 ">
            <DiApple className="icon_apple s5" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=net.one97.paytm&hl=en_IN&gl=US">
            <FaGooglePlay className="icon_play s5" />
          </a>
        </button>
      </div>

      <Recharge />
    </div>
  );
};

export default Header;
