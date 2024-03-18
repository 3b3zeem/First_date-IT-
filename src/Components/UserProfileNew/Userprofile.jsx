import React, { useEffect, useState } from "react";
import "./Userprofile.css";
import { FaUser } from "react-icons/fa";
import { MdOutlineVisibility } from "react-icons/md";
import { LuDollarSign } from "react-icons/lu";
import { MdContentPaste } from "react-icons/md";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

import Overlay from "../Overlay/Overlay";
import authService from "../../Service/auth-service";
function Userprofile() {
  const [isOverlayOpne, setisOverlayOpne] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const [searchedAdvertisements, setSearchedAdvertisements] = useState([]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchedAdvertisements.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(searchedAdvertisements.length / itemsPerPage);

  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);


  return (
    <React.Fragment>
      <div className="all-user">
        <div className="App-user">
          <div className="sidebar-user">
            <ul className="side-menu-user">
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
                  <IoSettingsOutline className="bx-side" />
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="content-user">
          <main>
            <div className="header">
              <h1>Dashboard</h1>
            </div>

            <ul className="cards">
              <li>
                <FaUser className="bx bx-group" />

                <span className="info">
                  <h3>3</h3>
                  <p>total trips</p>
                </span>
              </li>

              <li>
                <MdOutlineVisibility className="bx bx-line-chart" />

                <span className="info">
                  <h3>3</h3>
                  <p>box</p>
                </span>
              </li>
              <li>
                <LuDollarSign className="bx bx-dollar-circle" />

                <span className="info">
                  <h3>$6,373</h3>
                  <p>credit</p>
                </span>
              </li>
            </ul>

            <div className="bottom_data">
              <div className="orders">
                <div className="header">
                  <h3>User Information</h3>
                </div>
                <div className="form-and-pro">
                  <div className="form-user-pro">
                    <form className="coll-add">
                      <div className="only-input">
                        <label htmlFor="inputTitle" className="form-label-add">
                          User ID
                        </label>
                        <input
                          type="text"
                          className="input-feild6"
                          id="inputTitle"
                          value={currentUser?.userID || ""}
                          readOnly
                        />
                      </div>
                      {/* Title */}
                      <div className="only-input">
                        <label htmlFor="inputTitle" className="form-label-add">
                          User Name
                        </label>
                        <input
                          type="text"
                          className="input-feild6"
                          value={currentUser?.username || ""}
                          id="inputTitle"
                          readOnly
                        />
                      </div>
                      <div className="only-input">
                        <label htmlFor="inputTitle" className="form-label-add">
                          First Name 
                        </label>
                        <input
                          type="email"
                          className="input-feild6"
                          value={currentUser?.firstName || ""}
                          id="inputTitle"
                          readOnly
                        />
                      </div>
                      <div className="only-input">
                        <label htmlFor="inputTitle" className="form-label-add">
                          Last Name
                        </label>
                        <input
                          type="email"
                          className="input-feild6"
                          value={currentUser?.lastName || ""}
                          id="inputTitle"
                          readOnly
                        />
                      </div>
                      {/* Title */}
                      <div className="only-input">
                        <label htmlFor="inputTitle" className="form-label-add">
                          Email
                        </label>
                        <input
                          type="email"
                          className="input-feild6"
                          value={currentUser?.email || ""}
                          id="inputTitle"
                          readOnly
                        />
                      </div>
                    </form>
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
                        onClick={() => setisOverlayOpne(!isOverlayOpne)}
                      >
                        Edit profile
                      </button>
                    </div>
                  </div>
                  <Overlay
                    isOpen={isOverlayOpne}
                    onClose={() => setisOverlayOpne(!isOverlayOpne)}
                  >
                    <div className="conofbot">
                      <div className="discription">
                        <div className="text">Edit your information</div>
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
                            <label htmlFor="fname" className="notefication" />
                            <input
                              type="email"
                              className="form__field"
                              placeholder="Email"
                              name="email"
                              id="email"
                            />
                            <label htmlFor="email" className="notefication" />

                            <input
                              type="text"
                              className="form__field"
                              placeholder="Addres"
                              name="city"
                              id="city"
                            />
                            <label htmlFor="city" className="notefication" />
                          </div>
                          <div className="section1">
                            <input
                              type="text"
                              className="form__field"
                              placeholder="Last Name"
                              name="lname"
                              id="lname"
                            />
                            <label htmlFor="lname" className="notefication" />
                            <input
                              type="tel"
                              className="form__field"
                              placeholder="Phone"
                              name="phone"
                              id="phone"
                            />
                            <label htmlFor="phone" className="notefication" />
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
                          <label htmlFor="message" className="notefication" />
                        </div>
                        <div class="notRopot">
                          <input type="checkbox" name="robot" id="Delete" />
                          <p>
                            I agree to receive your newsletters and accept the
                            data privacy statement
                            <span id="">*</span>
                          </p>
                        </div>
                        <label htmlFor="robot" className="notefication" />
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
            </div>
            <div className="bottom_data">
              <div className="orders">
                <div className="header">
                  <h3>User Orders</h3>
                </div>
                <div>
                  <table className="table1">
                    <thead>
                      <tr>
                        <th>AD ID</th>
                        <th>AD Name</th>
                        <th>Company Name</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentItems.map((item) => (
                        <tr key={item.id}>
                          <td>{item.adId}</td>
                          <td>{item.adName}</td>
                          <td>{item.companyName}</td>
                          <td>{item.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="pagination">
                    <ul className="pagination-list">
                      <li
                        className={`page-item ${
                          currentPage === 1 ? "disabled" : ""
                        }`}
                      >
                        <button
                          onClick={() => paginate(currentPage - 1)}
                          className="page-link"
                        >
                          Previous
                        </button>
                      </li>
                      <li
                        className={`page-item ${
                          currentPage === 1 ? "active" : ""
                        }`}
                      >
                        <button
                          onClick={() => paginate(1)}
                          className="page-link"
                        >
                          1
                        </button>
                      </li>
                      {currentPage > 2 && (
                        <li className="page-item disabled">
                          <button className="page-link">...</button>
                        </li>
                      )}
                      {currentPage > 1 && currentPage < totalPages && (
                        <li
                          className={`page-item ${
                            currentPage !== 1 ? "active" : ""
                          }`}
                        >
                          <button className="page-link">{currentPage}</button>
                        </li>
                      )}
                      {currentPage < totalPages - 1 && (
                        <li className="page-item disabled">
                          <button className="page-link">...</button>
                        </li>
                      )}
                      {totalPages > 1 && (
                        <li
                          className={`page-item ${
                            currentPage === totalPages ? "active" : ""
                          }`}
                        >
                          <button
                            onClick={() => paginate(totalPages)}
                            className="page-link"
                          >
                            {totalPages}
                          </button>
                        </li>
                      )}
                      <li
                        className={`page-item ${
                          currentPage === totalPages ? "disabled" : ""
                        }`}
                      >
                        <button
                          onClick={() => paginate(currentPage + 1)}
                          className="page-link"
                        >
                          Next
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Userprofile;
