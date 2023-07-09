import React from "react";
import './offer.css'
import { MdKingBed, MdBathtub, MdAirportShuttle, MdLocationOn } from 'react-icons/md'
import { FaWifi } from 'react-icons/fa'
import { BsArrowRightShort } from 'react-icons/bs'
import img1 from '../../assets/picture_5.jpg'
import img2 from '../../assets/picture_7.jpg'
import img3 from '../../assets/picture_8.jpg'
import img4 from '../../assets/picture_1.jpg'
import img5 from '../../assets/picture_3.jpg'

const Offers = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: 'Cua Lo',
        location: '450 Vine #310, Nghe An',
        price: '$400'
    },
    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Nha tho lon',
        location: 'Ha Noi',
        grade: '50 Vine #60,$100'
    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Do Luong',
        location: '40 Vine #10, Nghe An',
        grade: '$150'
    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Quang Son',
        location: '300 Vine #60,Do Luong',
        grade: '$1000'
    },
    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Vinh City',
        location: '140 Vine #110,Nghe An',
        grade: '$868'
    },
]

const Offer = () => {
    return (
        <section className="offer container section">
            <div className="secContainer">
                <div className="secIntro">
                    <h2 className="secTitle">Special offer</h2>
                    <p>From historical cities to natural spectecular , come see the best place of the world</p>
                </div>
                <div className="mainContent grid">
                    {
                        Offers.map(({ id, imgSrc, destTitle, location, price }) => {
                            return (<div className="singleOffer">
                                <div className="destImg">
                                    <img src={imgSrc} alt="Image Name" />
                                    <span className="discount">30% off</span>
                                </div>
                                <div className="offerBody">
                                    <div className="price flex">
                                        <h4>{price}</h4>
                                        <span className="status">For Rent</span>
                                    </div>

                                    <div className="amenities flex">
                                        <div className="singleAmen flex">
                                            <MdKingBed className="icon" />
                                            <small>2 Beds</small>
                                        </div>
                                        <div className="singleAmen flex">
                                            <MdBathtub className="icon" />
                                            <small>1 Bath</small>
                                        </div>
                                        <div className="singleAmen flex">
                                            <FaWifi className="icon" />
                                            <small>Wi-fi</small>
                                        </div>
                                        <div className="singleAmen flex">
                                            <MdAirportShuttle className="icon" />
                                            <small>Airport</small>
                                        </div>
                                    </div>

                                    <div className="location flex">
                                        <MdLocationOn className="icon" />
                                        <small>{location}</small>
                                    </div>

                                    <button className="btn flex">
                                        View Detail
                                        <BsArrowRightShort className="icon" />
                                    </button>
                                </div>
                            </div>)
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Offer;