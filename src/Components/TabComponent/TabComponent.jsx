import React from 'react'
import styled from 'styled-components'

const TabComponent = () => {
    return (
        <TabStyleWrapper>
            <div className='tab_link_wrapper'>
                <ul>
                    <li className="active"><span>DESCRIPTION</span></li>
                    <li><span>SIZE & FIT</span></li>
                    <li><span>MODEL INFO</span></li>
                    <li><span>RETURN POLICY</span></li>
                </ul>
            </div>

            <div className='tab_desc_wrapper'>
                <div className='tab_desc_item'>
                    <div>Glow from every angle in this striking long evening dress! Perfect for your next night out, this style includes a plunge neckline, floral sequin detail, and mesh fabric. Wear it as a prom dress or wedding guest dress. Add on black accessories to finish the look.</div>
                    <div>
                        <ul>
                            <li>Plunge neckline with spaghetti straps</li>
                            <li>Fitted bodice</li>
                            <li>Sheath style with floral sequin detail</li>
                        </ul>
                    </div>
                </div>
            </div>
        </TabStyleWrapper>
    )
}

const TabStyleWrapper = styled.section`
max-width: 630px;
width: 100%;

.tab_link_wrapper{

    ul{
        display: flex;
        gap: 40px;
        border-bottom: 2px solid #EEEEEE;
        padding-bottom: 13px;

        li{
            position: relative;
            cursor: pointer;
            span{
                font-weight: 600;
                font-size: 14px;
                line-height: 17px;
            }
        }

        .active::after{
            content: '';
            display: block;
            position: absolute;
            bottom: -16px;
            left: 50%;
            transform: translateX(-50%);
            width: calc(100% + 4px);
            height: 5px;
            background: #65CADB;
        }
    }
}

.tab_desc_wrapper {
    margin-top: 35px;
    .tab_desc_item{
        display: flex;
        flex-direction: column;
        gap: 17px;
        div{
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
        }
        ul{
            list-style-type: square;
            padding-left: 19px;
        }
    }
}
`;

export default TabComponent
