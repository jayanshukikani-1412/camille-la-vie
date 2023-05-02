import React from 'react'
import styled from 'styled-components'
import { FiHeart } from 'react-icons/fi'

import i1 from '../images/product/i1.png'
import i2 from '../images/product/i2.png'
import i3 from '../images/product/i3.png'
import i4 from '../images/product/i4.png'
import i5 from '../images/product/i5.png'

import main from '../images/product/main.png'
import shopPay from "../images/modalbox-images/shop pay.png"

import star from '../images/product/star.png'
import TabComponent from '../Components/TabComponent/TabComponent'
import ReviewSection from '../Components/ReviewSectionComponent/ReviewSection'

const Product = () => {
    return (
        <ProductStyleWrapper>
            <div className='product_wrapper'>
                <div className='main_image_wrapper'>
                    <div className='left_image_wrapper'>
                        <button>Model Info</button>
                        <img src={i1} className='side_images' alt="" />
                        <img src={i2} className='side_images' alt="" />
                        <img src={i3} className='side_images' alt="" />
                        <img src={i4} className='side_images' alt="" />
                        <img src={i5} className='side_images' alt="" />
                    </div>
                    <div className='right_image_wrapper'>
                        <img src={main} className='main_images' alt="" />
                    </div>
                </div>

                {/* <div className='modal_info_wrapper'>
                    <div className='info_top_wrapper'>
                        <h3>MODAL INFO</h3>
                        <p>MEET LUDI</p>
                    </div>
                    <hr />
                    <div className='info_middle_wrapper'>
                        <span>Ludi's Info</span>
                        <div className='modal_info_section'>
                            <div>
                                <p>Hips</p>
                                <span>34"</span>
                            </div>
                            <div>
                                <p>Waist</p>
                                <span>24"</span>
                            </div>
                            <div>
                                <p>Height</p>
                                <span>5'9"</span>
                            </div>
                            <div>
                                <p>Bust</p>
                                <span>32"</span>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='info_bottom_wrapper'>
                        <h3>HERE SHE'S WEARING A SIZE S</h3>
                    </div>
                </div> */}


                <div className='main_product_data_wrapper'>

                    <div className='subtitle_wrapper'>
                        <p>BEST SELLER</p>
                    </div>

                    <div className='product_title_wrapper'>
                        <h2>Satin Side Gather Off the Shoulder Dress</h2>
                        <FiHeart />
                    </div>

                    <div className='rating_wrapper'>
                        <div className='star_wrapper'>
                            <img src={star} className='star_image' alt="" />
                            <img src={star} className='star_image' alt="" />
                            <img src={star} className='star_image' alt="" />
                            <img src={star} className='star_image' alt="" />
                            <img src={star} className='star_image' alt="" />
                        </div>
                        <div className='review_wrapper'>
                            <p>15 Reviews</p>
                        </div>
                        <div className='vert_line'></div>
                        <div className='write_review_wrapper'>
                            <p>WRITE A REVIEW</p>
                        </div>
                    </div>

                    <div className='product_price_wrapper'>
                        <p className='actual_price'>$149.99</p>
                        <p className='deleted_price'>$149.99</p>
                    </div>

                    <div className='free_wrapper'>
                        <p>or 4 interest-free payments of $65.00 with</p>
                        <div>
                            <img src={shopPay} alt="" />
                        </div>
                    </div>

                    <hr />

                    <div className='cut_wrapper'>
                        <p className='wrapper_title'>CUT:</p>
                        <div>
                            <button className='cut_btn hard_text'>Missy</button>
                            <button className='cut_btn hard_text active_cut_btn'>Petite</button>
                            <button className='cut_btn hard_text'>Plus</button>
                        </div>
                    </div>

                    <div className='sizes_wrapper'>
                        <div className='sizes_title_wrapper'>
                            <p className='wrapper_title'>SIZES:</p>
                            <div className='size_que_wrapper'>
                                <p>Size Guide</p>
                                <p>Can't Find Your Size?</p>
                            </div>
                        </div>
                        <div className='size_btn_wrapper'>
                            <button className='size_btn hard_text'>XS</button>
                            <button className='size_btn hard_text active_size_btn'>S</button>
                            <button className='size_btn hard_text'>M</button>
                            <button className='size_btn hard_text'>L</button>
                            <button className='size_btn hard_text'>XL</button>
                            <button className='size_btn hard_text'>XXL</button>
                        </div>
                    </div>

                    <div className='color_wrapper'>
                        <p className='wrapper_title'>COLOR:</p>
                        <div className='color_container'>
                            <div className='color_picker_item' background="#0F4A24"></div>
                            <div className='color_picker_item' background="#F5D5D5"></div>
                            <div className='color_picker_item' background="#03063B"></div>
                            <div className='color_picker_item' background="#5E0120"></div>
                        </div>
                    </div>

                    <div className='buy_btn_wrapper'>
                        <button className='add_to_cart_btn hard_text'>ADD TO CART</button>
                        <button className='buy_now_btn hard_text'>BUY NOW</button>
                    </div>

                    <div className='delivery_wrapper'>
                        <p className='wrapper_title'>ESTIMATED DELIVERY DATE </p>
                        <p>May 25 - May 26</p>
                    </div>

                    <TabComponent />

                </div>
            </div>

            <ReviewSection />
        </ProductStyleWrapper>
    )
}

const ProductStyleWrapper = styled.section`

    .product_wrapper{
        margin-top: 54px;
        margin-bottom: 48px;
        display: flex;
        justify-content: center;
        gap: 78px;

        .wrapper_title{
            font-weight: 600;
            font-size: 14px;
            line-height: 17px;
        }

        .hard_text{
            font-weight: 600;
            font-size: 12px;
            line-height: 15px;
            display: flex;
            align-items: center;
        }

        .main_image_wrapper{
            display: flex;
            gap: 52px;

            .left_image_wrapper{

                display: flex;
                flex-direction: column;
                gap: 10px;

                button{
                    background-color: transparent;
                    font-family: 'Montserrat';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 17px;
                    border-bottom: 1px solid #000000;
                    padding: 4px 16px 5px 16px ;
                    cursor: pointer;

                    &:hover{
                        background-color: #000000;
                        color: #FFFFFF;
                    }
                }
            }

            .right_image_wrapper{
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }

        /* .modal_info_wrapper{
            position: absolute;
            top: 0;
            left: 0;
            background-color: #000000;
            color: #FFFFFF;
            width: fit-content;
            height: fit-content;
            padding: 38px 46px;

            .info_top_wrapper{
                display: flex;
                justify-content: space-between;
            }
            hr{
                border-top: 1px solid #FFFFFF;
                margin: 17px 0 24px 0;
            }

            .info_middle_wrapper{
                display: flex;
                flex-direction: column;
                gap: 22px;
                .modal_info_section{
                    width: fit-content;
                    div{
                        display: flex;
                        justify-content: space-between;
                        gap: 21px;
                    }
                }
            }

        } */



        .main_product_data_wrapper{
            display: flex;
            flex-direction: column;
            
            .subtitle_wrapper p{
                font-weight: 500;
                font-size: 12px;
                line-height: 15px;
            }

            .product_title_wrapper{
                display: flex;
                gap: 114px;
                justify-content: space-between;
                align-items: center;
                margin-top: 14px;

                h2{
                    font-weight: 500;
                    font-size: 24px;
                    line-height: 29px;
                }
            }
            .rating_wrapper{
                display: flex;
                align-items: center;
                gap: 20px;
                margin-top: 21px;
                
                .star_wrapper{
                    display: flex;
                    gap: 10px;
                }
                .review_wrapper p{
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 17px;
                }
                .vert_line{
                    transform: rotate(90deg);
                    background-color: #EEEEEE;
                    height: 1px;
                    width: 23px;
                }
                .write_review_wrapper p{
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 15px;
                    letter-spacing: 0.05em;
                    border-bottom: 1px solid #000000;
                    cursor: pointer;
                    &:hover{
                        border-bottom: 1px solid transparent;
                    }
                }
            }
            .product_price_wrapper{
                display: flex;
                gap: 30px;
                align-items: center;
                margin-top: 33px;

                .actual_price{
                    font-weight: 600;
                    font-size: 24px;
                    line-height: 29px;
                }
                .deleted_price{
                    font-weight: 400;
                    font-size: 24px;
                    line-height: 16px;
                    text-decoration-line: line-through;
                    color: rgba(34, 34, 34, 0.5);
                }
            }
            .free_wrapper{
                display: flex;
                align-items: center;
                gap: 8px;
                margin-top: 15px;

                p{
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 15px;
                }
            }
            hr{
                margin-top: 25px;
                border-top: 1px solid #EEEEEE;
            }
            .cut_wrapper{
                display: flex;
                align-items: center;
                gap: 30px;
                margin-top: 32px;
                
                div{
                    display: flex;
                    gap: 10px;

                    .cut_btn{
                        background: #ffffff;
                        border: 1px solid #000000;
                        border-radius: 3px;
                        padding: 6px 8px;
                        cursor: pointer;
                    }
                    .active_cut_btn{
                        background: #000000;
                        color: #ffffff;
                    }
                }
            }
            .sizes_wrapper{
                margin-top: 32px;
                display: flex;
                flex-direction: column;
                gap: 16px ;
                width: fit-content;

                .sizes_title_wrapper{
                    display: flex;
                    justify-content: space-between;
                    .size_que_wrapper{
                        display: flex;
                        gap: 20px;
                        p{
                            font-weight: 400;
                            font-size: 12px;
                            line-height: 16px;
                        }
                    }
                }
                .size_btn_wrapper{
                    display: flex;
                    gap: 15px;

                    .size_btn{
                        background: #ffffff;
                        padding: 7px 16px;
                        border: 1px solid #000000;
                        border-radius: 3px;
                        cursor: pointer;
                    }
                    .active_size_btn{
                        background: #000000;
                        color:#ffffff
                    }
                }
            }
            .color_wrapper{
                margin-top: 32px;
                display: flex;
                align-items: center;
                gap: 26px;

                .color_container{
                    display: flex;
                    gap: 12px;
                    .color_picker_item{
                        width: 30px;
                        height: 30px;
                        background: ${(props) => props.background || "#789654"};
                        border-radius: 50px;
                        padding: 1px;
                    }
                }
            }
            .buy_btn_wrapper{
                display: flex;
                align-items: center;
                margin-top: 36px;
                gap: 26px;

                button{
                    padding: 23px 56px;
                    background-color: #ffffff;
                    border: 1px solid #000000;
                    border-radius: 3px;
                    cursor: pointer;
                    transition: all 0.3s ease-in;

                    &:hover{
                        background-color: #000000;
                        color: #ffffff;
                    }
                }

                .add_to_cart_btn{
                    background-color: #000000;
                    color: #FFFFFF;

                    &:hover{
                        background-color: #ffffff;
                        color: #000000;
                    }
                }
            }
            .delivery_wrapper{
                display: flex;
                align-items: center;
                gap: 12px;
                margin-top: 33px;
                margin-bottom: 34px;

                p:last-child{
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 16px;
                }
            }
        }
    }


    @media (max-width: 1440px) {

        .product_wrapper{
            padding: 0 80px;
            gap: 40px;
            .main_product_data_wrapper{
                .product_title_wrapper{
                    gap: 50px;
                }
            }
        }
    }

    @media (max-width: 1140px) {

        .product_wrapper{
            gap: 40px;
            padding: 0 40px;

            .main_product_data_wrapper{
                .product_title_wrapper{
                    gap: 50px;
                }

                .rating_wrapper{
                    flex-wrap: wrap;
                }
            }

        }
    }


    


    @media (max-width: 977px) {
    /* padding: 0 80px; */

    .product_wrapper{
            gap: 20px;
            padding: 0 40px;

            .main_product_data_wrapper{
                .product_title_wrapper{
                    gap: 50px;
                }
                .rating_wrapper{
                    flex-wrap: wrap;
                }

            }
        }
    }

    @media (max-width: 940px) {
    /* padding: 0 80px; */

    .product_wrapper{
        padding: 0 40px;

        flex-direction: column;
        align-items: center;
            gap: 40px;
            .main_product_data_wrapper{
                .product_title_wrapper{
                    gap: 50px;
                }
                .rating_wrapper{
                    flex-wrap: wrap;
                }
                .buy_btn_wrapper{

                }
            }
        }
    }


    @media (max-width: 600px) {
    /* padding: 0 40px; */
        .product_wrapper{
            padding: 0 20px;

            .main_image_wrapper{
                flex-direction: column-reverse;
                .left_image_wrapper{
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: center;
                }
            }
        }
    }
    
    @media (max-width: 435px) {
    /* padding: 0 40px; */
        .product_wrapper{
            padding: 0 20px;

            .main_image_wrapper{
                flex-direction: column-reverse;
                .left_image_wrapper{
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: center;
                }
            }

            .main_product_data_wrapper{
                .product_title_wrapper{
                    flex-wrap: wrap;
                    gap: 10px;
                }

                .rating_wrapper{
                    flex-wrap: wrap;
                    gap: 10px;
                }

                .free_wrapper{
                    flex-wrap: wrap;

                }

                .cut_wrapper{
                    div{
                        flex-wrap: wrap;
                    }
                }

                .sizes_wrapper{
                    .size_btn_wrapper{
                        flex-wrap: wrap;
                    }
                }

                .buy_btn_wrapper{
                    flex-wrap: wrap;
                    button{
                        width: 100%;
                        justify-content: center;
                    }

                }
            }
        }
    }
`;

export default Product
