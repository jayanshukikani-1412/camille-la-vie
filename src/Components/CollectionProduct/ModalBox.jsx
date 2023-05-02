import React from 'react'
import styled from 'styled-components'

import { AiFillCloseCircle } from 'react-icons/ai'

import mainImg from "../../images/modalbox-images/main.png"
import img1 from "../../images/modalbox-images/i1.png"
import img2 from "../../images/modalbox-images/i2.png"
import img3 from "../../images/modalbox-images/i3.png"
import shopPay from "../../images/modalbox-images/shop pay.png"

const ModalBox = ({ closeModal }) => {

    return (
        <ModalStyleWrapper>
            <div className="modal-overlay">
                <div className="modal">
                    <div className='main_image_wrapper'>
                        <div className='left_image_wrapper'>
                            <img src={img1} className='side_images' alt="" />
                            <img src={img2} className='side_images' alt="" />
                            <img src={img3} className='side_images' alt="" />
                        </div>
                        <div className='right_image_wrapper'>
                            <img src={mainImg} className='main_images' alt="" />
                        </div>
                    </div>

                    <div className='main_product_data_wrapper'>

                        <div className='subtitle_wrapper'>
                            <p>BEST SELLER</p>
                        </div>

                        <div className='product_title_wrapper'>
                            <h2>Satin Side Gather Off the Shoulder Dress</h2>
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

                        <div className='cut_wrapper'>
                            <p className='wrapper_title'>CUT:</p>
                            <div>
                                <button className='cut_btn hard_text'>Missy</button>
                                <button className='cut_btn hard_text'>Petite</button>
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
                                <button className='size_btn hard_text'>S</button>
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

                        <div className='quantity_wrapper'>
                            <button>-</button>
                            <span>01</span>
                            <button >+</button>
                        </div>

                        <div className='buy_btn_wrapper'>
                            <button className='add_to_cart_btn hard_text'>ADD TO CART</button>
                            <button className='buy_now_btn hard_text'>BUY NOW</button>
                        </div>

                        <div className='delivery_wrapper'>
                            <p className='wrapper_title'>ESTIMATED DELIVERY DATE </p>
                            <p>May 25 - May 26</p>
                        </div>

                    </div>


                    <div className='close_btn_wrapper' onClick={closeModal}>
                        <AiFillCloseCircle />
                    </div>
                </div>
            </div>



        </ModalStyleWrapper>
    )
}

const ModalStyleWrapper = styled.div`

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 15000;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    /* background-color: white; */
    /* width: 80%;
    max-width: 600px; */
    /* border-radius: 4px; */
    overflow: hidden;

    position: relative;
    display: flex;
    gap: 43px;
    background-color: #f3dddd;
    width: fit-content;
    padding: 39px 46px;

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
        gap: 32px;
            .left_image_wrapper{
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
        }

    .main_product_data_wrapper{
        display: flex;
        flex-direction: column;
        
        .subtitle_wrapper{
            p{
                font-weight: 600;
                font-size: 12px;
                line-height: 15px;
            }
        }

        .product_title_wrapper{
            margin-top: 16px;
            h2{
                font-weight: 500;
                font-size: 29px;
            }
        }

        .product_price_wrapper{
            margin-top: 22px;
            display: flex;
            align-items: center;
            gap: 30px;

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
            margin-top: 15px;
            display: flex;
            gap: 10px;
            align-items: center;

            p{
                font-weight: 500;
                font-size: 12px;
                line-height: 15px;
                display: flex;
                align-items: center;
            }
        }

        .cut_wrapper{
            display: flex;
            align-items: center;
            gap: 30px;
            margin-top: 28px;

            div{
                display: flex;
                gap: 10px;

                .cut_btn{
                    background: #ffffff;
                    border: 1px solid #000000;
                    border-radius: 3px;
                    padding: 6px 8px;
                    &:hover{
                        background: #000000;
                        color: #ffffff;
                    }
                }
            }
        }

        .sizes_wrapper{
            margin-top: 33px;
            display: flex;
            flex-direction: column;
            gap: 15px;

            .sizes_title_wrapper{
                display: flex;
                gap: 128px;

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
                    &:hover{
                        background: #000000;
                        color:#ffffff
                    }
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
                    background: ${props => props.background || "#789654"};
                    border-radius: 50px;
                    padding: 1px;
                }
            }
        }

        .quantity_wrapper{
            display: flex;
            gap: 60px;
            margin-top: 30px;
            background: #FFFFFF;
            border: 1px solid #000000;
            border-radius: 5px;
            padding: 21px;
            width: fit-content;

            button{
                background-color: transparent;
                width: 9.75px;
                height: 9.75px;
                font-size: 20px;
                font-weight: 600;
                font-size: 20px;
                letter-spacing: 0.1em;
                text-transform: uppercase;
                cursor: pointer;
            }
            span{
                font-size: 20px;
                font-weight: 600;
                font-size: 20px;
                letter-spacing: 0.1em;
                text-transform: uppercase;
            }
        }

        .buy_btn_wrapper{
            display: flex;
            align-items: center;
            margin-top: 26px;
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

            p:last-child{
                font-weight: 400;
                font-size: 14px;
                line-height: 16px;
            }
        }
    }

    .close_btn_wrapper{
        position: absolute;
        top: -15px;
        right: -15px;
        font-size: 33px;
        cursor: pointer;
    }
  }
}
`;

export default ModalBox
