import React, { Fragment } from 'react';
import {  graphql } from 'gatsby';
import Link from '../components/ExtendedLink';
import styled from 'styled-components';
import _map from 'lodash/map';
import { FormattedMessage} from 'react-intl';
import {  PageWrapper, PageInner,Spacer,Flex, ArrowLeftLink, ArrowRightLink, ArrowLeftIcon, ArrowRightIcon,Text } from '../components/Elements';
import { colors, mq } from '../consts/style';
import { Icon } from '@iconify/react';
import Seo from '../components/Seo';
import Boop from '../components/boop';
import { GatsbyImage } from 'gatsby-plugin-image';
import {StructuredText} from "react-datocms";
import Video from '../components/video';
import PlayerZik from '../components/players/PlayerZik';

//import  AgendaItemCondensed  from '../components/agenda/agendaItemCondensed';
import  AgendaItemLight  from '../components/agenda/agendaItemLight';
// import Swiper core and required modules
import { Navigation,  FreeMode, Keyboard } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';


const PageInnerProject = styled.div`

  width: 100%;
  position: relative;
  display: grid;

  grid-template-columns: 1fr 2fr;
  grid-template-areas: "encart" "main";
  grid-template-columns: minmax(350px, 1fr) minmax(0, 2fr);
  grid-gap: 5rem;

  ${mq.tabletSmall` 
  grid-template-columns: 1fr;
  grid-template-columns:minmax(0, 1fr);
  grid-gap:1rem;
  grid-template-areas: "main" "encart";
  `}
`

const ColEncart = styled.div`

  background-color: ${colors.orange};
  padding:3.5rem;
  ${mq.tabletSmall` 
    padding:2rem;
    grid-area:encart;
  `}

`

const DiaporamaFullWidth = styled.div`
z-index:0;
display: block;
position:relative;
width:calc(100% + 8rem);
margin-left:-4rem;
margin-right:-4rem;
margin-top:-4rem;
margin-bottom:2rem; 
${mq.tabletSmall` 
    width:calc(100% + 4rem);
  `}


 .swiper { 
  width: 100%;
  max-height: 500px;
  min-height: 0;
  min-width: 0;
 }
  .swiper-slide .gatsby-image-wrapper  {
     transition:all .4s ease;
     height:400px;
  }
  .swiper-slide-active .gatsby-image-wrapper {
    transition:all .4s ease;
  }

  .swiper-slide {
      transition:opacity .4s ease;
      width: auto;
      flex-shrink: 0;
      display: block;
      height: 100%;
      max-height: 100%;
  }
   .swiper-slide-active {
    opacity:1;
    transition:opacity .4s ease;
   }

  .swiper-button-next{  
    display:none;
  }

   .swiper-button-prev {
    display:none;
   }

`;

const ArrowLeftLinkNav = styled(ArrowLeftLink)`
  position:absolute;
  bottom:50%;
  left:1rem;
  z-index:1;
  cursor:pointer;
  transform: translate3d(0, 50%, 0);
  &.swiper-button-disabled{
    opacity:0;
  }
`;

const ArrowRightLinkNav = styled(ArrowRightLink)`
  position:absolute;
  bottom:50%;
  right:1rem;
  transform: translate3d(0, 50%, 0);
  z-index:1;
  cursor:pointer;
  &.swiper-button-disabled{
    opacity:0;
  }
`

const HeaderSpectacle  = styled(Flex)`
  justify-content:space-between;
  gap:5rem;
  align-items: flex-start;
  margin-bottom:5rem;
  ${mq.tabletSmall` 
    gap:1rem;
    margin-bottom:1rem;
  `}
`
const TitleSpectacleWrapper  = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`

const TitleSpectacle  = styled.h1`
  color:${colors.blue};
  font-size:3.2rem;
  font-family: 'Syne';
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
  margin-bottom: 0;
`

const CompagnieName  = styled(Text)`
  font-family:'Syne';
  font-weight: 700;

`


const TeaserSpectacle  = styled.div`
  font-style: italic;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color:${colors.blue};
  max-width:400px;
  text-align:right;
  ${mq.tabletSmall` 
   text-align:left;
   max-width:100%;
  `}
  
`

const AgendaListWrapper =   styled.div`
  display:flex;
  flex-direction:column;
  width:100%; 
  /*gap:5rem;*/
  margin-top:1rem;
`

/*
const GridItem = styled.div`
background-color:${colors.blueLight};
border-top:8px solid  rgba(9, 255, 0, 0.37);
width:100%;
padding:2rem;
`;
*/

const Spectacle = ({ data, pageContext, location }) => {

  const {  nom, compagnie, teaser, content, diaporama, encart,seoMetaTags} = data.spectacle;
/*
  const prevRef = useRef(null);
  const nextRef = useRef(null);*/
 // console.log(data.dates)
  return (
    <Fragment>
      <Seo meta={seoMetaTags} />
      <PageWrapper>



        <DiaporamaFullWidth>
          <Swiper
            modules={[Navigation, FreeMode, Keyboard]}
            navigation={{
              prevEl:'.prev',
              nextEl:'.next',
            }}
            spaceBetween={5}
            slidesPerView={1}
            keyboard={{enabled:true,}}
            grabCursor
            
            
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 2,
                spaceBetween : 5,
              },
              // when window width is >= 1024px
              1024: { 
                slidesPerView: 2.5,
                spaceBetween : 5,
              },
            }}
           
              >
              {
                  _map(diaporama, ( image, key) => (      
                    <SwiperSlide key={key}>
                       <GatsbyImage image={image.gatsbyImageData} alt=""/>
                    </SwiperSlide>
                  )
                  )
                }

                      <ArrowLeftLinkNav className='prev' >
                        <Boop x={-3}  timing={200} >
                          <FormattedMessage id="previous">{txt =><ArrowLeftIcon title={txt}/>}</FormattedMessage>
                        </Boop>
                      </ArrowLeftLinkNav>
                      <ArrowRightLinkNav className='next' >
                        <Boop x={3}  timing={200} >
                          <FormattedMessage id="next">{txt =><ArrowRightIcon title={txt}/>}</FormattedMessage>
                        </Boop>
                      </ArrowRightLinkNav>
              </Swiper>
          </DiaporamaFullWidth>
            

   
          
        <PageInner>
        
          <HeaderSpectacle>
            <TitleSpectacleWrapper>
              <Link to='./..' title="retour">
                <Boop x={-3}  timing={200} >
                  <Icon icon="ion:caret-back-outline" style={{color: colors.orange, fontSize: '3.2rem'}}/>
                </Boop> 
              </Link>

              <div>
                <TitleSpectacle>{nom}</TitleSpectacle>
                <CompagnieName>{compagnie}</CompagnieName>
              </div>
            </TitleSpectacleWrapper>
           
            <TeaserSpectacle dangerouslySetInnerHTML={{ __html:teaser }} />
          </HeaderSpectacle>
          <PageInnerProject>
          <ColEncart>
          <Text dangerouslySetInnerHTML={{ __html:encart }} style={{"textAlign":"left"}}/>
           
            </ColEncart>
        <div>
          {(content.blocks.length > 0) && <StructuredText
              data={content}
              renderBlock={({record}) => {
                if (record.__typename === "DatoCmsPlayerZik") {
                  return <PlayerZik soundcloud urlPlayer={record.urlPlayer}/>
                
              }
                if (record.__typename === "DatoCmsImage") {
                  return <GatsbyImage image={record.image.gatsbyImageData} alt=""/>
                }
                if (record.__typename === "DatoCmsVideo") {
                  return  <Video
                  videoSrcURL={record.video.url}
                  //videoSrcURL={record.video.url.replace('watch?v=', 'embed/')}
                  videoTitle={record.video.title}
                  />
              }
              

                return (
                  <>
                    <p>bloc inconnu</p>
                    <pre>{JSON.stringify(record, null, 2)}</pre>
                  </>
                )

              }}
            />
          }

 
           {(data.dates.nodes.length > 0) &&  
                <>
                  <Text><br/><b>Tournées</b></Text>   
                  
                  <AgendaListWrapper>
                  
                 { data.dates.nodes.map((item, i) => {
return (  <AgendaItemLight key={i} item={item} /> )
                })
                }
                   {/* { _map(data.dates.nodes, (item, i) => (
                     // (new Date(item.dateDebutEvenement) >= new Date()  || new Date(item.dateFinEvenement) >= new Date()) && 
                  
                     <AgendaItemLight key={i} item={item} /> 
                       
                   ))} */}
                  </AgendaListWrapper>
                </>
              }
              
        </div>
        
        </PageInnerProject>
        </PageInner>  
        <Spacer/>
      </PageWrapper>
    </Fragment>
  );
};

export const projectQuery = graphql` 
  query($slug: String!) {
    dates: allDatoCmsAgenda(filter: {spectacle: {slug: {eq: $slug}}, isFuture:{eq: true}}, sort: {dateDebutEvenement: ASC}){
      nodes {
        id
        
        details
        dateDebutEvenement
        dateFinEvenement
       
      }
    }
    spectacle: datoCmsSpectacle(slug: { eq: $slug }) {
      nom
      compagnie
      encart
      diaporama {
        gatsbyImageData (
          height:550,
          width:825,
        )
      }
      teaser 
      content {
        value
        blocks {
          __typename
          ...on DatoCmsImage {
            id: originalId
            image {
              gatsbyImageData (
                width:770
              )
            } 
          }         
          ...on DatoCmsVideo {
            id: originalId
            video {
              url
            }
          }         
        }
      }
      teaser
      image {
        gatsbyImageData(
          placeholder: BLURRED,
          forceBlurhash: false,   
          width:825,
        )
      } 
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }        
    }
  }
`;


export default Spectacle;
