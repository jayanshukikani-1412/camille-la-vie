import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import heroImg from "../../images/hero-image.png"

const HeroImage = () => {
    return (
        <HeroWrapper>
            <div className='hero-wrapper'>
                <img src={heroImg} alt="hero-img" />

                <div className='hero-data'>
                    <h1>Homecoming
                        <br />
                        Dresses 2022</h1>
                    <Link><button>SHOP NOW</button></Link>
                </div>
            </div>

        </HeroWrapper>
    )
}

const HeroWrapper = styled.section`
.hero-wrapper{
    position: relative;
}
img{
    width: 100%;
    height: 100%;
    max-height: 665px;
}

.hero-data{
    position: absolute;
    top: 160px;
    left: 111px;
    width: 100%;
    max-width: 400px;


    h1{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 52px;
        line-height: 62px;
        text-transform: uppercase;
        color: #000000;
    }

    button{
        margin-top: 40px;
        padding: 20px 40px;
        background: #000000;
        border-radius: 3px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 20px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
        transition: all 0.3s;
        border: 2px solid transparent;


        &:hover{
            background: transparent;
            border: 2px solid #000000;
            color: #000000;
        }
    }
}
`;

export default HeroImage
