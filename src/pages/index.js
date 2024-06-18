import React, { Fragment, useEffect} from 'react';
import { graphql } from 'gatsby';
import {useSpring, animated} from '@react-spring/web';
import _map from 'lodash/map';
import { FormattedMessage} from 'react-intl';
import styled from 'styled-components';
/*import { Icon } from '@iconify/react';
import FormatDate  from '../components/formatDate'*/
import { colors ,mq} from '../consts/style';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import {
  PageWrapper,
  PageInner,
  Flex,
  Text,
  SectionTitle,
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
            width:250,
            height:250,
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
       
        details
        dateDebutEvenement
        dateFinEvenement
        spectacle {
          nom
          compagnie
          slug
          background { hex }
          image {
            gatsbyImageData(
             
              width:200,
              height:173,
            )
          } 
        }
      }
    }
  }
`;


 /*
 Requete  gatsbyImageData
 placeholder: BLURRED,
 forceBlurhash: false,   
 */

const AgendaListWrapper =   styled.div`
display:flex;
flex-direction:column;
width:100%; 
/*gap:5rem;*/
margin-top:2rem;
`


const StyledGrid2Col = styled.div`
  display: grid;
  height:auto;
  //min-height:100vh;
  background:${colors.blue};
  grid-template-columns: 1fr; 
  grid-template-areas: "logo" "edito";
                        
  ${mq.tablet_up`
   // max-height:100vh;
    
    grid-template-columns: 1fr 2fr;
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
/*
const NewsItemDate =   styled.div`
  display:flex;
  width:100%;
  align-items:center;
  justify-content:flex-start;
  gap:.8rem;
  color:${colors.greyLight};
  font-size:1.4rem;
  svg path {fill:${colors.orange};}
  svg path:first-of-type {
   fill: ${colors.orange};
  }
`*/
const IntroNewsEdito = styled.div`
grid-area: edito;

padding:4rem 4rem 4rem 6rem;
display:flex;
flex-direction: column;
align-items:flex-start;
justify-content:center;

`
const IntroColDroite = styled.div`

padding:4rem 4rem 4rem 6rem;
width:100%;
display:flex;
align-items:center;
flex-direction:column;
background:white;
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
  color:${colors.orange};
  font-family: 'Syne';
  font-weight: normal;
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
  column-gap:2rem;
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

 /* useEffect(() => {
    const onScroll = e => set({st: e.target.documentElement.scrollTop});
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });*/
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
          
            <Text lightmode color="white" dangerouslySetInnerHTML={{ __html: 
                editoHomepage.contenu}}/> 
            <BtnPrimary  to={`/actualites`}><FormattedMessage id="btn_plus-de-news"/></BtnPrimary>

          </IntroNewsEdito>

          <IntroColDroite>
            <NavHomepage/>
           <LogoWrapper>
              <animated.div style={{transform:interpolationTurbine,"zIndex":"1"}}>
                <Logo image={logo.gatsbyImageData} alt="Turbine Production" />
              </animated.div>
              <StaticImage 
              src="../images/typo turbine prod.png" 
             style={{'marginTop':'-6rem','zIndex':'0'}}
              
              height={140}
              placeholder="blurred" 
              alt="Turbine Production" />
            </LogoWrapper>
            <Teaser>{slogan}</Teaser>
            <FlexListeSpectacle>
            { _map(spectacles, (item, i) => (
                  <VignetteSpectacleHomepage key={i} item={item} format="full"/>
            ))}
           </FlexListeSpectacle>
          </IntroColDroite>  
          
        </StyledGrid2Col>
        
       <HomepagePageWrapper>

          <BgWrap color={colors.orange} style={{marginTop:'0'}}>
         
            <PageInner>
              <SectionTitle>Agenda</SectionTitle>
              <AgendaListWrapper>
              { _map(dateFutures.slice(0,6), (item, i) => (
                  <AgendaItem key={i} item={item} path="spectacles/"/> 
               
              ))}

              </AgendaListWrapper> 
            {/*  <AgendaListWrapper>
              { _map(nodes, (item, i) => {
                  (new Date(item.dateDebutEvenement) >= dateDuJour || new Date(item.dateFinEvenement) >= dateDuJour) && nbDates++
                
                  return ( 
                  ((new Date(item.dateDebutEvenement) >= dateDuJour || new Date(item.dateFinEvenement) >= dateDuJour )  && nbDates <= 6) && 
                  <AgendaItem key={i} item={item} path="spectacles/"/> 
                  )
              }
              )}
              </AgendaListWrapper>  */}
              <BtnPrimary to={`/agenda`}><FormattedMessage id="btn__toutes les dates"/></BtnPrimary>

            </PageInner>
          </BgWrap>
          {/*
          <PageInner>
          { _map(data.news.nodes, (lastnews, i) => ( 
                <News key={i}>
                  <GatsbyImage image={lastnews.image.gatsbyImageData} alt={lastnews.titre}/>
                    <h2  dangerouslySetInnerHTML={{ __html: lastnews.titre }} />
                    <Text dangerouslySetInnerHTML={{ __html: lastnews.teaser}}/>
                    <BtnPrimary to={`/actualites/${lastnews.slug}/`}><FormattedMessage id="btn_lire la suite"/></BtnPrimary>
                  </News>
                  )
                )}
          </PageInner>
          <Spacer/>
           */}

         
       

    
      
      </HomepagePageWrapper>
     
    </Fragment>
  );
}


export default IndexPage

export const Head = (props) => (

  <Seo meta={props.data.datoCmsHomepage.seoMetaTags} />

)