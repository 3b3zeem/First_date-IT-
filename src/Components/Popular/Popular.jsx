import React, { useEffect } from "react";
import "./Popular.css";

import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";

import img1 from "../../im&ve/1.jpg";
import img2 from "../../im&ve/2.jpg";
import img3 from "../../im&ve/3.jpg";
import img4 from "../../im&ve/4.jpg";
import img5 from "../../im&ve/sidenav2.jpg";
import img6 from "../../im&ve/partners-opt.webp";
import img7 from "../../im&ve/podcast-background.webp";
import img8 from "../../im&ve/pexels-photo-12496258.jpeg";

import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Card = [
  {
    id: 1,
    imgSrc: img1,
    Title: "Machu Picchu",
    location: "EGYPT",
    grade: "Cultural Relax",
  },

  {
    id: 2,
    imgSrc: img2,
    Title: "Machu Picchu",
    location: "MEXICO",
    grade: "Cultural Relax",
  },

  {
    id: 3,
    imgSrc: img3,
    Title: "Machu Picchu",
    location: "LONDON",
    grade: "Cultural Relax",
  },

  {
    id: 4,
    imgSrc: img4,
    Title: "Machu Picchu",
    location: "PERU",
    grade: "Cultural Relax",
  },
  {
    id: 5,
    imgSrc: img5,
    Title: "Machu Picchu",
    location: "PERU",
    grade: "Cultural Relax",
  },
  {
    id: 6,
    imgSrc: img6,
    Title: "Machu Picchu",
    location: "PERU",
    grade: "Cultural Relax",
  },
  {
    id: 7,
    imgSrc: img7,
    Title: "Machu Picchu",
    location: "PERU",
    grade: "Cultural Relax",
  },
  {
    id: 8,
    imgSrc: img8,
    Title: "Machu Picchu",
    location: "PERU",
    grade: "Cultural Relax",
  },
];

const Popular = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className="popular section container">
        <div className="secContainer">
          <div className="secHeader flex">
            <div className="textDiv">
              <h2 data-aos="fade-right" className="textTitle">
                Popular Destination
              </h2>
              <p data-aos="fade-right" data-aos-duration="3000">
                From historical cities to natural specteculars, come see the
                best of the world
              </p>
            </div>

            <div className="iconDiv flex">
              <BsArrowLeftShort
                data-aos="fade-right"
                className="icon leftIcon"
              />
              <BsArrowRightShort data-aos="fade-left" className="icon" />
            </div>
          </div>

          <div className="mainContent grid">
            {Card.map(({ id, imgSrc, Title, location, grade }) => {
              return (
                <div data-aos="zoom-in-right" className="singleDestination">
                  <div className="detImage">
                    <img src={imgSrc} alt="Title" />
                    <div className="overlayInfo">
                      <h3>{location}</h3>
                      <p>{Title}</p>

                      <Link to={"/advertisements"}>
                        <BsArrowRightShort className="icon" />
                      </Link>
                    </div>
                  </div>

                  <div className="destFooter">
                    <div className="number">0{id}</div>

                    <div className="destText flex">
                      <h6>{location}</h6>
                      <span className="flex">
                        <span className="dot">
                          <BsDot className="icon" />
                        </span>
                        Dot
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Popular;
