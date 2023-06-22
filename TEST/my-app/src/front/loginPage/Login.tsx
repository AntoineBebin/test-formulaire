import styled from "styled-components";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Background from '../image/Background_Pattern.svg';
import Key1 from '../image/key1.png';
import Key2 from '../image/key2.png';
import { useState } from "react";
import Footer from '../mainPage/Footer';
import LoginHeader from './LoginHeader';
import { useNavigate } from "react-router-dom";



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
top: -65px;
font-family: 'Urbanist';
font-style: normal;
font-weight: 400;
font-size: 120px;
line-height: 100%;
color :#5EA2B1;
margin-top: 150px;
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
height: 496px;
left: 685px;
top: 100px;
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
const IconContainer = styled.span`
  position: absolute;
  right: 55px;
  top : 62%;
  translate: translateY(-50%);
  cursor: pointer;
`;

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
`

const SecondBlockTexte = styled.div`
flex-direction: row;
align-items: center;
justify-content: center;
padding: 0px;
gap: 8px;
width: 262px;
height: 16px;
`

const SecondTexte = styled.span`
width: 106px;
height: 16px;
font-family: 'Urbanist';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 16px;
color: #6C6D70;
cursor: pointer;
`
const ImageBlock = styled.div`
position : relative;
width: 256px;
height : 204px;
left : 599.49px;
top: 430.99px;
transform: matrix()(-0.99, -0.16, -0.16, 0.99, 0, 0);
`
const FirstImage = styled.img`
z-index : -1;
position: absolute;
top : -425px;
left : 435px;
`
const SecondImage = styled.img`
z-index :1;
position: absolute;
top: -425px;
left : 435px;
`

const Password = styled.span`
cursor: pointer;`

const ErrorMessage = styled.span`
color : red;
display : flex;
align-items : center;
justify-content : center;
margin-top : 30px;
width : 100%;
height : 24px;
font-family : 'Urbanist';
font-weight : 400;
font-size : 20px;`

const Login =() => {
    // Etats et focntions pour reset l'input au clique, affichage d'une erreur lorsque s'est mal écrit et la navigation
    const navigate = useNavigate();

    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const handleEmail = (e : React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e : React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleClick =()=>{
        if (email !== 'email@amapii.com' || password !== 'password'){
            setError('Email ou mot de passe incorrect !')
        } else {
        setError('');
        setEmail('');
        setPassword ('');
        }
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

      const handleClickPassword = (e: React.MouseEvent<HTMLSpanElement>) => {
        const targetText = (e.currentTarget as HTMLSpanElement).textContent;
        if(targetText === "Mot de passe oublié ?"){
        navigate('/login/password');
        }
      };

      const handleClickAccount = (e: React.MouseEvent<HTMLSpanElement>) => {
        const targetText = (e.currentTarget as HTMLSpanElement).textContent;
        if(targetText === "Créer un compte -"){
            navigate('/login/account');
        }
      }

    return (
    <Container>
        <LoginHeader></LoginHeader>
        <Title>Connexion</Title>
        <Block>
            <TexteBlock>
                <BoldTexte>Accéder à votre espace perso</BoldTexte>
                <Texte>Connectez-vous à vos outils EasyCra & EasyEvent</Texte>
            </TexteBlock>
            <InputBlock>
                <InputTexteBlock>
                <InputTexte>ADRESSEEMAIL</InputTexte>
                </InputTexteBlock>
                <Input placeholder="Email" value={email} onChange={handleEmail}></Input>
                <InputTexteBlock>
                <InputTexte>MOT DE PASSE</InputTexte>
                </InputTexteBlock>
                <Input type={showPassword ? 'text' : 'password'} placeholder="Mot de passe" value={password} onChange={handlePassword}></Input>
                <IconContainer>
                    <FontAwesomeIcon icon={faEye} style={{color: "#000000"}} onClick={handleTogglePasswordVisibility}></FontAwesomeIcon>
                </IconContainer>
                <Button onClick={handleClick}>SE CONNECTER</Button>
                {error && <ErrorMessage>{error}</ErrorMessage>}
            </InputBlock>
            <SecondBlockTexte>
                    <SecondTexte onClick={handleClickAccount}>Créer un compte -{" "} 
                    <Password onClick={handleClickPassword}>Mot de passe oublié ?</Password></SecondTexte>
            </SecondBlockTexte>          
        </Block>
        <ImageBlock>
                <FirstImage src={Key1}></FirstImage>
                <SecondImage src={Key2}></SecondImage>
            </ImageBlock>
        <Footer></Footer>
    </Container>
    );
}

export default Login;