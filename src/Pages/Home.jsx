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

`;



export default Home
