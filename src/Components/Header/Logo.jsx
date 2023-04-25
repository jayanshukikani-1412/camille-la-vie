import React from 'react'
import logoImg from "../../images/logo/LOGO.png"
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <LogoWrapper>
    <Link to={"/"}>
      <img src={logoImg} alt="camille-la-vie-logo" />
    </Link>
    </LogoWrapper>
  )
}

const LogoWrapper = styled.div`
img{
    height: 72px;
    width: 153px;
}
`;

export default Logo
