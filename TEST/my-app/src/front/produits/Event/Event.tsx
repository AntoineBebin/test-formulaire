import styled from "styled-components";
import LoginHeader from "../../loginPage/LoginHeader";
import Footer from "../../mainPage/Footer";
import Background from '../../image/Background_Pattern.svg';
import TexteIntro from "./TexteIntro";
import Animation from "./Animation";
import Soluce from "../Soluce";
import DoubleOffres from "./DoubleOffres";
import News from "../../mainPage/News";
import Faq from "../Faq";


const Container = styled.div `
max-width: 100vw;
min-height: 469vh;
background-image : url(${Background});
background-repeat: repeat;
display: flex;
flex-direction: column;
`
const SoluceWrapper = styled.div`
position : absolute;
left : 70rem;
top: 2rem;
`
const FooterWrapper = styled.div`
margin-top : 220rem;
`
const OffreWrapper = styled.div`
margin-top : 60rem;
margin-left: 20rem;
`
const NewsWrapper = styled.div`
margin-top: -5rem;
`
const FaqWrapper = styled.div`
margin-top : -245rem;
`

const Event = () => {

    return(
        <Container>
            <LoginHeader></LoginHeader>
            <TexteIntro></TexteIntro>
            <Animation></Animation>
            <SoluceWrapper>
            <Soluce></Soluce>
            </SoluceWrapper>
            <OffreWrapper>
            <DoubleOffres></DoubleOffres>
            </OffreWrapper>
            <NewsWrapper>
                <News></News>
            </NewsWrapper>
            <FaqWrapper>
                <Faq></Faq>
            </FaqWrapper>
            <FooterWrapper>
            <Footer></Footer>
            </FooterWrapper>
        </Container>
    );
};

export default Event;