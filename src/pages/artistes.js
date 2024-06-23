import React, { Fragment } from "react"
import { graphql } from "gatsby"
import {Reveal, Fade} from "react-awesome-reveal"
import { fadeInUp } from "../style/animations"

import Seo from "../components/Seo"

import VignetteProjetPerso from "../components/projet/vignetteProjetPerso"

import _map from 'lodash/map';
import styled from 'styled-components';

import {
  PageWrapper,
  PageInner,
  PageTitle,
 
  Flex,
  
  Spacer,
} from "../components/Elements"


const FlexListeSpectacle = styled(Flex)`
  column-gap:4rem;
  align-items:flex-start;
  margin-bottom:5rem;
  padding-top:3rem;
  padding-bottom:5rem;
  flex-wrap:wrap;
  justify-content:flex-start;
  
`;




export const projetsPageQuery = graphql`
  query projetsQuery {
    

    page: datoCmsPageSpectacle {
      titre
      spectacles {
          slug
          nom
          teaser
          image {  
            gatsbyImageData(
              placeholder: BLURRED,
              forceBlurhash: false,   
              width:567,
              height:800,
            )
          }
      }
     
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`
const ArtistesPage =  ({ data }) => {

  const {
    titre,
    spectacles,
    
  } = data.page

  return (
    <Fragment>
 
      <PageWrapper>
        <PageInner>
          <PageTitle>{titre}</PageTitle>
      
          <Fade>
          <FlexListeSpectacle>
         
            { _map(spectacles, (item, i) => (
                  <VignetteProjetPerso key={i} item={item} format="full"/>
            ))}
           </FlexListeSpectacle>
           </Fade>
           </PageInner>
        <Spacer/>
      </PageWrapper>
    </Fragment>
  )
}

export default  ArtistesPage

export const Head = (props) => (
  <Seo meta={props.data.page.seoMetaTags} />
)