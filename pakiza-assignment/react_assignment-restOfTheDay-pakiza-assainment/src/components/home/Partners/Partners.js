import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Partners.css';

function Partners() {
    return (
        <section className="partners">
            <div className="container-fluid">
                <div className="container">
                    <div className="partners-header text-center">
                        <p className="black-color font-weight-light">Our <span className="cyan-color">Partners in Progress</span></p>
                        <p className="gray-color">You are never fully dressed without a smile!</p>
                    </div>

                    <div className="partners-carousel">
                        <OwlCarousel items={5}
                            rewind={true}
                            loop
                            nav
                            margin={8} >
                            <div><img className="img" src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/par2-4.png" /></div>
                            <div><img className="img" src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/par1-3.png" /></div>
                            <div><img className="img" src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/par4-2.png" /></div>
                            <div><img className="img" src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/par3-3.png" /></div>
                            <div><img className="img" src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/par10-3.png" /></div>
                            <div><img className="img" src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/par5-2.png" /></div>
                            <div><img className="img" src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/par6-3.png" /></div>
                            <div><img className="img" src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/par7-3.png" /></div>
                            <div><img className="img" src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/par8-3.png" /></div>
                            <div><img className="img" src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/par9-3.png" /></div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partners;