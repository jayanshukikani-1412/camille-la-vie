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
width: 100%;
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
        text-transform: uppercase;

    }
}

div:last-child{
    display: flex;
    border: 2px solid #000000;
    border-radius: 3px;
    input{
        padding: 25px 0 26px 30px ;
        background: #FFFFFF;
        border: none;
        border-radius: 3px;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
    
    }
    button{
        padding: 26px 43px;
        background: #000000;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 20px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
        transition: all 0.3s;
    }
}


@media (max-width:865px){
    padding: 0px 20px;
}

@media (max-width: 768px) {
    div:first-child{
        h1{
            font-weight: 600;
            font-size: 24px;
        }
        p{
            font-weight: 500;
            font-size: 15px;
            line-height: 26px;
            margin: 11px 0 28px 0;
        }
    }
    div:last-child{
        display: flex;
        flex-direction: column;
        border: none;

        input{
            border: 2px solid #000000;
        }
        button{
            width: 300px;
        }
    }
}

@media (max-width: 500px) {
    div:first-child{
        h1{
            font-weight: 600;
            font-size: 24px;
        }
        p{
            font-weight: 500;
            font-size: 15px;
            line-height: 26px;
            margin: 11px 0 28px 0;
        }
    }
    div:last-child{
        display: flex;
        flex-direction: column;
        border: none;

        input{
            border: 2px solid #000000;
            width: 200px;

        }
        button{
            width: 200px;
        }
    }
}

`;

export default EmailSubscribe
