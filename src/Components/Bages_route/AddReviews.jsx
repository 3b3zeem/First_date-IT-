import React, { useState } from "react";
import "./AddReviews.css";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const AddReviews = () => {
  let navigate = useNavigate();
  let { advertisementId } = useParams();

  const [userID, setUserID] = useState(0);
  const [username, setUsername] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [datePosted, setDatePosted] = useState("");

  const handleInputChange = (setter, value) => {
    setter(value);
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://localhost:7120/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          adId: advertisementId,
          userID: userID,
          username: username,
          rating: rating,
          comment: comment,
          datePosted: datePosted,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
          navigate(`/advertisements/${advertisementId}`);
        });
      console.log("Data sent successfully!");
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

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
            <form className="coll-add-rev" onSubmit={formSubmit}>
              <div className="only-input">
                <label htmlFor="inputTitle" className="form-label-add-rev">
                  AD ID
                </label>
                <input
                  type="text"
                  value={advertisementId}
                  readOnly
                  className="input-feild6"
                  id="inputTitle"
                />
              </div>

              <div className="only-input">
                <label htmlFor="inputTitle" className="form-label-add-rev">
                  User ID
                </label>
                <input
                  type="text"
                  className="input-feild6"
                  onChange={(e) => handleInputChange(setUserID, e.target.value)}
                  value={userID}
                  id="inputTitle"
                />
              </div>

              <div className="only-input">
                <label htmlFor="inputTitle" className="form-label-add-rev">
                  User name
                </label>
                <input
                  type="text"
                  className="input-feild6"
                  onChange={(e) =>
                    handleInputChange(setUsername, e.target.value)
                  }
                  value={username}
                  id="inputTitle"
                />
              </div>

              <div className="only-input">
                <label htmlFor="inputPostDate" className="form-label-add-rev">
                  Rating
                </label>
                <input
                  type="number"
                  className="input-feild6"
                  onChange={(e) => {
                    const value = e.target.value;
                    if (Number.isInteger(parseFloat(value))) {
                      handleInputChange(setRating, value);
                    }
                  }}
                  value={rating}
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
                  onChange={(e) =>
                    handleInputChange(setComment, e.target.value)
                  }
                  value={comment}
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
                  onChange={(e) =>
                    handleInputChange(setDatePosted, e.target.value)
                  }
                  value={datePosted}
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
