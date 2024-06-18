import React, { Fragment } from 'react';
import { graphql } from 'gatsby';


import Seo from '../components/Seo';
import {
  PageWrapper,
  PageInner,
  PageTitle,


} from '../components/Elements';

export const dataPrivacyQuery = graphql`
query  dataPrivacyQuery{
    
  
    page: datoCmsPageDataProtection{
      titre
      contenu
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;




const DataPrivacyPage = ({data}) => {
  
  const { titre, contenu } = data.page;

  return (
    <Fragment>
     
      <PageWrapper>
       
        <PageInner>
          <PageTitle>{titre}</PageTitle>
          <div dangerouslySetInnerHTML={{ __html: contenu }} />
        </PageInner>
      </PageWrapper>
    </Fragment>
  );
}

export default  DataPrivacyPage

export const Head = (props) => (
  <Seo meta={props.data.page.seoMetaTags} />
)