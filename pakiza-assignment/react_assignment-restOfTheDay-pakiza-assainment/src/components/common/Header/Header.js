import React from 'react';
import './Header.css';

function Header() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-50px";
        }
        prevScrollpos = currentScrollPos;
    }

    return (
        <section className="header">
            <div className="container-fluid bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav id="navbar" class="navbar navbar-expand-lg navbar-light">
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                                    <a class="navbar-brand" href="#"><img class="normal_logo" src="https://j758s1irpz926ddw14fjwet1-wpengine.netdna-ssl.com/wp-content/themes/dental/images/logo.png" alt="Dental WordPress Theme" title="Dental WordPress Theme" /></a>
                                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0 home-bg">
                                        <li class="nav-item active">
                                            <a class="nav-link" href="#">HOME <span class="sr-only">(current)</span></a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ABOUT</a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a className="dropdown-item" href="#">Action 1</a>
                                                <a className="dropdown-item" href="#">Another 2</a>
                                                <a className="dropdown-item" href="#">Another 3</a>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">SERVICES</a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a className="dropdown-item" href="#">Action 1</a>
                                                <a className="dropdown-item" href="#">Another 2</a>
                                                <a className="dropdown-item" href="#">Another 3</a>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">BLOG</a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a className="dropdown-item" href="#">Action 1</a>
                                                <a className="dropdown-item" href="#">Another 2</a>
                                                <a className="dropdown-item" href="#">Another 3</a>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">DENTISTS</a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a className="dropdown-item" href="#">Action 1</a>
                                                <a className="dropdown-item" href="#">Another 2</a>
                                                <a className="dropdown-item" href="#">Another 3</a>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">PORTFOLIO</a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a className="dropdown-item" href="#">Action 1</a>
                                                <a className="dropdown-item" href="#">Another 2</a>
                                                <a className="dropdown-item" href="#">Another 3</a>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">SHORTCODES</a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a className="dropdown-item" href="#">Action 1</a>
                                                <a className="dropdown-item" href="#">Another 2</a>
                                                <a className="dropdown-item" href="#">Another 3</a>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">APPOINTMENT</a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a className="dropdown-item" href="#">Action 1</a>
                                                <a className="dropdown-item" href="#">Another 2</a>
                                                <a className="dropdown-item" href="#">Another 3</a>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-search" /></a>
                                            <div className="dropdowns dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a className="dropdown-item" href="#">
                                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;





// #navbar {
//     background - color: #333; /* Black background color */
//     position: fixed; /* Make it stick/fixed */
//     top: 0; /* Stay on top */
//     width: 100 %; /* Full width */
//     transition: top 0.3s; /* Transition effect when sliding down (and up) */
// }

/* Style the navbar links */
//   #navbar a {
//     float: left;
//     display: block;
//     color: white;
//     text-align: center;
//     padding: 15px;
//     text-decoration: none;
//   }

//   #navbar a:hover {
//     background-color: #ddd;
//     color: black;
//   }

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
