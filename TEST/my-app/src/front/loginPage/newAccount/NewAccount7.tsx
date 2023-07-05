import styled from "styled-components";
import Background from '../../image/Background_Pattern.svg';
import HeaderNewAccount from "../HeaderNewAccount";
import FooterNewAccount from "../../mainPage/Footer";
import Etoile from '../../image/etoile.png';
import Noeud from '../../image/noeud.png';
import Line from "../../image/ligne.png";
import LittleLine from "../../image/LittleLine.png";
import LeftNoeud from "../../image/LeftNoeud.png";


const Container = styled.div `
max-width: 130vw;
min-height: 100vh;
background-image : url(${Background});
background-repeat: repeat;
`
const Title = styled.h1`
color: var(--cra-main-lighter-shade-1, #5EA2B1);
text-align: center;
font-size: 7.5rem;
font-family: 'Ibarra Real Nova';
font-style: normal;
font-weight: 400;
line-height: 100%;
margin-top: 150px;
`
const Block = styled.div`
display: flex;
position: relative;
top : -120px;
left : 740px;
width: 34.5rem;
height: 22rem;
padding: 4rem 2.5rem 1.5rem 2.5rem;
flex-direction: column;
align-items: flex-end;
gap: 3.5rem;
align-self: stretch;
border-radius: 0.5rem;
background: var(--global-secondary-transparent-50, rgba(245, 245, 245, 0.50));
box-shadow: 0px 8px 64px 0px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
`
const BlockTexte = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
align-self: stretch;
width: 29.5rem;
height: 10rem;
`
const BoldTexte = styled.div`
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
const Texte = styled.div`
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
const Button = styled.button`
display: flex;
padding: 0.75rem 1.25rem;
justify-content: center;
align-items: center;
gap: 0.5rem;
align-self: stretch;
border-radius: 0.25rem;
border: 2px solid var(--global-secondary-black, #202124);
width: 29.5rem;
height: 3rem;
text-transform: uppercase;
background: var(--global-secondary-transparent-50, rgba(245, 245, 245, 0.50));
`
const Star = styled.img`
position: absolute;
top : 220px;
left: 1000px;
z-index: 1;
`
const Fil = styled.img`
position: absolute;
top: 170px;
left: 1100px;
z-index: 1;
`
const Ligne = styled.img`
z-index: 1;
position: absolute;
top: 200px;
left: 1100px;
`
const LeftLigne = styled.img`
z-index: 1;
position: absolute;
top : 225px;
left: 975px;
`
const LeftFil = styled.img`
z-index: 1;
position: absolute;
top: 230px;
left: 870px;
`

const NewAccount7 = () => {

    return(
        <Container>
            <HeaderNewAccount></HeaderNewAccount>
            <Title>Créer un compte</Title>
            <Star src={Etoile}></Star>
            <Fil src={Noeud}></Fil>
            <Ligne src={Line}></Ligne>
            <LeftLigne src={LittleLine}></LeftLigne>
            <LeftFil src={LeftNoeud}></LeftFil>
            <Block>
                <BlockTexte>
                    <BoldTexte>Félicitations !</BoldTexte>
                    <Texte>Vous avez terminé de créer votre compte DéjàVu !
Bientôt, un email de confirmation arrivera à l’adresse email que vous avez renseigné, vous n’aurez qu’à cliquer sur le lien d’activation qu’il contiendra pour commencer à utiliser nos outils.</Texte>
                </BlockTexte>
                <Button>Renvoyer le mail d'activation</Button>
            </Block>
            <FooterNewAccount></FooterNewAccount>
        </Container>
    );
};

export default NewAccount7;