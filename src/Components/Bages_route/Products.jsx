import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import Swal from "sweetalert2";
import Chome from "../Chome/Chome";
import Footer from "../Footer/Footer";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Products = () => {
  const [advertisement, setProducts] = useState([]);

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
  const deleteProduct = (advertisementId) => {
    Swal.fire({
      title: "Are you sure to Delete this product!?",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://localhost:7214/${advertisementId}`, {
          method: "DELETE",
        })
          .then(() => getAllProducts())
          .catch((error) => console.error("Error deleting product:", error));
      }
    });
  };

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <>
      <Chome />
      <div className="container-product">
        <h1>Advertisments</h1>
        <div className="container-product-cards">
          {advertisement.map((advertisement) => {
            return (
              <div className="container-product-card" key={advertisement.id}>
                <div className="one_card" style={{ width: "350px" }}>
                  <div className="card-body">
                    <h5 className="card-title1">
                      <u>Title</u> : <span>{advertisement.advert_name}</span>
                    </h5>
                    <p className="card-text">
                      <u>Details</u> : <span>{advertisement.details}</span>
                    </p>
                    <p className="card-text">
                      <u>Post Date</u> : <span>{advertisement.post_date}</span>
                    </p>
                    <p className="card-text">
                      <u>Expiry Date</u> : <span>{advertisement.expiry_date}</span>
                    </p>
                  </div>
                  <div className="buttons">
                    <button
                      onClick={() => deleteProduct(advertisement.id)}
                      className="btn-Home"
                    >
                      <span>Delete</span>
                    </button>
                    <button className="btn-Home">
                      <Link to={`/advertisements/${advertisement.id}`} className="Link">
                        View
                      </Link>
                    </button>
                    <button className="btn-Home">
                      <Link
                        to={`/advertisements/${advertisement.id}/edit`}
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
            <h1 className="dispText-add">Add New Advertisment From Here!</h1>
            <button className="btn-Home-add1">
              <Link to="/products/add" className="Link-add1">
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
