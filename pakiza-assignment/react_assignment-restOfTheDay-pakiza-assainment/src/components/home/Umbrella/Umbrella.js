import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Umbrella.css';

function Umbrella() {
    return (
        <section className="umbrella">
            <div className="container-fluid">
                <div className="container">
                    <div className="umbrella-header text-center">
                        <p className="black-color font-weight-light">Our Umbrella of <span className="cyan-color">Dental Treatments</span></p>
                        <p className="gray-color">Smile….it raises your face value!</p>
                    </div>

                    <div className="umbrella-carousel">
                        <OwlCarousel items={3}
                            margin={16} >

                            <div className="card card-image-1">
                                <div className="card-image">
                                    <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/icon1.png" className="card-img-top rounded-circle" alt="..." />
                                </div>
                                <div className="card-body">
                                    <p className="card-title text-center">Oral & Maxillofacial Surgery</p>
                                    <p className="card-text text-center text-black-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                                </div>
                            </div>
                            <div className="card card-image-2">
                                <div className="card-image">
                                    <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/icon2.png" className="card-img-top rounded-circle" alt="..." />
                                </div>
                                <div className="card-body">
                                    <p className="card-title text-center">Prosthodontics Dental Implants</p>
                                    <p className="card-text text-center text-black-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                                </div>
                            </div>
                            <div className="card card-image-3">
                                <div className="card-image">
                                    <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/icon3.png" className="card-img-top rounded-circle" alt="..." />
                                </div>
                                <div className="card-body">
                                    <p className="card-title text-center">Orthodontics and The Braces</p>
                                    <p className="card-text text-center text-black-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                                </div>
                            </div>
                        </OwlCarousel>


                        <OwlCarousel items={3}
                            margin={16} >

                            <div className="card card-image-4">
                                <div className="card-image">
                                    <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/icon4.png" className="card-img-top rounded-circle" alt="..." />
                                </div>
                                <div className="card-body">
                                    <p className="card-title text-center">Endodontics</p>
                                    <p className="card-text text-center text-black-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                                </div>
                            </div>
                            <div className="card card-image-5">
                                <div className="card-image">
                                    <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/icon5.png" className="card-img-top rounded-circle" alt="..." />
                                </div>
                                <div className="card-body">
                                    <p className="card-title text-center">Minimum Intervention Dentistry</p>
                                    <p className="card-text text-center text-black-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                                </div>
                            </div>
                            <div className="card card-image-6">
                                <div className="card-image">
                                    <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/icon6.png" className="card-img-top rounded-circle" alt="..." />
                                </div>
                                <div className="card-body">
                                    <p className="card-title text-center">Pediatric Dentistry</p>
                                    <p className="card-text text-center text-black-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Umbrella;