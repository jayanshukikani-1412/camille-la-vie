import React, { useState } from 'react'
import styled from 'styled-components';
import ModalBox from './ModalBox';

const CollectionProduct = ({ image, title, price }) => {
    const [showModal, setShowModal] = useState(false)

    const closeModal = () => {
        return setShowModal(false)
    }

    return (
        <StyleWrapper>
            <div className='image-wrapper'>
                <img src={image} alt="" />
            </div>
                <div className='quick-view-btn' onClick={() => setShowModal(true)}>
                    <button>QUICK VIEW</button>
                </div>

            <div className='data-wrapper'>
                <p>{title}</p>
                <p>{price}</p>
            </div>

            <div className='quick-view-modal'>
                {showModal && <ModalBox closeModal={closeModal} />}
            </div>
        </StyleWrapper>
    )
}

const StyleWrapper = styled.section`
max-width: 234px;
text-align: center;
position: relative;
z-index: 99;


&:hover {

    .image-wrapper{
        overflow: hidden;
        img{
        transform: scale(1.08);
        transition: all 0.5s ease-in-out;
        }
    }

    .quick-view-btn{
        display: block;
        transition: all 0.5s ease-in-out;
    }

}


.image-wrapper{
    overflow: hidden;

    img{
        width: 100%;
        height: 100%;
        transform: scale(1);
    transition: all 0.5s ease-in-out;

    }
}

.quick-view-btn{
    display: none;
    width: 80%;
    position: absolute;
    top:78%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: rgba(255, 255, 255, 0.5);
    border: 1px solid #000000;
    border-radius: 3px;
    padding: 20px;
    transition: all 0.5s ease-in-out;
    cursor: pointer;

    button{
    background-color: transparent;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    cursor: pointer;

    }

}

.quick-view-modal{
    
}

.data-wrapper{
    p:first-child{
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
    }
    p{
        margin-top: 10px;
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
    }

}


`;

export default CollectionProduct
