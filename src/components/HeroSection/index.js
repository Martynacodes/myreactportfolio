import React, { useState } from 'react';
import { Button } from '../ButtonElements';

import Video from '../../videos/video.mp4';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';

function HeroSection() {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };
    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Martyna Wisniewska</HeroH1>
                <HeroP>
                    A creative web developer who loves creating aesthetically appealing and user-friendly web apps.
                </HeroP>
                <HeroBtnWrapper>
                    <Button
                        to='projects'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        primary='true'
                        dark='true'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                    >
                        See my projects {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
}

export default HeroSection;
