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
    gap: 95px;
}

@media  (max-width: 1200px){
    padding: 70px 60px;
    grid-template-columns: auto auto auto auto ;
    gap: 80px;
    justify-content: space-between ;
}

@media (max-width: 1080px) {
    padding: 70px 60px;
    grid-template-columns: auto auto auto  ;
    gap: 80px;
    justify-content: space-between ;
    }

    @media (max-width: 775px) {
    padding: 70px 40px;
    grid-template-columns: auto auto  ;
    gap: 50px;

    justify-content: space-between;
    }

    @media (max-width: 600px) {
    padding: 70px 20px;
    grid-template-columns: auto auto  ;
    gap: 30px;
    row-gap: 50px;
    justify-content: space-between;
    }

    @media (max-width: 500px) {
    padding: 70px 20px;
    grid-template-columns: auto ;
    gap: 50px;
    justify-content: center;
    }


`;

export default FooterLinkWrapper
