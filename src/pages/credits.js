import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import {
  PageWrapper,
  PageInner,
  PageTitle,
Text
} from '../components/Elements';

export const creditsQuery = graphql`
query  dataCreditsQuery{ 
     page: datoCmsPageCredit {
      titre
      contenu
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

  const CreditsPage = ({data}) => {
 
  const { titre, contenu } = data.page;

  return (
    <Fragment>
      <PageWrapper>
       
        <PageInner>
          <PageTitle>{titre}</PageTitle>
          <Text dangerouslySetInnerHTML={{ __html: contenu }} />
         
        </PageInner>
      </PageWrapper>
    </Fragment>
  );
}

export default CreditsPage

export const Head = (props) => (
  <Seo meta={props.data.page.seoMetaTags} />
)