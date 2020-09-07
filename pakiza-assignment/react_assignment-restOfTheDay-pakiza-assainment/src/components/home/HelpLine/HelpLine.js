import React from 'react';
import './HelpLine.css';

function HelpLine() {
    return (
        <section className="help-line">
            <div className="container-fluid">
                <div className="container">
                    <div className="help-line-content text-center">
                        <div className="row d-flex justify-content-between">
                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col-md-12 d-flex justify-content-center">
                                        <div className="help-line-icon">
                                            <i className="fa fa-life-ring"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="pt-5">24/7 Helpline</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="p-text-size text-black-50">Dial: 130 0001 1251</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col-md-12 d-flex justify-content-center">
                                        <div className="help-line-icon">
                                            <i className="fa fa-question"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="pt-5">Ask a Question</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="p-text-size text-black-50">Have any Queries? Ask</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col-md-12 d-flex justify-content-center">
                                        <div className="help-line-icon">
                                            <i className="fa fa-stethoscope"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="pt-5">Ask a Question</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="p-text-size text-black-50">Have any Queries? Ask</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HelpLine;