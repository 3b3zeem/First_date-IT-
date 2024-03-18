import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./AdDetails.css";
import Footer from "../Footer/Footer";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FaQuoteRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import Swal from "sweetalert2";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ADDetails from "./ADDetilas/ADDetails";
const AdDetails = () => {
  let { advertisementId, reviewId } = useParams();

  const [product, setProduct] = useState({});
  const [review, setShowReview] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // Function to fetch the advertisement
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

  //Function to fetch the reviews of the advertisement
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

  //Delete Review
  const deleteReview = (reviewId) => {
    Swal.fire({
      title: "Are you sure to Delete this Review!?",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://localhost:7120/api/reviews/${reviewId}`, {
          method: "DELETE",
        })
          .then(() => shoReview())
          .catch((error) => console.error("Error deleting product:", error));
      }
    });
  };

  useEffect(() => {
    fetchAdvertisements();
    shoReview();
  }, [advertisementId, reviewId]);

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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <React.Fragment>
      <div className="allll">
        <div className="Advertisement-No">
          <h1>Advertisement No:&nbsp; {advertisementId}</h1>
        </div>
        {/* <div className="container-ads">
                    <div className="all-cont-ad-de">
                        <main id="products-ad">
                            <div className="container-ad-de">
                                <div className="producat_wrapper-ad-de">
                                    <div className="producat_image-ad-de">
                                        <div className="img_thumbnail">
                                            <img src={im} alt="" />
                                            <div className="img_small">
                                                <img
                                                    src={im}
                                                    alt=""
                                                    className="active"
                                                />
                                                <img src={im} alt="" />
                                                <img src={im} alt="" />
                                                <img src={im} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                        <div className="modal">
                            <div className="modal_wrapper">
                                <img src={im} alt="" className="close_icon" />
                                <div className="producat_image_modal">
                                    <div className="img_thumbnail_modal">
                                        <img
                                            src={im}
                                            alt=""
                                            className="m_img"
                                        />
                                        <div className="img_small_modal">
                                            <img
                                                src={im}
                                                alt=""
                                                className="active"
                                            />
                                            <img src={im} alt="" />
                                            <img src={im} alt="" />
                                            <img src={im} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-content">
                        <Link
                            to={`/company/${product.companyId}`}
                            className="product-subtitle"
                        >
                            {product.companyName}
                        </Link>
                        <div className="add-name">
                            <h1 className="product-title">{product.title}</h1>
                        </div>
                        <div className="Description-of-ad">
                            <p className="product-text">
                                {product.description}
                            </p>
                        </div>

                        <div className="wrapper">
                            <p className="p1">
                                Post Date : {product.validFrom}
                            </p>
                            <p className="p1">
                                Expiry Date : {product.validTo}
                            </p>
                        </div>
                        <p className="price">
                            Price : $ {loaded ? totalPrice : product.price}
                        </p>
                        <div className="btn-group">
                            <div className="counter-wrapper">
                                <button
                                    className="counter-btn"
                                    onClick={decreaseProductQty}
                                >
                                    <HiMinusSm className="ionicon" />
                                </button>

                                <span className="span" data-qty>
                                    {qty}
                                </span>

                                <button
                                    className="counter-btn"
                                    onClick={increaseProductQty}
                                >
                                    <HiPlusSm className="ionicon " />
                                </button>
                            </div>
                            <button className="cart-btn">
                                <Link to="/booking" className="Link-payment">
                                    GO TO Booking
                                </Link>
                            </button>
                        </div>
                    </div>
                </div> */}
        <ADDetails />
        <div className="mb-5 mt-5 lalala">
          {review.length === 0 ? (
            <p>No reviews available</p>
          ) : (
            <Carousel responsive={responsive}>
              {review.map((review) => (
                <div key={review.reviewID}>
                  <div className="contant-of-rev">
                    <div className="rating-quot">
                      <FaQuoteRight className="quot-icon" />
                      <div className="stars-rating">
                        {Array.from({
                          length: Math.floor(review.rating),
                        }).map((_, index) => (
                          <FaStar
                            key={index}
                            style={{
                              color: "orange",
                            }}
                          />
                        ))}
                        {Array.from({
                          length: Math.floor(5 - review.rating),
                        }).map((_, index) => (
                          <CiStar key={index} />
                        ))}
                      </div>
                    </div>
                    <div className="information-of-rating">
                      <p>User name : {review.userName}</p>
                      <p>{review.comment}</p>
                      <p>{review.datePosted}</p>
                      <div className="review_btn">
                        <button
                          onClick={() => deleteReview(review.reviewID)}
                          className="btn-readycrev"
                        >
                          <span>Delete</span>
                        </button>

                        <Link
                          to={`/advertisements/${advertisementId}/EditReview/${
                            review.reviewID
                          }`}
                          className="btn-readycrev"
                        >
                          Edit
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          )}
        </div>
        <div className="ready-add-rev">
          <div className="disp-flex-add">
            <h1 className="dispText">You Can Add New Review From Here!</h1>

            <Link
              to={`/advertisements/${advertisementId}/addReview`}
              className="btn-ready"
            >
              Add Review
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default AdDetails;
