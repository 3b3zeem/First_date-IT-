import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./AddAdvertisement.css";

const AddAdvertisement = () => {
  let navigate = useNavigate();
  let { companyID , companyName } = useParams();

  const [title, setTitle] = useState("");
  const [validFrom, setValidFrom] = useState("");
  const [validTo, setValidTo] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const handleInputChange = (setter, value) => {
    setter(value);
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://localhost:7120/api/advertisements", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          companyID: companyID,
          companyName: companyName,
          title: title,
          description: description,
          validFrom: validFrom,
          validTo: validTo,
          price: price,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          navigate("/advertisements");
        });
      console.log("Data sent successfully!");
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <React.Fragment>
      <div className="con-add-ad">
        <div className="container-contant-add">
          <h1 className="ad-title">Add New Advertisement</h1>
          <div className="form-add-ad">
            <div className="image-of-contact-ad">
            </div>
            <div className="contant-of-add-ad">
              <form className="coll-add" onSubmit={formSubmit}>
                <div className="only-input">
                  <label htmlFor="inputTitle" className="form-label-add">
                    Company ID
                  </label>
                  <input
                    type="text"
                    className="input-feild6"
                    id="inputTitle"
                    readOnly
                    value={companyID}
                  />
                </div>

                <div className="only-input">
                  <label htmlFor="inputTitle" className="form-label-add">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="input-feild6"
                    id="inputTitle"
                    value={companyName}
                  />
                </div>

                <div className="only-input">
                  <label htmlFor="inputTitle" className="form-label-add">
                    Advert name
                  </label>
                  <input
                    type="text"
                    className="input-feild6"
                    id="inputTitle"
                    onChange={(e) =>
                      handleInputChange(setTitle, e.target.value)
                    }
                    value={title}
                  />
                </div>

                <div className="only-input">
                  <label htmlFor="inputPostDate" className="form-label-add">
                    Post Date
                  </label>
                  <input
                    type="datetime-local"
                    className="input-feild6"
                    id="inputPostDate"
                    onChange={(e) =>
                      handleInputChange(setValidFrom, e.target.value)
                    }
                    value={validFrom}
                  />
                </div>

                <div className="only-input">
                  <label htmlFor="inputExpiryDate" className="form-label-add">
                    Expiry Date
                  </label>
                  <input
                    type="datetime-local"
                    className="input-feild6"
                    id="inputExpiryDate"
                    onChange={(e) =>
                      handleInputChange(setValidTo, e.target.value)
                    }
                    value={validTo}
                  />
                </div>

                <div className="only-input">
                  <label htmlFor="inputDescription" className="form-label-add">
                    Details
                  </label>
                  <input
                    type="text"
                    className="input-feild6"
                    id="inputDescription"
                    onChange={(e) =>
                      handleInputChange(setDescription, e.target.value)
                    }
                    value={description}
                  />
                </div>

                <div className="only-input">
                  <label htmlFor="inputDescription" className="form-label-add">
                    Price
                  </label>
                  <input
                    type="text"
                    className="input-feild6"
                    id="inputDescription"
                    onChange={(e) =>
                      handleInputChange(setPrice, e.target.value)
                    }
                    value={price}
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
    </React.Fragment>
  );
};

export default AddAdvertisement;
