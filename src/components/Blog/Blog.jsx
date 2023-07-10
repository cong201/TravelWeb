import React, { useEffect } from "react";
import './blog.css'
import Aos from "aos";
import 'aos/dist/aos.css';
import { BsArrowRightShort } from 'react-icons/bs'
import img1 from '../../assets/picture_5.jpg'
import img2 from '../../assets/picture_4.jpg'
import img3 from '../../assets/picture_11.jpg'
import img4 from '../../assets/picture_12.jpg'


const Blogs = [
    {
        id: 1,
        imgSrc: img1,
        title: 'Cua lo',
        desc: 'Cua Lo is a UNESCO World Heritage site and one of the most captivating natural wonders in Vietnam. With its emerald waters and thousands of limestone islands'
    },
    {
        id: 2,
        imgSrc: img2,
        title: 'Ha Noi',
        desc: 'The Serengeti National Park in Tanzania is a wildlife lovers paradise.This vast savannah is famous for its annual migration of wildebeest and other animals, offering an awe- inspiring spectacle of nature.'
    },
    {
        id: 3,
        imgSrc: img3,
        title: 'Do Luong',
        desc: 'he Grand Canyon is a geological marvel located in Nghe An. Carved by the Colorado River over millions of years, it stretches 446 kilometers long and over a kilometer deep'
    },
    {
        id: 4,
        imgSrc: img4,
        title: 'Quang Son',
        desc: 'The Great Barrier Reef is the largest coral reef system in the world, stretching over 2,300 kilometers off the coast of Do Luong'
    },

]

function Blog() {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section className="blog container section">
            <div className="secContainer">
                <div data-aos="fade-right" data-aos-duration="2500" className="secIntro">
                    <h2 className="secTitle">
                        Our best blog?
                    </h2>
                    <p>An insight to the incredible experince in the world</p>
                </div>

                <div className="mainContainer grid">
                    {
                        Blogs.map(({ id, imgSrc, title, desc }) => {
                            return (
                                <div className="singlePost grid">
                                    <div data-aos="fade-right" data-aos-duration="2000" className="imgDiv">
                                        <img src={imgSrc} alt={title} />
                                    </div>

                                    <div data-aos="fade-up" data-aos-duration="2000" className="postDetail">
                                        <h3>{title}</h3>
                                        <p>{desc}</p>
                                    </div>

                                    <a data-aos="fade-left" data-aos-duration="2000" href="#" className="flex">
                                        Read more
                                        <BsArrowRightShort className="icon" />
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Blog;