import React from "react";
import payment1 from "../images/payment1.png";
import payment2 from "../images/payment2.png";
import upiImage from "../images/upiImage.png";
import upiImage1 from "../images/upiImage1.png";
import postpaid from "../images/postpaid.png";
import postpaid2 from "../images/postpaid2.png";
import hdfc from "../images/hdfc.png";
import card1 from "../images/card1.png";
import sbi from "../images/sbi.png";
import card2 from "../images/card2.png";
import Financial from "./Financial";
import { DiApple } from "react-icons/di";
import { FaGooglePlay } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const Payments = () => {
  return (
    <>
      <div>
        <div className="pay_div">
          <h1 className="pay_head">Paytm Payment Instruments</h1>
          <div className="inner_pay">
            <div className="pay_center">
              <div style={{ display: "flex" }}>
                <img src={payment1} className="pay_img1" />
                <span className="pay_span">Payment Wallet</span>
              </div>
              <h2 className="pay_h2">
                The Fastest Way to Pay In-store & Online.
              </h2>
              <p className="pay_para">
                Load up your Paytm Wallet for free and make payments in a jiffy
                at over 21 million stores, websites and apps.
              </p>
              <div>
                {" "}
                <img src={payment2} className="pay_img2" />
              </div>
              <button className="head_btn s1 s2_btn">
                Download Paytm App{" "}
                <a href="https://apps.apple.com/us/app/paytm-secure-upi-payments/id473941634 ">
                  <DiApple className="icon_apple s5" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=net.one97.paytm&hl=en_IN&gl=US">
                  <FaGooglePlay className="icon_play s5" />
                </a>
              </button>
            </div>
          </div>

          <div className="seperate">
            <div className="inner_pay">
              <div className="pay_center">
                <div style={{ display: "flex" }}>
                  <img src={upiImage1} className="pay_img1" />
                  <span className="pay_span">UPI Money Transfer</span>
                </div>
                <h2 className="pay_h2">
                  Pay anyone directly from your bank account.
                </h2>
                <p className="pay_para">
                  Pay anyone, everywhere. Make contactless & secure payments
                  in-stores or online using Paytm Wallet or Directly from your
                  Bank Account. Plus, send & receive money from anyone.
                </p>
                <div>
                  {" "}
                  <img src={upiImage} className="pay_img2" />
                </div>
                <button className="head_btn s1 s2_btn">
                  Download Paytm App
                  <a href="https://apps.apple.com/us/app/paytm-secure-upi-payments/id473941634 ">
                    <DiApple className="icon_apple s5" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=net.one97.paytm&hl=en_IN&gl=US">
                    <FaGooglePlay className="icon_play s5" />
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="seperate">
            <div className="inner_pay">
              <div className="pay_center">
                <img src={postpaid} className="pay_img3" />

                <h2 className="pay_h2">
                  Want it?
                  <br />
                  No more waiting for it.
                </h2>
                <p className="pay_para">
                  With Paytm Postpaid, your wishlist doesn't have to be on the
                  waitlist. Shop for the things you want today and pay for them
                  next month.
                </p>
                <div>
                  {" "}
                  <img src={postpaid2} className="pay_img4" />
                </div>
                <button className="finance_btn">Learn More</button>
              </div>
            </div>
          </div>

          <CardGroup className="class_gp">
            <Card className="class_cd">
              <Card.Img variant="top" src={hdfc} className="class_img" />
              <Card.Body>
                <Card.Title className="class_tit">
                  Unlimited Cashback <span>Every time</span>
                </Card.Title>
                <Card.Text className="class_txt">
                  Paytm HDFC Bank Select Credit Card. A card with assured
                  Cashback and incredible offers.
                </Card.Text>
                <Card.Img variant="top" src={card1} />
              </Card.Body>
            </Card>
            <Card className="class_cd">
              <Card.Img variant="top" src={sbi} className="class_img1" />
              <Card.Body>
                <Card.Title className="class_tit">
                  India’s Most
                  <span>Sincere Credit Card</span>
                </Card.Title>
                <Card.Text className="class_txt">
                  Paytm SBI Card SELECT - With Intelligent Features & Great
                  Rewards that Never Expire
                </Card.Text>
                <Card.Img variant="top" src={card2} />
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>
      <Financial />
    </>
  );
};

export default Payments;
