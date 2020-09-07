import React from 'react';
import './FooterBottom.css';

function FooterBottom() {
    return (
        <div className="footer-bottom">
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="subscription">
                                <p className="gray-color text-center font-weight-light"><span className="cyan-color font-weight-bold">Newsletter</span> Subscription</p>

                                <form method="POST">
                                    <div className="input-group d-flex justify-content-center">
                                        <input className="input--style-1" type="text" placeholder="EMAIL - ID" name="name" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterBottom;