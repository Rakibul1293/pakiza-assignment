import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Blog.css';

function Blog() {
    return (
        <section className="blog">
            <div className="container-fluid">
                <div className="container">
                    <div className="blog-header text-center">
                        <p className="black-color font-weight-light">News from the <span className="cyan-color">World of Dentists</span></p>
                        <p className="gray-color">You don’t have to brush all your teeth…just the ones you plan to keep!</p>
                    </div>

                    <div className="blog-carousel">
                        <OwlCarousel items={3}
                            className="owl-theme"
                            loop
                            margin={16} >

                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/blog6.jpg" className="card-img-top" alt="..." />
                                <div className="img-date">
                                    <p className="text-center pt-3">18 Jun 2015</p>
                                </div>
                                <div className="card-body">
                                    <p className="card-text d-flex justify-content-between">
                                        <small className="text-light text-dark pr-4">by ram</small>
                                        <small className="text-light text-dark"><i className="fa fa-comments-o"></i> 0</small>
                                    </p>
                                    <h5 className="card-title pt-1 pb-1">Root Canal Treatment – RCT</h5>
                                    <p className="card-text text-black-50 pb-1">Duis vel orci erat. Aenean quis sem fringilla, scelerisque lectus et, vestibulum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris...</p>
                                    <p className="card-text">
                                        <small className="text-light text-dark pr-4">
                                            <i className="fa fa-tag"></i> blog, Business
                                    </small>
                                        <small className="text-light text-dark">
                                            <i className="fa fa-sitemap"></i> magazine, News
                                    </small>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/blog4.jpg" className="card-img-top" alt="..." />
                                <div className="img-date">
                                    <p className="text-center pt-3">18 Jun 2015</p>
                                </div>
                                <div className="card-body">
                                    <p className="card-text d-flex justify-content-between">
                                        <small className="text-light text-dark pr-4">by ram</small>
                                        <small className="text-light text-dark"><i className="fa fa-comments-o"></i> 0</small>
                                    </p>
                                    <h5 className="card-title pt-1 pb-1">Tooth Extraction</h5>
                                    <p className="card-text text-black-50 pb-1">Duis vel orci erat. Aenean quis sem fringilla, scelerisque lectus et, vestibulum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris...</p>
                                    <p className="card-text">
                                        <small className="text-light text-dark pr-4">
                                            <i className="fa fa-tag"></i> news
                                    </small>
                                        <small className="text-light text-dark">
                                            <i className="fa fa-sitemap"></i> Technical
                                    </small>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/blog5.jpg" className="card-img-top" alt="..." />
                                <div className="img-date">
                                    <p className="text-center pt-3">18 Jun 2015</p>
                                </div>
                                <div className="card-body">
                                    <p className="card-text d-flex justify-content-between">
                                        <small className="text-light text-dark pr-4">by ram</small>
                                        <small className="text-light text-dark"><i className="fa fa-comments-o"></i> 0</small>
                                    </p>
                                    <h5 className="card-title pt-1 pb-1">Dental Hygiene-the dos and donts</h5>
                                    <p className="card-text text-black-50 pb-1">Duis vel orci erat. Aenean quis sem fringilla, scelerisque lectus et, vestibulum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris...</p>
                                    <p className="card-text">
                                        <small className="text-light text-dark pr-4">
                                            <i className="fa fa-tag"></i> news
                                    </small>
                                        <small className="text-light text-dark">
                                            <i className="fa fa-sitemap"></i> Technical
                                    </small>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/blog7.jpg" className="card-img-top" alt="..." />
                                <div className="img-date">
                                    <p className="text-center pt-3">18 Jun 2015</p>
                                </div>
                                <div className="card-body">
                                    <p className="card-text d-flex justify-content-between">
                                        <small className="text-light text-darktext-light text-dark pr-4">by ram</small>
                                        <small className="text-light text-darktext-light text-dark"><i className="fa fa-comments-o"></i> 0</small>
                                    </p>
                                    <h5 className="card-title pt-1 pb-1">Quisque egestas rhoncus mauris</h5>
                                    <p className="card-text text-black-50 pb-1">Duis vel orci erat. Aenean quis sem fringilla, scelerisque lectus et, vestibulum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris...</p>
                                    <p className="card-text">
                                        <small className="text-light text-dark pr-4">
                                            <i className="fa fa-tag"></i> news
                                    </small>
                                        <small className="text-light text-dark">
                                            <i className="fa fa-sitemap"></i> Technical
                                    </small>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/blog9.jpg" className="card-img-top" alt="..." />
                                <div className="img-date">
                                    <p className="text-center pt-3">18 Jun 2015</p>
                                </div>
                                <div className="card-body">
                                    <p className="card-text d-flex justify-content-between">
                                        <small className="text-light text-dark pr-4">by ram</small>
                                        <small className="text-light text-dark"><i className="fa fa-comments-o"></i> 0</small>
                                    </p>
                                    <h5 className="card-title pt-1 pb-1">Dentures Realignment</h5>
                                    <p className="card-text text-black-50 pb-1">Duis vel orci erat. Aenean quis sem fringilla, scelerisque lectus et, vestibulum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris...</p>
                                    <p className="card-text">
                                        <small className="text-light text-dark pr-4">
                                            <i className="fa fa-tag"></i> news
                                    </small>
                                        <small className="text-light text-dark">
                                            <i className="fa fa-sitemap"></i> Technical
                                    </small>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/blog6.jpg" className="card-img-top" alt="..." />
                                <div className="img-date">
                                    <p className="text-center pt-3">18 Jun 2015</p>
                                </div>
                                <div className="card-body">
                                    <p className="card-text d-flex justify-content-between">
                                        <small className="text-light text-dark pr-4">by ram</small>
                                        <small className="text-light text-dark"><i className="fa fa-comments-o"></i> 0</small>
                                    </p>
                                    <h5 className="card-title pt-1 pb-1">Root Canal Treatment – RCT</h5>
                                    <p className="card-text text-black-50 pb-1">Duis vel orci erat. Aenean quis sem fringilla, scelerisque lectus et, vestibulum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris...</p>
                                    <p className="card-text">
                                        <small className="text-light text-dark pr-4">
                                            <i className="fa fa-tag"></i> news
                                    </small>
                                        <small className="text-light text-dark">
                                            <i className="fa fa-sitemap"></i> Technical
                                    </small>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/blog4.jpg" className="card-img-top" alt="..." />
                                <div className="img-date">
                                    <p className="text-center pt-3">18 Jun 2015</p>
                                </div>
                                <div className="card-body">
                                    <p className="card-text d-flex justify-content-between">
                                        <small className="text-light text-dark pr-4">by ram</small>
                                        <small className="text-light text-dark"><i className="fa fa-comments-o"></i> 0</small>
                                    </p>
                                    <h5 className="card-title pt-1 pb-1">Tooth Extract</h5>
                                    <p className="card-text text-black-50 pb-1">Duis vel orci erat. Aenean quis sem fringilla, scelerisque lectus et, vestibulum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris...</p>
                                    <p className="card-text">
                                        <small className="text-light text-dark pr-4">
                                            <i className="fa fa-tag"></i> news
                                    </small>
                                        <small className="text-light text-dark">
                                            <i className="fa fa-sitemap"></i> Technical
                                    </small>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/blog4.jpg" className="card-img-top" alt="..." />
                                <div className="img-date">
                                    <p className="text-center pt-3">18 Jun 2015</p>
                                </div>
                                <div className="card-body">
                                    <p className="card-text d-flex justify-content-between">
                                        <small className="text-light text-dark pr-4">by ram</small>text-light text-dark
                                        <small className="text-light text-dark"><i className="fa fa-comments-o"></i> 0</small>
                                    </p>
                                    <h5 className="card-title pt-1 pb-1">Dental Hygiene-the dos and donts</h5>
                                    <p className="card-text text-black-50 pb-1">Duis vel orci erat. Aenean quis sem fringilla, scelerisque lectus et, vestibulum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris...</p>
                                    <p className="card-text">
                                        <small className="text-light text-dark pr-4">
                                            <i className="fa fa-tag"></i> news
                                    </small>
                                        <small className="text-light text-dark">
                                            <i className="fa fa-sitemap"></i> Technical
                                    </small>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/blog5.jpg" className="card-img-top" alt="..." />
                                <div className="img-date">
                                    <p className="text-center pt-3">18 Jun 2015</p>
                                </div>
                                <div className="card-body">
                                    <p className="card-text d-flex justify-content-between">
                                        <small className="text-light text-darktext-light text-dark pr-4">by ram</small>
                                        <small className="text-light text-darktext-light text-dark"><i className="fa fa-comments-o"></i> 0</small>
                                    </p>
                                    <h5 className="card-title pt-1 pb-1">Quisque egestas rhoncus mauris</h5>
                                    <p className="card-text text-black-50 pb-1">Duis vel orci erat. Aenean quis sem fringilla, scelerisque lectus et, vestibulum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris...</p>
                                    <p className="card-text">
                                        <small className="text-light text-dark pr-4">
                                            <i className="fa fa-tag"></i> news
                                    </small>
                                        <small className="text-light text-dark">
                                            <i className="fa fa-sitemap"></i> Technical
                                    </small>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/blog5.jpg" className="card-img-top" alt="..." />
                                <div className="img-date">
                                    <p className="text-center pt-3">18 Jun 2015</p>
                                </div>
                                <div className="card-body">
                                    <p className="card-text d-flex justify-content-between">
                                        <small className="text-light text-dark pr-4">by ram</small>
                                        <small className="text-light text-dark"><i className="fa fa-comments-o"></i> 0</small>
                                    </p>
                                    <h5 className="card-title pt-1 pb-1">Dentures Realignment</h5>
                                    <p className="card-text text-black-50 pb-1">Duis vel orci erat. Aenean quis sem fringilla, scelerisque lectus et, vestibulum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris...</p>
                                    <p className="card-text">
                                        <small className="text-light text-dark pr-4">
                                            <i className="fa fa-tag"></i> news
                                    </small>
                                        <small className="text-light text-dark">
                                            <i className="fa fa-sitemap"></i> Technical
                                    </small>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/blog7.jpg" className="card-img-top" alt="..." />
                                <div className="img-date">
                                    <p className="text-center pt-3">18 Jun 2015</p>
                                </div>
                                <div className="card-body">
                                    <p className="card-text d-flex justify-content-between">
                                        <small className="text-light text-dark pr-4">by ram</small>
                                        <small className="text-light text-dark"><i className="fa fa-comments-o"></i> 0</small>
                                    </p>
                                    <h5 className="card-title pt-1 pb-1">Root Canal Treatment – RCT</h5>
                                    <p className="card-text text-black-50 pb-1">Duis vel orci erat. Aenean quis sem fringilla, scelerisque lectus et, vestibulum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris...</p>
                                    <p className="card-text">
                                        <small className="text-light text-dark pr-4">
                                            <i className="fa fa-tag"></i> news
                                    </small>
                                        <small className="text-light text-dark">
                                            <i className="fa fa-sitemap"></i> Technical
                                    </small>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/blog9.jpg" className="card-img-top" alt="..." />
                                <div className="img-date">
                                    <p className="text-center pt-3">18 Jun 2015</p>
                                </div>
                                <div className="card-body">
                                    <p className="card-text d-flex justify-content-between">
                                        <small className="text-light text-dark pr-4">by ram</small>
                                        <small className="text-light text-dark"><i className="fa fa-comments-o"></i> 0</small>
                                    </p>
                                    <h5 className="card-title pt-1 pb-1">Tooth Extraction</h5>
                                    <p className="card-text text-black-50 pb-1">Duis vel orci erat. Aenean quis sem fringilla, scelerisque lectus et, vestibulum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris...</p>
                                    <p className="card-text">
                                        <small className="text-light text-dark pr-4">
                                            <i className="fa fa-tag"></i> news
                                    </small>
                                        <small className="text-light text-dark">
                                            <i className="fa fa-sitemap"></i> Technical
                                    </small>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/blog6.jpg" className="card-img-top" alt="..." />
                                <div className="img-date">
                                    <p className="text-center pt-3">18 Jun 2015</p>
                                </div>
                                <div className="card-body">
                                    <p className="card-text d-flex justify-content-between">
                                        <small className="text-light text-dark pr-4">by ram</small>
                                        <small className="text-light text-dark"><i className="fa fa-comments-o"></i> 0</small>
                                    </p>
                                    <h5 className="card-title pt-1 pb-1">Dental Hygiene-the dos and donts</h5>
                                    <p className="card-text text-black-50 pb-1">Duis vel orci erat. Aenean quis sem fringilla, scelerisque lectus et, vestibulum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris...</p>
                                    <p className="card-text">
                                        <small className="text-light text-dark pr-4">
                                            <i className="fa fa-tag"></i> news
                                    </small>
                                        <small className="text-light text-dark">
                                            <i className="fa fa-sitemap"></i> Technical
                                    </small>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/blog4.jpg" className="card-img-top" alt="..." />
                                <div className="img-date">
                                    <p className="text-center pt-3">18 Jun 2015</p>
                                </div>
                                <div className="card-body">
                                    <p className="card-text d-flex justify-content-between">
                                        <small className="text-light text-dark pr-4">by ram</small>
                                        <small className="text-light text-dark"><i className="fa fa-comments-o"></i> 0</small>
                                    </p>
                                    <h5 className="card-title pt-1 pb-1">Quisque egestas rhoncus mauris</h5>
                                    <p className="card-text text-black-50 pb-1">Duis vel orci erat. Aenean quis sem fringilla, scelerisque lectus et, vestibulum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris...</p>
                                    <p className="card-text">
                                        <small className="text-light text-dark pr-4">
                                            <i className="fa fa-tag"></i> news
                                    </small>
                                        <small className="text-light text-dark">
                                            <i className="fa fa-sitemap"></i> Technical
                                    </small>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/blog4.jpg" className="card-img-top" alt="..." />
                                <div className="img-date">
                                    <p className="text-center pt-3">18 Jun 2015</p>
                                </div>
                                <div className="card-body">
                                    <p className="card-text d-flex justify-content-between">
                                        <small className="text-light text-dark pr-4">by ram</small>
                                        <small className="text-light text-dark"><i className="fa fa-comments-o"></i> 0</small>
                                    </p>
                                    <h5 className="card-title pt-1 pb-1">Dentures Realignment</h5>
                                    <p className="card-text text-black-50 pb-1">Duis vel orci erat. Aenean quis sem fringilla, scelerisque lectus et, vestibulum arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris...</p>
                                    <p className="card-text">
                                        <small className="text-light text-dark pr-4">
                                            <i className="fa fa-tag"></i> news
                                    </small>
                                        <small className="text-light text-dark">
                                            <i className="fa fa-sitemap"></i> Technical
                                    </small>
                                    </p>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog;
