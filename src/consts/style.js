/* eslint-disable quotes */
import bp from './breakpoints';
import { css } from 'styled-components';

export const colors = {

  light: '#fff',
 
  dark: '#020202', // noir turbine


  greyLight: '#CECECE',
  buttonHover: '#6d6967',
  cta:'#57877A',

  blue:'#01567A', // bleu turbine
  blueLight:'#EBEBF3', // bleu discordeon light utilisé pour fond 
  orange:'#FFB44B', //jaune orange turbine
 
  yellow:'#f5c707', // jaune Label Folie


  yellowLight:'#F1EFD4',



  grey:'#E8E7E7',
};

export const space = {
  'quarter': '.5rem',
  'half': '1rem',
  'default': '2rem',
  '3': '3rem',
  'double': '4rem',
  '5': '5rem',
  '6': '6rem',
  '7': '7rem',
  'big': '8rem',
  '9': '9rem',
  'huge': '10rem',
}
const mQueryPoint = {
  mobile: `${bp.mobile}px`,
  tabletSmall: `${bp.tabletSmall}px`,
  tablet: `${bp.tablet}px`,
  desktop: `${bp.desktop}px`,
};

export const bz = `
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  `;

export const boxShadow = `
box-shadow : 0px 3px 6px #00000029;
`
export const font = {
  // haut a droite rappel de navigation utilisé comme H1 pour referencement
  pageTitle : ` 
            padding-top:2rem;
          font-family: 'Raleway';
            font-size:2.8rem;
            line-height:normal;
            font-weight:600;
            line-height:2.8rem;
            color: ${colors.dark};
            @media screen and (max-width: ${mQueryPoint.tablet}) {
              font-size: 2.2rem;
              line-height:auto;
            }
           
`,
// gros titre centré
  title:  ` 
            font-size:6.4rem;
            line-height:normal;
            font-weight:600;
            @media screen and (max-width: ${mQueryPoint.tablet}) {
              font-size: 3.6rem;
            }
          `,
  h2: `
          font-family: 'Raleway';
          font-style: normal;
          font-weight: 600;
          font-size: 2.4rem;
          line-height: 145%;
          color: ${colors.dark};
          `,

  h3 :`
            font-style: normal;
            font-weight: 500;
            font-size: 2.6rem;
            line-height: 31px;
            color: ${colors.dark};
            `,

  subtitle: ` 
            font-size:2.4rem;
            font-style: normal;
            font-weight: normal;
            line-height: 35px;

            @media screen and (max-width: ${mQueryPoint.tablet}) {
              font-size: 2rem;
            }
          `,
  text: ` 
            font-size: 1.8rem;
            font-style: normal;
            font-weight: 400;
            line-height: 27px;
            word-break: break-word;
            text-align:justify;
            @media screen and (max-width: ${mQueryPoint.tablet}) {
              font-size: 1.6rem;
            }

          `,

  navigationItem:`
           font-family: 'Raleway';
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 22px;
            letter-spacing:1px;
          `,
   
};


export const z = {
  modalBackground: `z-index: 100000;`,
  modal: `z-index: 200000;`,
};



// Creates up & down media queries for your breakpoints
// *** Usage ***
// import { mq } from "**/style.js"
// export const StyledComponent = styled.div`
// ${media.tablet`
//   display: flex;
// `}
// ${media.mobile_up`
//   display: none;
// `}
//`

export const mq = Object.keys(bp).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media screen and (max-width: ${bp[label]}px) {
      ${css(...args)};
    }
  `;

  acc[`${label}_up`] = (...args) => css`
    @media screen and (min-width: ${bp[label]}px) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});
