import styled from "styled-components";
import Background from '../image/Background_Pattern.svg';
import LoginHeader from "../loginPage/LoginHeader";
import Texte from "./Texte";
import OffreTarifs from "./OffreTarifs";
import News from "../mainPage/News";
import Footer from "../mainPage/Footer";

const Container = styled.div `
max-width: 100vw;
min-height: 390vh;
background-image : url(${Background});
background-repeat: repeat;
display: flex;
flex-direction: column;
`
const NewsWrapper = styled.div`
position : absolute;
top: 2400px;
left : 200px;
height : 0px;`

const FooterContainer = styled.div`
margin-top : auto;`


const Tarif = () => {
     
    return(
        <Container>
            <LoginHeader></LoginHeader>
            <Texte></Texte>
            <OffreTarifs></OffreTarifs>
            <NewsWrapper>
                <News></News>
            </NewsWrapper>
            <FooterContainer>
                <Footer></Footer>
            </FooterContainer>
        </Container>
    );
}

export default Tarif;