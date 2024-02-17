import React from "react";
import './Chome.css' 
import { Link } from "react-router-dom";

const Chome =()=>{
    return(
        <section className="home1">
            <div className="secContainer container">
                <div className="homeText">
                    <h1 className="title">
                         Our Advertisment 
                    </h1>
                    <p className="subTitle">
                    We are very happy to have you with us   
                    </p>
                    <button className="btn-Home">
                        <Link to='/' className="Link">GO BACK</Link>
                    </button>
                </div>
            </div>
        </section>
    );
}
export default Chome;