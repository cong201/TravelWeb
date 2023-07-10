import React, { useEffect } from "react";
import './popular.css'
import Aos from "aos";
import 'aos/dist/aos.css';

import { BsArrowLeftShort, BsArrowRightShort, BsDot } from 'react-icons/bs'
import img1 from '../../assets/custumize.jpg'
import img2 from '../../assets/picture_4.jpg'
import img3 from '../../assets/picture_7.jpg'
import img4 from '../../assets/picture_6.jpg'
import img5 from '../../assets/vinhcity.jpg'

const Data = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: 'Cua Lo',
        location: 'Nghe An',
        grade: 'BEST BEAUTIFULL BEACH'
    },
    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Nha tho lon',
        location: 'Ha Noi',
        grade: 'Church'
    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Do Luong',
        location: 'Nghe An',
        grade: 'BEST BEAUTIFULL PEACE'
    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Quang Son',
        location: 'Do Luong',
        grade: 'VILLAGE'
    },
]

const Popular = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section className="popular section container">
            <div className="secContainer">
                <div className="secHeader grid">
                    <div data-aos="fade-right" data-aos-duration="2500" className="textDiv">
                        <h2 className="secTitle">Popular Destination</h2>
                        <p>
                            From historical cities to natural spectercular, come see the best of the world.
                        </p>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2500" className="iconDiv flex">
                        <BsArrowLeftShort className="icon leftIcon" />
                        <BsArrowRightShort className="icon rightIcon" />
                    </div>
                </div>

                <div className="mainContent grid">
                    {
                        Data.map(({ id, imgSrc, destTitle, location, grade }) => {
                            return (
                                <div data-aos="fade-up" data-aos-duration="3500" className="singleDestinaton">

                                    <div className="destImage">
                                        <img src={imgSrc} alt="Image title" />
                                        <div className="overlayInfo">
                                            <h3>{destTitle}</h3>
                                            <p>
                                                {location}
                                            </p>
                                        </div>
                                        <BsArrowRightShort className="icon" />
                                    </div>

                                    <div className="destFooter">
                                        <div className="number">0{id}</div>
                                        <div className="destText flex">
                                            <h6>{location}</h6>
                                            <span className="flex">
                                                <span className="dot">
                                                    <BsDot className="icon" />
                                                </span>
                                                {grade}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Popular;