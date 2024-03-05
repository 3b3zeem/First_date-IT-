import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Advertisements.css";
import Swal from "sweetalert2";
import Chome from "../Chome/Chome";
import Footer from "../Footer/Footer";

import Aos from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";

import { FaSearch } from "react-icons/fa";
import img1 from "../../im&ve/1.jpg";
import img2 from "../../im&ve/2.jpg";
import img3 from "../../im&ve/3.jpg";
import img4 from "../../im&ve/4.jpg";

const Advertisements = () => {
  const [advertisement, setAdvertisement] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [searchedAdvertisements, setSearchedAdvertisements] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  // Fetch all products
  const getAllProducts = () => {
    fetch("https://localhost:7120/api/advertisements")
      .then((response) => response.json())
      .then((data) => {
        setAdvertisement(data);
        setSearchedAdvertisements(data); // Set searched advertisements initially
      });
  };

  // Filter advertisements based on search query
  const filterAdvertisements = (query) => {
    const filteredAds = advertisement.filter(
      (ad) =>
        ad.title.toLowerCase().includes(query.toLowerCase()) ||
        ad.companyName.toLowerCase().includes(query.toLowerCase())
    );
    setSearchedAdvertisements(filteredAds);
    setCurrentPage(1);
  };

  // Handle search input change
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    filterAdvertisements(e.target.value);
  };

  // Pagination functions
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchedAdvertisements.slice(indexOfFirstItem, indexOfLastItem); // Define currentItems here

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(searchedAdvertisements.length / itemsPerPage);

  //Delete
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
        <div className="d-flex align-items-center justify-content-center flex-column ">
          <form className="d-flex">
            <input
              className="form-control me-1"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <button className="btn btn-primary" type="submit">
              <FaSearch />
            </button>
          </form>
        </div>
        <div className="container-product-cards">
          {currentItems.map((ad) => (
            <div className="container-product-card" key={ad.adID}>
              <div className="one_card" style={{ width: "350px" }}>
                <div className="card-body">
                  <h5 className="card-title1">
                    <u>Company</u> : <span>{ad.companyName}</span>
                  </h5>
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
                      <img src={img2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={img3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={img4} alt="" />
                    </SwiperSlide>
                  </Swiper>
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
            {Array(totalPages)
              .fill()
              .map((_, i) => (
                <li
                  key={i}
                  className={`page-item ${
                    currentPage === i + 1 ? "active" : ""
                  }`}
                >
                  <button onClick={() => paginate(i + 1)} className="page-link">
                    {i + 1}
                  </button>
                </li>
              ))}
          </ul>
        </div>
        <div className="Add">
          <div className="disp-flex-add">
            <h1 className="dispText-add">Add New Advertisment From Here!</h1>
            <button className="btn-Home-add1">
              <Link to="/advertisements/add" className="Link-add1">
                Add New Advertisment
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
