import React from "react";
import { FiSmartphone } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { FcStatistics } from "react-icons/fc";
import { BiCylinder } from "react-icons/bi";
import { RiBillLine } from "react-icons/ri";
import { FaRegCopy } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import { MdFlight } from "react-icons/md";
import { BiBus } from "react-icons/bi";
import { IoMdTrain } from "react-icons/io";
import { BsUmbrella } from "react-icons/bs";
import { GiWitchFlight } from "react-icons/gi";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import Payments from "./Payments";

const Recharge = () => {
  return (
    <div>
      <div className="upper_rec">
        <h1 className="rec_h1">Recharge & Pay Bills on Paytm.</h1>
        <div className="rec_head">
          <div>
            <FiSmartphone className="rec_icons" />
            <p className="rec_para">Recharge Prepaid Mobile</p>
          </div>
          <div>
            <AiOutlineHome className="rec_icons" />
            <p className="rec_para">Pay Rent Payment</p>
          </div>

          <div>
            <RiLightbulbFlashLine className="rec_icons" />
            <p className="rec_para">Pay Electricity Bill</p>
          </div>
          <div>
            <FcStatistics className="rec_icons" />
            <p className="rec_para">Recharge DTH Connection</p>
          </div>
          <div>
            <BiCylinder className="rec_icons" />
            <p className="rec_para">Book Gas Cylinder</p>
          </div>
          <div>
            <RiBillLine className="rec_icons" />
            <p className="rec_para">Pay Credit Card Bill</p>
          </div>
          <div>
            <FaRegCopy className="rec_icons" />
            <p className="rec_para">All Payment Services</p>
          </div>
        </div>
      </div>

      <div className="lower_rec">
        <h1 className="rec_h1">Book & Buy on Paytm.</h1>
        <div className="rec_head">
          <div>
            <BiMoviePlay className="rec_icons" />
            <p className="rec_para">Movie Tickets</p>
          </div>
          <div>
            <MdFlight className="rec_icons" />
            <p className="rec_para">Flight Tickets</p>
          </div>

          <div>
            <BiBus className="rec_icons" />
            <p className="rec_para">Bus Tickets</p>
          </div>
          <div>
            <IoMdTrain className="rec_icons" />
            <p className="rec_para">Train Tickets</p>
          </div>
          <div>
            <BsUmbrella className="rec_icons" />
            <p className="rec_para">Buy Insurance</p>
          </div>
          <div>
            <GiWitchFlight className="rec_icons" />
            <p className="rec_para">International Flights</p>
          </div>
          <div>
            <HiOutlineCurrencyRupee className="rec_icons" />
            <p className="rec_para">Invest in Stocks</p>
          </div>
        </div>
      </div>
      <Payments />
    </div>
  );
};

export default Recharge;
