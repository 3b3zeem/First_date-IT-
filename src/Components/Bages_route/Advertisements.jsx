import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Advertisements.css";
import Swal from "sweetalert2";
import Chome from "../Chome/Chome";
import Footer from "../Footer/Footer";
import img1 from "../../im&ve/1.jpg";

import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";

const Advertisements = () => {
  const [advertisement, setAdvertisement] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const [searchedAdvertisements, setSearchedAdvertisements] = useState([]);

  useEffect(() => {
    getAllAdvertisements();
  }, []);

  //fetch all Advertisements
  const getAllAdvertisements = () => {
    fetch("https://localhost:7120/api/advertisements")
      .then((response) => response.json())
      .then((data) => {
        setAdvertisement(data);
        setSearchedAdvertisements(data);
      });
  };


  //Search according to input search
  const filterAdvertisementsBySearch = (query) => {
    const filteredAds = advertisement.filter(
      (ad) =>
        ad.title.toLowerCase().includes(query.toLowerCase()) ||
        ad.companyName.toLowerCase().includes(query.toLowerCase())
    );
    setSearchedAdvertisements(filteredAds);
    setCurrentPage(1);
  };

  //Filter according to Price
  const filterAdvertisementsByPriceRange = (min, max) => {
    const filteredAds = advertisement.filter(
      (ad) => ad.price >= min && ad.price <= max
    );
    setSearchedAdvertisements(filteredAds);
    setCurrentPage(1);
  };

  //handle search input
  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length >= 1) {
      filterAdvertisementsBySearch(query);
    } else {
      getAllAdvertisements();
    }
  };

  //handle max price
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

  //handle min price
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

  //pagination function
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchedAdvertisements.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(searchedAdvertisements.length / itemsPerPage);

  //Delete advertisement
  const deleteProduct = (advertisementId) => {
    Swal.fire({
      title: "Are you sure to Delete this Advertisement!?",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://localhost:7120/api/advertisements/${advertisementId}`, {
          method: "DELETE",
        })
          .then(() => getAllAdvertisements())
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
          <div className="search-block">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchInputChange}
              style={{ marginBottom: "15px" }}
            />
          </div>
          <div className="max-min-block">
            <div className="only-pri">
              <label className="text-of-max-min" htmlFor="minPrice">
                Min Price:
              </label>
              <input
                type="range"
                id="minPrice"
                name="minPrice"
                min="0"
                max="1000"
                value={minPrice}
                className="range-style"
                onChange={handleMinPriceChange}
              />
              <span className="text-of-max-min">{minPrice}</span>
            </div>
            <div className="only-pri">
              <label className="text-of-max-min" htmlFor="maxPrice">
                Max Price:
              </label>
              <input
                type="range"
                id="maxPrice"
                name="maxPrice"
                min="0"
                max="1000"
                value={maxPrice}
                className="range-style"
                onChange={handleMaxPriceChange}
              />
              <span className="text-of-max-min">{maxPrice}</span>
            </div>
          </div>
        </div>
        <div className="container-product-cards">
          {currentItems.map((ad) => (
            <div className="container-product-card" key={ad.adID}>
              <div className="one_card" style={{ width: "380px" }}>
                <div className="card-body">
                  <h5 className="card-title1">
                    <u>Company</u> : <span>{ad.companyName}</span>
                  </h5>
                  <div className="image-ss">
                    <Swiper
                      style={{
                        "--swiper-pagination-color": "#fff",
                        height: " 250px",
                      }}
                      slidesPerView={1}
                      spaceBetween={30}
                      effect={"fade"}
                      pagination={{
                        dynamicBullets: true,
                        clickable: true,
                      }}
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                      loop={true}
                      modules={[EffectFade, Autoplay, Pagination]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <img src={img1} alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={img1} alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={img1} alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={img1} alt="" />
                      </SwiperSlide>
                    </Swiper>
                  </div>
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
                    <u>From</u> : <span>{ad.validFrom}</span>
                  </p>
                  <p className="card-text">
                    <u>To</u> : <span>{ad.validTo}</span>
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
      </div>
      <Footer />
    </>
  );
};

export default Advertisements;
