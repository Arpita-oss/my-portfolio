import React, { Component } from 'react';
import "./HeroImg2.css";

class HeroImg2 extends Component {
    render() {
        return (
            <div className='hero-Img' style={{ backgroundImage: `url(${this.props.imgSrc})` }}>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default HeroImg2;
