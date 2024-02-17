import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import Swal from "sweetalert2";
import Chome from "../Chome/Chome";
import Footer from "../Footer/Footer";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts();
    }, []);

    //All products
    const getAllProducts = () => {
        fetch("https://localhost:7214/GetAllAdvertisement")
            .then((response) => response.json())
            .then((data) => setProducts(data));
    };

    // Delete products
    const deleteProduct = (productId) => {
        Swal.fire({
            title: "Are you sure to Delete this product!?",
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://localhost:7214/${productId}`, {
                    method: "DELETE",
                })
                    .then(() => getAllProducts())
                    .catch((error) =>
                        console.error("Error deleting product:", error)
                    );
            }
        });
    };

    return (
        <>
            <Chome />
            <div className="container-product">
                <h1>Advertisments</h1>
                <div className="container-product-cards">
                    {products.map((product) => {
                        return (
                            <div
                                className="container-product-card"
                                key={product.id}
                            >
                                <div
                                    className="onecard"
                                    style={{ width: "350px" }}
                                >
                                    <div className="card-body">
                                        <h5 className="card-title1">
                                            <u>Title:</u>
                                            <span>{product.advert_name}</span>
                                        </h5>
                                        <p className="card-text">
                                            <u>Details:</u>{" "}
                                            <span>{product.details}</span>
                                        </p>
                                        <p className="card-text">
                                            <u>Post Date:</u>{" "}
                                            <span>{product.post_date}</span>
                                        </p>
                                        <p className="card-text">
                                            <u>Expiry Date:</u>{" "}
                                            <span>{product.expiry_date}</span>
                                        </p>
                                    </div>
                                    <div className="buttons">
                                        <button
                                            onClick={() =>
                                                deleteProduct(product.id)
                                            }
                                            className="btn-Home"
                                        >
                                            <span>Delete</span>
                                        </button>
                                        <button className="btn-Home">
                                            <Link
                                                to={`/products/${product.id}`}
                                                className="Link"
                                            >
                                                View
                                            </Link>
                                        </button>
                                        <button className="btn-Home">
                                            <Link
                                                to={`/products/${
                                                    product.id
                                                }/edit`}
                                                className="Link"
                                            >
                                                Edit
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="Add">
                    <div className="disp-flex-add">
                        <h1 className="dispText-add">
                            Add New Advertisment From Here!
                        </h1>

                        <button className="btn-Home-add1">
                            <Link
                                to="/products/add"
                                className="Link-add1"
                            >
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

export default Products;
