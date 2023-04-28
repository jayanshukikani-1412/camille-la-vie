import React from 'react'
import styled from 'styled-components'

const CompleteLookProduct = ({ image, title, price }) => {
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
width: 150px;
height: 200px;
}


    p{
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        margin-top: 10px;
    }

`;


export default CompleteLookProduct

