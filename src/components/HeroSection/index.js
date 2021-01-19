import React, {useState} from 'react'
import { FaArrowRight } from 'react-icons/fa';
import IMG from '../../images/hero1.jpg';
import {HeroContainer, HeroBg, ImageBg, HeroContent, HeroH1, HeroP,HeroBtnWrapper, ArrowForward, ArrowRight, HeroInfoWrap} from './HeroElements';
import { Button } from '../ButtonElements';

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <ImageBg  src={IMG} />
            </HeroBg>
            <HeroH1>Web Design Made Easy</HeroH1>
            <HeroContent>
               
                <HeroInfoWrap>
                <HeroP>
                    Contact today and receive same or next day estimant.
                </HeroP>
                    <HeroBtnWrapper>
                        <Button to="contact" 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                        >
                            Contact Me {hover ? <ArrowForward /> : <ArrowRight/>}
                        </Button>
                    </HeroBtnWrapper>
                </HeroInfoWrap>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;