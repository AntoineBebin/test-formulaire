import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header';
import Intro from './components/Intro';
import Solution from './components/Solution';
import Offre from './components/Offre';
import News from './components/News';
import Footer from './components/Footer';
import Background from './image/Background_Pattern.svg';

const Container = styled.div `
max-width: 100vw;
min-height: 100vh;
background-image : url(${Background});
background-repeat: repeat;
`



const App = () => {


  

  return (
    <Container>
      <Header></Header>
      <Intro></Intro>
      <Solution></Solution>
      <Offre></Offre>
      <News></News>
      <Footer></Footer>
    </Container>
  );
};

export default App;
