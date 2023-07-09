import React from "react";
import './about.css'

import img1 from '../../assets/hikings.jpg'
import img2 from '../../assets/message.jpg'
import img3 from '../../assets/user.jpg'
import img4 from '../../assets/moutain.jpg'

import video from '../../assets/video.mp4'

const About = () => {
    return (
        <section className="about section">
            <div className="secContainer">
                <h3 className="title">Why Hikings?</h3>

                <div className="mainContent container grid">
                    <div className="singleItem">
                        <img src={img4} alt="Image Item" />
                        <h3>100+ Moutain</h3>
                        <p>
                            Research shows that a chance to break away from the normal rhymology of daily life reduces stress and improving
                        </p>
                    </div>

                    <div className="singleItem">
                        <img src={img1} alt="Image Item" />
                        <h3>300+ Hikings</h3>
                        <p>
                            Research shows that a chance to break away from the normal rhymology of daily life reduces stress and improving
                        </p>
                    </div>

                    <div className="singleItem">
                        <img src={img3} alt="Image Item" />
                        <h3>100+ Customers</h3>
                        <p>
                            Research shows that a chance to break away from the normal rhymology of daily life reduces stress and improving
                        </p>
                    </div>

                    <div className="singleItem">
                        <img src={img2} alt="Image Item" />
                        <h3>150+ message</h3>
                        <p>
                            Research shows that a chance to break away from the normal rhymology of daily life reduces stress and improving
                        </p>
                    </div>
                </div>

                <div className="videoCard container">
                    <div className="cardContent grid">

                        <div className="cardText">
                            <h2>Wonderfull hourse in here</h2>
                            <p>The advanture subranking is base on a equally weight average of scores from 100 countries</p>
                        </div>

                        <div className="cardVideo">
                            <video src={video} autoPlay loop muted
                                type="video/mp4"></video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;