import React from 'react'
import styled from 'styled-components';

import CollectionBlogCard from './CollectionBlogCard'


import image1 from "../../images/collection/prom/blog/1.png"
import image2 from "../../images/collection/prom/blog/2.png"
import image3 from "../../images/collection/prom/blog/3.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCor, { Navigation, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

SwiperCor.use([Navigation, A11y]);


const CollectionBlogWrapper = () => {
    const blogs = [
        {
            src: image1,
            subtitle: "Prom Dress Style Guide",
            title: "Plus size prom dresses: made for the for gals with curves",
            description: "To back up the phrase “two is better than one” we’re campaigning hard for two piece prom dresses.  Sure, this style ..."
        },
        {
            src: image2,
            subtitle: "Fashion Trends, Homecoming Dress Styles",
            title: "Short prom dresses: for the fearless trendsetter",
            description: "Whether or not your summertime sadness has sunken in, there is something to be excited about: homecoming!  We get it: you’re still soaking "
        },
        {
            src: image3,
            subtitle: "Prom Dress Style Guide",
            title: "Prom dresses short: a unique prom look",
            description: "With a variety of cuts, fabrics, and embellishments, there’s a long prom dress for every fashion taste.  Eager to get started?  Explore strapless, illusion"
        },
        {
            src: image1,
            subtitle: "Prom Dress Style Guide",
            title: "Plus size prom dresses: made for the for gals with curves",
            description: "To back up the phrase “two is better than one” we’re campaigning hard for two piece prom dresses.  Sure, this style ..."
        },
        {
            src: image2,
            subtitle: "Fashion Trends, Homecoming Dress Styles",
            title: "Short prom dresses: for the fearless trendsetter",
            description: "Whether or not your summertime sadness has sunken in, there is something to be excited about: homecoming!  We get it: you’re still soaking "
        },
        {
            src: image3,
            subtitle: "Prom Dress Style Guide",
            title: "Prom dresses short: a unique prom look",
            description: "With a variety of cuts, fabrics, and embellishments, there’s a long prom dress for every fashion taste.  Eager to get started?  Explore strapless, illusion"
        },
        {
            src: image1,
            subtitle: "Prom Dress Style Guide",
            title: "Plus size prom dresses: made for the for gals with curves",
            description: "To back up the phrase “two is better than one” we’re campaigning hard for two piece prom dresses.  Sure, this style ..."
        },
        {
            src: image2,
            subtitle: "Fashion Trends, Homecoming Dress Styles",
            title: "Short prom dresses: for the fearless trendsetter",
            description: "Whether or not your summertime sadness has sunken in, there is something to be excited about: homecoming!  We get it: you’re still soaking "
        },
        {
            src: image3,
            subtitle: "Prom Dress Style Guide",
            title: "Prom dresses short: a unique prom look",
            description: "With a variety of cuts, fabrics, and embellishments, there’s a long prom dress for every fashion taste.  Eager to get started?  Explore strapless, illusion"
        },
    ]
    return (
        <StyleWrapper>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                className='swiper-wrapper'
                breakpoints={{
                    1901: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1601: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1401: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1201: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1001: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    801: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    601: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    401: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                }}
                navigation
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >

                {
                    blogs.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <CollectionBlogCard
                                    image={item.src}
                                    subtitle={item.subtitle}
                                    title={item.title}
                                    description={item.description}
                                />
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </StyleWrapper>
    )
}

const StyleWrapper = styled.section`
display: flex;
gap: 32px;

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
                    display: none;
                }
                .swiper-button-next:after{
                    font-size: 15px;
                }
                .swiper-button-prev:after{
                    font-size: 15px;
                }
            }
`;

export default CollectionBlogWrapper
