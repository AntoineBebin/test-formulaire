import styled from "styled-components";
import FooterNewAccount from "../../mainPage/Footer";
import HeaderNewAccount from "../HeaderNewAccount";
import Background from '../../image/Background_Pattern.svg';
import { useNavigate } from "react-router-dom";
import Download from '../../image/download.png';

const Container = styled.div `
max-width: 100vw;
min-height: 100vh;
background-image : url(${Background});
background-repeat: repeat;
`
const Title = styled.div`
color: var(--cra-main-lighter-shade-1, #5EA2B1);
text-align: center;
font-family: 'Ibarra Real Nova';
font-size: 7.5rem;
font-style: normal;
font-weight: 400;
line-height: 100%;
width: 52.3125rem;
height: 5.0625rem;
`
const Block = styled.div`
display: flex;
padding: 3.5rem 2.5rem 1.5rem 2.5rem;
flex-direction: column;
align-items: flex-end;
gap: 3.5rem;
align-self: stretch;
border-radius: 0.5rem;
background: var(--global-secondary-transparent-50, rgba(245, 245, 245, 0.50));
box-shadow: 0px 8px 64px 0px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
width: 58.5rem;
height: 49.1875rem;
`
const TextBlock = styled.div`
display: flex;
width: 53.5625rem;
height: 5rem;
flex-direction: column;
align-items: center;
gap: 1rem;
`
const Bold = styled.span`
color: var(--global-secondary-black, #202124);
text-align: center;
font-family: 'Urbanist';
font-size: 2rem;
font-style: normal;
font-weight: 600;
line-height: 2.5rem;
align-self: stretch;
`
const Texte = styled.span`
color: var(--global-secondary-black, #202124);
text-align: center;
font-family: 'Urbanist';
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 150%;
align-self: stretch;
`
const BlockTexte = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
align-self: stretch;
width: 53.5rem;
height: 1rem;
`
const UppercaseTexte = styled.span`
color: var(--global-secondary-black, #202124);
font-family: 'Urbanist';
font-size: 0.75rem;
font-style: normal;
font-weight: 600;
line-height: 1rem;
text-transform: uppercase;
`
const BlueTexte = styled.span`
color: var(--cra-main-metallic-seaweed, #0E738A);
font-family: 'Urbanist';
font-size: 0.75rem;
font-style: normal;
font-weight: 600;
line-height: 1rem;
text-transform: uppercase;
`
const Icon = styled.img`
width: 1rem;
height: 1rem;
`
const ContratBlock = styled.div`
display: flex;
height: 27.9375rem;
width: 53.5rem;
padding: 1rem 1.5rem;
align-items: flex-start;
align-self: stretch;
border-radius: 0.25rem;
background: var(--global-secondary-white-highlight, #FCFCFC);
box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
`
const ButtonBlock = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
gap: 1.5rem;
align-self: stretch;
width: 53.5rem;
height: 3rem;
`
const ReturnButton = styled.span`
display: flex;
padding: 0.75rem 1.25rem;
justify-content: center;
align-items: center;
border: none;
outline: none;
gap: 0.5rem;
width: 6.1875rem;
height: 3rem;
background: var(--global-secondary-transparent-50, rgba(245, 245, 245, 0.50));
box-shadow: 0px 8px 64px 0px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
border-radius: 0.25rem;
text-transform: uppercase;
cursor: pointer;
`
const NextButton = styled.button`
display: flex;
padding: 0.75rem 1.25rem;
justify-content: center;
align-items: center;
border: none;
outline: none;
gap: 0.5rem;
border-radius: 0.25rem;
background: var(--editeur-main-dandelion, #FFD966);
width: 30rem;
height: 3rem;
text-transform: uppercase;
cursor: pointer;
`

const NewAccount8 = () => {

    return(
        <Container>
            <HeaderNewAccount></HeaderNewAccount>
            <Title>Créer un compte</Title>
            <Block>
                <TextBlock>
                    <Bold>Contrat final</Bold>
                    <Texte>Blabla sur le contrat</Texte>
                </TextBlock>
                <BlockTexte>
                    <UppercaseTexte>Contrat final d'utilisation</UppercaseTexte>
                    <BlueTexte>Télécharger le contrat final d'utilisation<Icon src={Download}></Icon></BlueTexte>                   
                </BlockTexte>
                <ContratBlock>

                </ContratBlock>
                <ButtonBlock>
                    <ReturnButton>Précédent</ReturnButton>
                    <NextButton>J'accepte les conditions d'utilisations et crée mon compte</NextButton>
                </ButtonBlock>
            </Block>
            <FooterNewAccount></FooterNewAccount>
        </Container>
    );
};

export default NewAccount8;