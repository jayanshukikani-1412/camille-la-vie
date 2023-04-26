import React from 'react'
import styled from 'styled-components'
import EmailSubscribe from './EmailSubscribe'
import FooterLinkWrapper from './FooterLinkWrapper'
import BottomFooterWrapper from './BottomFooterWrapper'

const Footer = () => {

  return (
    <FooterStyleWrapper>
      <EmailSubscribe/>
      <FooterLinkWrapper/>
      <hr />
      <BottomFooterWrapper/>
    </FooterStyleWrapper>
  )
}

const FooterStyleWrapper = styled.section`
hr{
  width: 100%;
  border-top: 1px solid #F4F4F4;
}
`;

export default Footer
