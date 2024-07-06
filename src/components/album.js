import React from "react";
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { colors } from '../consts/style';

const WrapperAlbum = styled.div`
    
    border:1px dashed ${colors.grey};
    background:white;
    display:inline-flex;
    flex-direction:column;
    padding:1rem;
    margin-right:1rem;
    margin-bottom:1rem;
    span {
    max-width:150px;
    }
   
`

const Image = styled(GatsbyImage)`
    width:150px;
    height:150px;
`
 
const Album = ({ data }) => (
  <WrapperAlbum>
   <Image image={data.image.gatsbyImageData} alt={data.nom} />
    <span>{data.nom} <br/> {data.annee}</span>
  
    
  </WrapperAlbum>
 

)
export default Album