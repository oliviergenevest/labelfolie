import React from 'react';
import { fr } from 'date-fns/locale';
import { format } from 'date-fns';
import styled from 'styled-components';
import { mq, colors, font } from '../../consts/style'; 
import Link from '../ExtendedLink';

import {
  
    Text,
  } from "../Elements"

const ItemWrapper = styled.div`
text-transform:uppercase;
  display:flex;
  position: relative;
  flex-direction:row;
  width:100%;
  gap:2rem;
 
`
const AgendaItemProjet =   styled(Text)`
  display:inline;
  float:left;
  padding-right:1rem;
  
  color:${colors.blue}; 
  font-weight:700;  
  & a:hover {
    text-decoration:none!important;
  }
    & a {
   
    font-size:1.6rem;
     color:${props => props.theme === "light" ? colors.dark : colors.blue };
  }
     
  
`

const AgendaItemMois =   styled.span`
  text-transform:uppercase;
  font-weight:700;
 color:${props => props.theme === "light" ? '#fff' : 'inherit' };
  
`

const AgendaItemVille =   styled.span`
  color:${colors.yellow};
  font-weight:800;
   text-transform:uppercase;
`

const AgendaItemJour =   styled.div`

  font-weight:800;
  font-size:4.2rem;
  font-family: 'Raleway';
  color:${props => props.theme === "dark" ? colors.blue : '#fff' };
` 

const AgendaItemContent =   styled.div`
  display:block;
  gap:1rem;
  width: 100%;
  & p { text-align:left;font-size:1.6rem;}
  & a:hover {
  text-decoration:underline;
  }
`


const AgendaItem = ({item, path = '', theme = 'dark'}) => {
 // console.log(path)
    return (
       <div>
           <ItemWrapper theme={theme}>
           
            <AgendaItemJour  theme={theme}>
              { format(new Date(item.dateDebutEvenement), 'dd', {locale: fr})}
            </AgendaItemJour>
            <div style={{'lineHeight':'2rem','flexGrow':'1'}}> 
              <AgendaItemMois theme={theme}>
                {format(new Date(item.dateDebutEvenement), 'LLLL yyyy', {locale: fr})}
              </AgendaItemMois> |  
         
              <AgendaItemVille> {item.ville}</AgendaItemVille>
              <AgendaItemContent >
                <AgendaItemProjet as="span"  theme={theme} style={{'lineHeight':'2rem'}}>
                  <Link to ={path + item.spectacle.slug}>{item.spectacle.nom}</Link> 
                </AgendaItemProjet>
                <Text dangerouslySetInnerHTML={{ __html: item.details }}  style={{'lineHeight':'2rem',"wordBreak":"auto-phrase","fontSize":"1.6rem"}}/>
              </AgendaItemContent>
             </div>
        </ItemWrapper>
        </div>
    )
}
export default AgendaItem;