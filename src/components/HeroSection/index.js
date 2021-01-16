import React, {useState} from 'react'
import { FaArrowRight } from 'react-icons/fa';
import Video from '../../videos/video1.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP,HeroBtnWrapper, ArrowForward, ArrowRight, HeroInfoWrap} from './HeroElements';
import { Button } from '../ButtonElements';

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
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