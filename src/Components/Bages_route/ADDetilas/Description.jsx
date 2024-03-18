import React, { useEffect, useState } from "react";
import plus from "./Pictures/icon-plus.svg";
import minus from "./Pictures/icon-minus.svg";
import "./ADDetails.css";
import { Link, useParams } from "react-router-dom";

const Description = () => {
    let { advertisementId} = useParams();

    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
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

    useEffect(() => {
        fetchAdvertisements();
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
        <section className="description">
            <Link to={`/company/${product.companyId}`}>
                <p className="pre">{product.companyName}</p>
            </Link>
            <h1>{product.title}</h1>
            <p className="desc">{product.description}</p>
            <div className="price">
                <p className="p1">Post Date : {product.validFrom}</p>
                <p className="p1">Expiry Date : {product.validTo}</p>
            </div>
            <div className="price">
                <div className="main-tag">
                    <p>Price : $ {loaded ? totalPrice : product.price}</p>
                    {/* <p>50%</p> */}
                </div>
                {/* <s>$250.00</s> */}
            </div>

            <div className="buttons">
                <div className="amount">
                    <button
                    className="but-minus-plus"
                        onClick={decreaseProductQty}
                    >
                        <img src={minus} alt="icon-minus" />
                    </button>

                    <span className="span" data-qty>
                        {qty}
                    </span>

                    <button
                                        className="but-minus-plus"
                        onClick={increaseProductQty}
                    >
                        <img src={plus} alt="icon-plus" />
                    </button>
                </div>
                <button className="add-to-cart">
                    <Link className="text-of-bott-go" to="/booking">GO TO Booking</Link>
                </button>
            </div>
        </section>
    );
};

export default Description;
