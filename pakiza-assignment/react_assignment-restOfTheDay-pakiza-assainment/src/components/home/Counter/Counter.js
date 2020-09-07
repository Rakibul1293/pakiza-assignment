import React, { useState, useEffect } from 'react';
import { Waypoint } from 'react-waypoint';
import CountUp from 'react-countup';
import './Counter.css';

function Counter() {
    const [isOnDiv, setOnDiv] = useState('');
    console.log(isOnDiv);

    return (
        <section className="counter">
            <div className="container-fluid">
                <div className="container">
                    <div className="counter-inner">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="counter-box">
                                    <div className="counter-box-1">
                                        <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/nc1.png" alt="" />

                                        <Waypoint onEnter={(e) => { setOnDiv(e.currentPosition) }}>
                                        </Waypoint>

                                        {(isOnDiv === 'inside') ? <p className="counter-box-first-p"><CountUp end={150} duration={5} /></p> : <p className="counter-box-first-p">150</p>
                                        }

                                        <p className="text-muted counter-box-second-p">Dedicated Doctors</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="counter-box">
                                    <div className="counter-box-2">
                                        <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/nc2.png" alt="" />

                                        <Waypoint onEnter={(e) => { setOnDiv(e.currentPosition) }}>
                                        </Waypoint>

                                        {(isOnDiv === 'inside') ? <p className="counter-box-first-p"><CountUp end={200} duration={5} /></p> : <p className="counter-box-first-p">200</p>
                                        }

                                        <p className="text-muted counter-box-second-p">Clinic Rooms</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="counter-box">
                                    <div className="counter-box-3">
                                        <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/nc3.png" alt="" />

                                        <Waypoint onEnter={(e) => { setOnDiv(e.currentPosition) }}>
                                        </Waypoint>

                                        {(isOnDiv === 'inside') ? <p className="counter-box-first-p"><CountUp end={340} duration={5} /></p> : <p className="counter-box-first-p">340</p>
                                        }

                                        <p className="text-muted counter-box-second-p">Awards</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="counter-box">
                                    <div className="counter-box-4">
                                        <img src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/nc4.png" alt="" />

                                        <Waypoint onEnter={(e) => { setOnDiv(e.currentPosition) }}>
                                        </Waypoint>

                                        {(isOnDiv === 'inside') ? <p className="counter-box-first-p"><CountUp end={1500} duration={5} /></p> : <p className="counter-box-first-p">1500</p>
                                        }

                                        <p className="text-muted counter-box-second-p">Happy Clients</p>
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

export default Counter;