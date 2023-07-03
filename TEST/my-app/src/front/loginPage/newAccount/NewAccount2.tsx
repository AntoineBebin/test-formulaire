import styled from "styled-components";
import Background from '../../image/Background_Pattern.svg';
import HeaderNewAccount from "../HeaderNewAccount";
import Footer from "../../mainPage/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Container = styled.div `
max-width: 100vw;
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
left : 650px;
height: 31.5rem;
width: 46.5rem;
padding: 3.5rem 2.5rem 1.5rem 2.5rem;
flex-direction: column;
align-items: center;
gap: 3.5rem;
align-self: stretch;
border-radius: 0.5rem;
background: var(--global-secondary-transparent-50, rgba(245, 245, 245, 0.50));
box-shadow: 0px 8px 64px 0px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
`
const BoldTextBlock = styled.div`
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
const InputBlock = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
align-content: flex-start;
gap: 1.5rem;
align-self: stretch;
flex-wrap: wrap;
height: 10rem;
width: 41.5rem;
`
const FirstInput = styled.div`
display: flex;
min-width: 12.5rem;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
flex: 1 0 0;
width: 13rem;
height: 4.25rem;
`
const Texte = styled.span`
color: var(--global-secondary-black, #202124);
font-size: 0.75rem;
font-family: 'Urbanist';
font-style: normal;
font-weight: 600;
line-height: 1rem;
text-transform: uppercase;
`
const InputName = styled.input`
display: flex;
padding: 0.75rem 1rem;
align-items: center;
flex: 1 0 0;
background: var(--global-secondary-white-highlight, #FCFCFC);
width: 13rem;
height: 6rem;
outline : none;
border : none;
`
const SecondInput = styled.div`
display: flex;
min-width: 12.5rem;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
flex: 1 0 0;
width: 13rem;
height: 4.25rem;
`
const StatutBlock = styled.div`
display: flex;
min-width: 12.5rem;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 0.25rem;
flex: 1 0 0;
width: 13rem;
height: 4.25rem;
`
const StatutMenu = styled.div`
display: flex;
height: 3rem;
width: 12.5rem;
align-items: center;
background-color: white;
`
const ThirdInput = styled.div`
display: flex;
min-width: 15rem;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
flex: 1 0 0;
height: 4.25rem;
width: 25.3125rem;
`
const InputEmail = styled.input`
display: flex;
padding: 0.75rem 1rem;
align-items: center;
flex: 1 0 0;
background: var(--global-secondary-white-highlight, #FCFCFC);
height: 3rem;
width: 25.3125rem;
border : none;
outline : none;
`
const TelephoneBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
width: 14.6875rem;
height: 4.25rem;
`
const TelBlock = styled.div`
display : flex;
flex-direction : row;
`
const YellowBlock = styled.div`
display: flex;
width: 3rem;
height: 3rem;
padding: 0.75rem 1rem;
justify-content: center;
align-items: center;
border-radius: 0.25rem 0rem 0rem 0.25rem;
background: var(--editeur-main-dandelion, #FFD966);
box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
`
const InputTelephone = styled.input`
display: flex;
padding: 0.75rem;
align-items: flex-start;
background: var(--global-secondary-white-highlight, #FCFCFC);
height: 3rem;
width: 11.6875rem;
border : none;
outline : none;
`
const ButtonBlock = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
gap: 1.5rem;
align-self: stretch;
width: 41.5rem;
height: 3rem;
`
const WhiteButton = styled.button`
display: flex;
padding: 0.75rem 1.25rem;
justify-content: center;
align-items: flex-start;
gap: 0.5rem;
width: 6.1875;
height: 3rem;
color: var(--global-secondary-black, #202124);
font-size: 0.875rem;
font-family: 'Urbanist';
font-style: normal;
font-weight: 600;
line-height: 1.5rem;
text-transform: uppercase;
border: none;
outline: none;
cursor: pointer;
background: var(--global-secondary-transparent-50, rgba(245, 245, 245, 0.50));
box-shadow: 0px 8px 64px 0px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
`
const GreyButton = styled.button`
display: flex;
padding: 0.75rem 1.25rem;
justify-content: center;
align-items: flex-start;
gap: 0.5rem;
border-radius: 0.25rem;
background: var(--global-secondary-grey-lighter, #E6E6E6);
width: 6.1875rem;
height: 3rem;
color: var(--global-secondary-grey-darker, #6C6D70);
font-size: 0.875rem;
font-family: 'Urbanist';
font-style: normal;
font-weight: 600;
line-height: 1.5rem;
text-transform: uppercase;
border: none;
outline: none;
cursor: pointer;
`
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

const NewAccount2 = () => {

    //Etats
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [number, setNumber] = useState("");
    const [error, setError] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    // Navigation
    const navigate = useNavigate();

    const handleReturn = () => {
        navigate('/login/créer-un-compte');
    };

    const handleNext = () => {
        if(email === "" || firstName === "" || lastName === "" || number === ""){
            setError("Il manque des informations !")
        }else{
         navigate('/login/créer-un-compte3');
        }
    };
    
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handleFirstName = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    };
    const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };
    const handleNumber = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNumber(e.target.value);
    }

    return(
        <Container>
            <HeaderNewAccount></HeaderNewAccount>
            <Title>Créer un compte</Title>
            <Block>
                <BoldTextBlock>Informations personnelles</BoldTextBlock>
                <TexteBlock>Ces informations nous permettront de savoir à qui nous parlons pour tout ce qui concerne l’entreprise</TexteBlock>
                <InputBlock>
                    <FirstInput>
                        <Texte>NOM</Texte>
                        <InputName placeholder='Nom' 
                        onClick={handleFirstName} 
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}></InputName>
                    </FirstInput>
                    <SecondInput>
                        <Texte>Prénom</Texte>
                        <InputName placeholder='Prénom' 
                        onClick={handleLastName}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}></InputName>
                    </SecondInput>
                    <StatutBlock>
                        <Texte>QUEL EST VOTRE STATUT</Texte>
                        <StatutMenu>Particulier</StatutMenu>
                    </StatutBlock>
                    <ThirdInput>
                        <Texte>ADRESSE EMAIL</Texte>
                        <InputEmail placeholder="Email" 
                        onClick={handleEmail}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}></InputEmail>
                    </ThirdInput>
                    <TelephoneBlock>
                        <Texte>Numéro de téléphone</Texte>
                        <TelBlock>
                        <YellowBlock>+33</YellowBlock>
                        <InputTelephone placeholder="1 23 45 67 89" 
                        onClick={handleNumber}
                        ></InputTelephone>
                        </TelBlock>
                    </TelephoneBlock>
                </InputBlock>
                <ButtonBlock>
                        <WhiteButton onClick={handleReturn}>Précédent</WhiteButton>
                        <GreyButton onClick={handleNext}>Suivant</GreyButton>
                        {error && <ErrorMessage>{error}</ErrorMessage>}
                </ButtonBlock>
            </Block>
            <Footer></Footer>
        </Container>
    );
}

export default NewAccount2;