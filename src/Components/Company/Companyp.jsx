import React, { useEffect, useState } from "react";
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
import { Link, useParams } from "react-router-dom";

function Companyp() {
  let { companyID } = useParams();

  const [onecompany, setOneCompany] = useState([]);

  useEffect(() => {
    fetch(`https://localhost:7120/api/Company/${companyID}`)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setOneCompany(data);
        } else {
          setOneCompany([data]);
        }
      });
  }, [companyID]);

  return (
    <React.Fragment>
      <div className="all-c">
        <div className="App-company">
          <div className="sidebar-company">
            <ul className="side-menu">
              <li className="hoverbtn">
                <Link
                  to={`/advertisements/${companyID}/add`}
                >
                  Add Advertisement
                </Link>
              </li>
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
              {onecompany.length === 0 ? (
                <p>No data available</p>
              ) : (
                onecompany.map((comp) => (
                  <div className="reminders" key={comp.companyID}>
                    <div className="header">
                      <h3>{comp.companyName}</h3>
                    </div>
                    <ul className="task_list">
                      <li className="completed">
                        <div className="task_title">
                          <p>{comp.companyAddress}</p>
                        </div>
                      </li>
                      <li className="completed">
                        <div className="task_title">
                          <p>{comp.contactInformation}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                ))
              )}

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
            </div>
          </main>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Companyp;
