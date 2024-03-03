import React, { useState } from "react";
import "./Companyp.css";
import { FaUser } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { MdOutlineVisibility } from "react-icons/md";
import { LuDollarSign } from "react-icons/lu";
import { SiSimpleanalytics } from "react-icons/si";
import { MdContentPaste } from "react-icons/md";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { ImUsers } from "react-icons/im";

function Companyp() {
    return (
        <div className="all-c">
            <div className="App-company">
                <div className="sidebar-company">
                    <ul className="side-menu">
                        <li className="hoverbtn">
                            <a href="#/">
                                <MdOutlineDashboardCustomize className="bx-side" />
                                Dashboard
                            </a>
                        </li>
                        <li className="">
                            <a href="#/">
                                <MdContentPaste className="bx-side" />
                                Content
                            </a>
                        </li>
                        <li>
                            <a href="#/">
                                <SiSimpleanalytics className=" bx-side" />
                                Analytics
                            </a>
                        </li>

                        <li>
                            <a href="#/">Customize</a>
                        </li>
                        <li>
                            <a href="#/">
                                <ImUsers className="bx-side" />
                                Users
                            </a>
                        </li>
                        <li>
                            <a href="#/">
                                <IoSettingsOutline className="bx-side" />
                                Settings
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="content">
                <main>
                    <div className="header">
                        <h1>Dashboard</h1>
                        <ul className="breadcrumb">
                            <li>
                                <a href="#/" className="active">
                                    Analytics
                                </a>
                            </li>
                            /
                            <li>
                                <a href="#/">Content</a>
                            </li>
                        </ul>
                    </div>

                    <ul className="cards">
                        <li>
                            <FaUser className="bx bx-group" />

                            <span className="info">
                                <h3>7,373</h3>
                                <p>New Users</p>
                            </span>
                        </li>
                        <li>
                            <TbBrandBooking className="bx bx-cart-add" />

                            <span className="info">
                                <h3>9,373</h3>
                                <p>Total Orders</p>
                            </span>
                        </li>
                        <li>
                            <MdOutlineVisibility className="bx bx-line-chart" />

                            <span className="info">
                                <h3>5,373</h3>
                                <p>Site Visits</p>
                            </span>
                        </li>
                        <li>
                            <LuDollarSign className="bx bx-dollar-circle" />

                            <span className="info">
                                <h3>$6,373</h3>
                                <p>This Month</p>
                            </span>
                        </li>
                    </ul>

                    <div className="bottom_data">
                        <div className="orders">
                            <div className="header">
                                <h3>Recent Orders</h3>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>User Name</th>
                                        <th>Email</th>
                                        <th>Date</th>
                                        <th />
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>103326</td>
                                        <td class="img_content">
                                            <img src="./img/1.jpg" alt="" />
                                            <p>John Doe</p>
                                        </td>
                                        <td>admin@onlineittuts.com</td>
                                        <td>6th Sep 2025</td>
                                        <td />
                                    </tr>
                                    <tr>
                                        <td>103626</td>
                                        <td class="img_content">
                                            <img src="./img/2.jpg" alt="" />
                                            <p>Jullee Smith</p>
                                        </td>
                                        <td>admin@onlineittuts.com</td>
                                        <td>6th Sep 2025</td>
                                        <td />
                                    </tr>
                                    <tr>
                                        <td>103926</td>
                                        <td class="img_content">
                                            <img src="./img/3.jpg" alt="" />
                                            <p>Willims</p>
                                        </td>
                                        <td>admin@onlineittuts.com</td>
                                        <td>6th Sep 2025</td>
                                        <td />
                                    </tr>
                                    <tr>
                                        <td>103326</td>
                                        <td class="img_content">
                                            <img src="./img/1.jpg" alt="" />
                                            <p>John Doe</p>
                                        </td>
                                        <td>admin@onlineittuts.com</td>
                                        <td>6th Sep 2025</td>
                                        <td />
                                    </tr>
                                    <tr>
                                        <td>103626</td>
                                        <td class="img_content">
                                            <img src="./img/2.jpg" alt="" />
                                            <p>Jullee Smith</p>
                                        </td>
                                        <td>admin@onlineittuts.com</td>
                                        <td>6th Sep 2025</td>
                                        <td />
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="reminders">
                            <div className="header">
                                <h3>Reminders</h3>
                            </div>
                            <ul className="task_list">
                                <li class="completed">
                                    <div class="task_title">
                                        <p>Start Our Meeting</p>
                                    </div>
                                </li>
                                <li class="completed">
                                    <div class="task_title">
                                        <p>Analysis Our Site</p>
                                    </div>
                                </li>

                                <li class="uncomplete">
                                    <div class="task_title">
                                        <p>Play Snooker</p>
                                    </div>
                                </li>
                                <li class="completed">
                                    <div class="task_title">
                                        <p>Start Our Meeting</p>
                                    </div>
                                </li>
                                <li class="uncomplete">
                                    <div class="task_title">
                                        <p>Play Snooker</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Companyp;
