import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Services.css';

function Services() {
    return (
        <section className="services">
            <div className="container-fluid">
                <div className="container">
                    <div className="services-header text-center">
                        <p className="black-color font-weight-light">Our Services <span className="cyan-color">and Specialities</span></p>
                        <p className="gray-color">Begin and end your day with a smile!</p>
                    </div>

                    <div className="services-carousel">
                        <OwlCarousel items={3}
                            className="owl-theme"
                            rewind={true}
                            loop
                            margin={16} >

                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/treatment1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Dental Cleaning & Polishing</h5>
                                    <p className="card-text text-center text-black-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id est sed lacus volutpat lobortis. Lorem ipsum dolor sit</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/treatment2.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Painless Tooth Extraction</h5>
                                    <p className="card-text text-center text-black-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id est sed lacus volutpat lobortis. Lorem ipsum dolor sit</p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/treatment3.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Dental Hygiene - A Must During Pregnancy</h5>
                                    <p className="card-text text-center text-black-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id est sed lacus volutpat lobortis. Lorem ipsum dolor sit</p>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;