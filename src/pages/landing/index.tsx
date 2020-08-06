import React from 'react'

import logoImg from "../../assets/images/logo.svg"
import landingImg from "../../assets/images/landing.svg"

import studyIcon from "../../assets/images/icons/study.svg"
import giveClassesIcon from "../../assets/images/icons/give-classes.svg"
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg"

import './styles.css'

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy Logo" />
                    <h2>Your Online Study Platform</h2>
                </div>


                <img
                    src={landingImg}
                    alt="Study Platform"
                    className="hero-image"
                />

                <div className="button-container">
                    <a href="#" className="study">
                        <img src={studyIcon} alt="Study" />Study
                    </a>
                    <a href="#" className="give-classes">
                        <img src={giveClassesIcon} alt="Give Classes" />Give Classes
                    </a>

                </div>

                <span className="total-connections">
                    Total connections already 200 <img src={purpleHeartIcon} alt="Purple Heart" />
                </span>
            </div>
        </div>
    )
}

export default Landing;