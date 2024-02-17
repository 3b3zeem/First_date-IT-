//=======================================
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./details.css"; // TripDetailPage.js
// import { IoIosArrowForward } from "react-icons/io";
// import { IoIosArrowBack } from "react-icons/io";
import { HiPlusSm } from "react-icons/hi";
import { HiMinusSm } from "react-icons/hi";
// import img1 from '../../im&ve/1.jpg'
import Footer from "../Footer/Footer";

const ProductDetails = () => {
    let { productId } = useParams();

    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`https://localhost:7214/GetAdvertisementById/${productId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                if (data) {
                    setProduct(data);
                } else {
                    console.error("Empty response received");
                }
            })
            .catch((error) => console.error("Error fetching product:", error));
    }, [productId]);

    // const [sliderPos, setSliderPos] = useState(0);
    // const totalSliderItems = 4;
    // const slideToNext = () => {
    //   setSliderPos((prevPos) => (prevPos < totalSliderItems - 1 ? prevPos + 1 : prevPos));
    // };

    // const slideToPrev = () => {
    //   setSliderPos((prevPos) => (prevPos > 0 ? prevPos - 1 : prevPos));
    // };

    const [qty, setQty] = useState(1);
    const productPrice = 250;
    const [totalPrice, setTotalPrice] = useState(productPrice);

    const increaseProductQty = () => {
        const newQty = qty + 1;
        setQty(newQty);
        setTotalPrice(newQty * productPrice);
    };

    const decreaseProductQty = () => {
        if (qty > 1) {
            const newQty = qty - 1;
            setQty(newQty);
            setTotalPrice(newQty * productPrice);
        }
    };

    return (
        <>
            <div className="allll">
                <div className="Advertisement-No">
                    <h1>Advertisement No:&nbsp; {productId}</h1>
                </div>
                <div className="container-ads">
                    <div className="product-content">
                        <a className="product-subtitle" href="aa">
                            COMPANY NAME
                        </a>
                        <h1 className="product-title">Ad Name:{product.advert_name}</h1>
                        <p className="product-text">Discription: {product.details}</p>

                        <div className="wrapper">

                            <p className="p1">
                                Post_Date : {product.post_date}
                            </p>
                            <p className="p1">
                                Expiry_Date : {product.expiry_date}
                            </p>
                            <p className="p1">Price : ${totalPrice}</p>

                        </div>
                        <div className="btn-group">
                            <p className="p1">Select Number Of Persons</p>
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
                                <Link
                                    to="/products/add"
                                    className="Link-payment"
                                >
                                    GO TO PAYMENT
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="Add">
                    <div className="disp-flex-add">
                        <h1 className="dispText-add">
                            All Advertisments From Here!
                        </h1>

                        <button className="btn-Home-add1">
                            <Link to="/products" className="Link-add1">
                                All Advertisements
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductDetails;
