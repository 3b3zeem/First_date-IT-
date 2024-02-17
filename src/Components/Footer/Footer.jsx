import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="part7">
            <div className="note">
                <ul className="list1">
                    <li>
                        <a href="#" rel="nofollow">Home</a>
                    </li>
                    <li>
                        <a href="#">Lorem ipsum</a>
                    </li>
                </ul>
            </div>

            <hr className="hor1" />

            <div className="contenterforlinks">
                <div className="footer-nav" id="unique">
                    <ul className="list2">
                        <li>
                            <h2 className="title">About Us</h2>
                        </li>
                        <li>
                            <p className="about">
                                <span>loram Software</span> is a technology company you can
                                trust. For over # years we have been delivering excellence
                                through our products and services. Our deep expertise in travel
                                technology has enabled us to create one of the best travel
                                software solutions
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="footer-nav">
                    <ul className="list2">
                        <li>
                            <h2 className="title">Social Media</h2>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                twitter
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                YouTube
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                instagram
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                Android App
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                iOS App
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-nav">
                    <ul className="list2">
                        <li>
                            <h2 className="title">Sitemap</h2>
                        </li>
                        <li>
                            <a href="#" target="_self">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="" target="_self">
                                Clients
                            </a>
                        </li>

                        <li>
                            <a href="#" target="_blank" rel="nofollow">
                                partners
                            </a>
                        </li>

                        <li>
                            <a href="#" target="_blank">
                                News
                            </a>
                        </li>

                        <li>
                            <a href="#" target="_self">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-nav">
                    <ul className="list2">
                        <li>
                            <h2 className="title">Our Solutions</h2>
                        </li>
                        <li>
                            <a href="#" target="_self">
                                travel
                            </a>
                        </li>

                        <li>
                            <a href="#" target="_self">
                                transport
                            </a>
                        </li>

                        <li>
                            <a href="#" target="_self">
                                hotls
                            </a>
                        </li>

                        <li>
                            <a href="#" target="_blank" rel="nofollow">
                                nightlife
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-nav" id="unique2">
                    <div className="title">
                        <h2>Subscribe for everything new</h2>
                    </div>
                    <div className="news">
                        <form name="form" className="form1" id="Formv" method="post">
                            <input
                                type="email"
                                className="form__field_new"
                                placeholder="Email*"
                                name="email"
                                id="email"
                            />
                            <label htmlFor="email" className="notefication"></label>
                            <br />
                            <button type="submit" className="bot" id="bott">
                                submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <hr className="hor1" />

            <div className="servicesCatalog">
                <div className="margin1">
                    <div className="title">
                        <h2>Service Catalog</h2>
                    </div>
                    <div className="services">
                        <ul className="list3">
                            <li>
                                <a href="#">Lorem ipsum dolor sit amet.</a>
                            </li>
                            <li>
                                <a href="#">Lorem ipsum dolor sit amet.</a>
                            </li>
                            <li>
                                <a href="#">Lorem ipsum dolor sit amet.</a>
                            </li>
                            <li>
                                <a href="#">Lorem ipsum dolor sit amet.</a>
                            </li>
                            <li>
                                <a href="">Lorem ipsum dolor sit amet.</a>
                            </li>
                        </ul>
                    </div>
                    <p className="develop">© 2023&nbsp;Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
                </div>
            </div>
        </div>
    );
};
export default Footer;
