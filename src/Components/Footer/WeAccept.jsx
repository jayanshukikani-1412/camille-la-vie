import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import paypal from "../../images/footer/paypal.png"
import cc from "../../images/footer/2cc.png"
import maestro from "../../images/footer/maestro.png"
import visa from "../../images/footer/visa.png"
import bbb from "../../images/footer/bbb.png"

import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaPinterest } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"

const WeAccept = () => {
    return (
        <LinkStyleContainer>
            <h3 className='title-container'>QUICK LINKS</h3>
            <hr />
            <div className='payment-container'>
                <Link><img src={paypal} alt="paypal" /></Link>
                <Link><img src={cc} alt="cc" /></Link>
                <Link><img src={maestro} alt="maestro" /></Link>
                <Link><img src={visa} alt="visa" /></Link>
                <Link><img src={bbb} alt="bbb" /></Link>
            </div>
            <h3 className='title-container mt'>Social Media</h3>
            <hr />
            <div className='media-container'>
                <Link><FaFacebookF className='social-media-icon' /></Link>
                <Link><FaTwitter className='social-media-icon' /></Link>
                <Link><FaInstagram className='social-media-icon' /></Link>
                <Link><FaPinterest className='social-media-icon' /></Link>
                <Link><FaYoutube className='social-media-icon' /></Link>
            </div>
        </LinkStyleContainer>
    )
}

const LinkStyleContainer = styled.section`

.mt{
    margin-top: 45px;
}
    h3{
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        text-transform: uppercase;
    }

    hr{
        margin: 10px 0 34px 0;
        width: 40px;
        border-top: 2px solid #000000 ;
    }

    .payment-container{
        display: flex;
        gap: 10px;
    }

    .media-container{
        display: flex;
        gap: 20px;

        .social-media-icon{
            color: #000000;
            height: 25px;
            width: 25px;
        }
    }



    @media  (max-width: 860px){
        .payment-container{
            display: grid;
            grid-template-columns: auto auto auto;        
            gap: 10px;
        }
        
        .media-container{
            display: grid;
            grid-template-columns: auto auto auto;
            gap: 20px;
        }
}
`;


export default WeAccept
