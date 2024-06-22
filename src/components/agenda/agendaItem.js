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

text-transform:uppercase;
  display:flex;
  position: relative;
  flex-direction:row;
  width:100%;
  gap:2rem;
`
const AgendaItemProjet =   styled(Text)`
  display:block;
  flex-shrink:0;
  color:${colors.blue}; 
  font-weight:600;  
   & a:hover {
  text-decoration:none!important;
  }
  
`

const AgendaItemMois =   styled.span`
  text-transform:uppercase;
  color:${colors.dark}; 
  
`

const AgendaItemVille =   styled.span`
  color:${colors.yellow};
  font-weight:800;
   text-transform:uppercase;
`

const AgendaItemJour =   styled.div`
  color:#999;
  font-weight:800;
  font-size:4.2rem;
   font-family: 'Raleway';
`

const AgendaItemContent =   styled.div`
  display:flex;
  gap:1rem;
  width: 100%;
  flex-wrap:wrap;
  & a:hover {
  text-decoration:underline;
  }
`


const AgendaItem = ({item, path = ''}) => {
 // console.log(path)
    return (
       <div>
           <ItemWrapper >
           
            <AgendaItemJour>
              { format(new Date(item.dateDebutEvenement), 'dd', {locale: fr})}
            </AgendaItemJour>
            <div style={{'lineHeight':'1.5rem'}}> 
              <AgendaItemMois>
                {format(new Date(item.dateDebutEvenement), 'LLLL yyyy', {locale: fr})}
              </AgendaItemMois> |  
         
              <AgendaItemVille> {item.ville}</AgendaItemVille>
              <AgendaItemContent>
                <AgendaItemProjet>
                  <Link to ={path + item.spectacle.slug}>{item.spectacle.nom}</Link> 
                </AgendaItemProjet>
                <Text dangerouslySetInnerHTML={{ __html: item.details }}/>
              </AgendaItemContent>
             </div>
        </ItemWrapper>
        </div>
    )
}
export default AgendaItem;