import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavbarLink = ({ data }) => {
  return (
    <Linkwrapper>
      <Link to="/" className='nav-link'>
        <span>{data}</span>
      </Link>
    </Linkwrapper>

  )
}

const Linkwrapper = styled.div`
.nav-link{
  span{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 12px;
    text-transform: uppercase;
    color: #000000;
  }
}
`;

export default NavbarLink
