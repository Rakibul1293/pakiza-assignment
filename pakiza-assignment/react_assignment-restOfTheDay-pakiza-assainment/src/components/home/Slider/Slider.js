import React from 'react';
import './Slider.css';

function Slider() {
    return (
        <div className="slider">
            <div className="container-fluid">
                <div className="slider-carousel">
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item slider-1 active">
                                <img class="d-block w-100" src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/revslider/dental/slider1-2.jpg" alt="Third slide" />
                                <div class="carousel-caption d-none d-md-block">
                                    <h4 className="display-4 text-dark pb-3">Make Your <span>Dental</span> Experience a Lot Brighter </h4>
                                    <p className="text-dark">With best facilities and better equipments, you are in safe hands</p>
                                    <button type="submit" class="btn btn-primary btn-1">Consult a Dentist</button>
                                    <button type="submit" class="btn btn-primary btn-2">Make an Appointment</button>
                                </div>
                            </div>
                            <div class="carousel-item slider-2">
                                <img class="d-block w-100" src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/revslider/dental/slider2-2.jpg" alt="Third slide" />
                                <div class="carousel-caption d-none d-md-block">
                                    <h4 className="display-4 text-dark pb-3">Expertise in Major <br /> <span>Dental Procedures</span></h4>
                                    <ul className="list-group list-group-flush text-dark">
                                        <li className="list-group-item">
                                            <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/revslider/dental/d1.png" alt="" />
                                            <p className="d-inline-block">Oral Examinations</p>
                                        </li>
                                        <li className="list-group-item">
                                            <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/revslider/dental/d2.png" alt="" />
                                            <p className="d-inline-block">Braces & Bonding</p>
                                        </li>
                                        <li className="list-group-item">
                                            <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/revslider/dental/d3.png" alt="" />
                                            <p className="d-inline-block">Dentures & Repairs</p>
                                        </li>
                                        <li className="list-group-item">
                                            <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/revslider/dental/d5.png" alt="" />
                                            <p className="d-inline-block">Root Canals</p>
                                        </li>
                                        <li className="list-group-item">
                                            <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/revslider/dental/d6.png" alt="" />
                                            <p className="d-inline-block">Crowns and Caps</p>
                                        </li>
                                        <li className="list-group-item">
                                            <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/revslider/dental/d7.png" alt="" />
                                            <p className="d-inline-block">Extractions & Gum Surgery</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="carousel-item slider-3">
                                <img class="d-block w-100" src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/revslider/dental/slider3-2.jpg" alt="Third slide" />
                                <div class="carousel-caption d-none d-md-block">
                                    <h4 className="display-4 text-dark pb-3">From Simple <span>Procedures</span> to complex <span>Surgeries</span></h4>
                                    <p className="text-dark">With best facilities and better equipments, you are in safe hands</p>
                                    <button type="submit" class="btn btn-primary btn-1">Consult a Dentist</button>
                                    <button type="submit" class="btn btn-primary btn-2">Make an Appointment</button>
                                    <button type="submit" class="btn btn-primary btn-3 d-block">Call Us@</button>
                                    <h4 className="display-4 text-dark">+991 3334 3347 <small className="small-text-decoration">(Toll Free) </small></h4>
                                </div>
                            </div>

                            <div class="carousel-caption slider-bottom-size d-none d-md-block">
                                <div className="slider-bottom">
                                    <h1 className="d-inline-block font-weight-light mr-4">Get in touch with us today<span className="font-weight-bold"> (02) 9955 4239</span></h1>
                                    <button type="submit" class="btn btn-primary btn-4">Make an Appointment</button>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Slider;