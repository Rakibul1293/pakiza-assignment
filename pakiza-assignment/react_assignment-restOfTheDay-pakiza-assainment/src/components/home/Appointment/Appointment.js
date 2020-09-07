import React from 'react';
import './Appointment.css';

function Appointment() {
    return (
        <div className="appointment">
            <div className="container">
                <div className="container-fluid">
                    <div className="form-section">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-right">
                                    <div className="form-right-header">
                                        <p className="h1 font-weight-normal text-center">Working <span>Hours</span></p>
                                    </div>
                                    <div className="working-index">
                                        <ul class="list-group list-group-flush text-justify">
                                            <li class="list-group-item text-right">
                                                <p className="font-weight-bold">Monday : <span className="text-secondary pl-5 ml-5">10:00 am – 4:00 pm</span></p>
                                            </li>
                                            <li class="list-group-item text-right">
                                                <p className="font-weight-bold">Tuesday : <span className="text-secondary pl-5 ml-5">09:00 am – 3:00 pm</span></p>
                                            </li>
                                            <li class="list-group-item text-right">
                                                <p className="font-weight-bold">Wednesday : <span className="text-secondary pl-5 ml-5">11:00 am – 5:00 pm</span></p>
                                            </li>
                                            <li class="list-group-item text-right">
                                                <p className="font-weight-bold">Thursday : <span className="text-secondary pl-5 ml-5">09:00 am – 3:00 pm</span></p>
                                            </li>
                                            <li class="list-group-item text-right">
                                                <p className="font-weight-bold">Friday : <span className="text-secondary pl-5 ml-5">12:00 am – 6:00 pm</span></p>
                                            </li>
                                            <li class="list-group-item text-right">
                                                <p className="font-weight-bold">Saturday : <span className="text-secondary pl-5 ml-5">10:00 am – 2:00 pm</span></p>
                                            </li>
                                            <li class="list-group-item text-right">
                                                <p className="font-weight-bold">Sunday : <span className="text-secondary pl-5 ml-5">10.00 am – 2:00 pm</span>
                                                </p>
                                            </li>
                                            <li class="list-group-item text-right"></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-left">
                                    <div className="form-left-header">
                                        <p className="h1 font-weight-normal">Book an <span>Appointment</span></p>
                                    </div>
                                    <div className="appointment-form">
                                        <form>
                                            <div class="form-group col-md-11">
                                                <label for="inputEmail4"></label>
                                                <input type="email" class="form-control" id="inputEmail4" placeholder="Name" />
                                            </div>
                                            <div class="form-group col-md-11">
                                                <label for="inputEmail4"></label>
                                                <input type="email" class="form-control" id="inputEmail4" placeholder="Phone" />
                                            </div>
                                            <div class="form-group col-md-11">
                                                <label for="inputEmail4"></label>
                                                <input type="email" class="form-control" id="inputEmail4" placeholder="Address" />
                                            </div>
                                            <div class="form-group col-md-11">
                                                <label for="inputState"></label>
                                                <select id="inputState" class="form-control">
                                                    <option selected>Type of Service</option>
                                                    <option>Fixing Implants</option>
                                                    <option>Crowns & Bridge Repair</option>
                                                    <option>Root Canal</option>
                                                    <option>Dental Filling</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-md-11">
                                                <label for="inputState"></label>
                                                <select id="inputState" class="form-control">
                                                    <option selected>Select</option>
                                                </select>
                                            </div>
                                            <button type="submit" class="btn btn-primary">Check Availability</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Appointment;