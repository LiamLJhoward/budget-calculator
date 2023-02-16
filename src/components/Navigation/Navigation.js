import React from "react";
import Logo from './logo.png';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav class="navbar navbar-expand-lg justify-content-between">
            <div class="container-fluid">
                <div>
                    <a class="navbar-brand" href="#home"><img id="logo" src={Logo} alt='logo' /></a>
                </div>
                <div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav ">
                        <li class="nav-item">
                            <a class="nav-link" id="resp-border" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#calculator">Calculator</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#reviews">Reviews</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#tips">Tips & Tricks</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link sign-in" href="#SIGNIN">Sign In</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;