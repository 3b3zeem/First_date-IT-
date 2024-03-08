import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Advertisements.css";
import Swal from "sweetalert2";
import Chome from "../Chome/Chome";
import Footer from "../Footer/Footer";
import { FaSearch } from "react-icons/fa";
import { CiWarning } from "react-icons/ci";

import img1 from "../../im&ve/1.jpg";

const Advertisements = () => {
  const [advertisement, setAdvertisement] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const [searchedAdvertisements, setSearchedAdvertisements] = useState([]);
  const [review, setReview] = useState([]);

  useEffect(() => {
    getAllProducts();
    getAllReviews();
  }, []);

  // Fetch all advertisements
  const getAllProducts = () => {
    fetch("https://localhost:7120/api/advertisements")
      .then((response) => response.json())
      .then((data) => {
        setAdvertisement(data);
        setSearchedAdvertisements(data);
      });
  };

  // Fetch all reviews
  const getAllReviews = () => {
    fetch("https://localhost:7120/api/reviews")
      .then((res) => res.json())
      .then((review) => {
        setReview(review);
      });
  };

  // Filter advertisements based on search query
  const filterAdvertisementsBySearch = (query) => {
    const filteredAds = advertisement.filter(
      (ad) =>
        ad.title.toLowerCase().includes(query.toLowerCase()) ||
        ad.companyName.toLowerCase().includes(query.toLowerCase())
    );
    setSearchedAdvertisements(filteredAds);
    setCurrentPage(1);
  };

  // Filter advertisements based on price query
  const filterAdvertisementsByPriceRange = (min, max) => {
    const filteredAds = advertisement.filter(
      (ad) => ad.price >= min && ad.price <= max
    );
    setSearchedAdvertisements(filteredAds);
    setCurrentPage(1);
  };

  // Handle search input change
  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length >= 1) {
      filterAdvertisementsBySearch(query);
    } else {
      getAllProducts();
    }
  };

  // Handle MinPrice input change
  const handleMinPriceChange = (e) => {
    const newMinPrice = parseInt(e.target.value);
    if (newMinPrice <= maxPrice) {
      setMinPrice(newMinPrice);
      filterAdvertisementsByPriceRange(newMinPrice, maxPrice);
    } else {
      setMinPrice(maxPrice);
      filterAdvertisementsByPriceRange(maxPrice, maxPrice);
    }
  };

  // Handle MaxPrice input change
  const handleMaxPriceChange = (e) => {
    const newMaxPrice = parseInt(e.target.value);
    if (newMaxPrice >= minPrice) {
      setMaxPrice(newMaxPrice);
      filterAdvertisementsByPriceRange(minPrice, newMaxPrice);
    } else {
      setMaxPrice(minPrice);
      filterAdvertisementsByPriceRange(minPrice, minPrice);
    }
  };

  // Pagination functions
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchedAdvertisements.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(searchedAdvertisements.length / itemsPerPage);

  //Delete Advertisement
  const deleteProduct = (advertisementId) => {
    Swal.fire({
      title: "Are you sure to Delete this product!?",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://localhost:7120/api/advertisements/${advertisementId}`, {
          method: "DELETE",
        })
          .then(() => getAllProducts())
          .catch((error) => console.error("Error deleting product:", error));
      }
    });
  };

  return (
    <>
      <Chome />
      <div className="container-product">
        <h1>Advertisements</h1>

        <div className="form-container">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchQuery}
            onChange={handleSearchInputChange}
            style={{ marginBottom: "15px" }}
          />
          <div>
            <label style={{ marginRight: "7px" }} htmlFor="minPrice">
              Min Price :
            </label>
            <input
              type="range"
              id="minPrice"
              name="minPrice"
              min="0"
              max="1000"
              value={minPrice}
              onChange={handleMinPriceChange}
            />
            <span>{minPrice}</span>
          </div>
          <br />
          <div>
            <label style={{ marginRight: "7px" }} htmlFor="maxPrice">
              Max Price :
            </label>
            <input
              type="range"
              id="maxPrice"
              name="maxPrice"
              min="0"
              max="1000"
              value={maxPrice}
              onChange={handleMaxPriceChange}
            />
            <span>{maxPrice}</span>
          </div>
          <button
            className="btn btn-primary col-1"
            type="button"
            onClick={filterAdvertisementsByPriceRange}
          >
            <FaSearch />
          </button>
        </div>
        <div className="container-product-cards">
          {currentItems.length === 0 && (
            <div className="d-flex align-items-center justify-content-center">
              <CiWarning style={{fontSize:'50px' , color : 'gold' , marginRight: '8px'}} />
              <p style={{ marginTop: "30px", fontSize: "30px", color: "#ddd" }}>
                Not found
              </p>
            </div>
          )}
          {currentItems.map((ad) => (
            <div className="container-product-card" key={ad.adID}>
              <div className="one_card" style={{ width: "350px" }}>
                <div className="card-body">
                  <h5 className="card-title1">
                    <u>Company</u> : <span>{ad.companyName}</span>
                  </h5>
                  <img src={img1} alt="" />
                  <h5 className="card-title1">
                    <u>Title</u> : <span>{ad.title}</span>
                  </h5>
                  <p className="card-text">
                    <u>Details</u> : <span>{ad.description}</span>
                  </p>
                  <p className="card-text">
                    <u>Price</u> : <span>{ad.price}$</span>
                  </p>
                  <p className="card-text">
                    <u>validFrom</u> : <span>{ad.validFrom}</span>
                  </p>
                  <p className="card-text">
                    <u>Expiry Date</u> : <span>{ad.validTo}</span>
                  </p>
                </div>
                <div className="buttons">
                  <button
                    onClick={() => deleteProduct(ad.adID)}
                    className="btn-Home"
                  >
                    <span>Delete</span>
                  </button>
                  <button className="btn-Home">
                    <Link to={`/advertisements/${ad.adID}`} className="Link">
                      View
                    </Link>
                  </button>
                  <button className="btn-Home">
                    <Link
                      to={`/advertisements/${ad.adID}/edit`}
                      className="Link"
                    >
                      Edit
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <ul className="pagination-list">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                onClick={() => paginate(currentPage - 1)}
                className="page-link"
              >
                Previous
              </button>
            </li>
            <li className={`page-item ${currentPage === 1 ? "active" : ""}`}>
              <button onClick={() => paginate(1)} className="page-link">
                1
              </button>
            </li>
            {currentPage > 2 && (
              <li className="page-item disabled">
                <button className="page-link">...</button>
              </li>
            )}
            {currentPage > 1 && currentPage < totalPages && (
              <li className={`page-item ${currentPage !== 1 ? "active" : ""}`}>
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

        <div>
          {review.map((rev) => (
            <div key={rev.reviewID}>
              <div>
                <h5>
                  <u>userName</u> : <span>{rev.userName}</span>
                </h5>
                <p>
                  <u>rating</u> : <span>{rev.rating}</span>
                </p>
                <p>
                  <u>comment</u> : <span>{rev.comment}</span>
                </p>
                <p>
                  <u>datePosted</u> : <span>{rev.datePosted}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="Add">
          <div className="disp-flex-add">
            <h1 className="dispText-add">Add New Advertisement From Here!</h1>
            <button className="btn-Home-add1">
              <Link to="/advertisements/add" className="Link-add1">
                Add New Advertisement
              </Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Advertisements;
