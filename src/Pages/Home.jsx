import React from 'react'
import styled from 'styled-components'

import HeroImage from '../Components/HeroImage/HeroImage'


const Home = () => {
    return (
        <Homesection>
            <HeroImage />
        </Homesection>
    )
}

const Homesection = styled.section`
padding: 0 155px;

`;



export default Home
