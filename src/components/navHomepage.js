import React, {  useState } from 'react';
import styled from 'styled-components';
import { FormattedMessage} from 'react-intl';
import Link from './ExtendedLink';
import { colors, font, /* boxShadow, */mq } from '../consts/style';
/*import  BtnPrimary from './buttons/ButtonRounded';
import  { LanguageSwitcher }  from './language-switcher';*/
//import {  Flex } from './Elements';

import { Menu4 as MenuAltRight } from '@styled-icons/remix-fill';
import { XCircle } from '@styled-icons/bootstrap';
import { useSpring, animated } from '@react-spring/web'

import { Icon } from '@iconify/react';
import facebookRect from '@iconify/icons-brandico/facebook-rect';
/*
import Boop from './boop';
import { StaticImage } from "gatsby-plugin-image"*/


const IconLink = ({to, icon, text}) => {
  return(

    <LinkSocial title={text} href={to} target="_blank"  rel="nofollow noopener noreferrer">
      {icon}
    </LinkSocial>
  )
}



const LinkSocial = styled.a`

`

const Wrapper = styled.div`


  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
margin-bottom:4rem;
  ${mq.tablet`
     padding: 0 2rem;
   `}
   
`;




const MainMenu = styled.ul`
  display: none;
  
${mq.tablet_up`
  display: flex;
  list-style: disc;
  color:yellow;
  justify-self: flex-start;
  margin: 0;
  padding:0;
 `}
 & ::marker {
    color:${colors.yellow};
 }

`;


const MenuItem = styled.li`
  position: relative;
  color: ${colors.dark};
  &:hover {
    color: ${colors.blue};
  }
    margin-right:3rem;
     
    &:first-child::marker /*,  &:last-child::marker */ {
    color:transparent;
    }
`;

const LinkHeader = styled(props => <Link {...props} />)`
  position:relative;
  color: ${colors.dark};
  &:hover {
    color: ${colors.dark};
  }

  ${font.navigationItem}
  &.active {
    color: ${colors.dark};
  }
  &:before {
    content: "";
    display: block;
    position: absolute;
      left: ${props => (props.selected ?"50%": 0 )};
    bottom: -.65rem;
    background-color: #F0F3D3;
    border-radius:3px;
    width: 30px;
    height: 2px;
   
    opacity: ${props => (props.selected ? 1: 0 )};
    transform:translateX(${props => (props.selected ?"-50%": 0 )});
  }

   &:hover:before {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    border-radius:8px;
    bottom: -.65rem;
    background-color: ${colors.yellow};
    width: 100%;
    height: 2px;
    transform:translateX(-50%);
    transition: all 0.25s;   
    opacity: 1;
  }
`;
/*
const LogoLink = styled(LinkHeader)`
  img {
     height:8rem;
  }
  height:100%;
 
   ${mq.mobile`
      img { 
        height:5rem;
        width: auto!important;
      }
    `}

  &:hover:before,  &.active:before 
  {
    content:none;
  }
`;*/

const BurgerMenu = styled.button`
  position:relative;
  border:0;
  margin-right:1rem;
  display:block;
  color:white;
   background-color:transparent;
  &:focus {
    outline:none;
  }
  ${mq.tablet_up` 
   display:none;
 `}
   ${mq.tablet`
     margin-right:0;
         padding: 0;
    `}
`;

const CloseMenuMobile = styled.button`
  position:absolute;
  top:3rem;
  right:2rem;
  display:block;
  border:none;
 & svg { fill:white;background:transparent!important;}
  background:transparent;
  &:focus {
    outline:none;
  }
`;

/*MENU MOBILE*/
const StyledMenuAltRight = styled(MenuAltRight)`
  color:${colors.dark};


`
const StyledXCircle = styled(XCircle)`
  color:${colors.dark};
`


const MenuMobile = styled(animated.div)`
  z-index:5;
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  right: 0;
  z-index:10;
  transform: translate3d(0,-100%,0);
`
const ContentMobile = styled(animated.div)`

  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  nav {
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
  }
`

const ItemMobileNav = styled(animated.div)`
 
  padding:1.5rem;
  margin-bottom:.5rem;
 a {
  font-size:4rem;
   color:${colors.light};
   &:hover, &.active {
     color:${colors.orange};
    }
  }
  
`
/*
const FlexBtnWrapper = styled(Flex)`
  margin-top:2rem;  
  margin-bottom:3rem;
  align-items:flex-start;
  justify-content:center;
  & > * {
    margin:0 ${space.quarter};
  }
  ${mq.mobile`
      margin-top:1rem;
  margin-bottom:1rem;
      `}
`
*/


export default function NavHomepage({ location }) {
 
  const [mobileNavOpen, setMobileNavOpen] = useState(false) // mobile menu closed by default
  const MenuAnimation = useSpring({
  native: true,
  to: { opacity: mobileNavOpen ? 1 : 0, transform: mobileNavOpen ? 'translate3d(0,0,0)' : 'translate3d(0,-100%, 0)', backgroundColor: mobileNavOpen ? colors.blue : '#fff'},
  })

  return (
    <> 
   
    <Wrapper>

        
       
        <MainMenu>
         
          
          <MenuItem>
            <LinkHeader to="/artistes" activeClassName="active"><FormattedMessage id="menu__spectacles"/></LinkHeader>
          </MenuItem>
           <MenuItem>
            <LinkHeader to="/agenda" activeClassName="active"><FormattedMessage id="menu__agenda"/></LinkHeader>
          </MenuItem>
           <MenuItem>
            <LinkHeader to="/a-propos" activeClassName="active"><FormattedMessage id="menu__a-propos"/></LinkHeader>
          </MenuItem>
          <MenuItem>
            <LinkHeader to="/contact" activeClassName="active"><FormattedMessage id="menu__contact"/></LinkHeader>
          </MenuItem>
        
          
        </MainMenu>
       
        
        <BurgerMenu  onClick={() => {setMobileNavOpen(true)}}
    aria-label="Navigation"><StyledMenuAltRight title="Navigation" size="48"/></BurgerMenu>

    </Wrapper>

    <MenuMobile style={ MenuAnimation}> 
        <ContentMobile>
        
          <nav>
            <ItemMobileNav onClick={() => {setMobileNavOpen(!mobileNavOpen)}}>
              <LinkHeader to="/" ><FormattedMessage id="homepage"/></LinkHeader>
            </ItemMobileNav>
           
            <ItemMobileNav onClick={() => {setMobileNavOpen(!mobileNavOpen)}} >
                <LinkHeader to="/artistes" activeClassName="active"><FormattedMessage id="menu__spectacles"/></LinkHeader>
            </ItemMobileNav>
            <ItemMobileNav onClick={() => {setMobileNavOpen(!mobileNavOpen)}} >
            <LinkHeader to="/agenda" activeClassName="active"><FormattedMessage id="menu__agenda"/></LinkHeader>
            </ItemMobileNav>  
            <ItemMobileNav onClick={() => {setMobileNavOpen(!mobileNavOpen)}} >
              <LinkHeader to="/a-propos" activeClassName="active"><FormattedMessage id="menu__a-propos"/></LinkHeader>
            </ItemMobileNav>
            <ItemMobileNav onClick={() => {setMobileNavOpen(!mobileNavOpen)}} >
                <LinkHeader to="/contact" activeClassName="active"><FormattedMessage id="menu__contact"/></LinkHeader> 
            </ItemMobileNav>
            <ItemMobileNav>
              <IconLink to="https://www.facebook.com/label.folie" icon={<Icon title="Facebook" icon={facebookRect} style={{color: colors.yellow, fontSize: '28px', margin:'10px'}} />}  text="Facebook"/>     
        </ItemMobileNav>
          </nav>
         
          <CloseMenuMobile 
          aria-label="Fermer"
          onClick={() => {setMobileNavOpen(false)}} 
           ><StyledXCircle size="48"  title="Fermer le menu" /></CloseMenuMobile>
        </ContentMobile>    
      </MenuMobile>  
      </>

  );
}


