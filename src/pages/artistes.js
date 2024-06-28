import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Seo from "../components/Seo"

import VignetteProjetPerso from "../components/projet/vignetteProjetPerso"
import {Reveal} from "react-awesome-reveal"
import { fadeInUp, fadeInDown } from "../style/animations"
import _map from 'lodash/map'
import styled from 'styled-components'

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
             
              imgixParams: {
                auto: "compress",
                h:"800",
                w: "567",
                crop: "focalpoint",
                fit:"crop"
              }
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
          <Reveal keyframes={fadeInUp}  triggerOnce>
            <PageTitle>{titre}</PageTitle>
          </Reveal>
          <Reveal keyframes={fadeInDown}  triggerOnce>
          <FlexListeSpectacle>
         
            { _map(spectacles, (item, i) => (
                  <VignetteProjetPerso key={i} item={item} format="full"/>
            ))}
           </FlexListeSpectacle>
           </Reveal>
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