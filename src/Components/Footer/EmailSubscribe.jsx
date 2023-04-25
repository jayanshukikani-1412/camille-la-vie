import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


const EmailSubscribe = () => {
    return (
        <Wrapper>
            <div>
                <h1>STAY IN TOUCH</h1>
                <p>SIGN UP FOR OUR LATEST OFFERS, PRODUCT PROMOS AND LATEST COLLECTION LAUNCHES.</p>
            </div>

            <div>
                <input type="email" placeholder='Email Address' />
                <Link><button>SUBSCRIBE</button></Link>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
text-align: center;
height: 330px;
background: #F4F4F4;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

div:first-child{
    h1{
        font-weight: 700;
        font-size: 28px;
        line-height: 36px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
    }
    p{
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        margin: 11px 0 28px 0;
    }
}

div:last-child{
    input{
        padding: 25px 0 27px 30px ;
        background: #FFFFFF;
border: 1px solid #000000;
border-radius: 3px;
font-weight: 400;
font-size: 16px;
line-height: 20px;
    }
    button{
        margin-top: 40px;
        padding: 20px 40px;
        background: #000000;
        border-radius: 3px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 20px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
        transition: all 0.3s;
        border: 2px solid transparent;


    }
}

`;

export default EmailSubscribe
