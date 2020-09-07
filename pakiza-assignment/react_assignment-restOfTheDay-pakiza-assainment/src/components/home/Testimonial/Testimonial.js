import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Testimonial.css';

function Testimonial() {
    return (
        <section className="testimonial">
            <div className="container-fluid">
                <div className="testimonial-carousel text-center">
                    <OwlCarousel items={1}
                        className=""
                        rewind={true}
                        loop
                        nav
                        margin={16} >
                        <div>
                            <img className="rounded-circle" src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/testimonial1-1.jpg" alt="" />
                            <blockquote className="blockquote font-italic font-weight-light pt-4 pb-4">
                                Quisque at magna eu augue semper euismod. Fusce commodo molestie luctus. Donec mollis nulla ipsum, vitae faucibus dui dapibus at. Cras ullamcorper eget ipsum vel volutpat. Phasellus rhoncus in sapien tincidunt mollis.
                                <cite className="d-block">Emma Watson <small className="text-secondary">Entrepreneur</small></cite>
                            </blockquote>
                            <div className="quote-border-start d-inline-block"></div>
                            <div className="quote-border d-inline-block"></div>
                            <div className="quote-border-end d-inline-block"></div>
                        </div>
                        <div>
                            <img className="rounded-circle" src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/testimonial1-1.jpg" alt="" />
                            <blockquote className="blockquote font-italic font-weight-light pt-4 pb-4">
                                Quisque at magna eu augue semper euismod. Fusce commodo molestie luctus. Donec mollis nulla ipsum, vitae faucibus dui dapibus at. Cras ullamcorper eget ipsum vel volutpat. Phasellus rhoncus in sapien tincidunt mollis.
                                
                                
                                <cite className="d-block">Emma Watson <small className="text-secondary">Entrepreneur</small></cite>
                            </blockquote>
                            <div className="quote-border-start d-inline-block"></div>
                            <div className="quote-border d-inline-block"></div>
                            <div className="quote-border-end d-inline-block"></div>
                        </div>
                        <div>
                            <img className="rounded-circle" src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/testimonial1-1.jpg" alt="" />
                            <blockquote className="blockquote font-italic font-weight-light pt-4 pb-4">
                                Quisque at magna eu augue semper euismod. Fusce commodo molestie luctus. Donec mollis nulla ipsum, vitae faucibus dui dapibus at. Cras ullamcorper eget ipsum vel volutpat. Phasellus rhoncus in sapien tincidunt mollis.
                                
                                
                                <cite className="d-block">Emma Watson <small className="text-secondary">Entrepreneur</small></cite>
                            </blockquote>
                            <div className="quote-border-start d-inline-block"></div>
                            <div className="quote-border d-inline-block"></div>
                            <div className="quote-border-end d-inline-block"></div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </section >
    )
}

export default Testimonial;
