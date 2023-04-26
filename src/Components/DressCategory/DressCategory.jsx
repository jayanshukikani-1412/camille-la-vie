import React from 'react'
import styled from 'styled-components'
import CategoryProduct from './CategoryProduct';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCor, { Navigation, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';


import image1 from "../../images/category-image/cocktail-dresses.png"
import image2 from "../../images/category-image/prom-dresses.png"
import image3 from "../../images/category-image/homecoming-dresses.png"
import image4 from "../../images/category-image/evening-dresses.png"
import image5 from "../../images/category-image/wedding-dresses.png"
import image6 from "../../images/category-image/bridesmaid-dresses.png"
import image7 from "../../images/category-image/petite-dresses.png"
import image8 from "../../images/category-image/plus-size-dresses.png"

SwiperCor.use([Navigation, A11y]);

const DressCategory = () => {
    return (
        <StyleWrapper>
            <div className='title-wrapper'>
                <h1>SHOP DRESSES</h1>
            </div>
            <div className='category-wrapper'>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    className='swiper-wrapper'
                    breakpoints={{
                        1901: {
                            slidesPerView: 9,
                            spaceBetween: 10,
                        },
                        1601: {
                            slidesPerView: 8,
                            spaceBetween: 10,
                        },
                        1401: {
                            slidesPerView: 7,
                            spaceBetween: 10,
                        },
                        1201: {
                            slidesPerView: 6,
                            spaceBetween: 10,
                        },
                        1001: {
                            slidesPerView: 5,
                            spaceBetween: 10,
                        },
                        801: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        601: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        401: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                    }}
                    navigation
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><CategoryProduct image={image1} title={"COCKTAIL"} /></SwiperSlide>
                    <SwiperSlide><CategoryProduct image={image2} title={"PROM"} /></SwiperSlide>
                    <SwiperSlide><CategoryProduct image={image3} title={"HOMECOMING"} /></SwiperSlide>
                    <SwiperSlide><CategoryProduct image={image4} title={"EVENING"} /></SwiperSlide>
                    <SwiperSlide><CategoryProduct image={image5} title={"WEDDING"} /></SwiperSlide>
                    <SwiperSlide><CategoryProduct image={image6} title={"BRIDESMAID"} /></SwiperSlide>
                    <SwiperSlide><CategoryProduct image={image7} title={"PETITE"} /></SwiperSlide>
                    <SwiperSlide><CategoryProduct image={image8} title={"PLUS SIZE"} /></SwiperSlide>
                    <SwiperSlide><CategoryProduct image={image1} title={"COCKTAIL"} /></SwiperSlide>
                    <SwiperSlide><CategoryProduct image={image2} title={"PROM"} /></SwiperSlide>
                    <SwiperSlide><CategoryProduct image={image3} title={"HOMECOMING"} /></SwiperSlide>
                    <SwiperSlide><CategoryProduct image={image4} title={"EVENING"} /></SwiperSlide>
                    <SwiperSlide><CategoryProduct image={image5} title={"WEDDING"} /></SwiperSlide>
                    <SwiperSlide><CategoryProduct image={image6} title={"BRIDESMAID"} /></SwiperSlide>
                    <SwiperSlide><CategoryProduct image={image7} title={"PETITE"} /></SwiperSlide>
                    <SwiperSlide><CategoryProduct image={image8} title={"PLUS SIZE"} /></SwiperSlide>
                    <SwiperSlide><CategoryProduct image={image1} title={"COCKTAIL"} /></SwiperSlide>
                    <SwiperSlide><CategoryProduct image={image2} title={"PROM"} /></SwiperSlide>
                    <SwiperSlide><CategoryProduct image={image3} title={"HOMECOMING"} /></SwiperSlide>
                    <SwiperSlide><CategoryProduct image={image4} title={"EVENING"} /></SwiperSlide>
                    <SwiperSlide><CategoryProduct image={image5} title={"WEDDING"} /></SwiperSlide>
                    <SwiperSlide><CategoryProduct image={image6} title={"BRIDESMAID"} /></SwiperSlide>
                    <SwiperSlide><CategoryProduct image={image7} title={"PETITE"} /></SwiperSlide>
                    <SwiperSlide><CategoryProduct image={image8} title={"PLUS SIZE"} /></SwiperSlide>
                    <SwiperSlide><CategoryProduct image={image1} title={"COCKTAIL"} /></SwiperSlide>
                    <SwiperSlide><CategoryProduct image={image2} title={"PROM"} /></SwiperSlide>
                    <SwiperSlide><CategoryProduct image={image3} title={"HOMECOMING"} /></SwiperSlide>
                    <SwiperSlide><CategoryProduct image={image4} title={"EVENING"} /></SwiperSlide>
                    <SwiperSlide><CategoryProduct image={image5} title={"WEDDING"} /></SwiperSlide>
                    <SwiperSlide><CategoryProduct image={image6} title={"BRIDESMAID"} /></SwiperSlide>
                    <SwiperSlide><CategoryProduct image={image7} title={"PETITE"} /></SwiperSlide>
                    <SwiperSlide><CategoryProduct image={image8} title={"PLUS SIZE"} /></SwiperSlide>

                </Swiper>
            </div>
        </StyleWrapper>
    )
}

const StyleWrapper = styled.section`
margin :72px 0 76px 0;

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

    .category-wrapper{
        display: flex;
        gap: 10px;
        justify-content: center;

            .swiper-wrapper{
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



    @media (max-width: 500px) {
        padding: 0 20px;
    }

    @media (max-width: 400px) {
        padding: 0 0px;
    }
`;
export default DressCategory
