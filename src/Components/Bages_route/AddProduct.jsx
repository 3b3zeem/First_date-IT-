import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  let navigate = useNavigate();

  const [advert_name, setAdvert_name] = useState("");
  const [postDate, setPostDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [details, setDetails] = useState("");
  const [company_name, setCompany_name] = useState("");
  const [company_address, setAddres] = useState("");
  const [company_phone, setPhone] = useState("");
  const [company_email, setEmail] = useState("");
  const [company_website, setWebsite] = useState("");
  const [company_StatusAr, setStatusAr] = useState("");
  const [company_StatusEn, setStatusEn] = useState("");
  const [offer_name, setOffer_name] = useState("");
  const [offer_postdate, setOffer_postdate] = useState("");
  const [offer_expirydate, setOffer_expirydate] = useState("");
  const [offer_details, setOffer_details] = useState("");

  const handleInputChange = (setter, value) => {
    setter(value);
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://localhost:7214/CreateAdvertisement", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          advert_name: advert_name,
          details: details,
          postDate: postDate,
          expiryDate: expiryDate,
          company_name: company_name,
          company_address: company_address,
          company_phone: company_phone,
          company_email: company_email,
          company_website: company_website,
          company_StatusAr: company_StatusAr,
          company_StatusEn: company_StatusEn,
          offer_name: offer_name,
          offer_postDate: offer_postdate,
          offer_expiryDateDate: offer_expirydate,
          offer_details: offer_details,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          navigate("/products");
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
              Advert name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputTitle"
              onChange={(e) => handleInputChange(setAdvert_name, e.target.value)}
              value={advert_name} // Add value attribute to control input
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
              onChange={(e) => handleInputChange(setPostDate, e.target.value)}
              value={postDate} // Add value attribute to control input
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
              onChange={(e) => handleInputChange(setExpiryDate, e.target.value)}
              value={expiryDate} // Add value attribute to control input
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
              onChange={(e) => handleInputChange(setDetails, e.target.value)}
              value={details}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCompany_name" className="form-label">
              Company name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              onChange={(e) => handleInputChange(setCompany_name, e.target.value)}
              value={company_name}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputAddress" className="form-label">
              Company Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCompany_name"
              onChange={(e) => handleInputChange(setAddres, e.target.value)}
              value={company_address}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPhone" className="form-label">
              Company Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCompany_Phone"
              onChange={(e) => handleInputChange(setPhone, e.target.value)}
              value={company_phone}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail" className="form-label">
              Company Email
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCompany_Email"
              onChange={(e) => handleInputChange(setEmail, e.target.value)}
              value={company_email}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputWebsite" className="form-label">
              Company Website
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCompany_Website"
              onChange={(e) => handleInputChange(setWebsite, e.target.value)}
              value={company_website}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputStatusAr" className="form-label">
              Company StatusAr
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCompany_StatusAr"
              onChange={(e) => handleInputChange(setStatusAr, e.target.value)}
              value={company_StatusAr}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputStatusEn" className="form-label">
              Company StatusEn
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCompany_StatusEn"
              onChange={(e) => handleInputChange(setStatusEn, e.target.value)}
              value={company_StatusEn}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputOfferName" className="form-label">
              Offer Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCompany_OfferName"
              onChange={(e) => handleInputChange(setOffer_name, e.target.value)}
              value={offer_name}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputOfferpost_date" className="form-label">
              Offer post_date
            </label>
            <input
              type="datetime-local"
              className="form-control"
              id="inputCompany_Offerpost_date"
              onChange={(e) => handleInputChange(setOffer_postdate, e.target.value)}
              value={offer_postdate}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputOfferexpiry_date" className="form-label">
              Offer expiry_date
            </label>
            <input
              type="datetime-local"
              className="form-control"
              id="inputOfferexpiry_date"
              onChange={(e) => handleInputChange(setOffer_expirydate, e.target.value)}
              value={offer_expirydate}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputOfferdetails" className="form-label">
              Offer details
            </label>
            <input
              type="text"
              className="form-control"
              id="inputOfferdetails"
              onChange={(e) => handleInputChange(setOffer_details, e.target.value)}
              value={offer_details}
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

export default AddProduct;
