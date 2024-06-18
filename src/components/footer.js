import React from 'react';
import styled from 'styled-components';
import Link from './ExtendedLink';
/*import {Link as GLink} from 'gatsby';
import { useIntl } from 'react-intl';*/
import { colors, mq, font } from '../consts/style';
/*import { Text,  Flex } from './Elements';
import { Icon } from '@iconify/react';*/
/*import instagramIcon from '@iconify/icons-logos/instagram-icon';
import instagramIcon from '@iconify/icons-brandico/instagram';
import facebookRect from '@iconify/icons-brandico/facebook-rect';*/
import { FormattedMessage} from 'react-intl'

export const WrapperFooter = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position:relative;
  padding:4rem;
 
`;
/*
const FooterInner = styled.div`
 padding: 0 2rem;
 display:block;
 width: 100%;
 text-align:center;

 ${mq.tabletSmall_up`
   text-align:left;
  display: flex;
  width: 120rem;
  max-width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap:2rem;
  `}
 
 ${mq.tablet_up`
  img {
    display:block;
  }
  `}
  
  ul {
    list-style: circle;
    margin-right:2rem;
    ${mq.tabletSmall`
            margin-right:0;
            list-style: none;
          `}
    padding:0;
      li {
         display:inline-block;
         padding:.5rem;
        ${mq.tabletSmall_up`
            display:block;
             padding:0;
          `}
      a {
        color:${colors.dark};
      }
  }
}

`;
*/


const FooterBottom = styled.div`
  padding: 0 2rem;
  margin-top:4.4rem;
  a {
     color:${colors.dark};
  }
  ${font.text};
  font-size:1.4rem;
  color:${colors.dark};
  text-align: center;
  ${mq.tabletSmall` text-align:center;`}
`;




const Footer= ({ location }) => {
  /*const intl = useIntl();*/
  const today = new Date();
  const year = today.getFullYear();

  return (
    <WrapperFooter>   
      
     
      <FooterBottom>
     
      <span>© Turbine Production - {year} - </span><Link to="/credits"> <FormattedMessage id="footer__credits"/></Link> - <Link to="/mentions-legales"> <FormattedMessage id="footer__mentions-legales"/></Link> - <Link to="/protection-des-donnees"><FormattedMessage id="footer__data-protection"/></Link>{/* -   <GLink to="/en">EN</GLink> | <GLink to="/">FR</GLink> */}
        
      </FooterBottom>
    </WrapperFooter>
  );
};

export default Footer;
