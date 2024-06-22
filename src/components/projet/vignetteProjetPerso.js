import React, { Fragment} from 'react';
/*import { fr } from 'date-fns/locale';
import { format } from 'date-fns';*/
import styled from 'styled-components';
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';
import { mq, colors, font } from '../../consts/style'; 
import {
    Text,
  } from "../Elements"
/*
const ItemWrapperOld = styled(Link)`
  display:flex;
  position: relative;
  flex-direction:column;

  margin-bottom:1rem;
  background:white;
  justify-content: center;
  align-items:${props => (props.format === 'short'  ? 'flex-start' : 'center' )};
  & div:first-of-type{padding:1rem;}
  
  ${mq.mobile`
    width: 100%;
  `}
`*/

const ItemWrapper = styled(Link)`
  display:flex;
  position: relative;
  flex-direction:column;
  /*max-width: 550px;*/
  margin-bottom:4rem;
  background-color:${props => (props.backgroundColor  ? props.backgroundColor : 'inherit' )};
  align-self: stretch;
  justify-content: flex-start;
  align-items:${props => (props.format === 'short'  ? 'flex-start' : 'center' )};;
  
  flex-basis:31.1%;
  flex-shrink: 1 ;
  flex-grow:0;
  ${mq.tablet`
    flex-basis:46.5%;
  `}
  ${mq.tabletSmall`
    width: 100%;
    flex-basis:100%;
    flex-shrink: 0 ;
  `}
  &:hover img:not(:first-child) {
    transform:scale(1.1);
    transition:.3s transform ease-in-out;
  }
  & img:not(:first-child) {
    transition:.3s transform ease-in-out;
  }

  &:hover h2 {
    color:${colors.blue};

  }
`


const VignetteNom =   styled.h2`
  ${font.h2}  
  text-align:  ${props => (props.center  ? 'center' : 'left' )};
  margin-bottom:0;
  margin-top:1rem;

`
const VignetteImage =   styled(GatsbyImage)`
  display:flex;
  ${mq.mobile`
  margin-left:0;
  `}
  flex-direction:row;
  height:auto;
  border-radius:4px;
  ${mq.mobile`
    height:auto;
  `}
`
const VignetteTeaser =   styled(Text)`
  text-align:center;
  line-height: 22px;
`

// format :  
// - full : avec affichage du teaser sous le nom du projet au dessus de l'image
// - short : sans teaser, nom sous l'image

const VignetteProjetPerso = ({item, format}) => {
    return (
        <ItemWrapper to={item.slug} format= {format}>
          
          <VignetteImage image={item.image.gatsbyImageData} alt={item.nom}/>
          {format === "short" && <VignetteNom>{item.nom}</VignetteNom>}
          <div>
          {format === "full" && <><VignetteNom center>{item.nom}</VignetteNom>
          <VignetteTeaser dangerouslySetInnerHTML={{ __html:item.teaser }}/></>}
          </div>
        </ItemWrapper>
    )
}
export default VignetteProjetPerso;