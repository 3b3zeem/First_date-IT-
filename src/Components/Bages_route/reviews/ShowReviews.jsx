import React, { useEffect, useState } from "react";
import "./ShowReviews.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { useParams } from "react-router-dom";

const ShowReviews = () => {
  const [review, setShowReview] = useState([]);

  let { advertisementId } = useParams();

  useEffect(() => {
    fetch(`https://localhost:7120/api/advertisements/${advertisementId}/reviews`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.reviews);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
        setShowReview([]);
      });
  }, [advertisementId]);

  return (
    <div className="all-show-rev">
      <div className="show-contant">
        <div className="title-show-rev">
          <h2>Customer opinions</h2>
        </div>
        <div className="section-center-show">
          {/* {showReview.length === 0 ? (
            <p>No reviews available</p>
          ) : ( */}
          {/* <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              {showReview.map((review) => (
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
            </Swiper> */}

          {review && review.length > 0 ? (
            review.map((reviewItem) => (
              <div key={reviewItem.reviewID}>
                <div className="information-of-rating">
                  <p>User name : {reviewItem.userName}</p>
                  <p>{reviewItem.comment}</p>
                  <p>{reviewItem.datePosted}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No reviews available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowReviews;
