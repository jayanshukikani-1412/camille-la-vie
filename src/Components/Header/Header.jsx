import React from 'react'
import styled from 'styled-components'

import Logo from "../Header/Logo"
import HeaderRight from "../Header/HeaderRight"
import Navbar from "../Header/Navbar"

const Header = () => {
    return (
        <SectionWrapper>
            <div className='header-top-section'>
                <Logo />
                <HeaderRight />
            </div>
            <hr style={{
                margin: "10px -155px 10px",
                borderTop: "1px solid #E1E1E1"
            }} />
            <div className='header-bottom-section'>
                <Navbar />
            </div>
        </SectionWrapper>
    )
}

const SectionWrapper = styled.section`
padding: 10px 155px;

.header-top-section{
    display:flex;
    justify-content: space-between;
}

@media  (max-width: 1440px){
    padding: 10px 100px;
}

@media  (max-width: 1320px){
    padding: 10px 60px;
}

@media  (max-width: 1320px){
    .header-bottom-section{
        display:none
    }
}

@media  (max-width: 980px){
        display:none
}



`;

export default Header
