import React from 'react'
import styled from 'styled-components'
import star from '../../images/product/star.png'
import { BiShareAlt } from 'react-icons/bi'
import { AiOutlineLike } from 'react-icons/ai'
import { AiOutlineDislike } from 'react-icons/ai'

const ReviewItem = ({ body, email }) => {
    return (
        <StyleItem>
            <div>
                <div className='customer_title_wrapper'>
                    <div className='customer_name_wrapper'>
                        <p className='name'>{email}</p>
                        <p className='varified hard_text'>Verified Buyer</p>
                    </div>
                    <div className='star_wrapper'>
                        <img src={star} className='star_image' alt="" />
                        <img src={star} className='star_image' alt="" />
                        <img src={star} className='star_image' alt="" />
                        <img src={star} className='star_image' alt="" />
                        <img src={star} className='star_image' alt="" />
                    </div>
                </div>

                <div className="customer_skin_wrapper">
                    <div className='skin_wrapper'>
                        <div>
                            <p className='hard_text'>Skin Type:</p> <span>Balanced Dry</span>
                        </div>
                        <div>
                            <p className='hard_text'>Skin Concerns:</p> <span>Maturing</span>
                        </div>
                    </div>
                    <div>
                        <p>No:</p> <span>03/10/2022</span>
                    </div>
                </div>

                <div className='review_data'>
                    <p>{body}</p>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aliquid, molestiae voluptatibus tempore nostrum illo beatae alias excepturi dolor, voluptate dignissimos totam quis quisquam cupiditate saepe veniam laboriosam maiores eum.</p> */}
                </div>

                <hr />

                <div className='share_wrapper'>
                    <div className='left_wrapper'>
                        <BiShareAlt />
                        <p>Share</p>
                    </div>
                    <div className='right_wrapper'>
                        <p className='hard_text'>Was This Review Helpful?  </p>
                        <div><AiOutlineLike /><span>(5)</span></div>
                        <div><AiOutlineDislike /><span>(10)</span></div>
                    </div>
                </div>


                <div></div>
            </div>
        </StyleItem>
    )
}

const StyleItem = styled.div`
background-color: #FFFFFF;
padding: 67px 110px;


.hard_text{
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
}

.customer_title_wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;

    .customer_name_wrapper{
        display: flex;
        align-items: center;
        gap: 16px;

        .name{
            font-weight: 400;
            font-size: 18px;
            line-height: 16px;
        }

    }
    div.star_wrapper{
        display: flex;
        gap: 10px;
    }
}

.customer_skin_wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    
    p,span{
            display: inline-block;
        }

    .skin_wrapper{
        display: flex;
        align-items: center;
        gap: 12px;

        span{
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
        }
    }
}

.review_data{
    margin-top: 25px;
    p{
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
    }
}

hr{
    margin-top: 40px;
    border-bottom: 1px solid #D3D2D2;
    width: 100%;
}

.share_wrapper{
    margin-top: 27px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left_wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        p{
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
        }
    }

    .right_wrapper{
        display: flex;
        align-items: center;
        gap: 15px;

        div{
            display: flex;
            align-items: center;
            gap: 9px;

            span{
                font-weight: 400;
                font-size: 12px;
                line-height: 16px;
            }
        }

    }
}


@media (max-width: 1440px) {
    padding: 67px 80px;
}

@media (max-width: 1140px) {
    padding: 67px 40px;
}

@media (max-width: 740px) {
    padding: 50px 40px;

    .customer_title_wrapper{
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }

    .customer_skin_wrapper{
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
}

@media (max-width: 600px) {
    padding: 20px 20px;
}

@media (max-width: 500px) {
    padding: 20px 20px;

    .customer_title_wrapper{
        .customer_name_wrapper{
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
        }
    }

    .customer_skin_wrapper{
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;

    }

    .share_wrapper{
        flex-wrap: wrap;
        gap: 10px;
    }

}
`;
export default ReviewItem
