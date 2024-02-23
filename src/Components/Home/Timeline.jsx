import React, { useEffect } from "react";
import "./Timeline.scoped.css"

import { GiPlainCircle } from "react-icons/gi";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Timeline =()=>{
    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])

    return(
        <div className="tt">
            <div className="Timeline">
                <div data-aos="zoom-in-right" className="container-timeline left-container">
                <GiPlainCircle className="icon-timeline"/>
                    <div className="text-box">
                        <h2>bla bla bla</h2>
                        <h6>---</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, molestias doloribus. 
                            Ut quidem reprehenderit laboriosam perferendis doloremque magnam maiores eum.  </p>
                        <span className="left-container-arrow"></span>
                    </div>
                </div>
                <div data-aos="zoom-in-left" className="container-timeline right-container">
                <GiPlainCircle className="icon-timeline"/>

                    <div className="text-box">
                        <h2>bla bla bla</h2>
                        <h6>---</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, molestias doloribus. 
                            Ut quidem reprehenderit laboriosam perferendis doloremque magnam maiores eum.  </p>
                        <span className="right-container-arrow"></span>

                    </div>
                </div>
                <div data-aos="zoom-in-right" className="container-timeline left-container">
                <GiPlainCircle className="icon-timeline"/>

                    <div className="text-box">
                        <h2>bla bla bla</h2>
                        <h6>---</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, molestias doloribus. 
                            Ut quidem reprehenderit laboriosam perferendis doloremque magnam maiores eum.  </p>
                            <span className="left-container-arrow"></span>
                    </div>
                </div>
                <div data-aos="zoom-in-left" className="container-timeline right-container">
                <GiPlainCircle className="icon-timeline"/>

                    <div className="text-box">
                        <h2>bla bla bla</h2>
                        <h6>---</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, molestias doloribus. 
                            Ut quidem reprehenderit laboriosam perferendis doloremque magnam maiores eum.  </p>
                            <span className="right-container-arrow"></span>

                    </div>
                </div>
                <div data-aos="zoom-in-right" className="container-timeline left-container">
                <GiPlainCircle className="icon-timeline"/>

                    <div className="text-box">
                        <h2>bla bla bla</h2>
                        <h6>---</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, molestias doloribus. 
                            Ut quidem reprehenderit laboriosam perferendis doloremque magnam maiores eum.  </p>
                            <span className="left-container-arrow"></span>

                    </div>
                </div>
                <div data-aos="zoom-in-left" className="container-timeline right-container">
                <GiPlainCircle className="icon-timeline"/>
                    <div className="text-box">
                        <h2>bla bla bla</h2>
                        <h6>---</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, molestias doloribus. 
                            Ut quidem reprehenderit laboriosam perferendis doloremque magnam maiores eum.  </p>
                            <span className="right-container-arrow"></span>

                    </div>
                </div>
            </div>

        </div>
    );
}
export default Timeline;