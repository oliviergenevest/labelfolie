import React from 'react';
//import { fr } from 'date-fns/locale';
import styled from 'styled-components';
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';
import { mq, colors } from '../../consts/style'; 
/*import {
    Text,
  } from "../Elements"*/


const VignetteNom =   styled.span`
  
  text-align:  ${props => (props.center  ? 'center' : 'left' )};
  margin-bottom:0;
  margin-top:1rem;
  opacity:0;
  line-height: 2rem;
  max-width: 100px;
  color: white;
  transform:translateY(10px);

`
const ItemWrapper = styled(Link)`
  display:flex;
  position: relative;
  flex-direction:column;
  /*max-width: 550px;*/
  margin-bottom:1rem;
  background-color:${props => (props.backgroundColor  ? props.backgroundColor : 'inherit' )};
  align-self: stretch;
  justify-content: flex-start;
  align-items:center;
  
  
  flex-shrink: 0 ;
  flex-grow:0;
 
  &:hover img:not(:first-child) {
    transform:scale(1.1);
    transition:.3s transform ease-in-out;
  }
  & img:not(:first-child) {
    transition:.3s transform ease-in-out;
  }
/*
  &:hover span {
    color:${colors.blue};
   



  }
*/
  &:hover ${VignetteNom} {
    color:${colors.blue};
    opacity: 1;
    transform: translateY(0);
    transition: all .3s ease;
  }
`


const VignetteImage =   styled(GatsbyImage)`
  display:flex;
  border-radius:20%;
  width:150px;
  ${mq.tablet`
  width:100px;
  `}
  ${mq.tabletSmall`
  width:80px;
  `}
  flex-direction:row;
  height:auto;

  ${mq.mobile`
    margin-left:0;
    height:auto;
  `}
`
/*const VignetteTeaser =   styled(Text)`
  text-align:center;
  line-height: 22px;
`*/

// format :  
// - full : avec affichage du teaser sous le nom du projet au dessus de l'image
// - short : sans teaser, nom sous l'image

const VignetteSpectacleHomepage = ({item, format}) => {
    return (
        <ItemWrapper to={`artistes/`+item.slug} title={item.nom} format= {format}>
          
          <VignetteImage image={item.image.gatsbyImageData} alt={item.nom}/>
          <VignetteNom center>{item.nom}</VignetteNom>
         { /*{format === "short" && <VignetteNom>{item.nom}</VignetteNom>}
          <div>
          {format === "full" && <><VignetteNom center>{item.nom}</VignetteNom>
          <VignetteTeaser dangerouslySetInnerHTML={{ __html:item.teaser }}/></>}
          </div>*/}
        </ItemWrapper>
    )
}
export default VignetteSpectacleHomepage;