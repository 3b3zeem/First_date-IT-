import React from "react";
import './Ready.css'
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineChevronUp } from "react-icons/hi";

const Ready = () => {
    const [show, setshow] = useState(false);
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="con">
            <div className="ready">
                <div className="disp-flex">
                    <h1 className="dispText">Ready to drive your business success?</h1>
                    <button className="btn-ready">Book Now</button>
                </div>
            </div>
            <div className="T-Partner">
                <div className="disp-flex1">
                    <div className="icon icon-ready dropdown">
                        {isActive ? <HiOutlineChevronUp className="Icon" onClick={() => {
                            setshow(!show)
                            setIsActive(!isActive)
                        }} /> :
                            <IoIosArrowDown className="Icon" onClick={() => {
                                setshow(!show)
                                setIsActive(!isActive)
                            }} />
                        }
                    </div>
                    <h1 className="dispText1">Your Trusted Technology Partner</h1>
                </div>
                {
                    show ? <div className="about" >
                        <p>bla Software’s mission is to put the customer
                            first and deliver excellence in through our solutions. Works very closely with our customers to understand their business challenges and objectives.</p>
                    </div> : null
                }

            </div>
        </div>
    );
}
export default Ready;