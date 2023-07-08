import React, { useState } from "react";
import './navbar.css'
import { SiYourtraveldottv } from 'react-icons/si';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';

const Navbar = () => {

    const [active, setActive] = useState('navbar');
    const showNav = () => {
        setActive('navbar activeNavbar');
    }

    const removeNav = () => {
        setActive('navbar')
    }

    return (
        <section className="navbarSection">
            <div className="header">
                <div className="logoDiv">
                    <a href="#" className="logo">
                        <h1 className="flex"><SiYourtraveldottv className="icon" />Cong</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItems">
                            <a href="" className="navLink">Home</a>
                        </li>
                        <li className="navItems">
                            <a href="" className="navLink">Product</a>
                        </li>
                        <li className="navItems">
                            <a href="" className="navLink">Resources</a>
                        </li>
                        <li className="navItems">
                            <a href="" className="navLink">Contact</a>
                        </li>
                        <li className="navItems">
                            <a href="" className="navLink">Blog</a>
                        </li>
                        <div className="headerBtn flex">
                            <button className="btn loginBtn">
                                <a href="">Login</a>
                            </button>
                            <button className="btn SignUpBtn">
                                <a href="">Sign up</a>
                            </button>
                        </div>
                    </ul>
                    <div onClick={removeNav} className="closeNavbar">
                        <AiFillCloseCircle className="icon" />
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon" />
                </div>
            </div>
        </section>
    );
}

export default Navbar;