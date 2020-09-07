import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Distinguished.css';

function Distinguished() {
    return (
        <section className="distinguished">
            <div className="container-fluid">
                <div className="container">
                    <div className="distinguished-header text-center">
                        <p className="black-color font-weight-light">Our Distinguished <span className="cyan-color">Dental Specialists</span></p>
                        <p className="gray-color">A smile is a curve that sets everything straight!</p>
                    </div>

                    <div className="distinguished-carousel">
                        <OwlCarousel items={4}
                            className="owl-theme"
                            rewind={true}
                            loop
                            margin={16} >

                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/doctor1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center h4 font-weight-normal">Dr.Daniel Craig <small>M.D, pH.D</small></h5>
                                    <p className="card-text text-center text-black-50 pb-2">Cosmetic Surgery</p>
                                    <div className="list-item">
                                        <ul class="list-inline text-center">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter text-black-50"></i></a></li>
                                            <li className="list-inline-item pl-3 pr-3"><a href="#"><i className="fa fa-facebook text-black-50"></i></a></li>
                                            <li className="list-inline-item pr-3"><a href="#"><i className="fa fa-google-plus text-black-50"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin text-black-50"></i></a></li>
                                        </ul>
                                    </div>
                                    <p className="card-text text-center text-black-50 pb-2 font-weight-bold text-light view-details">View Details</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/doctor2-1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center h4 font-weight-normal">Dr.Anagha Menen <small>M.D, pH.D</small></h5>
                                    <p className="card-text text-center text-black-50 pb-2">Maxillofacial Surgery</p>
                                    <div className="list-item">
                                        <ul class="list-inline text-center">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter text-black-50"></i></a></li>
                                            <li className="list-inline-item pl-3 pr-3"><a href="#"><i className="fa fa-facebook text-black-50"></i></a></li>
                                            <li className="list-inline-item pr-3"><a href="#"><i className="fa fa-google-plus text-black-50"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin text-black-50"></i></a></li>
                                        </ul>
                                    </div>
                                    <p className="card-text text-center text-black-50 pb-2 font-weight-bold text-light view-details">View Details</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/doctor3-1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center h4 font-weight-normal">Dr.Ankitha Prem <small>M.D, pH.D</small></h5>
                                    <p className="card-text text-center text-black-50 pb-2">Orthodontist</p>
                                    <div className="list-item">
                                        <ul class="list-inline text-center">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter text-black-50"></i></a></li>
                                            <li className="list-inline-item pl-3 pr-3"><a href="#"><i className="fa fa-facebook text-black-50"></i></a></li>
                                            <li className="list-inline-item pr-3"><a href="#"><i className="fa fa-google-plus text-black-50"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin text-black-50"></i></a></li>
                                        </ul>
                                    </div>
                                    <p className="card-text text-center text-black-50 pb-2 font-weight-bold text-light view-details">View Details</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/doctor4-1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center h4 font-weight-normal">Dr.Bora Tumnus <small>M.D, pH.D</small></h5>
                                    <p className="card-text text-center text-black-50 pb-2">General, Orthodontist</p>
                                    <div className="list-item">
                                        <ul class="list-inline text-center">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter text-black-50"></i></a></li>
                                            <li className="list-inline-item pl-3 pr-3"><a href="#"><i className="fa fa-facebook text-black-50"></i></a></li>
                                            <li className="list-inline-item pr-3"><a href="#"><i className="fa fa-google-plus text-black-50"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin text-black-50"></i></a></li>
                                        </ul>
                                    </div>
                                    <p className="card-text text-center text-black-50 pb-2 font-weight-bold text-light view-details">View Details</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/doctor7.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center h4 font-weight-normal">Dr.Charl Marks <small>M.D, pH.D</small></h5>
                                    <p className="card-text text-center text-black-50 pb-2">General, Maxillofacial Surgery</p>
                                    <div className="list-item">
                                        <ul class="list-inline text-center">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter text-black-50"></i></a></li>
                                            <li className="list-inline-item pl-3 pr-3"><a href="#"><i className="fa fa-facebook text-black-50"></i></a></li>
                                            <li className="list-inline-item pr-3"><a href="#"><i className="fa fa-google-plus text-black-50"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin text-black-50"></i></a></li>
                                        </ul>
                                    </div>
                                    <p className="card-text text-center text-black-50 pb-2 font-weight-bold text-light view-details">View Details</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/doctor5-2.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center h4 font-weight-normal">Dr.Quintina Craig <small>M.D, pH.D</small></h5>
                                    <p className="card-text text-center text-black-50 pb-2">Laboratory, Orthodontist</p>
                                    <div className="list-item">
                                        <ul class="list-inline text-center">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter text-black-50"></i></a></li>
                                            <li className="list-inline-item pl-3 pr-3"><a href="#"><i className="fa fa-facebook text-black-50"></i></a></li>
                                            <li className="list-inline-item pr-3"><a href="#"><i className="fa fa-google-plus text-black-50"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin text-black-50"></i></a></li>
                                        </ul>
                                    </div>
                                    <p className="card-text text-center text-black-50 pb-2 font-weight-bold text-light view-details">View Details</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/doctor1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center h4 font-weight-normal">Dr.Daniel Craig <small>M.D, pH.D</small></h5>
                                    <p className="card-text text-center text-black-50 pb-2">Cosmetic Surgery</p>
                                    <div className="list-item">
                                        <ul class="list-inline text-center">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter text-black-50 text-black-50"></i></a></li>
                                            <li className="list-inline-item pl-3 pr-3"><a href="#"><i className="fa fa-facebook text-black-50"></i></a></li>
                                            <li className="list-inline-item pr-3"><a href="#"><i className="fa fa-google-plus text-black-50"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin text-black-50"></i></a></li>
                                        </ul>
                                    </div>
                                    <p className="card-text text-center text-black-50 pb-2 font-weight-bold text-light view-details">View Details</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/doctor2-1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center h4 font-weight-normal">DDr.Anagha Menen <small>M.D, pH.D</small></h5>
                                    <p className="card-text text-center text-black-50 pb-2">Maxillofacial Surgery</p>
                                    <div className="list-item">
                                        <ul class="list-inline text-center">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter text-black-50"></i></a></li>
                                            <li className="list-inline-item pl-3 pr-3"><a href="#"><i className="fa fa-facebook text-black-50"></i></a></li>
                                            <li className="list-inline-item pr-3"><a href="#"><i className="fa fa-google-plus text-black-50"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin text-black-50"></i></a></li>
                                        </ul>
                                    </div>
                                    <p className="card-text text-center text-black-50 pb-2 font-weight-bold text-light view-details">View Details</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/doctor3-1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center h4 font-weight-normal">Dr.Ankitha Prem <small>M.D, pH.D</small></h5>
                                    <p className="card-text text-center text-black-50 pb-2">Orthodontist</p>
                                    <div className="list-item">
                                        <ul class="list-inline text-center">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter text-black-50"></i></a></li>
                                            <li className="list-inline-item pl-3 pr-3"><a href="#"><i className="fa fa-facebook  text-black-50"></i></a></li>
                                            <li className="list-inline-item pr-3"><a href="#"><i className="fa fa-google-plus text-black-50"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin text-black-50"></i></a></li>
                                        </ul>
                                    </div>
                                    <p className="card-text text-center text-black-50 pb-2 font-weight-bold text-light view-details">View Details</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/doctor1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center h4 font-weight-normal">Dr.Bora Tumnus <small>M.D, pH.D</small></h5>
                                    <p className="card-text text-center text-black-50 pb-2">Orthodontist</p>
                                    <div className="list-item">
                                        <ul class="list-inline text-center">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter text-black-50"></i></a></li>
                                            <li className="list-inline-item pl-3 pr-3"><a href="#"><i className="fa fa-facebook text-black-50"></i></a></li>
                                            <li className="list-inline-item pr-3"><a href="#"><i className="fa fa-google-plus text-black-50"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin text-black-50"></i></a></li>
                                        </ul>
                                    </div>
                                    <p className="card-text text-center text-black-50 pb-2 font-weight-bold text-light view-details">View Details</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/doctor2-1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center h4 font-weight-normal">DDr.Anagha Menen <small>M.D, pH.D</small></h5>
                                    <p className="card-text text-center text-black-50 pb-2">Cosmetic Surgery</p>
                                    <div className="list-item">
                                        <ul class="list-inline text-center">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter text-black-50"></i></a></li>
                                            <li className="list-inline-item pl-3 pr-3"><a href="#"><i className="fa fa-facebook text-black-50"></i></a></li>
                                            <li className="list-inline-item pr-3"><a href="#"><i className="fa fa-google-plus text-black-50"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin text-black-50"></i></a></li>
                                        </ul>
                                    </div>
                                    <p className="card-text text-center text-black-50 pb-2 font-weight-bold text-light view-details">View Details</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/doctor3-1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center h4 font-weight-normal">Dr.Ankitha Prem <small>M.D, pH.D</small></h5>
                                    <p className="card-text text-center text-black-50 pb-2">Maxillofacial Surgery</p>
                                    <div className="list-item">
                                        <ul class="list-inline text-center">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter text-black-50"></i></a></li>
                                            <li className="list-inline-item pl-3 pr-3"><a href="#"><i className="fa fa-facebook text-black-50"></i></a></li>
                                            <li className="list-inline-item pr-3"><a href="#"><i className="fa fa-google-plus text-black-50"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin text-black-50"></i></a></li>
                                        </ul>
                                    </div>
                                    <p className="card-text text-center text-black-50 pb-2 font-weight-bold text-light view-details">View Details</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/doctor4-1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center h4 font-weight-normal">Dr.Charl Marks <small>M.D, pH.D</small></h5>
                                    <p className="card-text text-center text-black-50 pb-2">General, Orthodontist</p>
                                    <div className="list-item">
                                        <ul class="list-inline text-center">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter text-black-50"></i></a></li>
                                            <li className="list-inline-item pl-3 pr-3"><a href="#"><i className="fa fa-facebook text-black-50"></i></a></li>
                                            <li className="list-inline-item pr-3"><a href="#"><i className="fa fa-google-plus text-black-50"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin text-black-50"></i></a></li>
                                        </ul>
                                    </div>
                                    <p className="card-text text-center text-black-50 pb-2 font-weight-bold text-light view-details">View Details</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/doctor7.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center h4 font-weight-normal">Dr.Charl Marks <small>M.D, pH.D</small></h5>
                                    <p className="card-text text-center text-black-50 pb-2">General, Orthodontist</p>
                                    <div className="list-item">
                                        <ul class="list-inline text-center">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter text-black-50"></i></a></li>
                                            <li className="list-inline-item pl-3 pr-3"><a href="#"><i className="fa fa-facebook text-black-50"></i></a></li>
                                            <li className="list-inline-item pr-3"><a href="#"><i className="fa fa-google-plus text-black-50"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin text-black-50"></i></a></li>
                                        </ul>
                                    </div>
                                    <p className="card-text text-center text-black-50 pb-2 font-weight-bold text-light view-details">View Details</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/doctor5-2.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center h4 font-weight-normal">Dr.Quintina Craig <small>M.D, pH.D</small></h5>
                                    <p className="card-text text-center text-black-50 pb-2">General, Maxillofacial Surgery</p>
                                    <div className="list-item">
                                        <ul class="list-inline text-center">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter text-black-50"></i></a></li>
                                            <li className="list-inline-item pl-3 pr-3"><a href="#"><i className="fa fa-facebook text-black-50"></i></a></li>
                                            <li className="list-inline-item pr-3"><a href="#"><i className="fa fa-google-plus text-black-50"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin text-black-50"></i></a></li>
                                        </ul>
                                    </div>
                                    <p className="card-text text-center text-black-50 pb-2 font-weight-bold text-light view-details">View Details</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/doctor1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center h4 font-weight-normal">Dr.Daniel Craig <small>M.D, pH.D</small></h5>
                                    <p className="card-text text-center text-black-50 pb-2">Laboratory, Orthodontis</p>
                                    <div className="list-item">
                                        <ul class="list-inline text-center">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter text-black-50"></i></a></li>
                                            <li className="list-inline-item pl-3 pr-3"><a href="#"><i className="fa fa-facebook text-black-50"></i></a></li>
                                            <li className="list-inline-item pr-3"><a href="#"><i className="fa fa-google-plus text-black-50"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin text-black-50"></i></a></li>
                                        </ul>
                                    </div>
                                    <p className="card-text text-center text-black-50 pb-2 font-weight-bold text-light view-details">View Details</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/doctor2-1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center h4 font-weight-normal">DDr.Anagha Menen <small>M.D, pH.D</small></h5>
                                    <p className="card-text text-center text-black-50 pb-2">Cosmetic Surgery</p>
                                    <div className="list-item">
                                        <ul class="list-inline text-center">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter text-black-50"></i></a></li>
                                            <li className="list-inline-item pl-3 pr-3"><a href="#"><i className="fa fa-facebook text-black-50"></i></a></li>
                                            <li className="list-inline-item pr-3"><a href="#"><i className="fa fa-google-plus text-black-50"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin text-black-50"></i></a></li>
                                        </ul>
                                    </div>
                                    <p className="card-text text-center text-black-50 pb-2 font-weight-bold text-light view-details">View Details</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/doctor3-1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center h4 font-weight-normal">Dr.Ankitha Prem <small>M.D, pH.D</small></h5>
                                    <p className="card-text text-center text-black-50 pb-2">Maxillofacial Surgery</p>
                                    <div className="list-item">
                                        <ul class="list-inline text-center">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter text-black-50"></i></a></li>
                                            <li className="list-inline-item pl-3 pr-3"><a href="#"><i className="fa fa-facebook text-black-50"></i></a></li>
                                            <li className="list-inline-item pr-3"><a href="#"><i className="fa fa-google-plus text-black-50"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin text-black-50"></i></a></li>
                                        </ul>
                                    </div>
                                    <p className="card-text text-center text-black-50 pb-2 font-weight-bold text-light view-details">View Details</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/doctor1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center h4 font-weight-normal">Dr.Daniel Craig <small>M.D, pH.D</small></h5>
                                    <p className="card-text text-center text-black-50 pb-2">Laboratory, Orthodontist</p>
                                    <div className="list-item">
                                        <ul class="list-inline text-center">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter text-black-50"></i></a></li>
                                            <li className="list-inline-item pl-3 pr-3"><a href="#"><i className="fa fa-facebook text-black-50"></i></a></li>
                                            <li className="list-inline-item pr-3"><a href="#"><i className="fa fa-google-plus text-black-50"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin text-black-50"></i></a></li>
                                        </ul>
                                    </div>
                                    <p className="card-text text-center text-black-50 pb-2 font-weight-bold text-light view-details">View Details</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/doctor2-1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center h4 font-weight-normal">DDr.Anagha Menen <small>M.D, pH.D</small></h5>
                                    <p className="card-text text-center text-black-50 pb-2">Cosmetic Surgery</p>
                                    <div className="list-item">
                                        <ul class="list-inline text-center">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter text-black-50"></i></a></li>
                                            <li className="list-inline-item pl-3 pr-3"><a href="#"><i className="fa fa-facebook text-black-50"></i></a></li>
                                            <li className="list-inline-item pr-3"><a href="#"><i className="fa fa-google-plus text-black-50"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin text-black-50"></i></a></li>
                                        </ul>
                                    </div>
                                    <p className="card-text text-center text-black-50 pb-2 font-weight-bold text-light view-details">View Details</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/doctor3-1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center h4 font-weight-normal">Dr.Ankitha Prem <small>M.D, pH.D</small></h5>
                                    <p className="card-text text-center text-black-50 pb-2">Maxillofacial Surgery</p>
                                    <div className="list-item">
                                        <ul class="list-inline text-center">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter text-black-50 text-black-50"></i></a></li>
                                            <li className="list-inline-item pl-3 pr-3"><a href="#"><i className="fa fa-facebook text-black-50"></i></a></li>
                                            <li className="list-inline-item pr-3"><a href="#"><i className="fa fa-google-plus text-black-50"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin text-black-50"></i></a></li>
                                        </ul>
                                    </div>
                                    <p className="card-text text-center text-black-50 pb-2 font-weight-bold text-light view-details">View Details</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/doctor4-1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center h4 font-weight-normal">Dr.Charl Marks <small>M.D, pH.D</small></h5>
                                    <p className="card-text text-center text-black-50 pb-2">General, Orthodontist</p>
                                    <div className="list-item">
                                        <ul class="list-inline text-center">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter text-black-50"></i></a></li>
                                            <li className="list-inline-item pl-3 pr-3"><a href="#"><i className="fa fa-facebook text-black-50"></i></a></li>
                                            <li className="list-inline-item pr-3"><a href="#"><i className="fa fa-google-plus text-black-50"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin text-black-50"></i></a></li>
                                        </ul>
                                    </div>
                                    <p className="card-text text-center text-black-50 pb-2 font-weight-bold text-light view-details">View Details</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/doctor7.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center h4 font-weight-normal">Dr.Charl Marks
                                    <small>M.D, pH.D</small></h5>
                                    <p className="card-text text-center text-black-50 pb-2">General, Maxillofacial Surgery</p>
                                    <div className="list-item">
                                        <ul class="list-inline text-center">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-twitter text-black-50"></i></a></li>
                                            <li className="list-inline-item pl-3 pr-3"><a href="#"><i className="fa fa-facebook text-black-50"></i></a></li>
                                            <li className="list-inline-item pr-3"><a href="#"><i className="fa fa-google-plus text-black-50"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin text-black-50"></i></a></li>
                                        </ul>
                                    </div>
                                    <p className="card-text text-center text-black-50 pb-2 font-weight-bold text-light view-details">View Details</p>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Distinguished;