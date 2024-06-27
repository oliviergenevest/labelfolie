import React, { Fragment} from 'react';
import { graphql } from 'gatsby';
import _map from 'lodash/map';
import Seo from '../components/Seo';
import  BtnPrimary  from '../components/buttons/ButtonRounded';
import  AgendaItem  from '../components/agenda/agendaItem';
import styled from 'styled-components';
import {Reveal} from "react-awesome-reveal"
import { fadeInUp, fadeInDown } from "../style/animations"

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
        ville
        dateDebutEvenement
        dateFinEvenement
        spectacle {
          nom
          slug 
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
        <Reveal keyframes={fadeInUp}  triggerOnce>
          <PageTitle $centered $maxWidth dangerouslySetInnerHTML={{ __html: titre }}/>
          </Reveal>
          <Text dangerouslySetInnerHTML={{ __html: contenu }}/>
          <Reveal keyframes={fadeInDown}  triggerOnce>
          <AgendaListWrapper>
            { _map(nodes, (item, i) => (

                 <AgendaItem key={i} item={item} path='../artistes/'/>
            
            ))}
           
          </AgendaListWrapper>
          <Spacer/>
          <StyledBtnPrimary to="/agenda-archives">Dates archivées</StyledBtnPrimary>
          </Reveal>
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