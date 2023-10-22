import React, { Component } from 'react';
import Carousel from "./Carousel";
import Partners from './Partners';
import HomeGallery from './HomeDisplay';
//import '../styles/Home.css';
import '../styles/Fonts.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <HomeGallery />
                <Partners />
            </div>
        );
    }
}

export default Home;