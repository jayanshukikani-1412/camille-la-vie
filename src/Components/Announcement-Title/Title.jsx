import React from 'react'
import styled from 'styled-components'

const Title = () => {
    return (
        <Wrapper>
            <p>SHOP OUR MOST WANTED STYLES HERE!</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background: #000000;
    padding: 8px 0px;

    p{
        text-align: center;
        font-weight: 600;
        font-size: 12px;
        line-height: 12px;
        letter-spacing: 0.1em;
        color: #FFFFFF;
    }
`;

export default Title
