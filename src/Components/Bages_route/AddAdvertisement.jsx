import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddAdvertisement = () => {
  let navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [companyID, setCompanyID] = useState(0);
  const [companyName, setCompanyName] = useState("");
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
          companyID : companyID,
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
    <div>
      <div className="container">
        <h1 className="mb-4">Add New Product</h1>
        <form className="row g-3" onSubmit={formSubmit}>
        {/* Title */}
        <div className="col-md-6">
            <label htmlFor="inputTitle" className="form-label">
              Company ID
            </label>
            <input
              type="text"
              className="form-control"
              id="inputTitle"
              onChange={(e) => handleInputChange(setCompanyID, e.target.value)}
              value={companyID} // Add value attribute to control input
            />
          </div>
          {/* Title */}
        <div className="col-md-6">
            <label htmlFor="inputTitle" className="form-label">
              Company Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputTitle"
              onChange={(e) => handleInputChange(setCompanyName, e.target.value)}
              value={companyName} // Add value attribute to control input
            />
          </div>
          {/* Title */}
          <div className="col-md-6">
            <label htmlFor="inputTitle" className="form-label">
              Advert name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputTitle"
              onChange={(e) => handleInputChange(setTitle, e.target.value)}
              value={title} // Add value attribute to control input
            />
          </div>
          {/* Post Date */}
          <div className="col-md-6">
            <label htmlFor="inputPostDate" className="form-label">
              Post Date
            </label>
            <input
              type="datetime-local"
              className="form-control"
              id="inputPostDate"
              onChange={(e) => handleInputChange(setValidFrom, e.target.value)}
              value={validFrom} // Add value attribute to control input
            />
          </div>
          {/* Expiry Date */}
          <div className="col-md-6">
            <label htmlFor="inputExpiryDate" className="form-label">
              Expiry Date
            </label>
            <input
              type="datetime-local"
              className="form-control"
              id="inputExpiryDate"
              onChange={(e) => handleInputChange(setValidTo, e.target.value)}
              value={validTo} // Add value attribute to control input
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputDescription" className="form-label">
              Details
            </label>
            <input
              type="text"
              className="form-control"
              id="inputDescription"
              onChange={(e) => handleInputChange(setDescription, e.target.value)}
              value={description}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputDescription" className="form-label">
              Price
            </label>
            <input
              type="text"
              className="form-control"
              id="inputDescription"
              onChange={(e) => handleInputChange(setPrice, e.target.value)}
              value={price}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAdvertisement;
