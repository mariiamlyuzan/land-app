import styled from 'styled-components';
import img from '../../images/home/showcase.jpg';
import img2 from '../../images/home/showcase@2x.jpg';
// import imgWebp from '../../images/home/showcase.webp';
// import imgWebp2 from '../../images/home/showcase@2x.webp';

export const Box = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  
  @media screen and (min-device-pixel-ratio: 2),
  screen and (min-resolution: 192dpi),
  screen and (min-resolution: 2dppx) {
 
    background-image: url(${img2});
`;
