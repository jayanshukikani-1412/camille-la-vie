import React from 'react'
import styled from 'styled-components'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCor, { Navigation, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import image1 from "../../images/image-gallary/image1.png"
import image2 from "../../images/image-gallary/image2.png"
import image3 from "../../images/image-gallary/image3.png"
import image4 from "../../images/image-gallary/image4.png"

SwiperCor.use([Navigation, A11y]);


const ImageGallery = () => {
    const array = [
        {
            image: image1
        },
        {
            image: image2
        },
        {
            image: image3
        },
        {
            image: image4
        },
        {
            image: image1
        },
        {
            image: image2
        },
        {
            image: image3
        },
        {
            image: image4
        },
        {
            image: image1
        },
        {
            image: image2
        },
        {
            image: image3
        },
        {
            image: image4
        },
        {
            image: image1
        },
        {
            image: image2
        },
        {
            image: image3
        },
        {
            image: image4
        },
    ]
    return (
        <StyleWrapper>
            <div className='title-wrapper'>
                <h1>SHOP @CAMILLELAVIE ON INSTAGRAM!</h1>
            </div>
            <div className='gallery-wrapper'>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    className='swiper-wrapper'
                    breakpoints={{
                        1901: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        },
                        1850: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        },
                        1600: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        1537: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1120: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        800: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        700: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },

                    }}
                    navigation
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >

                    {
                        array.map((item, index) => {
                            return (
                                <SwiperSlide key={index}><img src={item.image} alt='' /></SwiperSlide>
                            )
                        })
                    }


                </Swiper>
            </div>
            <div className='followus-btn-wrapper'>
                <button>FOLLOW US @CAMILLELAVIE </button>
            </div>
        </StyleWrapper>
    )
}

const StyleWrapper = styled.section`
margin: 0 0 0px 0;

/* padding: 0 155px; */
padding: 0 0px;

    .title-wrapper{
        text-align: center;

        h1{
            margin-bottom: 65px;
            font-weight: 700;
            font-size: 28px;
            line-height: 36px;
            letter-spacing: 0.05em;
            text-transform: uppercase;
        }
    }

    .gallery-wrapper{
        display: flex;
        justify-content: center;

        .swiper-wrapper{
            
            img{
                width: 100%;
                height: 100%;
}


            .swiper-slide{
                width: 300px;
            }
            .swiper-button-next,
            .swiper-button-prev{
                background-color: #ffffff;
                color: black;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 18px 20px 17px 19px;
                height: 50px;
                width: 50px;
                border-radius:50px;
                margin-right: 10px;
                margin-left: 10px;
            }
            .swiper-button-next:after{
                font-size: 15px;
            }
            .swiper-button-prev:after{
                font-size: 15px;
            }
        }

    }

    .followus-btn-wrapper{
        display: flex;
        justify-content: center;
        button{
            margin-top: 47px;
            margin-bottom: 80px;
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

            &:hover{
                background: transparent;
                border: 2px solid #000000;
                color: #000000;
            }
        }
    }

    @media (max-width: 1440px) {
    /* padding: 0 100px; */
    padding: 0 0px;
    }

    @media (max-width: 1080px) {
    /* padding: 0 80px; */
    padding: 0 0px;
    }


    @media (max-width: 865px) {
    /* padding: 0 40px; */
    padding: 0 0px;
    }
`;

export default ImageGallery

