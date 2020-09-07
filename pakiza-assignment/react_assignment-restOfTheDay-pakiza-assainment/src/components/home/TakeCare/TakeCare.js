import React from 'react';
import './TakeCare.css';

function TakeCare() {
    return (
        <section className="take-care">
            <div className="container-fluid">
                <div className="container">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="take-care-header">
                                <p>Take care of your teeth & gums</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="take-care-paragraph">
                                <p>Researchers have found that people with gum disease are almost twice as likely to suffer from coronary heart disease…</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="take-care-list">
                                <ul className="circles">
                                    <li><p class="d-inline-block ml-2">Aenean posuere sem imperdiet</p></li>
                                    <li><p class="d-inline-block ml-2">Sed semper lorem sit amet ultrices mollis.</p></li>
                                    <li><p class="d-inline-block ml-2">Vivamus vehicula diam ut velit lacinia</p></li>
                                    <li><p class="d-inline-block ml-2">Proin condimentum nibh ut orci rutrum convallis.</p></li>
                                    <li><p class="d-inline-block ml-2">Pellentesque sed mi in ipsum tempus pharetra</p></li>
                                    <li><p class="d-inline-block ml-2">Aenean posuere sem imperdiet, viverra quam</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default TakeCare;