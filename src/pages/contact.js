import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { colors } from "../consts/style"
import Seo from "../components/Seo"

import {
  PageWrapper,
  PageInner,
  PageTitle,
  
  Text,

  Grid2Col,
  Spacer,
} from "../components/Elements"

export const contactQuery = graphql`
  query contactQuery {
    

    page: datoCmsPageContact {
      titre
      contenu
      contenuColonne
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`
const ContactPage =  ({ data }) => {

  const {
    titre,
    contenu,
    contenuColonne,
    
  } = data.page

  return (
    <Fragment>
      
      <PageWrapper>
        <PageInner>
          <PageTitle>{titre}</PageTitle>
          
        </PageInner>
        <Spacer id="contact" />
      
          <PageInner>
            <Grid2Col>
              <div> 
                <Text
                  color={colors.dark}
                  dangerouslySetInnerHTML={{ __html: contenu }}
                />
                
              </div>
              <div>
              <Text
                  color={colors.dark}
                  dangerouslySetInnerHTML={{ __html: contenuColonne }}
                />
</div>
              {/* 
              <ContactForm />
              */}
            </Grid2Col>
          </PageInner>
        
      </PageWrapper>
    </Fragment>
  )
}

export default  ContactPage

export const Head = (props) => (
  <Seo meta={props.data.page.seoMetaTags} />
)