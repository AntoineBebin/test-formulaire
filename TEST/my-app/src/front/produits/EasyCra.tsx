import styled from "styled-components";
import { useState } from "react";
import Background from '../image/Background_Pattern.svg';
import Header from "../mainPage/Header";
import Calendrier from "./Calendrier";
import Soluce from "./Soluce";
import Offre from "../mainPage/Offre";
import News from "../mainPage/News";
import Faq from "./Faq";
import Footer from "../mainPage/Footer";

const Head = styled(Header) `
display: flex;
justify-content: space-between;
align-items: center;
padding : 16px 24px;
gap : 197px;
width: 95%;
margin-left : 22px;
height: 2%;
background: rgba(245, 245, 245, 0.5);
box-shadow: 0px 8px 64px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
border-radius: 8px;
`

const Container = styled.div `
max-width: 100vw;
min-height: 520vh;
background-image : url(${Background});
background-repeat: repeat;
display: flex;
flex-direction: column;
`
const OffreWrapper = styled.div`
position : absolute;
top: 2180px;
left : 20px;
`

const ButtonBlock = styled.div`
display:flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 8px;
position: absolute;
top: 830px;
left : 650px;
gap : 16px;
width: 496px;
height: 72px;
background-color: white;
`

const Button = styled.button`
  background-color: #ffd966;
  border-color: white;
  border : none;
  outline : none;
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: bold;
  height: 48px;
  width: 209px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: 'Urbanist';
`

const AnimatedButton = styled(Button)`
transition : all 0.3s ease-in-out;
:hover{
    transform: translateY(-3px);
    box-shadow: 0 1px 5px rgba(0,0,0,0.2);
}
:active{
    transform: translateY(0);
    box-shadow : none;
}`

const NewsWrapper = styled.div`
position : absolute;
top: 2800px;
left : 200px;
height : 0px;`

const FooterContainer = styled.div`
margin-top : auto;`

const EasyCra = () => {
    // Etat et fonction pour les boutons avec animation
    const [buttonSelected, setButtonSelected] = useState<number | null>(null);
    
    const buttons = [
        {id: 1, label: "POUR LES INDEPENDANTS"},
        {id: 2, label: "POUR LES ENTREPRISES"},
    ]
    

    const handleButtonClick = (buttonId : number) => {
        if (buttonSelected === buttonId) {
            setButtonSelected(null);
        } else {
            setButtonSelected(buttonId);
        }
    };

    const buttonStyle = (buttonId : number) => {
        if( buttonSelected === buttonId){
            return {backgroundColor : "#ffd966"};
        } else {
            return { backgroundColor : "white"};
        }
    };

    return (
        <Container>
            <Head></Head>
            <Calendrier></Calendrier>
            <Soluce></Soluce>
            <OffreWrapper>
            <Offre></Offre>
            <ButtonBlock>
            {buttons.map((button)=>(
                        <AnimatedButton key={button.id}
                                style={buttonStyle(button.id)}
                                onClick={() => handleButtonClick(button.id)}
                                >{button.label}</AnimatedButton>
                    ))}
            </ButtonBlock>
            </OffreWrapper>
            <NewsWrapper>
            <News></News>
            </NewsWrapper>
            <Faq></Faq>
            <FooterContainer>
            <Footer></Footer>
            </FooterContainer>
        </Container>
    );
}

export default EasyCra;