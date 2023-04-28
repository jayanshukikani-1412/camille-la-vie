import React from 'react'
import styled from 'styled-components'

import img1 from '../../images/product/img1.png'
import img2 from '../../images/product/img2.png'
import img3 from '../../images/product/img3.png'
import img4 from '../../images/product/img4.png'
import CompleteLookProduct from './CompleteLookProduct'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCor, { Navigation, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
SwiperCor.use([Navigation, A11y]);

const CompleteLook = () => {
    const product = [
        {
            image: img1,
            title: "Glitter Metallic Strappy Lace Up Back Dress",
            price: "$69.99"
        },
        {
            image: img2,
            title: "Glitter Metallic Strappy Lace Up Back Dress",
            price: "$69.99"
        },
        {
            image: img3,
            title: "Glitter Metallic Strappy Lace Up Back Dress",
            price: "$69.99"
        },
        {
            image: img4,
            title: "Glitter Metallic Strappy Lace Up Back Dress",
            price: "$69.99"
        },
        {
            image: img1,
            title: "Glitter Metallic Strappy Lace Up Back Dress",
            price: "$69.99"
        },
        {
            image: img2,
            title: "Glitter Metallic Strappy Lace Up Back Dress",
            price: "$69.99"
        },
        {
            image: img3,
            title: "Glitter Metallic Strappy Lace Up Back Dress",
            price: "$69.99"
        },
        {
            image: img4,
            title: "Glitter Metallic Strappy Lace Up Back Dress",
            price: "$69.99"
        },
        {
            image: img1,
            title: "Glitter Metallic Strappy Lace Up Back Dress",
            price: "$69.99"
        },
        {
            image: img2,
            title: "Glitter Metallic Strappy Lace Up Back Dress",
            price: "$69.99"
        },
        {
            image: img3,
            title: "Glitter Metallic Strappy Lace Up Back Dress",
            price: "$69.99"
        },
        {
            image: img4,
            title: "Glitter Metallic Strappy Lace Up Back Dress",
            price: "$69.99"
        },
    ]

    return (
        <StyleWrapper>
            <div className='title-wrapper'>
                <h3>COMPLETE THE LOOK</h3>
            </div>
            <div className='completelook-wrapper'>
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
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >

                    {
                        product.map((item, index) => {
                            return (
                                <SwiperSlide key={index}><CompleteLookProduct image={item.image} title={item.title} price={item.price} /> </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </StyleWrapper>
    )
}

const StyleWrapper = styled.section`
margin: 76px 0 0px 0;

padding: 0 40px;

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

    .completelook-wrapper{
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
`;


export default CompleteLook

