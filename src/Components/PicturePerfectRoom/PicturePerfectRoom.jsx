import React from 'react'
import styled from 'styled-components'
import Picture from './Picture';

import image1 from '../../images/picture-perfect-room/image1.png'
import image2 from '../../images/picture-perfect-room/image2.png'
import image3 from '../../images/picture-perfect-room/image3.png'
import image4 from '../../images/picture-perfect-room/image4.png'
import main from '../../images/picture-perfect-room/main-image.png'


const PicturePerfectRoom = () => {
    return (
        <StyleWrapper>
            <div className='title-wrapper'>
                <h1>BEST SELLERS</h1>
            </div>
            <div className='picture-wrapper'>
                <Picture image={main} btn={"ALL PROM DRESSES"}/>
                <div className='sub-wrapper'>
                    <Picture image={image1} btn={"NEW PROM DRESSES"}/>
                    <Picture image={image2} btn={"LONG PROM DRESSES"}/>
                    <Picture image={image3} btn={"SHORT PROM DRESSES"}/>
                    <Picture image={image4} btn={"MERMAID PROM DRESSES"}/>
                </div>
            </div>
        </StyleWrapper>
    )
}

const StyleWrapper = styled.section`
/* padding: 0 153px 78px; */
padding: 0 0px 78px;
display: flex;
flex-direction: column;
align-items: center;
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

    .picture-wrapper{
        display: flex;
        gap: 30px;

        .sub-wrapper{
            display: grid;
            grid-template-columns: auto auto;
            gap: 30px;
        }
    }



@media (max-width: 1140px) {
    /* padding: 0 100px 78px; */
    padding: 0 0px 78px;
    .picture-wrapper{
        display: flex;
        flex-direction: column-reverse;
        gap: 30px;
    }
    }

    @media (max-width: 840px) {
    /* padding: 0 50px 78px; */
    padding: 0 0px 78px;
    .picture-wrapper{
        display: flex;
        flex-direction: column-reverse;
        gap: 30px;

        .sub-wrapper{
            gap: 20px;
        }
    }
    }

    @media (max-width: 840px) {
    /* padding: 0 20px 78px; */
    padding: 0 0px 78px;
    .picture-wrapper{
        display: flex;
        flex-direction: column-reverse;
        gap: 30px;

        .sub-wrapper{
            gap: 10px;
        }
    }
    }
    
`;




export default PicturePerfectRoom
