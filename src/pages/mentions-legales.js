import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import {
  PageWrapper,
  PageInner,
  PageTitle,
Text
} from '../components/Elements';

export const mentionsLegalesQuery = graphql`
  {
    
     page: datoCmsPageMentionsLegale {
      titre
      contenu
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;



const MentionsLegalesPage = ({data}) => {

  //const data = useStaticQuery(mentionsLegalesQuery);
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

export default MentionsLegalesPage


export const Head = (props) => (

  <Seo meta={props.data.page.seoMetaTags} />

)