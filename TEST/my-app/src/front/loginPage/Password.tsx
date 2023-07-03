import styled from "styled-components";
import Background from '../image/Background_Pattern.svg';
import { useState } from "react";
import Footer from '../mainPage/Footer';
import LoginHeader from './LoginHeader';

const Container = styled.div `
max-width: 100vw;
min-height: 100vh;
background-image : url(${Background});
background-repeat: repeat;
`

const Title = styled.h1`
position: absolute;
width: 543px;
height: 81px;
left: calc(50% - 543px/2);
top: 150px;
font-family: 'Ibarra Real Nova';
font-style: normal;
font-weight: 400;
font-size: 120px;
line-height: 100%;
color :#5EA2B1;
margin-top: 230px;
`
const Block = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 24px;
isolation: isolate;
position: relative;
width: 552px;
height: 380px;
left: 770px;
top: 360px;
background: rgba(245, 245, 245, 0.5);
box-shadow: 0px 8px 64px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
margin-top : 100px;
margin-bottom: 200px;
`

const TexteBlock = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 16px;
width: 472px;
height: 80px;
margin-top : 50px;
`

const BoldTexte = styled.span `
width: 472px;
height: 40px;
font-family: 'Urbanist';
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 40px;
text-align: center;
color: #202124;
`

const Texte = styled.span`
width: 472px;
height: 24px;
font-family: 'Urbanist';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
text-align: center;
color: #202124;
`

const InputBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 24px;
width: 472px;
height: 232px;
`
const InputTexteBlock = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
width: 472px;
height: 16px;
`

const InputTexte = styled.span `
width: 89px;
height: 16px;
font-family: 'Urbanist';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 16px;
text-transform: uppercase;
color: #202124;`

const Input = styled.input`
position: relative;
display: flex;
flex-direction: row;
align-items: center;
padding: 12px 20px;
gap : 8px;
width: 429px;
height: 25px;
background: #FCFCFC;
color : #B7B7B7;
box-shadow: 0px 8px 96px rgba(32, 33, 36, 0.04);
border-radius: 4px;
border : none;
outline : none;
`

const Button = styled.button `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 20px;
gap: 8px;
width: 472px;
height: 48px;
background: #FFD966;
border-radius: 4px;
border : none;
outline : none;
cursor: pointer;
font-family : 'Urbanist';
font-weight: bold;
`
const FooterWrapper = styled.div`
margin-top : 600px;`


const Password = () => {
    // Etat pour reset l'input
    const [email, setEmail] = useState('');

    const handleEmail = (e : React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleClick =() => {
        setEmail('');
    };

    return (
        <Container>
        <LoginHeader></LoginHeader>
        <Title>Connexion</Title>
        <Block>
            <TexteBlock>
                <BoldTexte>Mot de passe oublié ?</BoldTexte>
                <Texte>Saisissez votre email pour que nous puissions envoyer un lien de réinitialisation de votre mot de passe</Texte>
            </TexteBlock>
            <InputBlock>
                <InputTexteBlock>
                <InputTexte>ADRESSEEMAIL</InputTexte>
                </InputTexteBlock>
                <Input placeholder="Email" value={email} onChange={handleEmail}></Input>
                <Button onClick={handleClick}>REINITIALISER MON MOT DE PASSE</Button>
            </InputBlock>
            </Block>
            <FooterWrapper>
        <Footer></Footer>
        </FooterWrapper>
    </Container>
    );
}

export default Password;