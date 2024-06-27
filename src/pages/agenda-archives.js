import React, { Fragment} from 'react';
import { graphql } from 'gatsby';
import _map from 'lodash/map';
import Seo from '../components/Seo';
import  BtnPrimary  from '../components/buttons/ButtonRounded';
import  AgendaItem  from '../components/agenda/agendaItem';
import styled from 'styled-components';
/*import { mq, colors, font } from '../consts/style'; 
import { Icon } from '@iconify/react';
import { FormattedMessage} from 'react-intl';
import FormatDate  from '../components/formatDate'*/

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


export const agendaArchivesQuery = graphql`
  query  agendaArchivesPageQuery {
    page: datoCmsPageAgendaArchive { 
      titre
      contenu
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }

    agenda: allDatoCmsAgenda(filter: {isFuture: {eq: false}} , sort: {dateDebutEvenement: DESC}){
      nodes {
        id  
        details
        dateDebutEvenement
        dateFinEvenement
        spectacle {
          background { hex }
          nom 
          slug
         
        }
      }
    }
  }
`;


const AgendaArchivesPage = ({ data }) => {

  const { titre, contenu } = data.page;
  const { nodes } = data.agenda; // toutes les dates passées
  


  return (
    <Fragment>
   
      <PageWrapper>   
        <PageInner>
          <PageTitle  dangerouslySetInnerHTML={{ __html: titre }}/>
          <Text dangerouslySetInnerHTML={{ __html: contenu }}/> 
          <AgendaListWrapper>

            { _map(nodes, (item, i) => (  
                 <AgendaItem key={i} item={item} path='../artistes/'/>
            ))
          }
           
          </AgendaListWrapper>
          <Spacer/>
          <StyledBtnPrimary to="/agenda">Retour à l'agenda</StyledBtnPrimary>
        </PageInner>
        <Spacer/>
      </PageWrapper>
    </Fragment>
  );
}

export default AgendaArchivesPage;

export const Head = (props) => (
  <Seo meta={props.data.page.seoMetaTags} />
)