import React from 'react'
import styled from 'styled-components'
import NavbarLink from '../Header/NavbarLink'

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarLink data={"All Dresses"}/>
      <NavbarLink data={"Prom"}/>
      <NavbarLink data={"Homecoming"}/>
      <NavbarLink data={"Evening"}/>
      <NavbarLink data={"Wedding"}/>
      <NavbarLink data={"Bridesmaid"}/>
      <NavbarLink data={"Petite"}/>
      <NavbarLink data={"Plus Size"}/>
      <NavbarLink data={"Cocktail"}/>
      <NavbarLink data={"Special Event"}/>
      <NavbarLink data={"Shop By Color"}/>
      <NavbarLink data={"Shop by Style"}/>
      <NavbarLink data={"Accessories"}/>
      <NavbarLink data={"Catalogs"}/>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.section`
display: flex;
justify-content: space-between;

`;

export default Navbar
