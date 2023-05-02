import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import NavbarLink from '../Header/NavbarLink'

import image1 from "../../images/header/homecoming/image1.png"
import image2 from "../../images/header/homecoming/image2.png"


const Navbar = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <NavbarWrapper onMouseOut={handleMouseOut}>

      <Link to={"/collection/alldresses"}><span>All Dresses</span></Link>
      <Link to={"/collection/prom"}><span>Prom</span></Link>
      <Link onMouseOver={handleMouseOver} ><span>Homecoming</span></Link>
      <Link><span>Evening</span></Link>
      <Link><span>Wedding</span></Link>
      <Link><span>Bridesmaid</span></Link>
      <Link><span>Petite</span></Link>
      <Link><span>Plus Size</span></Link>
      <Link><span>Cocktail</span></Link>
      <Link><span>Special Event</span></Link>
      <Link><span>Shop By Color</span></Link>
      <Link><span>Shop by Style</span></Link>
      <Link><span>Accessories</span></Link>
      <Link><span>Catalogs</span></Link>

      {
        (isHovering) && (
          <div className="homecoming-wrapper" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
            <div className='image-wrapper'>
              <img src={image1} alt="" />
              <p>New Homecoming <br /> Dresses</p>
            </div>
            <div className='link-wrapper'>
              <div>
                <Link><span>Short Homecoming Dresses</span></Link>
                <Link><span>Long Homecoming Dresses</span></Link>
                <Link><span>High-Low Homecoming Dresses</span></Link>
                <Link><span>Sequined Homecoming Dresses</span></Link>
              </div>

              <Link className='all-dresses'><span>All Homecoming dresses</span></Link>
            </div>
            <div className='image-wrapper'>
              <img src={image2} alt="" />
              <p>Homecoming <br /> Dresses Under $100</p>
            </div>
          </div>
        )
      }
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.section`
display: flex;
justify-content: space-between;
position: relative;

a{
  border-bottom: 1px solid transparent;
    padding-bottom: 4px;

  &:hover {
    border-bottom: 1px solid #000000;
  }
}

span{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 12px;
    text-transform: uppercase;
    color: #000000;
  }


  .homecoming-wrapper{
    display: flex;
    position: absolute;
    top: 30px;
    left: 50px;
    background-color: white;
    z-index: 1200;
    border: 1px solid #000000;

    .image-wrapper{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 16px 15px;
      img{
        width: 100%;
        height: 100%;
        max-width: 68px;
        max-height: 137px;
      }

      p{
        font-weight: 600;
        font-size: 14px;
        line-height: 28px;
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: uppercase;
      }
    }

    .link-wrapper{
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid #000000;
      border-top: none;
      border-bottom: none;
      padding: 15px 30px;

      div{
        display: flex;
        flex-direction: column;
          a{
            padding-bottom: 0px;

            span{
              font-weight: 500;
              font-size: 11px;
              line-height: 30px;
            }
            &:hover{
              border-bottom: none;
            }
          }


      }

      .all-dresses{
        padding-top: 20px;
        border-bottom: 1px solid #000000;
        
        span{
          font-weight: 600;
          font-size: 11px;
          line-height: 30px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
      }
    }
  }
`;

export default Navbar
