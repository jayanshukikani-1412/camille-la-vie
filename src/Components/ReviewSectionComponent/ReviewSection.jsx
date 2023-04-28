import React from 'react'
import styled from 'styled-components'
import ReviewItem from './ReviewItem';

const ReviewSection = () => {
  return (
    <StyleWrapper>
      <div className='review-wrapper'>
        <ReviewItem/>
        <ReviewItem/>
        <ReviewItem/>
        <ReviewItem/>
      </div>
    </StyleWrapper>
  )
}

const StyleWrapper = styled.div`
background-color: #EEEEEE;
padding: 121px 155px;

.review-wrapper{
    display: flex;
    flex-direction: column;
    gap: 30px;
}
`;
export default ReviewSection
