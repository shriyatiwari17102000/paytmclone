import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IoIosContact } from "react-icons/io";
import { AiFillPlayCircle } from "react-icons/ai";
import { DiApple } from "react-icons/di";
import { FaGooglePlay } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import scan from "../images/scan.png";

function Login(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div
        style={{
          borderBottom: "8px solid rgb(1, 43, 114) ",
          paddingTop: "1px",
        }}
      >
        <div
          style={{
            borderBottom: "8px solid #00aced",
          }}
        >
          <div>
            <Modal.Header
              closeButton
              style={{ borderBottom: "none" }}
            ></Modal.Header>
          </div>
          <div
            style={
              {
                // borderBottom: "8px solid  #012b72",
                // paddingTop: "1px",
              }
            }
          >
            <div className="login_main">
              <div className="main_first">
                <h3 className="main_head">
                  {" "}
                  To Login into your Paytm Web account
                </h3>
                <div className="main_secdiv">
                  <ol className="order_list">
                    <li>Open Paytm App</li>
                    <li>Tap Scanoption available at the bottom</li>
                    <li>Point Paytm Scan at QR Code to login</li>
                  </ol>
                </div>
                <div className="main_btn">
                  <button className="btn_div">
                    <AiFillPlayCircle className="play" />
                    Watch Video
                  </button>
                </div>
                <div className="main_p">
                  <p>To create an account download Paytm App</p>

                  <div className="main_foot">
                    <button className="foot_btn">
                      <a href="https://play.google.com/store/apps/details?id=net.one97.paytm&hl=en_IN&gl=US">
                        <FaGooglePlay className="icon_play ic_1" />
                      </a>
                      Google Play
                    </button>
                    <button className="foot_btn">
                      {" "}
                      <a href="https://apps.apple.com/us/app/paytm-secure-upi-payments/id473941634 ">
                        <DiApple className="icon_apple ic_2" />
                      </a>
                      App Store
                    </button>
                  </div>
                </div>
              </div>

              <div className="login_bottom">
                {/* <div> <AiFillCloseCircle className="close " /></div> */}

                <img src={scan} className="bottom_img" />
                <p className="bottom_p">Scan QR code with Paytm App to login</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

function ModelApp() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="primary"
        onClick={() => setModalShow(true)}
        style={{ borderRadius: "21px" }}
      >
        Sign In
        <IoIosContact className="contact_img" />
      </Button>

      <Login show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
export default ModelApp;
