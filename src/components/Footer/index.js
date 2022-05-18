import React from 'react';
import {
    FaGithub,
    FaLinkedin
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Martynacodes
                        </SocialLogo>
                        <WebsiteRights>Martynacodes © 2022 All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink
                                href='https://github.com/Martynacodes'
                                target='_blank'
                                aria-label='GitHub'
                                rel='noopener noreferrer'
                            >
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href='https://www.linkedin.com/in/martyna-codes/' target='_blank' aria-label='Linkedin'>
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
