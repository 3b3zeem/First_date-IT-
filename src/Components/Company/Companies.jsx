import React, { useEffect, useState } from "react";
import "./Companies.css";
import Footer from '../Footer/Footer'

import img1 from "../../im&ve/company/download (1).png";
import { CiWarning } from "react-icons/ci";
import { Link } from "react-router-dom";

const Companies = () => {
  const [company, setCompany] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedCompanies, setSearchedCompanies] = useState([]);

  useEffect(() => {
    getAllCompanies();
  }, []);

  const getAllCompanies = () => {
    fetch("https://localhost:7120/api/Company")
      .then((response) => response.json())
      .then((data) => {
        setCompany(data);
        setSearchedCompanies(data);
      });
  };

  // Filter companies based on search query
  const filterCompaniesBySearch = (query) => {
    const filteredCompanies = company.filter(
      (company) =>
        company.companyName.toLowerCase().includes(query.toLowerCase()) ||
        company.companyAddress.toLowerCase().includes(query.toLowerCase())
    );
    setSearchedCompanies(filteredCompanies);
  };

  // Handle search input change
  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length >= 1) {
      filterCompaniesBySearch(query);
    } else {
      setSearchedCompanies(company);
    }
  };


  return (
    <React.Fragment>
      <section className="companyImg">
        <div className="secCompany">
          <div className="TextCompany">
            <h1 className="titleCompany">Our Partners</h1>
            <p className="subTitleCompany">We are very happy contact us</p>
          </div>
        </div>
      </section>

      <div id="search">
        <svg viewBox="0 0 420 60" xmlns="http://www.w3.org/2000/svg">
          <rect className="bar" />
          <g className="magnifier">
            <circle className="glass" />
            <line className="handle" x1="32" y1="32" x2="44" y2="44" />
          </g>
          <g className="sparks">
            <circle className="spark" />
            <circle className="spark" />
            <circle className="spark" />
          </g>
          <g className="burst pattern-one">
            <circle className="particle circle" />
            <path className="particle triangle" />
            <circle className="particle circle" />
            <path className="particle plus" />
            <rect className="particle rect" />
            <path className="particle triangle" />
          </g>
          <g className="burst pattern-two">
            <path className="particle plus" />
            <circle className="particle circle" />
            <path className="particle triangle" />
            <rect className="particle rect" />
            <circle className="particle circle" />
            <path className="particle plus" />
          </g>
          <g className="burst pattern-three">
            <circle className="particle circle" />
            <rect className="particle rect" />
            <path className="particle plus" />
            <path className="particle triangle" />
            <rect className="particle rect" />
            <path className="particle plus" />
          </g>
        </svg>
        <input
          type="search"
          className="input-company"
          name="q"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Search For Your Favorite Company"
          aria-label="Search for inspiration"
          autoComplete="off"
        />
      </div>

      <div className="container-company">
        {searchedCompanies.length === 0 && (
          <div className="d-flex align-items-center justify-content-center mb-5">
            <CiWarning
              style={{ fontSize: "50px", color: "gold", marginRight: "8px" }}
            />
            <p style={{ marginTop: "30px", fontSize: "30px", color: "#ddd" }}>
              Not found
            </p>
          </div>
        )}
        {searchedCompanies.map((company) => (
          <Link to={`${company.companyID}`} className="row-company" key={company.companyID}>
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src={img1} alt="Traveler Company" />
              </div>
              <div className="team-content">
                <h3 className="font-effect-fire">{company.companyName}</h3>
                <p>{company.companyAddress}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default Companies;
