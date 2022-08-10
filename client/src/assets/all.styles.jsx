import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import RLBackground from './RLBackground.jpg';
import threeCars from './3Cars.jpg'

export const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: white;
`;

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  /* background-image: url(${RLBackground}); */
  text-align: center;
`;

export const Button = styled.button`
  width: 70px;
  height: 23px;
  background-color: #ffffff;
  margin: 5px;
`;

export const OrdList = styled.ol`
  list-style-position: inside;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const Lists = styled.li`
  font-size: 18px;
  color: #c0c0c0;
`;

export const H4s = styled.h4`
text-align: center;
color: white;
`;

export const H5s = styled.h5`
text-align: center;
color: white;
margin: 0;
padding: 0;
`;

export const PlayerName = styled.h3`
text-align: center;
color: #c0c0c0;
`;

export const PTagCarousel = styled.p`
  text-align: center;
  color: white;
  justify-content: center;
  align-content: center;
  width: 500px;
  margin-left: 185px;
  padding: 3px;
  background-image: url(${threeCars});
`;

export const PTag = styled.p`
  text-align: center;
  color: white;
  justify-content: center;
  align-content: center;
  padding: 3px;
  /* width: 600px; */
  background-image: url(${threeCars});
`;

export const Img = styled.img`
  height: 500px;
  width: 600px;
`;

export const Global = createGlobalStyle`
  body {
    /* background-color: #131466; */
    background-image: url(${RLBackground});
    margin: 0px;
    padding: 0px;
    width: 100vw;
    height: 100vh;
  }
`;