import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  let navigate = useNavigate();
  let { productId } = useParams(); // Assuming you have a route parameter for the product ID

  const [advert_name, setAdvert_name] = useState("");
  const [postDate, setPostDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [details, setDetails] = useState("");

  useEffect(() => {
    // Fetch existing product data when the component mounts
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7214/GetAdvertisementById/${productId}`
        );
        const product = response.data;
        setAdvert_name(product.advert_name);
        setDetails(product.details);
        setPostDate(product.postDate);
        setExpiryDate(product.expiryDate);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleInputChange = (setter, value) => {
    setter(value);
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://localhost:7214/UpdateAdvertisement/${productId}`, {
        advert_name,
        details,
        postDate,
        expiryDate,
      });
      console.log("Data updated successfully!");
      navigate("/products");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div>
      <h1 className="mb-4">Edit Product</h1>
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
            value={advert_name}
            onChange={(e) => handleInputChange(setAdvert_name, e.target.value)}
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
            value={details}
            onChange={(e) => handleInputChange(setDetails, e.target.value)}
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
            value={postDate} // Add value attribute to control input
            onChange={(e) => handleInputChange(setPostDate, e.target.value)}
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
            value={expiryDate} // Add value attribute to control input
            onChange={(e) => handleInputChange(setExpiryDate, e.target.value)}
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

export default EditProduct;
