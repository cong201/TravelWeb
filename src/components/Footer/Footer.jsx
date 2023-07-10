import React from "react";
import './footer.css'
import { SiYourtraveldottv } from 'react-icons/si'
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'

const Footer = () => {
    return (
        <section>
            <div className="footer ">
                <div className="secContainer container grid">

                    <div className="footerLogo grid">
                        <a href="" className="logo">
                            <h1 className="flex"><SiYourtraveldottv className="icon" />Congle</h1>
                            <div className="socials flex">
                                <BsFacebook className="icon" />
                                <BsTwitter className="icon" />
                                <BsInstagram className="icon" />
                            </div>
                        </a>
                    </div>


                    <div className="footerLink">
                        <span className="linkTitle">Information</span>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Explore</a>
                        </li>
                        <li>
                            <a href="#">Travel</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                    </div>

                    <div className="footerLink">
                        <span className="linkTitle">Helpful Link</span>
                        <li>
                            <a href="#">Destionation</a>
                        </li>
                        <li>
                            <a href="#">Support</a>
                        </li>
                        <li>
                            <a href="#">Travel & Condition</a>
                        </li>
                        <li>
                            <a href="#">Privacy</a>
                        </li>
                    </div>

                    <div className="footerLink">
                        <span className="linkTitle">Contact Us</span>
                        <span className="phone">0337782934</span>
                        <span className="email">conglevan21072001@gmail.com</span>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Footer;