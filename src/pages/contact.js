import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { colors } from "../consts/style"
import Seo from "../components/Seo"
import ContactForm from "../components/ContactForm/ContactForm"
import {
  PageWrapper,
  PageInner,
  PageTitle,
  
  Text,

  Grid2Col,
  Spacer,
} from "../components/Elements"
import {Reveal, Fade} from "react-awesome-reveal"
import { fadeInUp, fadeInDown } from "../style/animations"

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
          <Reveal keyframes={fadeInUp}  triggerOnce>
            <PageTitle>{titre}</PageTitle>
          </Reveal>  
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
             <ContactForm/>
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