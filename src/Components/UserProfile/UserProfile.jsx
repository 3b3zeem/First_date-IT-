import React, { useState } from "react";
import "./UserProfile.css";
import { IoSpeedometerOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

import { IoIosArrowDown } from "react-icons/io";
import Overlay from "../Overlay/Overlay";
import { HiOutlineChevronUp } from "react-icons/hi";
import Footer from "../Footer/Footer";
const UserProfile = () => {
    const [isOverlayOpne, setisOverlayOpne] = useState(false);
    const [show, setshow] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [show1, setshow1] = useState(false);
    const [isActive1, setIsActive1] = useState(false);

    return (
        <React.Fragment>
            <section className="Dashboard-all">
                <div className="side-bar">
                    <div className="logo">
                        <h1>bla bla</h1>
                    </div>
                    <div className="sidebar-contant">
                        <div className="links">
                            <h2> CORE</h2>
                            <li>
                                <IoSpeedometerOutline /> <span> Dashboard</span>
                            </li>
                        </div>
                        <div className="links">
                            <h2> INTERFACE</h2>
                            <li>
                                <IoSpeedometerOutline /> <span>Layout</span>
                                <span className="icooons">
                                    {isActive ? (
                                        <HiOutlineChevronUp
                                            className="arrow"
                                            onClick={() => {
                                                setshow(!show);
                                                setIsActive(!isActive);
                                            }}
                                        />
                                    ) : (
                                        <IoIosArrowForward
                                            className="arrow"
                                            onClick={() => {
                                                setshow(!show);
                                                setIsActive(!isActive);
                                            }}
                                        />
                                    )}
                                </span>
                                {show ? (
                                    <ul>
                                        <li>

                                            <span>Home</span>
                                        </li>
                                        <li>

                                            <span>About US</span>
                                        </li>
                                    </ul>
                                ) : null}
                            </li>
                            <li>
                                <IoSpeedometerOutline /> <span>Pages</span>
                                <span className="icooons">
                                    {isActive1 ? (
                                        <HiOutlineChevronUp
                                            className="arrow"
                                            onClick={() => {
                                                setshow1(!show1);
                                                setIsActive1(!isActive1);
                                            }}
                                        />
                                    ) : (
                                        <IoIosArrowForward
                                            className="arrow"
                                            onClick={() => {
                                                setshow1(!show1);
                                                setIsActive1(!isActive1);
                                            }}
                                        />
                                    )}
                                </span>
                                {show1 ? (
                                    <ul>
                                        <li>

                                            <span>Advertisements</span>
                                        </li>
                                        <li>

                                            <span>Contact US</span>
                                        </li>
                                    </ul>
                                ) : null}
                            </li>
                        </div>
                        <div className="links">
                            <h2> ADDONS</h2>
                            <li>
                                <IoSpeedometerOutline /> <span>Chats</span>
                            </li>
                            <li>
                                <IoSpeedometerOutline /> <span>Tables</span>
                            </li>
                        </div>
                    </div>
                    <div className="note">
                        <h3>Logged in as:bla bla</h3>
                    </div>
                </div>
                <div className="contant-of-dash">
                    <div className="User-container">
                        <div className="content">
                            <div className="content2">
                                <div className="your-info">
                                    <h4>Your Information</h4>
                                </div>
                                <div className="information">
                                    <div className="feild">
                                        <div className="indivdual">
                                            <h4>First Name</h4>
                                            <div className="text2">Ebrahim</div>
                                        </div>
                                        <div className="indivdual">
                                            <h4>Last Name</h4>
                                            <div className="text2">Salah</div>
                                        </div>
                                    </div>
                                    <div className="feild">
                                        <div className="indivdual">
                                            <h4>Email</h4>
                                            <div className="text2">
                                                Ebrahimsalah@.xom
                                            </div>
                                        </div>
                                        <div className="indivdual">
                                            <h4>Phone</h4>
                                            <div className="text2">01017244898</div>
                                        </div>
                                    </div>
                                    <div className="feild">
                                        <div className="indivdual">
                                            <h4>Addres</h4>
                                            <div className="text2">cairo</div>
                                        </div>
                                        <div className="indivdual">
                                            <h4>Birth Date</h4>
                                            <div className="text2">18-2-2000</div>
                                        </div>
                                    </div>
                                    <div className="feild bro">
                                        <div className="indivdual">
                                            <h4>Bio</h4>
                                            <div className="text2">
                                                Lorem ipsum dolor sit amet
                                                consectetur
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="user-img-edit">
                                <div className="sub-container">
                                    <div className="image">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="user">
                                        <span>
                                            <h3>user name</h3>
                                        </span>
                                    </div>
                                </div>
                                <div className="bot-user">
                                    <button
                                        id="overlay"
                                        onClick={() =>
                                            setisOverlayOpne(!isOverlayOpne)
                                        }
                                    >
                                        Edit profile
                                    </button>
                                </div>
                            </div>
                        </div>
                        <Overlay
                            isOpen={isOverlayOpne}
                            onClose={() => setisOverlayOpne(!isOverlayOpne)}
                        >
                            <div className="conofbot">
                                <div className="discription">
                                    <div className="text">
                                        Edit your information
                                    </div>
                                    <div className="disc">
                                        Fill up and submit this form to refresh your
                                        information
                                    </div>
                                </div>
                                <form
                                    name="form"
                                    className="form1"
                                    id="Formv"
                                    onsubmit="return validation()"
                                    method="post"
                                >
                                    <div className="dispflex">
                                        <div className="section1">
                                            <input
                                                type="text"
                                                className="form__field"
                                                placeholder="First Name"
                                                name="fname"
                                                id="fname"
                                            />
                                            <label
                                                htmlFor="fname"
                                                className="notefication"
                                            />
                                            <input
                                                type="email"
                                                className="form__field"
                                                placeholder="Email"
                                                name="email"
                                                id="email"
                                            />
                                            <label
                                                htmlFor="email"
                                                className="notefication"
                                            />

                                            <input
                                                type="text"
                                                className="form__field"
                                                placeholder="Addres"
                                                name="city"
                                                id="city"
                                            />
                                            <label
                                                htmlFor="city"
                                                className="notefication"
                                            />
                                        </div>
                                        <div className="section1">
                                            <input
                                                type="text"
                                                className="form__field"
                                                placeholder="Last Name"
                                                name="lname"
                                                id="lname"
                                            />
                                            <label
                                                htmlFor="lname"
                                                className="notefication"
                                            />
                                            <input
                                                type="tel"
                                                className="form__field"
                                                placeholder="Phone"
                                                name="phone"
                                                id="phone"
                                            />
                                            <label
                                                htmlFor="phone"
                                                className="notefication"
                                            />
                                            <input
                                                type="text"
                                                className="form__field"
                                                placeholder="Bitrth Date "
                                                name="Bitrth-Date"
                                                id="companyfield"
                                            />
                                            <label
                                                htmlFor="Bitrth-Date"
                                                className="notefication"
                                            />
                                        </div>
                                    </div>
                                    <div className="message">
                                        <textarea
                                            name="message"
                                            className="form__field1"
                                            cols="30"
                                            rows="3"
                                            placeholder="Bio"
                                        />
                                        <label
                                            htmlFor="message"
                                            className="notefication"
                                        />
                                    </div>
                                    <div class="notRopot">
                                        <input
                                            type="checkbox"
                                            name="robot"
                                            id="Delete"
                                        />
                                        <p>
                                            I agree to receive your newsletters and
                                            accept the data privacy statement
                                            <span id="">*</span>
                                        </p>
                                    </div>
                                    <label
                                        htmlFor="robot"
                                        className="notefication"
                                    />
                                    <div className="botall">
                                        <button type="submit" id="bott">
                                            submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </Overlay>
                    </div>
                </div>
            </section>
            <Footer />
        </React.Fragment>
    );
};

export default UserProfile;
