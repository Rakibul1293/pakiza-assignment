import React from 'react';
import './FooterTop.css';

function FooterTop() {
    return (
        <section className="footer-top pt-5">
            <div className="container-fluid">
                <div className="container border-bottom border-info">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer-top-start">
                                <a class="navbar-brand pb-5" href="#"><img class="normal_logo" src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/themes/dental/images/logo.png" alt="Dental WordPress Theme" title="Dental WordPress Theme" /></a>
                                <p className="gray-color">Regular dental checkups help in detection of early warning signs of certain health related issues. Visit your dentists regularly and stay healthy.</p>
                                <p className=" display-4">Trusted by <span className="black-color">15,000</span> People</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="footer-top-middle">
                                        <p className="black-color">Useful <span className="cyan-color">Links</span></p>
                                        <ul>
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">About</a></li>
                                            <li><a href="#">Services</a></li>
                                            <li> <a href="#">Health Info</a></li>
                                            <li><a href="#">Appointments</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="extra-content"></div>
                                    <ul>
                                        <li><a href="#">Dental Care</a></li>
                                        <li> <a href="#">Cleaning Facilities</a></li>
                                        <li><a href="#">Whitening Care</a></li>
                                        <li> <a href="#">Dental Implants</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-top-last">
                                <p className="black-color">Contact <span className="cyan-color">Address</span></p>
                                <p className="gray-color">64C East Crest, Melane Plaza, <br /> DanyBoyle, TT 33546</p>
                                <p className="black-color">Call <span className="cyan-color">Us</span></p>
                                <p className="gray-color">335-565-2900</p>

                                <div className="icon-list pt-4">
                                    <ul className="list-inline">
                                        <li className="list-inline-item"><a href="#"><i className="fa fa-facebook bg-white rounded-circle p-3"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="fa fa-twitter bg-white rounded-circle p-3"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="fa fa-google-plus bg-white rounded-circle p-3"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterTop;