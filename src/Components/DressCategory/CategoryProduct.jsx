import React from 'react'
import styled from 'styled-components'

const CategoryProduct = ({ image, title }) => {
    return (
        <StyleWrapper>
            <img src={image} alt="" />
            <p>{title} <br /> DRESSES</p>
        </StyleWrapper>
    )
}

const StyleWrapper = styled.section`
text-align: center;

img{
    width: 100%;
    height: 100%;
}

    p{
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 0.1em;
    }

`;


export default CategoryProduct
