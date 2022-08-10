import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import RLBackground from './RLBackground.jpg';
import threeCars from './3Cars.jpg';
import RLBG1 from './RLBG1.jpg';

export const Title = styled.h1`
font-size: 1.8em;
text-align: center;
color: white;
`;

export const AppContainer = styled.div`
  /* width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-image: url(${RLBackground}); */
  text-align: center;
  /* z-index: 10; */
    /* background: rgba(0, 0, 128, .6); */
    background: linear-gradient(to right, rgba(255,140, 0, .5), rgba(0, 0, 100, .5));
    color: #131466;
    opacity: 1;
    /* position: fixed; */
    margin: 0 auto;
    /* top: 0px;
    left: 0px; */
    width: 50%;
    height: 100%;
    border-radius: 100px;
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
  /* margin-top: 5px; */
  margin-bottom: 10px;
  font-weight: bold;
`;

export const H4s = styled.h4`
text-align: center;
color: #000000;
z-index: 1000;
font-weight: bold;
font-size: 20px;
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
font-size: 35px;
margin-bottom: 0px;
`;

export const PTagCarousel = styled.p`
  text-align: center;
  color: white;
  justify-content: center;
  align-content: center;
  width: 500px;
  margin-left: 176px;
  margin-bottom: 0;
  padding: 3px;
  background-image: url(${threeCars});
  border-radius: 10px;
`;

export const PTag = styled.p`
  text-align: center;
  color: white;
  max-width: 450px;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
  padding: 3px;
  /* width: 600px; */
  background-image: url(${threeCars});
`;

export const PTagStat = styled.p`
  text-align: center;
  color: #ffffff;
  max-width: 450px;
  font-size: 15px;
  font-weight: bold;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
  padding: 3px;
  /* width: 600px; */
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
    text-align: center;
    justify-content: center;
    align-content: center;
    background-size: cover;
    min-height: 100%;
    min-width: 1024px;
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
  }
`;