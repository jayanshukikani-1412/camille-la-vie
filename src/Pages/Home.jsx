import React from 'react'
import styled from 'styled-components'

import HeroImage from '../Components/HeroImage/HeroImage'
import DressCategory from '../Components/DressCategory/DressCategory'
import BestSeller from '../Components/BestSeller/BestSeller'
import PicturePerfectRoom from '../Components/PicturePerfectRoom/PicturePerfectRoom'
import ImageGallery from '../Components/ImageGallery/ImageGallery'


const Home = () => {
    return (
        <Homesection>
            <HeroImage />
            <DressCategory/>
            <BestSeller/>
            <PicturePerfectRoom/>
            <ImageGallery/>
        </Homesection>
    )
}

const Homesection = styled.section`
padding: 0 155px;

@media (max-width: 1440px) {
    /* padding: 0 100px; */
    padding: 0 100px;
    }

    @media (max-width: 1080px) {
    /* padding: 0 80px; */
    padding: 0 80px;
    }


    @media (max-width: 865px) {
    /* padding: 0 40px; */
    padding: 0 40px;
    }

    @media (max-width: 600px) {
    /* padding: 0 40px; */
    padding: 0 0px;
    }
    
`;



export default Home
