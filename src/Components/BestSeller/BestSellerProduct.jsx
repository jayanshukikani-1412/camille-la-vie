import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const BestSellerProduct = ({ image, title, price }) => {
    return (
        <StyleWrapper>
            <Link to={"/products/productid"}>
                <img src={image} alt="" />
                <p>{title}</p>
                <p>{price}</p>
            </Link>
        </StyleWrapper>
    )
}

const StyleWrapper = styled.section`
text-align: center;

a{
    color: #000000;
}

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

