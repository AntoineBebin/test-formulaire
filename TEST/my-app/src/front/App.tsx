import styled from 'styled-components';
import Header from './mainPage/Header';
import Intro from './mainPage/Intro';
import Solution from './mainPage/Solution';
import Offre from './mainPage/Offre';
import News from './mainPage/News';
import Footer from './mainPage/Footer';
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
