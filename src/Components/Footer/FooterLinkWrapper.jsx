import React from 'react'
import styled from 'styled-components'
import TopCollection from './TopCollection';
import QuickLinks from './QuickLinks';
import CustomerService from './CustomerService';
import WeAccept from './WeAccept';

const FooterLinkWrapper = () => {
    return (
        <LinkStyleWrapper>
            <TopCollection/>
            <QuickLinks/>
            <CustomerService/>
            <WeAccept/>
        </LinkStyleWrapper>
    )
}

const LinkStyleWrapper = styled.section`
display: grid;
grid-template-columns: auto auto auto auto;
justify-content: space-between ;
padding: 70px 155px;
gap: 118px;

@media  (max-width: 1440px){
    padding: 70px 100px;
}

@media  (max-width: 1200px){
    grid-template-columns: auto auto ;
    justify-content: space-around ;
}

@media  (max-width: 565px){
    grid-template-columns: auto  ;

    padding: 70px 50px;
}



`;

export default FooterLinkWrapper
