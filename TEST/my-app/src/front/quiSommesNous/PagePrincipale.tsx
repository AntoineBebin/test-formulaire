import styled from "styled-components";
import Header from "../mainPage/Header";
import History from "./History";
import NotreHistoire from './NotreHistoire';
import Team from "./Team";
import Footer from "../mainPage/Footer";
import Background from '../image/Background_Pattern.svg';
import LoginHeader from "../loginPage/LoginHeader";

const Container = styled.div `
max-width: 100vw;
min-height: 250vh;
background-image : url(${Background});
background-repeat: repeat;
display: flex;
flex-direction: column;
`
const FooterContainer = styled.div`
margin-top : auto;`

const PagePrincipale = () => {

    return(
        <Container>
            <LoginHeader></LoginHeader>
            <History></History>
            <NotreHistoire></NotreHistoire>
            <Team></Team>
            <FooterContainer>
            <Footer></Footer>
            </FooterContainer>
        </Container>
    );
}

export default PagePrincipale;