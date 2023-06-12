import styled from "styled-components";
import Background from './image/Background_Pattern.svg';
import Header from '../mainPage/Header';

const Container = styled.div`
`

const Title = styled.h1`
position: absolute;
width: 543px;
height: 81px;
left: calc(50% - 543px/2);
top: -65px;
font-family: 'Urbanist';
font-style: normal;
font-weight: 400;
font-size: 120px;
line-height: 100%;
color :#5EA2B1;
margin-top: 250px;
border : solid black 1px;
`
const Block = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 24px;
isolation: isolate;
position: absolute;
width: 552px;
height: 496px;
left: 685px;
top: 270px;
border : solid blue 1px;
background: rgba(245, 245, 245, 0.5);
box-shadow: 0px 8px 64px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
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
border : solid green 1px;
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
align-items: center;
padding: 0px;
gap: 32px;
width: 472px;
height: 280px;
border : solid yellow 1px;
`

const Input = styled.input`
display: flex;
flex-direction: row;
align-items: center;
padding: 12px 20px;
gap : 8px;
width: 429px;
height: 25px;
background: #FCFCFC;
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
`

const Login =() => {

    return (
    <div>
        <Header></Header>
        <Title>Connexion</Title>
        <Block>
            <TexteBlock>
                <BoldTexte>Accéder à votre espace perso</BoldTexte>
                <Texte>Connectez-vous à vos outils EasyCra & EasyEvent</Texte>
            </TexteBlock>
            <InputBlock>
                <Input placeholder="Email"></Input>
                <Input placeholder="Mot de passe"></Input>
                <Button>SE CONNECTER</Button>
            </InputBlock>
        </Block>
    </div>
    );
}

export default Login;