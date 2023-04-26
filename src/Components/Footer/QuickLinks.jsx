import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const QuickLinks = () => {
    return (
        <LinkStyleContainer>
            <h3 className='title-container'>QUICK LINKS</h3>
            <hr />
            <div className='link-container'>
            <Link><span>About Us</span></Link>
            <Link><span>Store Locator</span></Link>
            <Link><span>Catalogs</span></Link>
            <Link><span>Accessibility Statement</span></Link>
            <Link><span>Blog</span></Link>
            <Link><span>Camille TV</span></Link>
            </div>
        </LinkStyleContainer>
    )
}

const LinkStyleContainer = styled.section`

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

export default QuickLinks
