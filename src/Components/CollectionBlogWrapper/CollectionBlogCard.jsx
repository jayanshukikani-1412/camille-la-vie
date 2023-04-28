import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CollectionBlogCard = ({ image, title, subtitle, description }) => {
    return (
        <BlogStyleWrapper>
            <div className='image-wrapper'>
                <img src={image} alt="" />
            </div>
            <div className='body-wrapper'>
                <span>{subtitle}</span>
                <h3>{title} </h3>
                <p>{description.slice(0, 100)}</p>
            </div>
            <div className='link-wrapper'>
                <Link> <span>MORE</span></Link>
            </div>
        </BlogStyleWrapper>
    )
}

const BlogStyleWrapper = styled.div`
display: flex;
flex-direction: column;
height: auto;
width: 100%;
max-width: 410px;
.image-wrapper{
    overflow: hidden;
    
    img{
        width: 100%;
        height: 100%;
    }
}

.body-wrapper{
    span{
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #00B2D0;
    }
    h3{
        margin-top: 4px;
        font-weight: 600;
        font-size: 20px;
        line-height: 36px;
        text-transform: uppercase;
        color: #000000;
    }
    p{
        margin-top: 12px;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
    }
}

.link-wrapper{
    margin-top: 30px;

    a{
        span{
            font-weight: 600;
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            padding-bottom: 7px;
            border-bottom: 1px solid #000000;
            color: #000000;   
        }

    }

}
`;

export default CollectionBlogCard
