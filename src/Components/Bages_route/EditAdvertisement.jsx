import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditAdvertisement = () => {
  let navigate = useNavigate();
  let { advertisementId } = useParams();
 // Assuming you have a route parameter for the product ID

  const [title, setTitle] = useState("");
  const [validFrom, setValidFrom] = useState("");
  const [validTo, setValidTo] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7120/api/advertisements/${advertisementId}`
        );
        const product = response.data;
        setTitle(product.title);
        setDescription(product.description);
        setValidFrom(product.validFrom);
        setValidTo(product.validTo);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProduct();
  }, [advertisementId]);

  const handleInputChange = (setter, value) => {
    setter(value);
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://localhost:7120/api/advertisements/${advertisementId}`, {
        title,
        description,
        validFrom,
        validTo,
      });
      console.log("Data updated successfully!");
      navigate("/advertisements");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div>
      <h1 className="mb-4">Edit Product {advertisementId}</h1>
      <form className="row g-3" onSubmit={formSubmit}>
        {/* Title */}
        <div className="col-md-6">
          <label htmlFor="inputTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="inputTitle"
            value={title}
            onChange={(e) => handleInputChange(setTitle, e.target.value)}
          />
        </div>
        {/* Description */}
        <div className="col-md-6">
          <label htmlFor="inputDescription" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="inputDescription"
            value={description}
            onChange={(e) => handleInputChange(setDescription, e.target.value)}
          />
        </div>
        {/* Description */}
        <div className="col-md-6">
          <label htmlFor="inputDescription" className="form-label">
            Post Date
          </label>
          <input
            type="datetime-local"
            className="form-control"
            id="inputPostDate"
            value={validFrom}
            onChange={(e) => handleInputChange(setValidFrom, e.target.value)}
          />
        </div>
        {/* Description */}
        <div className="col-md-6">
          <label htmlFor="inputDescription" className="form-label">
            Expiry Date
          </label>
          <input
            type="datetime-local"
            className="form-control"
            id="inputExpiryDate"
            value={validTo} // Add value attribute to control input
            onChange={(e) => handleInputChange(setValidTo, e.target.value)}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditAdvertisement;
