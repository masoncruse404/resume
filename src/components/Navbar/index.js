import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { Router } from 'react-router-dom';
import {animateScroll as scroll} from 'react-scroll';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks,NavBtn,NavBtnLink} from './NavbarElements';
const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])
    return (
       <>
         <IconContext.Provider value={{ color:'#fff'}}>
         <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>Cruse</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks
                         to="about"
                         smooth={true}
                         duration={500}
                         spy={true} 
                         exact='true' 
                         offset={-80}
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        to="pathfinding"
                        smooth={true}
                        duration={500}
                        spy={true} 
                        exact='true' 
                        offset={-80}
                        >Pathfinding</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        to="ether"
                        smooth={true}
                        duration={500}
                        spy={true} 
                        exact='true' 
                        offset={-80}
                        >Ether</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        to="myshell"
                        smooth={true}
                        duration={500}
                        spy={true} 
                        exact='true' 
                        offset={-80}
                        >MyShell</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        to="fractals"
                        smooth={true}
                        duration={500}
                        spy={true} 
                        exact='true' 
                        offset={-80}
                        >Fractals</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Contact Me</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
         </Nav>
         </IconContext.Provider>
       </>
    );
};

export default Navbar;