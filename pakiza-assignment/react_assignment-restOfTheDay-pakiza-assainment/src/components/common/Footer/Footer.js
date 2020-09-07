import React from 'react';

function Footer() {
    return (
        <section className="footer">
            <div className="container-fluid text-white bg-dark pt-2">
                <div className="container">
                    <div className="row d-flex justify-content-between p-4">
                        <div className="col-md-9">
                            <div className="footer-left">
                                <p>Copyright © 2017 Dental | Designthemes</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-right d-flex justify-content-between">
                                <p>Terms of Use</p>
                                <p>Privacy Statemen</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;