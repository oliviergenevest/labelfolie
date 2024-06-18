import React from 'react';
import { fr } from 'date-fns/locale';
import { format } from 'date-fns';
import styled from 'styled-components';
import { mq, colors, font } from '../../consts/style'; 
import Link from '../ExtendedLink';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
  
    Text,
  } from "../Elements"

const ItemWrapper = styled.div`

  background:${props => props.background};
  padding:0 1rem;
  display:flex;
  position: relative;
  flex-direction:row;
  width:100%;
  margin-bottom:2rem;
  border-radius:4px;
  justify-content: space-between;
  gap:2rem;
  ${mq.tabletSmall`
    flex-direction:column;
    align-items:center;
    gap:0;
    padding:0;
  `}
`
const AgendaItemProjet =   styled(Text)`
  display:block;
  
  
  color:${colors.blue};
  font-weight:600;  
  ${mq.tabletSmall`
    width:100%;
    text-align:center;
    margin-top:1rem;
  `}
`


const MyFlex =   styled.div`
  display:flex;
  flex: 0 0 auto;
  flex-wrap:nowrap ;
  padding-right:1rem;
  
  border-radius: 8px 0 0 8px ;
  ${mq.tabletSmall`
  width:100%;
 
  border-radius:0;
  padding-right:0;
  `}


`
const AgendaItemImage =   styled(GatsbyImage)`
 
  height:173px;
  width:auto;
  //width:84px;
  flex-shrink: 0;
  ${mq.tabletSmall`
  width:50%;
  height:auto;
  `}
`

const AgendaItemDate =   styled.div`
  display:flex;
  flex-direction:column;
  color:${colors.orange}; 
  span { color:${colors.blue}; }
  width:200px;
  padding:2rem;
  border-radius: 4px 0 0 0 ;
  background-color:white ;
  font-size:2.4rem;
  font-weight:700;
  ${mq.tabletSmall`
  font-size:2rem;
  width:50%;
  background-color:#f9f9f9 ;
  `}
   
`

const AgendaItemContent =   styled.div`
  display:flex;

  padding-right:1rem;
  padding-top:1rem;
  ${mq.tabletSmall`
  margin-left:0;
  padding: 0 1rem;
    ${Text} {  text-align:center!important;}

  `}
  flex-direction:column;
  h2 {
    ${font.h2}
    text-transform:none;
  }
  width: 100%;
`


const AgendaItem = ({item, path = ''}) => {
 // console.log(path)
    return (
       <div>
           <ItemWrapper background={item.spectacle.background.hex}>
           <MyFlex><AgendaItemDate>
            <span>{item.dateFinEvenement ? format(new Date(item.dateDebutEvenement), 'eee dd LLL', {locale: fr})+" au "+format(new Date(item.dateFinEvenement), 'eee dd LLL', {locale: fr}) : format(new Date(item.dateDebutEvenement), 'eee dd LLL', {locale: fr})}</span>
           {item.dateFinEvenement ? format(new Date(item.dateFinEvenement), 'yyyy', {locale: fr}) : format(new Date(item.dateDebutEvenement), 'yyyy', {locale: fr})}
           </AgendaItemDate>
         
          <AgendaItemImage image={item.spectacle.image.gatsbyImageData} alt={item.spectacle.nom}/>
          </MyFlex>

            <AgendaItemContent>
            <AgendaItemProjet><Link to ={path + item.spectacle.slug}>{item.spectacle.nom}</Link> | {item.spectacle.compagnie}</AgendaItemProjet>

                <Text dangerouslySetInnerHTML={{ __html: item.details }}/>
            </AgendaItemContent>
            
        </ItemWrapper>
        </div>
    )
}
export default AgendaItem;