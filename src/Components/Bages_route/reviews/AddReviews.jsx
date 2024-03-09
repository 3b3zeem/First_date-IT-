import React from "react";
import "./AddReviews.css";

const AddReviews = () => {
  return (
    <div className="all-reviews-con">
      <div className="container-contant-Review">
        <h1 className="ad-title-rev">Add New Reviwe From Here </h1>
        <div className="form-add-rev">
          <div className="image-of-contact-rev">
            <h2>Put Your Fingerprint!</h2>
            <p>We will love to make your rating</p>
          </div>
          <div className="contant-of-add-rev">
            <form className="coll-add-rev">
              <div className="only-input">
                <label htmlFor="inputTitle" className="form-label-add-rev">
                  AD ID
                </label>
                <input type="text" className="input-feild6" id="inputTitle" />
              </div>
              <div className="only-input">
                <label htmlFor="inputTitle" className="form-label-add-rev">
                  User ID
                </label>
                <input type="text" className="input-feild6" id="inputTitle" />
              </div>
              <div className="only-input">
                <label htmlFor="inputTitle" className="form-label-add-rev">
                  User name
                </label>
                <input type="text" className="input-feild6" id="inputTitle" />
              </div>
              <div className="only-input">
                <label htmlFor="inputPostDate" className="form-label-add-rev">
                  Rating
                </label>
                <input
                  type="text"
                  className="input-feild6"
                  id="inputPostDate"
                />
              </div>
              <div className="only-input">
                <label htmlFor="inputExpiryDate" className="form-label-add-rev">
                  Comment
                </label>
                <input
                  type="text"
                  className="input-feild6"
                  id="inputExpiryDate"
                />
              </div>
              <div className="only-input">
                <label
                  htmlFor="inputDescription"
                  className="form-label-add-rev"
                >
                  Date Posted
                </label>
                <input
                  type="datetime-local"
                  className="input-feild6"
                  id="inputDescription"
                />
              </div>

              <div className="all-btn">
                <button type="submit" className="btn-readyc4">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReviews;
