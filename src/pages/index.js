import React, { Fragment, useEffect} from 'react';
import { graphql } from 'gatsby';
import {useSpring, animated} from '@react-spring/web';
import _map from 'lodash/map';
import { FormattedMessage} from 'react-intl';
import styled from 'styled-components';
/*import { Icon } from '@iconify/react';
import FormatDate  from '../components/formatDate'*/
import { colors ,mq} from '../consts/style';
import {Reveal, Fade} from "react-awesome-reveal"
import { fadeInUp, fadeInDown } from "../style/animations"
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import {
  PageWrapper,
  Spacer,
  PageInner,
  Flex,
  Text,
  SectionTitle,
  SectionTitleLeft,
  BgWrap
} from '../components/Elements';
import  BtnPrimary  from '../components/buttons/ButtonRounded';
import  NavHomepage  from '../components/navHomepage';
import Seo from '../components/Seo';
import VignetteSpectacleHomepage from '../components/projet/vignetteSpectacleHomepage';
import  AgendaItem  from '../components/agenda/agendaItem';

export const indexQuery = graphql`
 query datoCmsHomepage {
    datoCmsHomepage{
      slogan
      editoHomepage {
        contenu 
       
      }
      logo {
        title
        gatsbyImageData (
          width:330,
          placeholder: BLURRED,
          forceBlurhash: false,
        )
      }
      spectacles {
        slug
        nom
        teaser
        
        image {  
          gatsbyImageData(
            placeholder: BLURRED,
            forceBlurhash: false,   
            width:150,
            height:150,
          )
        }
    }
     
     
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    


    agenda: allDatoCmsAgenda( 
       filter: {isFuture: {eq: true}} ,
       sort: {dateDebutEvenement: ASC} , 
       limit:6){
      nodes {
        id
        ville
        details
        dateDebutEvenement
        dateFinEvenement
        spectacle {
          nom
          compagnie
          slug
          background { hex }
          
        }
      }
    }
  }
`;


 

const AgendaListWrapper =   styled.div`
display:flex;
flex-direction:column;
width:100%; 
margin-top:2rem;
`


const StyledGrid2Col = styled.div`
  display: grid;
  height:auto;
  
  background:white;
  grid-template-columns: 1fr; 
  grid-template-areas: "edito" "logo";
                        
  ${mq.tablet_up`
   // max-height:100vh;
    
    grid-template-columns: 3fr 2fr;
    align-items: stretch; // 100% de la hauteur pour les 2 colonnes
    justify-content:center;
    grid-template-areas: "edito logo";
 `}
      justify-content:center;
      align-items:center;
      ${mq.tablet`
          max-width:100%;
      `}
     
      overflow:hidden;
`

const IntroNewsEdito = styled.div`
grid-area: edito;

padding:4rem 4rem 4rem 6rem;
display:flex;
flex-direction: column;
align-items:center;
justify-content:flex-start;



`
const IntroColDroite = styled.div`

padding:3rem 4rem 4rem 4rem;
width:100%;
display:flex;
align-items:center;
flex-direction:column;
background:#f8f8f8;
  ${mq.tablet`
          padding:3rem;
  `}
`

const LogoWrapper = styled.div`
 display:flex;
 flex-direction:column;
 align-items:center;
 ${mq.tablet`         
      gap:1rem;
  `}
`
/*
const News = styled.div`
  margin:0 auto;
  max-width:705px;
`*/

const Teaser = styled.h1`
  color:${colors.dark};
  font-family: 'Raleway';
  font-weight: 700;
  font-size:2.4rem; 
  text-align:center;
  max-width:862px;
  margin-top:2rem;
`;

const Logo = styled(GatsbyImage)`
  //width:100%;
  z-index:1;
`;

const HomepagePageWrapper = styled(PageWrapper)`
  padding-top:0;
  margin-top:0;
`;


const FlexListeSpectacle = styled(Flex)`
  column-gap:.5rem;
  align-items:flex-start;
  margin-bottom:2rem;
  padding-top:6rem;
  padding-bottom:2rem;
  flex-wrap:wrap;
  justify-content:center;
  ${mq.tablet`
          
  padding-top:6rem;
         
      `}
  ${mq.tabletSmall`
      display:none;         
  `}
  
`;



const IndexPage = ({ data, pageContext, location }) => {


  const {
    slogan,
    logo,
    spectacles,
    editoHomepage
    } = data.datoCmsHomepage;
  const { nodes } = data.agenda; // toutes les dates

  const [{st}, set] = useSpring(()=>({st:0}))
  const interpolationTurbine = st.to(o => `rotate(${o/6}deg`)

  useEffect(() => {
    const onMouseMove = e => set({st: (e.clientX + e.clientY)}) ;
    window.addEventListener("mousemove", onMouseMove);
   
    return () => window.removeEventListener("mousemove", onMouseMove);
  });

  //console.log("interpolationTurbine:", interpolationTurbine)
  const dateDuJour = new Date();
  dateDuJour.setHours(0, 0, 0, 0);
  function dateFuture(itemAgenda) {
    return (new Date(itemAgenda.dateDebutEvenement) >= dateDuJour || new Date(itemAgenda.dateFinEvenement) >= dateDuJour )  ? itemAgenda : null;
  }
  var dateFutures = nodes.filter(dateFuture);


  return (
    <Fragment>  
      
        <StyledGrid2Col>  
              
          <IntroNewsEdito>

            <NavHomepage/>
            <Reveal keyframes={fadeInUp}  triggerOnce>
            <LogoWrapper>
              <animated.div style={{/*transform:interpolationTurbine,"zIndex":"1"*/}}>
                <Logo image={logo.gatsbyImageData} alt="Label Folie" />
              </animated.div>
            </LogoWrapper>
            </Reveal>
            <Teaser>{slogan}</Teaser>
            <Reveal keyframes={fadeInDown}  triggerOnce>
            <FlexListeSpectacle>
              { _map(spectacles, (item, i) => (
                    <VignetteSpectacleHomepage key={i} item={item} format="full"/>
              ))}
            </FlexListeSpectacle>
           </Reveal>
          </IntroNewsEdito>
       
          <IntroColDroite>
              <Reveal keyframes={fadeInDown}  triggerOnce>
                <SectionTitle>Agenda</SectionTitle>
              </Reveal>
              <Reveal keyframes={fadeInUp}  triggerOnce>
                <AgendaListWrapper>
                  { _map(dateFutures.slice(0,6), (item, i) => (
                      <AgendaItem key={i} item={item} path="artistes/"/> 
                  
                  ))}
                </AgendaListWrapper> 
                <Spacer/>
              <BtnPrimary to={`/agenda`}><FormattedMessage id="btn__toutes les dates"/></BtnPrimary>
              </Reveal> 
          </IntroColDroite>  
          
        </StyledGrid2Col>
        
      
  
     
    </Fragment>
  );
}


export default IndexPage

export const Head = (props) => (

  <Seo meta={props.data.datoCmsHomepage.seoMetaTags} />

)