import React from 'react'
import styled from 'styled-components'
import CollectionProduct from '../CollectionProduct/CollectionProduct';
import image1 from "../../images/collection/prom/image1.png"
import image2 from "../../images/collection/prom/image2.png"
import image3 from "../../images/collection/prom/image3.png"
import image4 from "../../images/collection/prom/image4.png"
import image5 from "../../images/collection/prom/image5.png"
import image6 from "../../images/collection/prom/image6.png"
import image7 from "../../images/collection/prom/image7.png"
import image8 from "../../images/collection/prom/image8.png"
import image9 from "../../images/collection/prom/image9.png"
import image10 from "../../images/collection/prom/image10.png"
import image11 from "../../images/collection/prom/image11.png"
import image12 from "../../images/collection/prom/image12.png"

const PromDressesCollection = () => {

    const product = [
        {
            src:image1,
            title:"Sweetheart Basketweave Sequin Dress",
            price:"$99.99"
        },
        {
            src:image2,
            title:"Long Sleeve Lace Brocade Two Piece Dress",
            price:"$89.99"
        },
        {
            src:image3,
            title:"  Floral Sequin V Back Skater Dress",
            price:"$79.99"
        },
        {
            src:image4,
            title:"Square Neck Tiered Lace Fit and Flare Dress",
            price:"$69.99"
        },
        {
            src:image5,
            title:"Glitter Metallic Strappy Lace Up Back Dress",
            price:"$69.99"
        },
        {
            src:image6,
            title:"Taffeta Lace Corset Fit and Flare Dress",
            price:"$159.99"
        },
        {
            src:image7,
            title:"Sweetheart Floral Embroidered Lace Up",
            price:"$159.99"
        },
        {
            src:image8,
            title:"Glitter Pleated Off the Shoulder Fit and Flare ",
            price:"$129.99"
        },
        {
            src:image9,
            title:"Iridescent Glitter Spaghetti Strap Fit and ",
            price:"$149.99"
        },
        {
            src:image10,
            title:"Mesh Caviar Beaded Lace Up Dress",
            price:"$149.99"
        },
        {
            src:image11,
            title:"Ruched Back Crepe Dress with Side Pleats",
            price:"$189.99"
        },
        {
            src:image12,
            title:"Velvet Slip Ruched Side Slit Dress",
            price:"$149.99"
        },
        
    ]
    return (
        <StyleWrapper>
            <div className='collection-details'>
                <h2>New Prom Dresses</h2>
                <p>Browse our new prom dresses to see the latest styles in store for the season! Maybe you already have the prom date and transportation all planned out, but now it’s time to make your dream dress a reality! With diverse lengths, pretty necklines, and cutting-edge styles, the prom dress of your fantasies is somewhere in our collection. Shop the trendy selection now!
                </p>
                <hr />
            </div>
            <div className='product-wrapper'>
            {
                product.map((item,index)=>{
                    return(
                        <CollectionProduct key={index} image={item.src} title={item.title} price={item.price} />
                    )
                })
            }

                {/* <CollectionProduct image={image2} title={"Sweetheart Basketweave Sequin Dress"} price="$99.99" />
                <CollectionProduct image={image3} title={"Sweetheart Basketweave Sequin Dress"} price="$99.99" />
                <CollectionProduct image={image4} title={"Sweetheart Basketweave Sequin Dress"} price="$99.99" />

                <CollectionProduct image={image5} title={"Sweetheart Basketweave Sequin Dress"} price="$99.99" />
                <CollectionProduct image={image6} title={"Sweetheart Basketweave Sequin Dress"} price="$99.99" />
                <CollectionProduct image={image7} title={"Sweetheart Basketweave Sequin Dress"} price="$99.99" />
                <CollectionProduct image={image8} title={"Sweetheart Basketweave Sequin Dress"} price="$99.99" />

                <CollectionProduct image={image9} title={"Sweetheart Basketweave Sequin Dress"} price="$99.99" />
                <CollectionProduct image={image10} title={"Sweetheart Basketweave Sequin Dress"} price="$99.99" />
                <CollectionProduct image={image11} title={"Sweetheart Basketweave Sequin Dress"} price="$99.99" />
                <CollectionProduct image={image12} title={"Sweetheart Basketweave Sequin Dress"} price="$99.99" /> */}
            </div>
        </StyleWrapper>
    )
}

const StyleWrapper = styled.section`
    .collection-details{
        display: flex;
        flex-direction: column;
        h2{
            margin-bottom: 10px;
            font-weight: 600;
            font-size: 24px;
            line-height: 36px;
            letter-spacing: 0.05em;
            text-transform: uppercase;
        }
        p{
            width: 100%;
            margin-bottom: 14px;
            font-weight: 400;
            font-size: 14px;
            line-height: 28px;
        }
        hr{
            width: 100%;
            border-top: 1px solid #E1E1E1;
            margin-bottom: 65px;
        }
    }

    .product-wrapper{
        display: grid;
        grid-template-columns: auto auto auto auto auto;
        gap: 30px;
    }

    @media (max-width: 1750px) {
    .product-wrapper{
        grid-template-columns: auto auto auto auto;
    }
}

@media (max-width: 1440px) {
    .product-wrapper{
        grid-template-columns: auto auto auto ;
    }
}

@media (max-width: 1320px) {
    .product-wrapper{
        grid-template-columns: auto auto auto ;
    }
}

@media (max-width: 1080px) {
    .product-wrapper{
        grid-template-columns: auto auto  ;
    }
}

@media (max-width: 865px) {
    .product-wrapper{
        grid-template-columns: auto auto  ;
    }
}
@media (max-width: 560px) {
    .product-wrapper{
        grid-template-columns: auto   ;
        justify-content: center;
    }
}
`;

export default PromDressesCollection
