import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./EditAdvertisement.css";
const EditAdvertisement = () => {
  let navigate = useNavigate();
  let { advertisementId } = useParams();
  // Assuming you have a route parameter for the product ID

  const [title, setTitle] = useState("");
  const [validFrom, setValidFrom] = useState("");
  const [validTo, setValidTo] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

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
        setPrice(product.price);
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
      await axios.put(
        `https://localhost:7120/api/advertisements/${advertisementId}`,
        {
          title,
          description,
          validFrom,
          validTo,
          price,
        }
      );
      console.log("Data updated successfully!");
      navigate("/advertisements");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="con-Edit-ad">
      <div className="container-contant-Edit">
        <h1 className="ad-title-edit">Edit AD {advertisementId}</h1>
        <div className="form-Edit-ad">
          <div className="image-of-contact-ad-edit">
            {/* <h2>Get in Touch!</h2>
            <p>
              We will love to talk to you, get started by filling the details
              below and submit.
            </p> */}
          </div>
          <div className="contant-of-Edit-ad">
            <form className="coll-Edit" onSubmit={formSubmit}>
              {/* Title */}

              <div className="only-input-edit">
                <label htmlFor="inputTitle" className="form-label-edit">
                  Title
                </label>
                <input
                  type="text"
                  className="input-feild7"
                  id="inputTitle"
                  value={title}
                  onChange={(e) => handleInputChange(setTitle, e.target.value)}
                />
              </div>
              {/* Description */}
              <div className="only-input-edit">
                <label htmlFor="inputDescription" className="form-label-edit">
                  Description
                </label>
                <input
                  type="text"
                  className="input-feild7"
                  id="inputDescription"
                  value={description}
                  onChange={(e) =>
                    handleInputChange(setDescription, e.target.value)
                  }
                />
              </div>
              <div className="only-input-edit">
                <label htmlFor="inputDescription" className="form-label-edit">
                  Price
                </label>
                <input
                  type="text"
                  className="input-feild7"
                  id="inputDescription"
                  value={price}
                  onChange={(e) => handleInputChange(setPrice, e.target.value)}
                />
              </div>
              {/* Description */}
              <div className="only-input-edit">
                <label htmlFor="inputDescription" className="form-label-edit">
                  Post Date
                </label>
                <input
                  type="datetime-local"
                  className="input-feild7"
                  id="inputPostDate"
                  value={validFrom}
                  onChange={(e) =>
                    handleInputChange(setValidFrom, e.target.value)
                  }
                />
              </div>
              {/* Description */}
              <div className="only-input-edit">
                <label htmlFor="inputDescription" className="form-label-edit">
                  Expiry Date
                </label>
                <input
                  type="datetime-local"
                  className="input-feild7"
                  id="inputExpiryDate"
                  value={validTo} // Add value attribute to control input
                  onChange={(e) =>
                    handleInputChange(setValidTo, e.target.value)
                  }
                />
              </div>

              <div className="all-btn-edit">
                <button type="submit" className="btn-readyc5">
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

export default EditAdvertisement;
