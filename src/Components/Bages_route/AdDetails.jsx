import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./AdDetails.css";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";
import Footer from "../Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const AdDetails = () => {
  let { advertisementId } = useParams();
  const [product, setProduct] = useState({});
  const [review, setShowReview] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // Function to fetch advertisements
  const fetchAdvertisements = () => {
    fetch(`https://localhost:7120/api/advertisements/${advertisementId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          setProduct(data);
          setLoaded(true);
        } else {
          console.error("Empty response received");
        }
      })
      .catch((error) => console.error("Error fetching product:", error));
  };

  const shoReview = () => {
    fetch(
      `https://localhost:7120/api/advertisements/${advertisementId}/reviews`
    )
      .then((response) => response.json())
      .then((data) => {
        setShowReview(data.reviews);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
        setShowReview([]);
      });
  };

  useEffect(() => {
    fetchAdvertisements();
    shoReview();
  }, [advertisementId]);

  const [qty, setQty] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price);

  const increaseProductQty = () => {
    const newQty = qty + 1;
    setQty(newQty);
    setTotalPrice(newQty * product.price);
  };

  const decreaseProductQty = () => {
    if (qty > 1) {
      const newQty = qty - 1;
      setQty(newQty);
      setTotalPrice(newQty * product.price);
    }
  };

  return (
    <React.Fragment>
      <div className="allll">
        <div className="Advertisement-No">
          <h1>Advertisement No:&nbsp; {advertisementId}</h1>
        </div>
        <div className="container-ads">
          <div className="product-content">
            <Link to={`/company/${product.companyId}`} className="product-subtitle">
              {product.companyName}
            </Link>
            <h1 className="product-title">Ad Name: {product.title}</h1>
            <p className="product-text">Description: {product.description}</p>

            <div className="wrapper">
              <p className="p1">Post_Date : {product.validFrom}</p>
              <p className="p1">Expiry_Date : {product.validTo}</p>
              <p className="p1">
                Price : $ {loaded ? totalPrice : product.price}
              </p>
            </div>
            <div className="btn-group">
              <p className="p1">Select Number Of Persons</p>
              <div className="counter-wrapper">
                <button className="counter-btn" onClick={decreaseProductQty}>
                  <HiMinusSm className="ionicon" />
                </button>

                <span className="span" data-qty>
                  {qty}
                </span>

                <button className="counter-btn" onClick={increaseProductQty}>
                  <HiPlusSm className="ionicon " />
                </button>
              </div>
              <button className="cart-btn">
                <Link to="/products/add" className="Link-payment">
                  GO TO PAYMENT
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="swiper">
          {review.length === 0 ? (
            <p>No reviews available</p>
          ) : (
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              {review.map((review) => (
                <SwiperSlide key={review.reviewID}>
                  <div className="contant-of-rev">
                    <div className="rating-quot">
                      <FaQuoteRight className="quot-icon" />
                      <div>
                        <CiStar className="star" />
                        <FaStar className="star" />
                        <FaStar className="star" />
                        <FaStar className="star" />
                        <FaStar className="star" />
                      </div>
                    </div>
                    <div className="information-of-rating">
                      <p>User name : {review.userName}</p>
                      <p>{review.comment}</p>
                      <p>{review.datePosted}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default AdDetails;
