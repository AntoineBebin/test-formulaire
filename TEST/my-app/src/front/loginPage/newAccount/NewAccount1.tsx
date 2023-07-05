import styled from "styled-components";
import FooterNewAccount from "../../mainPage/Footer";
import HeaderNewAccount from "../HeaderNewAccount";
import Background from '../../image/Background_Pattern.svg';
import { useNavigate } from "react-router-dom";

const Container = styled.div `
max-width: 100vw;
min-height: 100vh;
background-image : url(${Background});
background-repeat: repeat;
`
const HeaderWrapper = styled.div`
`
const FooterWrapper = styled.div`
`
const Title = styled.h1`
color: var(--cra-main-lighter-shade-1, #5EA2B1);
text-align: center;
font-size: 7.5rem;
font-family: 'Ibarra Real Nova';
font-style: normal;
font-weight: 400;
line-height: 100%;
margin-top: 250px;
`
const Block = styled.div`
display: flex;
position: relative;
top : -120px;
left : 780px;
padding: 3.5rem 2.5rem 5rem 2.5rem;
flex-direction: column;
justify-content: center;
align-items: center;
width: 34.5rem;
height: 16.5rem;
gap: 3.5rem;
align-self: stretch;
border-radius: 0.5rem;
background: var(--global-secondary-transparent-50, rgba(245, 245, 245, 0.50));
box-shadow: 0px 8px 64px 0px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
`
const BlueTexte = styled.span`
color: var(--cra-main-metallic-seaweed, #0E738A);
font-size: 0.875rem;
font-family: 'Urbanist';
font-style: normal;
font-weight: 600;
line-height: 1rem;
letter-spacing: 0.04375rem;
text-transform: uppercase;
position : absolute;
top : 15px;
left : 550px;
cursor: pointer;
`
const BoldTexteBlock = styled.div`
display: flex;
flex-direction: column;
align-self: stretch;
color: var(--global-secondary-black, #202124);
text-align: center;
font-size: 2rem;
font-family: 'Urbanist';
font-style: normal;
font-weight: 600;
line-height: 2.5rem;
`
const TexteBlock = styled.div`
display: flex;
flex-direction: column;
align-self: stretch;
color: var(--global-secondary-black, #202124);
text-align: center;
font-size: 1rem;
font-family: 'Urbanist';
font-style: normal;
font-weight: 400;
line-height: 150%;
`
const ButtonBlock = styled.div`
display: flex;
width: 29.5rem;
justify-content: center;
align-items: center;
gap: 1rem;
position: absolute;
left: 854px;
top: 800px;
`
const Button = styled.button`
display: flex;
font-weight: bold;
font-family: 'Urbanist';
padding: 0.75rem 1.5rem;
justify-content: center;
align-items: center;
height: 3rem;
width: 14.25rem;
gap: 0.5rem;
flex: 1 0 0;
border-radius: 0.25rem;
background: var(--global-secondary-white-highlight, #FCFCFC);
box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
cursor: pointer;
`

const NewAccount1 = () => {

    const navigate = useNavigate();

    const handleReturn = (e:React.ChangeEvent<HTMLInputElement>) => {
        const targetText = (e.currentTarget as HTMLElement).textContent;
        if(targetText === "Retour"){
            navigate('/login')
        }
    };

    const handleButtonClick = () => {
        navigate ('/login/créer-un-compte2')
    }
    

    return(
        <Container>
            <HeaderWrapper>
                <HeaderNewAccount></HeaderNewAccount>
            </HeaderWrapper>
            <Title>Créer un compte</Title>
            <Block>
                <BlueTexte onClick={handleReturn}>Retour</BlueTexte>
                <BoldTexteBlock>Qui êtes-vous ?</BoldTexteBlock>
                <TexteBlock>Tel les flocons de neige, nos besoins sont tous différents, pour vous proposer l’offre qui vous correspond nous devons donc savoir quel est votre profil.</TexteBlock>
            </Block>
                <ButtonBlock>
                <Button onClick={handleButtonClick}>Je veux tout</Button>
                <Button onClick={handleButtonClick}>Je veux les event</Button>
                </ButtonBlock>
            <FooterWrapper>
                <FooterNewAccount></FooterNewAccount>
            </FooterWrapper>
        </Container>
    );
}

export default NewAccount1;