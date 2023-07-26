import styled from "styled-components";
import LoginHeader from "../../loginPage/LoginHeader";
import Footer from "../../mainPage/Footer";
import News from "../../mainPage/News";
import Faq from "../Faq";
import Fonctions from "./Fonctions";
import Background from '../../image/Background_Pattern.svg';
import Animations from '../EasyCraPro/ArrowAnimation';

const Container = styled.div`
display: flex;
flex-direction: column;
background-image : url(${Background});
max-width: 100vw;
`
const FaqWrapper = styled.div`
position: relative;
top: -240rem;
left: 1rem;
`


const EasyCraPro = () => {

    return(
        <Container>
            <LoginHeader></LoginHeader>
            <Animations></Animations>
            <Fonctions></Fonctions>
            <News></News>
            <FaqWrapper>
            <Faq></Faq>
            </FaqWrapper>
            <Footer></Footer>
        </Container>
    );
};

export default EasyCraPro;