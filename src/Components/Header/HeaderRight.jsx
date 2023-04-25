import React from 'react'
import { RiStore2Line } from 'react-icons/ri'
import { AiOutlineMobile } from 'react-icons/ai'
import { MdOutlineEmail } from 'react-icons/md'
import { FiSearch } from 'react-icons/fi'
import { FiHeart } from 'react-icons/fi'
import { HiOutlineUser } from 'react-icons/hi'
import { BsBasket3 } from 'react-icons/bs'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderRight = () => {
    return (
        <Wrapper>
            <div className='top-section'>
                <Link to={"/"} className='header-link' >
                    <div className='top-wrapper'>
                        <span className='link-title'>Free Shipping on All U.S.</span>
                    </div>
                </Link>

                <Link to={"/"} className='header-link'>
                    <div className='top-wrapper'>
                        <span><RiStore2Line className='link-icon' /></span>
                        <span className='link-title'>Our Stores</span>
                    </div>
                </Link>

                <Link to={"/"} className='header-link'>
                    <div className='top-wrapper'>
                        <span><AiOutlineMobile className='link-icon' /></span>
                        <span className='link-title'>(551) 257-1900</span>
                    </div>
                </Link>

                <Link to={"/"} className='header-link'>
                    <div className='top-wrapper'>
                        <span><MdOutlineEmail className='link-icon' /></span>
                        <span className='link-title'>customerservice@clv.com</span>
                    </div>
                </Link>

                <Link to={"/"} className='header-link'>
                    <div className='top-wrapper'>
                        <span className='link-title'>Blog</span>
                    </div>
                </Link>

            </div>


            <div className='bottom-section'>
                <div className="search-wrapper">
                    <FiSearch className='icons' />
                    <input type="text" placeholder='SEARCH' />
                </div>
                <div >
                    <FiHeart className='icons' />
                </div>
                <div>
                    <HiOutlineUser className='icons' />
                </div>
                <div className='cart-wrapper'>
                    <BsBasket3 className='icons' />
                    <p>MY BAG (3)</p>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
display: flex;
gap: 12px;
flex-direction: column;
.top-section{
    display: flex;
    gap: 20px;


    .header-link{
        .top-wrapper{
            display: flex;
            gap: 12px;

            .link-icon{
                width: 14px;
                height: 14px;
                color: #000000;
            }
            .link-title{
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 600;
                font-size: 12px;
                line-height: 14px;
                color: #000000;
            }
        }

    }
}

.bottom-section{
    display: flex;
    align-items: center;
    gap: 25px;

    .search-wrapper{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 19px;
        border-bottom: 1px solid #000000;
        width:100%;
        input{
            border: none;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 36px;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            color: #000000;
            width: 100%;

            &:focus{
                border: none;
            }
        }
    }

    .icons{
        width: 16px;
        height: 16px;
        color: #000000;
    }

    .cart-wrapper{
        display: flex;
        gap: 14px;
        width: 190px;
    }
}


`;

export default HeaderRight
