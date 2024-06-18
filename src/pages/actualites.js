import React, { Fragment} from 'react';
import { graphql } from 'gatsby';
import _map from 'lodash/map';

import { GatsbyImage } from 'gatsby-plugin-image';
import Seo from '../components/Seo';
import  BtnPrimary  from '../components/buttons/ButtonRounded';
import styled from 'styled-components';
import { mq, colors, font } from '../consts/style'; 
import { Icon } from '@iconify/react';
import { FormattedMessage} from 'react-intl';
import FormatDate  from '../components/formatDate'

import {
  PageWrapper,
  PageInner,
  PageTitle,
 
  Text,
 
  Spacer,
  Grid2Col,
} from '../components/Elements';


const NewsListWrapper =   styled.div`
  display:flex;
  flex-direction:column;
  width:100%; 
  /*gap:5rem;*/
  margin-top:3rem;
`

const NewsItem =   styled(Grid2Col)`
  position:relative;
  margin-bottom:10rem;
  gap:4rem;
  &:after{
    position:absolute;
    content:"";
    bottom:-5rem;
    width:100%;
    height:1px;
    background-color:${colors.orange};
}
`

const NewsItemImage =   styled(GatsbyImage)`

  width:100%;
  ${mq.mobile`
    margin-bottom:3rem;
  `}


  
`

const NewsItemDate =   styled.div`
  display:flex;
  width:100%;
  align-items:center;
  justify-content:flex-start;
  gap:.8rem;
  color:${colors.dark};
  font-size:1.4rem;
  svg path:first-of-type {
   fill: ${colors.orange};
  }
 
`

const NewsItemContent =   styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  h2 {
    ${font.h2}
  }
 
`

const StyledBtnPrimary = styled(BtnPrimary)`
  margin-top:1.2rem;
`


export const groupesQuery = graphql`
  query  groupesPageQuery{
    page: datoCmsPageNews {
      titre
      contenu
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }

    news: allDatoCmsActualite( sort:  {meta: {updatedAt: DESC}}){
      nodes {
        id
        meta {
          createdAt
        }
        titre
        contenu
        teaser
        slug
        image {  
          gatsbyImageData( 
            placeholder: BLURRED,
            forceBlurhash: false,   
          
          
          )
        }
      }
    }
  }
`;


const NewsPage = ({ data }) => {

  const { titre, contenu } = data.page;
  const { nodes } = data.news; // toutes les news


  return (
    <Fragment>
      
      <PageWrapper>   
        <PageInner>
          <PageTitle centered maxWidth dangerouslySetInnerHTML={{ __html: titre }}/>
          <Text dangerouslySetInnerHTML={{ __html: contenu }}/>
          <NewsListWrapper>
            { _map(nodes, (item, i) => (
              <NewsItem key={item.id}>
                <NewsItemImage image={item.image.gatsbyImageData} alt={titre}/>
                <NewsItemContent>
                <NewsItemDate>
                    <Icon title="Date" icon="ant-design:calendar-twotone" style={{color: colors.dark, fontSize: '20px'}} />
                    <FormatDate date={item.meta.createdAt}/>
                  </NewsItemDate>
                  <h2>{item.titre}</h2>
                  
                  <Text dangerouslySetInnerHTML={{ __html: item.teaser }}/>
                  
                  <StyledBtnPrimary to={`/actualites/${item.slug}/`}><FormattedMessage id="lire la suite"/></StyledBtnPrimary>
                 
                </NewsItemContent>
              </NewsItem>
            ))}
           
          </NewsListWrapper>
          <Spacer/>
        </PageInner>
        <Spacer/>
      </PageWrapper>
    </Fragment>
  );
}

export default NewsPage;

export const Head = (props) => (
  <Seo meta={props.data.page.seoMetaTags} />
)