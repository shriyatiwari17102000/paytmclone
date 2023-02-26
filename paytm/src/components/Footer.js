import React from "react";
import appstore from "../images/appstore.png";
import playstore from "../images/playstore.svg";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import Accordion from "react-bootstrap/Accordion";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#f5f7fa" }}>
      <div className="store_div">
        <h3 className="store_h3">Download Paytm App to pay from anywhere</h3>
        <div className="inner_store">
          <img src={appstore} className="store_img" />
          <img src={playstore} className="store_img1" />
        </div>
        <hr style={{ color: "red" }} />
        <div className="socialmedia">
          <BsTwitter style={{ marginRight: "14px" }} />
          <AiOutlineInstagram style={{ marginRight: "14px" }} />
          <FaFacebookF />
        </div>
      </div>
      <div>
        <div>
          <Accordion>
            <Accordion.Item>
              <Accordion.Header>
                {" "}
                <AiOutlinePlus /> <span>Investor Relations</span>{" "}
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Footer;
