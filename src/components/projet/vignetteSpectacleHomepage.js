import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';
import { mq, colors } from '../../consts/style'; 

const VignetteNom =   styled.span`
  position:absolute;
  bottom:0;
  padding:.5rem;
  text-align:  center;
  margin-bottom:0;
  line-height: 2rem;
  max-width: 100%;
  color: white;
  transform:translateY(10px);
  opacity:0;
  background: #000000f2;
  border-radius:  0 0 8px 8px;
  display: flex;
  width:100%;
  align-content: center;
  align-items: center;
  justify-content: center;

`
const ItemWrapper = styled(Link)`
  display:flex;
  position: relative;
  flex-direction:column;
  
  margin-bottom:1rem;
  background-color:${props => (props.backgroundColor  ? props.backgroundColor : 'inherit' )};
  align-self: stretch;
  justify-content: flex-start;
  align-items:center;
  
  
  flex-shrink: 0 ;
  flex-grow:0;
 
  &:hover img:not(:first-child) {
    transform:scale(1.1);
    transition:.2s transform ease-in-out;
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
    color:${colors.light};
    opacity: 1;
    transform: translateY(0);
    transition: all .3s ease;
  }
`


const VignetteImage =   styled(GatsbyImage)`
  display:flex;
  border-radius:8px;
  width:150px;
  ${mq.tablet`
  width:120px;
  `}
  ${mq.tabletSmall`
  width:100px;
  `}
  flex-direction:row;
  height:auto;

  ${mq.mobile`
    margin-left:0;
    height:auto;
  `}
`


// format :  
// - full : avec affichage du teaser sous le nom du projet au dessus de l'image
// - short : sans teaser, nom sous l'image

const VignetteSpectacleHomepage = ({item, format}) => {
    return (
        <ItemWrapper to={`artistes/`+item.slug} title={item.nom} format= {format}>
          
          <VignetteImage image={item.image.gatsbyImageData} alt={item.nom}/>
          <VignetteNom $center>{item.nom}</VignetteNom>
        
        </ItemWrapper>
    )
}
export default VignetteSpectacleHomepage;