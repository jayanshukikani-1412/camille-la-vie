import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import PromDressesCollection from '../Components/PromDressesCollection/PromDressesCollection'
import Filter from '../Components/Filter/Filter'
import CollectionBlogWrapper from '../Components/CollectionBlogWrapper/CollectionBlogWrapper'


const Collection = () => {
    const { name } = useParams()
    console.log(name)
    return (
        <StyleWrapper>
            <div className='collection-section'>
                <div className='filter-wrapper'>
                    <Filter />
                </div>

                <div className='collection-wrapper'>
                    {(name === "prom") && (<PromDressesCollection />)}
                    {(name === "alldresses") && ("hasvsafufbubfufibfiobio")}
                </div>
            </div>


            <div className='read-more-wrapper'>
                <div>
                    <Link className='link'>Read More </Link>
                    <p>+</p>
                </div>
            </div>

            <div className='collection-blog-wrapper'>
                <div className='title-wrapper'>
                    <p>Prom Dresses Length</p>
                </div>
                <div>
                    <CollectionBlogWrapper/>
                </div>
            </div>
            


            {/* practice */}
            {/* <ModalBox/> */}
        </StyleWrapper>
    )
}

const StyleWrapper = styled.section`

padding: 25px 155px 112px;
    .collection-section{
        display: flex;
        gap: 25px;

    .filter-wrapper{
        width: 240px;
        background-color: #E1E1E1;
    }
}

.read-more-wrapper{
    justify-content: center;
    align-items: center;
    margin: 60px -155px 0;
    padding: 31px 0;
    background: rgba(225, 225, 225, 0.5);
    text-align: center;

    div{
        margin: 0 auto;
        width:fit-content ;
        display: flex;
        gap: 32px;
        padding: 0 0 6px 0;
        border-bottom: 2px solid #000000;


        .link{
            font-weight: 700;
            font-size: 20px;
            line-height: 24px;
            text-transform: uppercase;
            color: #000000;
        }

        p{
            font-weight: 700;
            font-size: 20px;
            line-height: 24px;
        }
    }
}

.collection-blog-wrapper{
    .title-wrapper{
        p{
            margin: 98px 0 50px 0;
            font-weight: 700;
            font-size: 28px;
            line-height: 36px;
            text-align: center;
            letter-spacing: 0.05em;
            text-transform: uppercase;
        }
    }
}

@media (max-width: 1440px) {
    padding: 25px 100px;

}

@media (max-width: 1320px) {
    padding: 25px 100px;
}

@media (max-width: 1080px) {
    .filter-wrapper{
    display: none;
}
    padding: 25px 80px;
}

@media (max-width: 865px) {
    .filter-wrapper{
    display: none;
}
    padding: 25px 20px;
}

`;

export default Collection
