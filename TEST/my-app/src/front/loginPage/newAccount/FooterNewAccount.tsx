import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons';
import FB from '../image/fb.svg';
import Insta from '../image/insta.svg';
import Linkedin from '../image/linkedin.svg';
import { useNavigate} from "react-router-dom";
import styled from "styled-components";

const Container = styled.div `
display: flex;
flex-direction: column;
max-width: 100vw;
height: 300px;
margin-top: 140px;
background-color: white;
`

const Block = styled.div `
display: flex;
flex-direction: row;
align-items: flex-start;
margin-left : 15%;
padding: 0px;
gap: 120px;
width: 70.5rem;
height: 9.75rem;
border: solid black 1px;
`

const FirstBlock = styled.div `
display : flex;
width: 5%;
flex-direction :row ;
align-items: center;
justify-content: flex-end;
padding : 0px 156px;
`

const Titre = styled.h2`
color: black;
font-weight: bold;
font-size: 35px;
font-family: 'Urbanist';`

const TitleIcon = styled.div`
  color: #FFD966;
  font-size: 35px;
`;

const SecondBlock = styled.div `
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
padding: 0px;
gap: 24px;
width: 168px;
height: 300px;`

const Texte1 = styled.span`
font-size : 16px;
font-weight : bold;
font-family: "Urbanist";
color : #202124;
cursor: pointer;
`

const Texte2 = styled.span `
font-size : 14px;
color : #6c6d70;
font-family: "Urbanist";
`

const ProductBox = styled.div`
display: flex;
flex-direction : column;`

const ThirdBlock = styled.div`
display : flex;
justify-content : flex-start;
align-items: flex-start;
flex-direction : column;
padding : 0px;
gap : 24px;
width: 168px;
height: 300px;
margin-top : 10px;
`

const Foot = styled.div`
display: flex;
flex-direction: column;
align-items: center;
max-width: 100vw;
height: 88px;
background-color: white;
border-top : solid #202124 1px;
`

const TextFoot = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 190px;
width: 100%;
height: 50px;
`

const Texte3 = styled.span `
font-size : 14px;
font-family: "Urbanist";
color : #202124;`

const Image = styled.img`
width: 24px;
height: 24px;
`
const BlockImage = styled.div `
display: flex;
flex-direction: row;
align-items: center;
padding : 8px;
gap : 8px;
border : solid #202124 2px;
border-radius : 8px;
box-sizing : border-box;
width: 40px;
height: 40px;
`
const NewsletterBlock = styled.div`
display: flex;
min-width: 22.5rem;
flex-direction: column;
align-items: flex-start;
gap: 1.5rem;
flex: 1 0 0;
width: 33.6875rem;
height: 7.25rem;
`
const NewsletterTexteBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.5rem;
align-self: stretch;
width: 33.6875rem;
height: 7.25rem;
`
const BoldTexte = styled.span`
color: var(--global-secondary-black, #202124);
font-size: 1rem;
font-family: 'Urbanist';
font-style: normal;
font-weight: 700;
line-height: 1.25rem;
`
const NewsletterTexte = styled.span`
display: flex;
flex-direction: column;
align-self: stretch;
color: var(--global-secondary-grey-darker, #6C6D70);
font-size: 0.875rem;
font-family: 'Urbanist';
font-style: normal;
font-weight: 400;
line-height: 1rem;
`
const NewsletterInput = styled.input`
display: flex;
padding: 0rem 1rem;
align-items: center;
flex: 1 0 0;
align-self: stretch;
border-radius: 0.25rem 0rem 0rem 0.25rem;
background: var(--global-secondary-white-highlight, #FCFCFC);
border: none;
width: 26.125rem;
height: 3rem;
`
const NewsletterButton = styled.button`
display: flex;
padding: 0.75rem 1.25rem;
align-items: flex-start;
gap: 0.5rem;
border-radius: 0rem 0.25rem 0.25rem 0rem;
background: var(--editeur-main-dandelion, #FFD966);
width: 7.5625rem;
height: 3rem;
text-transform: uppercase;
`

const FooterNewAccount = () => {
  // Navigation
    const navigate = useNavigate();

    const handleClickQuiSommesNous = () => {
        navigate('/qui-sommes-nous');
    }
    const handleClickTarif = () => {
        navigate('/tarifs')
    }

    return (

        <Container>
            <Block>
            <FirstBlock>
            <TitleIcon>
             <FontAwesomeIcon icon={faCircle} />
            </TitleIcon>
                <Titre>DéjàVu</Titre>
            </FirstBlock>
            <SecondBlock>
                <Texte1>Accueil</Texte1>
                <ProductBox>
                <Texte1>Produit</Texte1>
                <Texte2>EasyCra</Texte2>
                <Texte2>EventPlanner</Texte2>
                </ProductBox>
                <Texte1 onClick={handleClickTarif}>Tarifs</Texte1>
                <Texte1 onClick={handleClickQuiSommesNous}>Qui sommes-nous ?</Texte1>
            </SecondBlock>
            <ThirdBlock>
                <ProductBox>
                    <Texte1>Ressources</Texte1>
                    <Texte2>F.A.Q</Texte2>
                    <Texte2>Intégration</Texte2>
                    <Texte2>Intégration</Texte2>
                </ProductBox>
                <NewsletterBlock>
                    <NewsletterTexteBlock>
                        <BoldTexte>Newsletter</BoldTexte>
                        <NewsletterTexte>Inscrivez-vous à notre newsletter pour ne rater aucune infos sur les solutions DéjàVu !</NewsletterTexte>
                        <NewsletterInput placeholder = "Email"></NewsletterInput>
                        <NewsletterButton>M'inscrire</NewsletterButton>
                    </NewsletterTexteBlock>
                </NewsletterBlock>
            </ThirdBlock>
            </Block>
            <Foot>
                <TextFoot>
                    <Texte3>@ 2023 DéjàVu LLC</Texte3>
                    <Texte3>Politique de confidentialité</Texte3>
                    <Texte3>Conditions d'utilisations</Texte3>
                    <Texte3>Mentions légales</Texte3>
                    <BlockImage>
                    <Image src = {FB}></Image>
                    <Image src = {Insta}></Image>                   
                    <Image src = {Linkedin}></Image>
                    </BlockImage>
                </TextFoot>
            </Foot>
        </Container>
    );
}


export default FooterNewAccount;