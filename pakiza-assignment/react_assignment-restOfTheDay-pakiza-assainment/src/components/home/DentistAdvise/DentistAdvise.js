import React from 'react';
import './DentistAdvise.css';

function DentistAdvise() {
    return (
        <section className="dentist-advise">
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="dentist-advise-header">
                                <p>Relax…your Dentist Knows Best</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {/* <div className="col-md-1">
                            <div className="dentist-icon">
                                <i class="fa fa-trophy fa-lg rounded-circle mt-3" aria-hidden="true"></i>
                            </div>
                        </div> */}
                        <div className="col-md-11 mb-3 den">
                            <i class="fa fa-trophy fa-lg rounded-circle mt-3" aria-hidden="true"></i>
                            <div className="dentist-advises d-inline-block">
                                <p>Dental hygiene never forget!</p>
                            </div>
                            <div className="dentist-advise-paragraph">
                                <p>Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {/* <div className="col-md-1">
                            <div className="dentist-icon">
                                <i class="fa fa-user-md fa-lg rounded-circle mt-3" aria-hidden="true"></i>
                            </div>
                        </div> */}
                        <div className="col-md-11 mb-3 den">
                            <i class="fa fa-user-md fa-lg rounded-circle mt-3" aria-hidden="true"></i>
                            <div className="dentist-advises d-inline-block">
                                <p>Don’t rush when you brush!</p>
                            </div>
                            <div className="dentist-advise-paragraph">
                                <p>Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-11 den">
                            <i class="fa fa-user fa-lg rounded-circle mt-3" aria-hidden="true"></i>
                            <div className="dentist-advises d-inline-block">
                                <p>Visit your dentist once in 6 months</p>
                            </div>
                            <div className="dentist-advise-paragraph">
                                <p>Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DentistAdvise;