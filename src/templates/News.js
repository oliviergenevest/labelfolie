import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { Icon } from '@iconify/react';
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"


import FormatDate  from '../components/formatDate'

import {
 
  PageWrapper,
  PageInner,
  Title,
  PageTitle,
  Spacer,
  
  Text
} from "../components/Elements"
import { colors, mq } from "../consts/style"
import Seo from "../components/Seo"





const PageInnerNews = styled.div`
  width: 100%;
  position: relative;
  display: grid;

  grid-template-columns: 1fr 2fr;
  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  grid-gap: 5rem;

  ${mq.tablet` 
  grid-template-columns: 1fr;
  grid-template-columns:minmax(0, 1fr);
  grid-gap:1rem;
  `}
`



const NewsItemDate =   styled.div`
  display:flex;
  width:100%;
  align-items:flex-start;
  justify-content:flex-start;
  gap:.8rem;
  color:${colors.dark};
  font-size:1.4rem;
  svg path:first-of-type {
   fill: ${colors.orange};
  }
`


const News = ({ data}) => {
  const {
    titre,
    image,
 
    contenu,
    meta,
    seoMetaTags
  } = data.news
 

  return (
    <Fragment>
      <Seo meta={seoMetaTags} />

      <PageWrapper>
        <PageInner>
          <PageTitle>News</PageTitle>
          <Title maxWidth centered>{titre}</Title>
          <Spacer /> 
          <div style={{textAlign:"center"}}>
            <GatsbyImage image={image.gatsbyImageData} alt={titre} />
          </div>
        </PageInner>
        <PageInner>
        <Spacer /> 
        <PageInnerNews>
          
                  <NewsItemDate>
                    <Icon title="Date" icon="ant-design:calendar-twotone" style={{color: colors.dark, fontSize: '20px'}} />
                    <FormatDate date={meta.createdAt}/>
                  </NewsItemDate>
               
          
          <Text dangerouslySetInnerHTML={{ __html:contenu}}/>
        </PageInnerNews>
        </PageInner>
        <Spacer />
      </PageWrapper>
    </Fragment>
  )
}

export const newsQuery = graphql`
  query($slug: String!) {
    news: datoCmsActualite(slug: { eq: $slug }) {
      titre
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      teaser
      contenu
      meta {
        createdAt
      }
      id
      slug
      image {
        gatsbyImageData(         
          placeholder: BLURRED,
          forceBlurhash: false,
          width:1200     
        )
      }
    }
  }
`
/* a a jouter a la requete ci dessus
modular {
  ... on DatoCmsBouton {
    model {
      apiKey
    }
    id
    lienDuBouton
    lienExterne
    boutonGuidap
    texteDuBouton
  }
  ... on DatoCmsTexte {
    model {
      apiKey
    }
    id
    texteEncart
  }
}*/

export default News