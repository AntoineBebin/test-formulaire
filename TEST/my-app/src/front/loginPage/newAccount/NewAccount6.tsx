import styled from "styled-components";
import Background from '../../image/Background_Pattern.svg';
import HeaderNewAccount from "../HeaderNewAccount";
import FooterNewAccount from "../../mainPage/Footer";
import BouttonSupp from '../../image/BtnSupp.png';
import { useNavigate } from "react-router-dom";
import { useState } from "react";


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
left: 550px;
padding: 3.5rem 2.5rem 1.5rem 2.5rem;
flex-direction: column;
align-items: flex-end;
gap: 3.5rem;
align-self: stretch;
width: 58.5rem;
height: 30rem;
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
flex-direction: column;
align-items: flex-start;
gap: 1.5rem;
align-self: stretch;
width: 53.5rem;
height: 10rem;
`
const FirstBlock = styled.div`
display: flex;
align-items: flex-start;
gap: 1.5rem;
align-self: stretch;
width: 53.5rem;
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
const InputBlockName = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
flex: 1 0 0;
width: 40.3125rem;
height: 4.25rem;
`
const InputName = styled.input`
display: flex;
padding: 0.75rem 1rem;
align-items: center;
flex: 1 0 0;
width: 37.3125rem;
height: 4.25rem;
overflow: hidden;
color: var(--global-secondary-black, #202124);
text-overflow: ellipsis;
font-size: 1rem;
font-family: 'Urbanist';
font-style: normal;
font-weight: 400;
line-height: 1.5rem;
border: none;
outline: none;
`
const TvaBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
width: 11.6875rem;
height: 4.25rem;
`
const TvaInput = styled.input `
display: flex;
padding: 0.75rem 1rem;
align-items: center;
background: var(--global-secondary-white-highlight, #FCFCFC);
width: 8.6875rem;
height: 3rem;
border: none;
outline: none;
`
const SecondBlock = styled.div`
display: flex;
align-items: flex-start;
gap: 1.5rem;
align-self: stretch;
width: 53.5rem;
height: 4.25rem;
`
const AdresseBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
flex: 1 0 0;
width: 12rem;
height: 4.25rem;
`
const AdresseInput = styled.input`
display: flex;
padding: 0.75rem 1rem;
align-items: center;
flex: 1 0 0;
width: 8rem;
height: 3rem;
border: none;
outline: none;
`
const CityBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
flex: 1 0 0;
width: 12rem;
height: 4.25rem;
`
const CityInput = styled.input`
display: flex;
padding: 0.75rem 1rem;
align-items: center;
flex: 1 0 0;
width: 8rem;
height: 3rem;
border: none;
outline: none;
`
const CountryBlock = styled.div`
display: flex;
width: 12.5rem;
height: 4.25rem;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
`
const CountryChoice = styled.div`
display: flex;
padding: 0.75rem 1rem;
align-items: center;
flex: 1 0 0;
background: var(--global-secondary-white-highlight, #FCFCFC);
width: 12.5rem;
height: 3rem;
`
const YearBlock = styled.div`
display: flex;
width: 12.5rem;
height: 4.25rem;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
`
const YearChoice = styled.div`
display: flex;
padding: 0.75rem 1rem;
align-items: center;
flex: 1 0 0;
background: var(--global-secondary-white-highlight, #FCFCFC);
width: 12.5rem;
height: 3rem;
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
const ReturnButton = styled.button`
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
width: 6.1875rem;
height: 3rem;
text-transform: uppercase;
cursor: pointer;
`
const SuppButtonContainer = styled.div`
width: 3rem;
height: 3rem;
display: flex;
align-items: flex-start;
`
const SuppButton = styled.button`
display: flex;
padding: 0.75rem;
align-items: flex-start;
background: var(--global-secondary-white-highlight, #FCFCFC);
width: 1.5rem;
height: 1.5rem;
cursor: pointer;
background-image: url(${BouttonSupp});
border: none;
`

const NewAccount6 = () => {

    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/login/créer-un-compte7');
    };

    //Etats
    const [name, setName] = useState("");
    const [adresse, setAdresse] =useState("");
    const [tva, setTva] = useState("");
    const [city, setCity] = useState("");

    const handleClickName = (e : React.ChangeEvent<HTMLInputElement>) =>{
        setName(e.target.value);
    };
    const handleClickAdresse = (e : React.ChangeEvent<HTMLInputElement>) =>{
        setAdresse(e.target.value);
    };
    const handleClickCity = (e : React.ChangeEvent<HTMLInputElement>) =>{
        setCity(e.target.value);
    };
    const handleClickTva = (e : React.ChangeEvent<HTMLInputElement>) =>{
        setTva(e.target.value);
    };


    return(
        <Container>
            <HeaderNewAccount></HeaderNewAccount>
            <Title>Créer un compte</Title>
            <Block>
                <BoldTextBlock>Confirmer les coordonnées de facturation</BoldTextBlock>
                <TexteBlock>blabla sur la facturation</TexteBlock>
                <InputBlock>
                    <FirstBlock>
                        <InputBlockName>
                            <Texte>Nom de l'entreprise</Texte>
                            <InputName placeholder = "Nom de l'entreprise"
                                        value={name}
                                        onChange={handleClickName}></InputName>
                            <SuppButtonContainer><SuppButton
                                        src={BouttonSupp}
                                        onClick={handleClickName}></SuppButton></SuppButtonContainer>
                        </InputBlockName>
                        <TvaBlock>
                            <Texte>Numéro de tva</Texte>
                            <TvaInput placeholder = "FR 12345678910"
                                        value={tva}
                                        onChange={handleClickTva}></TvaInput>
                                        <SuppButtonContainer><SuppButton
                                        src={BouttonSupp}
                                        onClick={handleClickTva}></SuppButton></SuppButtonContainer>
                        </TvaBlock>
                    </FirstBlock>
                    <SecondBlock>
                        <AdresseBlock>
                            <Texte>Adresse du siège social</Texte>
                            <AdresseInput placeholder = "18 rue egeegee"
                                            value={adresse}
                                            onChange={handleClickAdresse}></AdresseInput>
                                            <SuppButtonContainer><SuppButton
                                        src={BouttonSupp}
                                        onClick={handleClickAdresse}></SuppButton></SuppButtonContainer>
                        </AdresseBlock>
                        <CityBlock>
                            <Texte>Ville</Texte>
                            <CityInput placeholder="Paris"
                                        value={city}
                                        onChange={handleClickCity}></CityInput>
                                        <SuppButtonContainer><SuppButton
                                        src={BouttonSupp}
                                        onClick={handleClickCity}></SuppButton></SuppButtonContainer>
                        </CityBlock>
                        <CountryBlock>
                            <Texte>Pays</Texte>
                            <CountryChoice>France</CountryChoice>
                        </CountryBlock>
                        <YearBlock>
                            <Texte>Annuel ou mensuel</Texte>
                            <YearChoice>2023</YearChoice>
                        </YearBlock>
                    </SecondBlock>
                </InputBlock>
                <ButtonBlock>
                    <ReturnButton>Précédent</ReturnButton>
                    <NextButton onClick={handleNext}>Suivant</NextButton>
                </ButtonBlock>
            </Block>
            <FooterNewAccount></FooterNewAccount>
        </Container>
    );
};

export default NewAccount6;