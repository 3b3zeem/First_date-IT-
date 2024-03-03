import React from "react";
import { ClimbingBoxLoader, PulseLoader } from "react-spinners";
import './Loader.css';

const Loader = () => {
  return (
    <>
      <div className="Loader">
        <div className="loader-spanner">
          <ClimbingBoxLoader size="20px" color="hsl(199, 100%, 33%)" />
        </div>
        <h2>Loading<PulseLoader className="load" size="8px"  color="hsl(199, 100%, 33%)" /></h2>
      </div>
    </>
  );
};

export default Loader;
