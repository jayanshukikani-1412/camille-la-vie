import React from 'react'
import styled from 'styled-components'

const BestSellerProduct = ({ image, title, price }) => {
    return (
        <StyleWrapper>
            <img src={image} alt="" />
            <p>{title}</p>
            <p>{price}</p>
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
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        margin-top: 10px;
    }

`;


export default BestSellerProduct

