import styled from 'styled-components';
import Header from './mainPage/Header';
import Intro from './mainPage/Intro';
import Solution from './mainPage/Solution';
import Offre from './mainPage/Offre';
import News from './mainPage/News';
import Footer from './mainPage/Footer';
import Login from './loginPage/Login';
import Background from './image/Background_Pattern.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const Container = styled.div `
max-width: 100vw;
min-height: 100vh;
background-image : url(${Background});
background-repeat: repeat;
`



const App = () => {


  

  return (
    <Router>
    <Container>
      <Header></Header>
      <Routes>
        <Route path="/loginPage/Login.tsx" element={<Login/>}></Route>
      </Routes>
      <Intro></Intro>
      <Solution></Solution>
      <Offre></Offre>
      <News></News>
      <Footer></Footer>
    </Container>
    </Router>

  );
};

export default App;
