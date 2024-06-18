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
          width:400,
          forceBlurhash: false,
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
        <PageInner>
          <PageTitle dangerouslySetInnerHTML={{ __html: titre }} />
          
          <Grid2Col>
            <div>           <Spacer/> 
                <Text dangerouslySetInnerHTML={{ __html: contenu }} /> 
            </div>
            <div style={{'textAlign':'center'}}><GatsbyImage image={photoBiographie.gatsbyImageData}  alt="Turbine Production"/> </div>
          </Grid2Col>
      </PageInner>
      </PageWrapper>
    </Fragment>
  );
}
export default AProposPage

export const Head = (props) => (
  <Seo meta={props.data.page.seoMetaTags} />
)