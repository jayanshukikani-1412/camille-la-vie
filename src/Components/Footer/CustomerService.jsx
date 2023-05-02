import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CustomerService = () => {
    return (
        <LinkStyleContainer>
            <h3 className='title-container'>Customer Service</h3>
            <hr />
            <div className='link-container'>
                <Link><span>Contact Us</span></Link>
                <Link><span>Support</span></Link>
                <Link><span>Shipping & Returns</span></Link>
                <Link><span>Zip Payment</span></Link>

            </div>
        </LinkStyleContainer>
    )
}

const LinkStyleContainer = styled.section`
width: fit-content;

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

    .link-container{
        display: flex;
        flex-direction: column;
        gap: 20px;

        a{
            span{
                font-weight: 600;
                font-size: 15px;
                line-height: 20px;
                text-transform: uppercase;
                color: #000000;
            }

        }
    }
`;

export default CustomerService
