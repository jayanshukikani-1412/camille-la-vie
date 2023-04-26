import React from 'react'
import styled from 'styled-components'


const Picture = ({ image, btn }) => {
    return (
        <StyleWrapper>
            <div className='product-wrapper'>
                <img src={image} alt="" />
                <button>{btn}</button>
            </div>

        </StyleWrapper>
    )
}

const StyleWrapper = styled.section`
    width: fit-content;
    margin-bottom: 26px;

    .product-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        img{
            width: 100%;
            height: 100%;
        }
        button{
            position: absolute;
            bottom: -30px;
            width: fit-content;
            padding: 15px 20px;
            background: #000000;
            border-radius: 3px;
            font-weight: 600;
            font-size: 14px;
            line-height: 19px;
            letter-spacing: 0.1em;
            color: #FFFFFF;
            transition: all 0.3s;
            border: 2px solid transparent;
            cursor: pointer;
        }
    }

        @media (max-width: 1440px) {
        .product-wrapper{
            button{
            font-size: 10px;
            padding: 10px 15px;
            }
        }
    }

    @media (max-width: 1140px) {
        .product-wrapper{
            button{
            font-size: 10px;
            padding: 10px 15px;
            }
        }
    }

    @media (max-width: 500px) {
        .product-wrapper{
        gap: 10px;
            button{
                position: static;
            width: fit-content;
            }
        }
    }

`;

export default Picture
