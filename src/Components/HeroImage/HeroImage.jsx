import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import heroImg from "../../images/hero-image.png"

const HeroImage = () => {
    return (
        <HeroWrapper>
            <div className='hero-wrapper'>
                <img src={heroImg} alt="hero-img" />

                <div className='hero-data'>
                    <h1>Homecoming
                        <br />
                        Dresses 2022</h1>
                    <Link><button>SHOP NOW</button></Link>
                </div>
            </div>

        </HeroWrapper>
    )
}

const HeroWrapper = styled.section`
/* padding: 0 155px; */
padding: 0 0px;

.hero-wrapper{
    position: relative;
    object-fit: fill;


    img{
        width: 100%;
        height: 100%;
        max-height: 665px;
    }

    .hero-data{
        position: absolute;
        top: 160px;
        left: 111px;
        width: 100%;
        max-width: 400px;

        h1{
            font-weight: 700;
            font-size: 52px;
            line-height: 62px;
            text-transform: uppercase;
        }

        button{
            margin-top: 40px;
            padding: 20px 40px;
            background: #000000;
            border-radius: 3px;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-size: 15px;
            line-height: 20px;
            letter-spacing: 0.05em;
            color: #FFFFFF;
            transition: all 0.3s;
            border: 2px solid transparent;


            &:hover{
                background: transparent;
                border: 2px solid #000000;
                color: #000000;
            }
        }
    }
}

@media (max-width: 1440px) {
    /* padding: 0 100px; */
    padding: 0 0px;

    .hero-wrapper{
    position: relative;
    
    .hero-data{
        top: 100px;
        left: 80px;
        width: 100%;
        max-width: 400px;
    }
}

}

@media (max-width: 1320px) {
    /* padding: 0 100px; */
    padding: 0 0px;

    .hero-wrapper{
        position: relative;
    
        .hero-data{
            top: 100px;
            left: 80px;
            width: 100%;
            max-width: 400px;
    
            h1{
                font-size: 45px;
                line-height: 55px;
            }

            button{
                margin-top: 30px;
                padding: 18px 35px;
            }
        }
    }
}

@media (max-width: 1080px) {
    padding: 0 80px;
    padding: 0 0px;

    .hero-wrapper{
        position: relative;
    
        .hero-data{
            top: 80px;
            left: 60px;
            width: 100%;
            max-width: 400px;
    
            h1{
                font-size: 40px;
                line-height: 50px;
            }

            button{
                margin-top: 20px;
                padding: 15px 30px;
            }
        }
    }
}

@media (max-width: 865px) {
    /* padding: 0 0px; */
    padding: 0 0px;

    .hero-wrapper{
        position: relative;
    
        .hero-data{
            top: 70px;
            left: 50px;
            width: 100%;
            max-width: 400px;
    
            h1{
                font-size: 35px;
                line-height: 42px;
            }

            button{
                margin-top: 15px;
                padding: 12px 25px;
            }
        }
    }
}

@media (max-width: 665px) {

    .hero-wrapper{

        .hero-data{
            top: 50px;
            left: 30px;
            max-width: 350px;
    
            h1{
                font-size: 32px;
                line-height: 42px;
            }

            button{
                margin-top: 15px;
                padding: 15px 40px;
            }
        
        }
        
    }
        
}

@media (max-width: 565px) {
    .hero-wrapper{
        .hero-data{
            top: 40px;
            left: 30px;
            max-width: 350px;
            h1{
                font-size: 28px;
                line-height: 35px;
            }
            button{
                margin-top: 15px;
                padding: 12px 35px;
            }
        }  
    }   
}

@media (max-width: 500px) {
    .hero-wrapper{
        .hero-data{
            top: 30px;
            left: 20px;
            max-width: 350px;
            h1{
                font-size: 25px;
                line-height: 35px;
            }
            button{
                margin-top: 10px;
                padding: 8px 20px;
                font-size: 12px;

            }
        }  
    }   
}

@media (max-width: 425px) {
    .hero-wrapper{
        .hero-data{
            top: 30px;
            left: 20px;
            max-width: 350px;
            h1{
                font-size: 20px;
                line-height: 30px;
            }
            button{
                margin-top: 10px;
                padding: 5px 10px;
                font-size: 12px;

            }
        }  
    }   
}

@media (max-width: 375px) {
    .hero-wrapper{
        .hero-data{
            top: 20px;
            left: 20px;
            max-width: 350px;
            h1{
                font-size: 20px;
                line-height: 30px;
            }
            button{
                margin-top: 10px;
                padding: 5px 15px;
                font-size: 12px;

            }
        }  
    }   
}


`;

export default HeroImage
