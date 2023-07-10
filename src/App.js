import React from "react";
import './app.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Offer from './components/Offer/Offer'
import Popular from './components/Popular/Popular'
import Blog from './components/Blog/Blog'


const App = () => {
    return (
        <>
            <Navbar />
            <Home />
            <Popular />
            <Offer />
            <About />
            <Blog />
            <Footer />
        </>
    )
}

export default App

//Hoàn thiện