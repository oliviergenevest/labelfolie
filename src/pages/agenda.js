import React, { Fragment} from 'react';
import { graphql } from 'gatsby';
import _map from 'lodash/map';
import Seo from '../components/Seo';
import  BtnPrimary  from '../components/buttons/ButtonRounded';
import  AgendaItem  from '../components/agenda/agendaItem';
import styled from 'styled-components';


import {
  PageWrapper,
  PageInner,
  PageTitle,
  
  Text,

  Spacer,
} from '../components/Elements';


const AgendaListWrapper =   styled.div`
display:flex;
flex-direction:column;
width:100%; 
/*gap:5rem;*/
margin-top:3rem;
`


const StyledBtnPrimary = styled(BtnPrimary)`
  margin-top:1.2rem;
`


export const agendaQuery = graphql`
  query  agendaPageQuery {
    page: datoCmsPageAgenda {
      titre
      contenu
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }

    agenda: allDatoCmsAgenda( filter: {isFuture: {eq: true}} , sort: {dateDebutEvenement: ASC} ){
      nodes {
        id  
        details
        
        dateDebutEvenement
        dateFinEvenement
        spectacle {
          background { hex }
          compagnie
          nom
          slug
          image {
            gatsbyImageData(
              placeholder: BLURRED,
              forceBlurhash: false,   
              width:250,
              height:173,
            )
          } 
        } 
      }
    }
  }
`;


const AgendaPage = ({ data, location }) => {

  const { titre, contenu } = data.page;
  const { nodes } = data.agenda; // toutes les dates futures
  


  return (
    <Fragment>
     
      <PageWrapper>   
        <PageInner>
          <PageTitle centered maxWidth dangerouslySetInnerHTML={{ __html: titre }}/>
          <Text dangerouslySetInnerHTML={{ __html: contenu }}/>
          <AgendaListWrapper>
            { _map(nodes, (item, i) => (

                 <AgendaItem key={i} item={item} path='../spectacles/'/>
            
            ))}
           
          </AgendaListWrapper>
          <Spacer/>
          <StyledBtnPrimary to="/agenda-archives">Dates archivées</StyledBtnPrimary>
        </PageInner>
        <Spacer/>
      </PageWrapper>
    </Fragment>
  );
}

export default AgendaPage;

export const Head = (props) => (
  <Seo meta={props.data.page.seoMetaTags} />
)