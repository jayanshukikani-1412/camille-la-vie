import React from 'react'
import styled from 'styled-components'
import star from '../../images/product/star.png'
import { BsPencil } from "react-icons/bs"
import { BsQuestionCircle } from "react-icons/bs"
import Pagination from '../Pagianation/Pagination';

const ReviewSection = () => {
  return (
    <StyleWrapper>

      <div className='review_top_wrapper'>
        <div className='left_wrapper'>
          <p className='review_num'>4.9</p>
          <div className='star_wrapper'>
            <img src={star} className='star_image' alt="" />
            <img src={star} className='star_image' alt="" />
            <img src={star} className='star_image' alt="" />
            <img src={star} className='star_image' alt="" />
            <img src={star} className='star_image' alt="" />
          </div>
          <div className='review_QA'>
            <p>537 Reviews, 8 Q&As</p>
          </div>
        </div>

        <div className='right_wrapper'>
          <div>
            <BsPencil className='icons' />
            <p> WRITE A REVIEW</p>
          </div>
          <div>
            <BsQuestionCircle className='icons' />
            <p> ASK A QUESTION</p>
          </div>
        </div>
      </div>

      <div className='review-wrapper'>
        <Pagination />
      </div>

    </StyleWrapper>

  )
}

const StyleWrapper = styled.div`
background-color: #EEEEEE;
padding: 121px 155px;

.review_top_wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 65px;

  .left_wrapper{
    display: flex;
    align-items: center;
    gap: 18px;

    .review_num{
      font-weight: 600;
      font-size: 28px;
      line-height: 42px;
    }

    div.star_wrapper{
        display: flex;
        gap: 10px;
    }

    .review_QA{
      p{
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
      }

    }
  }

  .right_wrapper{
    display: flex;
    gap: 55px;

    div{
      display: flex;
      align-items: center;
      gap: 14px;

      .icons{
        width: 20px;
        height: 20px;
      }

      p{
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
      }
    }
  }

}

@media (max-width: 1440px) {
    padding: 121px 80px;
}

@media (max-width: 1140px) {
  padding: 121px 40px;}

@media (max-width: 900px) {
  padding: 121px 40px;

  .review_top_wrapper{
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
}

@media (max-width: 600px) {
  padding: 121px 20px;}

  @media (max-width: 500px) {
  padding: 121px 20px;
  
  .review_top_wrapper{
    gap: 20px;
    .left_wrapper{
      flex-wrap: wrap;
          justify-content: center;

      gap: 10px;
    }
    .right_wrapper{
      flex-wrap: wrap;
          justify-content: center;

      gap: 10px;
    }
  }
}

`;
export default ReviewSection
