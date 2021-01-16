import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import {FooterContainer, FooterWrap,FooterLink,FooterLinkA, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, SocialIconLink,SocialIcons,SocialLogo,SocialMedia,SocialMediaWrap,WebsiteRights} from './FooterElements'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                    <FooterLinkItems>
                          <FooterLinkTitle>Projects</FooterLinkTitle>
                              <FooterLink to="pathfinding">Pathfinding</FooterLink>
                              <FooterLink to="ether">Ether</FooterLink>
                              <FooterLink to="myshell">MyShell</FooterLink>
                             <FooterLink to="fractals">Fractals</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                          <FooterLinkTitle>Learn More</FooterLinkTitle>
                          <FooterLink to="about">About</FooterLink>   
                        </FooterLinkItems>
                       
                      
                        <FooterLinkItems>
                          <FooterLinkTitle>Contact Us</FooterLinkTitle>
                          <FooterLinkA href="/contact">Contact</FooterLinkA>  
                        </FooterLinkItems>
                        <FooterLinkItems>
                          <FooterLinkTitle>Social Media</FooterLinkTitle>
                              <FooterLinkA href="https://www.instagram.com/masoncruse/">Instagram</FooterLinkA>
                              <FooterLinkA href="https://www.facebook.com/mason.cruse">Facebook</FooterLinkA>
                              <FooterLinkA href="https://www.youtube.com/channel/UC3WaGKoubN9KK5pzfVZZ8dg">Youtube</FooterLinkA>
                              <FooterLinkA href="https://twitter.com/masoncruse44">Twitter</FooterLinkA>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                 
                </FooterLinksContainer>
              {   <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            Cruse
                        </SocialLogo>
                        <WebsiteRights>Cruse &#169; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/mason.cruse" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/masoncruse/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.youtube.com/channel/UC3WaGKoubN9KK5pzfVZZ8dg" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="https://twitter.com/masoncruse44" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>}
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
