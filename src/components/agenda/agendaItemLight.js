import React from 'react';
import { fr } from 'date-fns/locale';
import { format } from 'date-fns';
import styled from 'styled-components';
import { mq, colors, font } from '../../consts/style'; 

import {
  
    Text,
  } from "../Elements"

const ItemWrapper = styled.div`
 background-color:#ffb44b3d ;
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
    border: 1px solid #ffedd4;
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
const AgendaItemDate =   styled.div`
  display:flex;
  flex-direction:column;
  color:${colors.orange}; 
  span { color:${colors.blue}; }
  width:200px;
  padding:2rem;
  border-radius: 4px 0 0 0 ; 
  background-color:white ;

  font-weight:700;
  ${mq.tabletSmall`
padding:1rem;
  width:100%;
 
  `}
   
`

const AgendaItemContent =   styled.div`
  display:flex;

  padding-right:1rem;
  padding-top:2rem;
  ${mq.tabletSmall`
  margin-left:0;
  padding: 1rem;
   

  `}
  ${mq.tabletSmall`
  ${Text} {  text-align:left!important;}
  `}
  flex-direction:column;
  h2 {
    ${font.h2}
    text-transform:none;
  }
  width: 100%;
`


const AgendaItemLight = ({item, path = ''}) => {
  //console.log(item)
    return (
       <div>
           <ItemWrapper >
            <MyFlex>
              <AgendaItemDate>
                <span>{item.dateFinEvenement ? format(new Date(item.dateDebutEvenement), 'eee dd LLL', {locale: fr})+" au "+format(new Date(item.dateFinEvenement), 'eee dd LLL', {locale: fr}) : format(new Date(item.dateDebutEvenement), 'eee dd LLL', {locale: fr})}</span>
                {item.dateFinEvenement ? format(new Date(item.dateFinEvenement), 'yyyy', {locale: fr}) : format(new Date(item.dateDebutEvenement), 'yyyy', {locale: fr})}
              </AgendaItemDate>
              </MyFlex>

            <AgendaItemContent>
           
                <Text dangerouslySetInnerHTML={{ __html: item.details }}/>
            </AgendaItemContent>
            
        </ItemWrapper>
        </div>
    )
}
export default AgendaItemLight