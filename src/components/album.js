import React from "react";
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { colors, mq } from '../consts/style';

const WrapperAlbum = styled.div`
    //width:150px;
    border:1px dashed ${colors.grey};
    background:white;
    display:inline-flex;
    flex-direction:column;
    padding:1rem;
    margin-right:1rem;
    margin-bottom:1rem;
   
`

const Image = styled(GatsbyImage)`
    width:150px;
    height:150px;
`

const Album = ({ data }) => (
  <WrapperAlbum>
   <Image image={data.image.gatsbyImageData} alt={data.nom} />
    <span>{data.nom}</span>
    
  </WrapperAlbum>
 

)
export default Album