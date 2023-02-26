// import React from "react";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import paytm_logo from "../images/paytm_logo.png";
import { FaGreaterThan } from "react-icons/fa";
import Login from "./Login";

const NaV = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div>
      <Navbar className="nav_div">
        <Container>
          <div className="logo1">
            <img src={paytm_logo} className="img_pytm" onClick={refreshPage} />
          </div>

          <div className="dropdown">
            <button class="dropbtn consumer">Paytm for Consumer</button>
            <div class="dropdown-content ">
              <a href="#">
                Payments
                <div className="dropdown_two" style={{ paddingBottom: "21px" }}>
                  <a href="#">Bill Payments and Recharges</a>
                  <a href="#">Send Money to Anyone</a>
                  <a href="#">Online Payments</a>
                  <a href="#">In-Store Payments</a>
                </div>
              </a>

              <a href="#">
                Ticket booking
                <div className="dropdown_two" style={{ paddingBottom: "21px" }}>
                  <a href="#">Movie Tickets</a>
                  <a href="#">Flight Tickets</a>
                  <a href="#">Train Tickets</a>
                  <a href="#">Bus Tickets</a>
                </div>
              </a>

              <a href="#" style={{ paddingBottom: "48px" }}>
                Financial Services
                <div className="dropdown_two" style={{ paddingBottom: "26px" }}>
                  <a href="#" className="loan">
                    Banking
                    <FaGreaterThan className="arrow_1" />
                    <div className="dropdown_inner">
                      <ul>
                        <li className="bank_li">
                          <a href="#">Savings Account</a>
                        </li>
                      </ul>
                    </div>
                  </a>
                  <a href="#">Paytm Money</a>
                  <a href="#">Insurance</a>
                  <a href="#" className="loan">
                    Loans and Credit Cards
                    <FaGreaterThan className="arrow_2" />
                    <div className="dropdown_inner">
                      <ul>
                        <li>
                          <a href="#">Postpaid</a>
                        </li>
                        <li>
                          {" "}
                          <a href="#"> Credit Cards</a>
                        </li>
                        <li>
                          <a href="#">Personal Loan </a>
                        </li>
                        <li>
                          <a href="#">Credit Report</a>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </a>
            </div>
          </div>

          <div className="dropdown">
            <button class="dropbtn business">Paytm for business</button>
            <div class="dropdown-content d2">
              <a href="#">Consumers Payments</a>
              <a href="#">Business Payments</a>
              <a href="#">Business Software</a>
              <a href="#">Financial Services</a>
              <a href="#">Developers</a>
            </div>
          </div>

          <Navbar.Brand className="navbar1 investor">
            Investor Relations
          </Navbar.Brand>

          <div className="dropdown ">
            <button class="dropbtn navbar1 company">Company</button>
            <div class="dropdown-content d3">
              <a href="#">About</a>
              <a href="#">CSR</a>
              <a href="#">Blog</a>
              <a href="#">Contact Us</a>
              <a href="#">Terms and Conditions</a>
              <a href="#">
                Sustainability
                <a href="#" className="side_drop">
                  Sustainability Paytm{" "}
                </a>
              </a>
            </div>
          </div>
          <Navbar.Brand className="navbar1 H2 career ">Career</Navbar.Brand>

          <Login />
        </Container>
      </Navbar>
      <div>
        <p className="nav_p">
          <span style={{ fontWeight: "700" }}> No Wallet KYC Required 😊</span>{" "}
          to pay using UPI on Paytm.
          <span style={{ fontWeight: "600" }}>Learn more.</span>
        </p>
      </div>
    </div>
  );
};

export default NaV;
