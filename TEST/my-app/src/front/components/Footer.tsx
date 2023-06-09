import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons';
import FB from '../image/fb.svg';
import Insta from '../image/insta.svg';
import Linkedin from '../image/linkedin.svg';

const Container = styled.div `
display: flex;
flex-direction: column;
max-width: 100vw;
height: 300px;
margin-top: 30px;
background-color: white;
`

const Block = styled.div `
display: flex;
flex-direction: row;
align-items: flex-start;
margin-left : 25%;
padding: 0px;
gap: 120px;
max-width: 50vw;
height: 300px;
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
font-family: "Silka";
color : #202124;
`

const Texte2 = styled.span `
font-size : 14px;
color : #6c6d70;
font-family: "Silka";
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
padding: 24px 156px;
isolation: isolate;
max-width: 100vw;
height: 88px;
background-color: white;
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
font-family: "Silka";
color : #202124;`

const Image = styled.img`
width: 24px;
height: 24px;
`

const BlockImage = styled.div `
display: flex;
flex-direction: column;
align-items: center;
padding : 8px;
gap : 8px;
border : solid #202124 2px;
border-radius : 8px;
box-sizing : border-box;
width: 40px;
height: 40px;
`

const Footer = () => {

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
                <Texte1>Tarifs</Texte1>
                <Texte1>Qui sommes-nous ?</Texte1>
            </SecondBlock>
            <ThirdBlock>
                <ProductBox>
                    <Texte1>Ressources</Texte1>
                    <Texte2>F.A.Q</Texte2>
                    <Texte2>Intégration</Texte2>
                    <Texte2>Intégration</Texte2>
                </ProductBox>
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
                    </BlockImage>
                    <BlockImage>
                    <Image src = {Insta}></Image>
                    </BlockImage>
                    <BlockImage>
                    <Image src = {Linkedin}></Image>
                    </BlockImage>
                </TextFoot>
            </Foot>
        </Container>
    );
}

export default Footer;