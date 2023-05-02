import React from 'react'
import styled from 'styled-components'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCor, { Navigation, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import image1 from "../../images/best-seller/image1.png"
import image2 from "../../images/best-seller/image2.png"
import image3 from "../../images/best-seller/image3.png"
import image4 from "../../images/best-seller/image4.png"
import BestSellerProduct from './BestSellerProduct';

SwiperCor.use([Navigation, A11y]);


const BestSeller = () => {
    const product = [
        {
            image: image1,
            title: "3D Flower Embroidered CorsetBallgown",
            price: "$279.99"
        },
        {
            image: image2,
            title: "Metallic Drape Back Ruched Front Dress",
            price: "$279.99"
        },
        {
            image: image3,
            title: "Sweetheart Rhinestone Jersey Dress",
            price: "$279.99"
        },
        {
            image: image4,
            title: "Deep V Sunburst Sequin Faux Wrap Dress",
            price: "$279.99"
        },
        {
            image: image1,
            title: "3D Flower Embroidered CorsetBallgown",
            price: "$279.99"
        },
        {
            image: image2,
            title: "Metallic Drape Back Ruched Front Dress",
            price: "$279.99"
        },
        {
            image: image3,
            title: "Sweetheart Rhinestone Jersey Dress",
            price: "$279.99"
        },
        {
            image: image4,
            title: "Deep V Sunburst Sequin Faux Wrap Dress",
            price: "$279.99"
        },
        {
            image: image1,
            title: "3D Flower Embroidered CorsetBallgown",
            price: "$279.99"
        },
        {
            image: image2,
            title: "Metallic Drape Back Ruched Front Dress",
            price: "$279.99"
        },
        {
            image: image3,
            title: "Sweetheart Rhinestone Jersey Dress",
            price: "$279.99"
        },
        {
            image: image4,
            title: "Deep V Sunburst Sequin Faux Wrap Dress",
            price: "$279.99"
        },
        {
            image: image1,
            title: "3D Flower Embroidered CorsetBallgown",
            price: "$279.99"
        },
        {
            image: image2,
            title: "Metallic Drape Back Ruched Front Dress",
            price: "$279.99"
        },
        {
            image: image3,
            title: "Sweetheart Rhinestone Jersey Dress",
            price: "$279.99"
        },
        {
            image: image4,
            title: "Deep V Sunburst Sequin Faux Wrap Dress",
            price: "$279.99"
        },
    ]
    return (
        <StyleWrapper>
            <div className='title-wrapper'>
                <h1>BEST SELLERS</h1>
            </div>
            <div className='bestSeller-wrapper'>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    className='swiper-wrapper'
                    breakpoints={{
                        1901: {
                            slidesPerView: 6,
                            spaceBetween: 30,
                        },
                        1601: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        },
                        1401: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        1350: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        1250: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        1000: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        700: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        }
                    }}
                    navigation
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >

                    {
                        product.map((item, index) => {
                            return (
                                    <SwiperSlide key={index}><BestSellerProduct image={item.image} title={item.title} price={item.price} /> </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </div>
            <div className='shopAll-btn-wrapper'>
                <button>SHOP ALL PRODUCTS</button>
            </div>
        </StyleWrapper>
    )
}

const StyleWrapper = styled.section`
margin: 76px 0 0px 0;

/* padding: 0 40px; */
padding: 0 0px;

    .title-wrapper{
        text-align: center;

        h1{
            margin-bottom: 52px;
            font-weight: 700;
            font-size: 28px;
            line-height: 36px;
            letter-spacing: 0.05em;
            text-transform: uppercase;
        }
    }

    .bestSeller-wrapper{
        display: flex;
        justify-content: center;

        .swiper-wrapper{

            .swiper-slide{
                width: 300px;
            }
            .swiper-button-next,
            .swiper-button-prev{
                background-color: #000000;
                color: white;
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

    .shopAll-btn-wrapper{
        display: flex;
        justify-content: center;
        button{
            margin-top: 60px;
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
`;

export default BestSeller
