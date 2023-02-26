import React from "react";
import prepaid from "../images/prepaid.png";
import electricity from "../images/electricity.png";
import rent from "../images/rent.webp";
import dth from "../images/dth.png";
import metro from "../images/metro.png";
import landline from "../images/landline.png";
import fasttag from "../images/fasttag.webp";
import education from "../images/education.png";
import payloan from "../images/payloan.webp";
import invest from "../images/invest.png";
import cylinder from "../images/cylinder.png";
import airtel from "../images/airtel.webp";
import bsnl from "../images/bsnl.webp";
import jio from "../images/jio.webp";
import mtnl from "../images/mtnl.webp";
import vi from "../images/vi.webp";
import NaV from "./NaV";

const Prepaid = () => {
  return (
    <>
      <NaV />
      <div style={{ backgroundColor: "#f0f0f0" }}>
        <div className="prepaid_icons">
          <div className="inner_pre">
            <div className="common_pre" style={{ marginLeft: "32px" }}>
              <img src={prepaid} className="pre_img" />
              <p>Prepaid/Postpaid</p>
            </div>
            <div className="common_pre">
              <img src={electricity} className="pre_img" />
              <p style={{ marginLeft: "80px" }}>Electricity</p>
            </div>
            <div className="common_pre">
              <img src={rent} className="pre_img" />
              <p>Rent Payment</p>
            </div>
            <div className="common_pre">
              <img src={dth} className="pre_img" />
              <p style={{ marginLeft: "85px" }}>DTH</p>
            </div>
            <div className="common_pre">
              <img src={metro} className="pre_img" />
              <p style={{ marginLeft: "85px" }}>Metro</p>
            </div>
            <div className="common_pre">
              <img src={landline} className="pre_img" />
              <p>Broadband/Landline</p>
            </div>
            <div className="common_pre">
              <img src={fasttag} className="pre_img" />
              <p style={{ marginTop: "7px" }}>Buy FASTag</p>
            </div>
            <div className="common_pre">
              <img src={education} className="pre_img" />
              <p style={{ marginLeft: "74px" }}>Education</p>
            </div>
            <div className="common_pre">
              <img src={payloan} className="pre_img" />
              <p>Pay Loan</p>
            </div>
            <div className="common_pre">
              <img src={invest} className="pre_img" />
              <p>Invest in Stock</p>
            </div>
            <div className="common_pre">
              <img src={cylinder} className="pre_img" />
              <p> Book a Cylinder</p>
            </div>
          </div>
        </div>

        <div className="form_pre">
          <h1 className="pre_head">Recharge or Pay Mobile Bill</h1>
          <div class="text">
            <input type="radio" className="radio" />
            <label style={{ marginRight: "20px" }}>Prepaid</label>
            <input type="radio" className="radio" />
            <label> Postpaid</label>
          </div>

          <div class="text-input">
            <input type="number" />
            <label>Mobile Number</label>
          </div>

          <div class="text-input">
            <input type="text" />
            <label>Operator</label>
            <div>
              <ul>
                <li>
                  <img src={airtel} />
                  <span>Airtel</span>
                </li>
                <li>
                  <img src={bsnl} />
                  <span>BSNL</span>
                </li>
                <li>
                  <img src={jio} />
                  <span>Jio</span>
                </li>
                <li>
                  <img src={mtnl} />
                  <span>MTNL</span>
                </li>
                <li>
                  <img src={vi} />
                  <span>Vi</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="text-input">
            <input type="text" />
            <label>
              Amount{" "}
              <div className="browse">
                <div className="browse_span">Browse Plans</div>
                <span> of all operators</span>
              </div>
            </label>
          </div>

          <div className="btn_pre">
            <button className="butn">Proceed to Recharge</button>
          </div>
        </div>

        <div className="operators">
          <h6 className="operator_head">Select an Operator</h6>

          <div className="operator_div">
            <div className="operator_inner">
              <img src={airtel} />

              <p style={{ marginLeft: "-7px" }}>Airtel Recharge</p>
            </div>
            <div className="operator_inner">
              {" "}
              <img src={bsnl} />
              <p style={{ marginLeft: "-7px" }}>BSNL Recharge</p>
            </div>
            <div className="operator_inner">
              <img src={jio} />
              <p style={{ marginLeft: "-7px" }}>Jio Recharge</p>
            </div>
            <div className="operator_inner">
              <img src={mtnl} />
              <p style={{ marginLeft: "-7px" }}>MTNL Recharge</p>
            </div>
            <div className="operator_inner">
              <img src={vi} />
              <p style={{ marginLeft: "-7px" }}>Vi Recharge</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prepaid;
