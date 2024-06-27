import React, { Fragment } from 'react';
import { graphql } from 'gatsby';


import { GatsbyImage } from 'gatsby-plugin-image';


import Seo from '../components/Seo';


import {
  PageWrapper,
  PageInner,
  PageTitle,
  Text,
  Grid2Col,
  Spacer,
 
} from '../components/Elements';





export const aProposPageQuery = graphql`
 query  aProposPageQuery {
   
    page: datoCmsPageAbout {
      titre
      contenu
      detail
      photoBiographie {
        gatsbyImageData(      
          placeholder: BLURRED,
          width:1204,
          forceBlurhash: false,
           imgixParams: {
                
                auto: "compress",
               
                w: "1204",
                
                fit:"crop" 
              }
        )
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

const AProposPage = ({data}) => {
  
 
  const {  titre, contenu, photoBiographie } = data.page;

  return (
    <Fragment>

      <PageWrapper>
      <GatsbyImage image={photoBiographie.gatsbyImageData}  alt="Label Folie"/>
        <PageInner>
          <PageTitle dangerouslySetInnerHTML={{ __html: titre }} />
          
               
                <Text dangerouslySetInnerHTML={{ __html: contenu }} /> 
           
      </PageInner>
      </PageWrapper>
    </Fragment>
  );
}
export default AProposPage

export const Head = (props) => (
  <Seo meta={props.data.page.seoMetaTags} />
)