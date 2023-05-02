import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const TopCollection = () => {
    return (
        <LinkStyleContainer>
            <h3 className='title-container'>TOP COLLECTION</h3>
            <hr />            
            <div className='link-container'>
                <Link><span>New Spring 2022</span></Link>
                <Link><span>Prom Dresses</span></Link>
                <Link><span>Homecoming Dresses</span></Link>
                <Link><span>Evening Dresses</span></Link>
                <Link><span>Wedding Dresses</span></Link>
                <Link><span>Bridesmaid Dresses</span></Link>
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

export default TopCollection
