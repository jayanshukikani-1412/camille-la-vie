import React from 'react'
import styled from 'styled-components'

const BottomFooterWrapper = () => {
    return (
        <StyleWrapper>
            <div>
                <p>Copyright © 2021 Camille La Vie. All rights reserved.</p>
            </div>
            <div>
                <p>Corporate Office, 61 W. Palisade Avenue Englewood, NJ 07631 | Call Us : (551) 257-1900 | Email : customerservice@clv.com</p>
            </div>
        </StyleWrapper>
    )
}
const StyleWrapper = styled.div`
display: flex;
justify-content: space-between;
padding: 24px 155px;

div{
    p{
        font-weight: 400;
        font-size: 13px;    
        line-height: 16px;
        text-align: center;
    }
}

@media  (max-width: 1440px){
        display: flex;
        justify-content: space-between;
        padding: 24px 100px;

    }

    @media  (max-width: 1350px){
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        gap: 30px;
        padding: 24px 100px;

    }
`;

export default BottomFooterWrapper
