import React from 'react'
import {SidebarContainer,Icon, CloseIcon, SidebarWrapper,SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SideBarElements';
import { IconBase } from 'react-icons/lib'

const Sidebar = ({toggle,isOpen}) => {
    return(
        <SidebarContainer isOpen={isOpen} toggle={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="pathfinding" onClick={toggle}>
                        Pathfinding
                    </SidebarLink>
                    <SidebarLink to="ether" onClick={toggle}>
                        Ether
                    </SidebarLink>
                    <SidebarLink to="myshell" onClick={toggle}>
                        MyShell
                    </SidebarLink>
                     <SidebarLink to="fractals" onClick={toggle}>
                        Fractals
                    </SidebarLink>
                   
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/contact">Contact Me</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;