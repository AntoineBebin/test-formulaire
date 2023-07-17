import styled from "styled-components";
import FooterNewAccount from "../../mainPage/Footer";
import HeaderNewAccount from "../HeaderNewAccount";
import Background from '../../image/Background_Pattern.svg';
import BouttonSupp from '../../image/BtnSupp.png';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Container = styled.div `
max-width: 100vw;
min-height: 100vh;
background-image : url(${Background});
background-repeat: repeat;
`
const FooterWrapper = styled.div`
margin-top: 230px;
`
const Title = styled.h1`
color: var(--cra-main-lighter-shade-1, #5EA2B1);
text-align: center;
font-size: 7.5rem;
font-family: 'Ibarra Real Nova';
font-style: normal;
font-weight: 400;
line-height: 100%;
margin-top: 100px;
`
const Block = styled.div`
display: flex;
margin-top: -115px;
margin-left: 550px;
width: 58.5rem;
height: 31.5rem;
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
const BoldTexteBlock = styled.div`
display: flex;
flex-direction: column;
align-self: center;
color: var(--global-secondary-black, #202124);
text-align: center;
font-size: 2rem;
font-family: 'Urbanist';
font-style: normal;
font-weight: 600;
line-height: 2.5rem;
width: 34.5rem;
`
const TexteBlock = styled.div`
display: flex;
flex-direction: column;
align-self: center;
color: var(--global-secondary-black, #202124);
text-align: center;
font-size: 1rem;
font-family: 'Urbanist';
font-style: normal;
font-weight: 400;
line-height: 150%;
width: 34.5rem;
`
const FirstInputBlock = styled.div`
display: flex;
align-items: flex-start;
gap: 1.5rem;
align-self: stretch;
width: 53.5rem;
height: 4.25rem;
flex-direction: row;
`
const InputNameBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
flex: 1 0 0;
width: 23.8125rem;
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
const Alignement = styled.div`
display: flex;
flex-direction: row;
`
const InputName = styled.input`
width: 20.8125rem;
height: 1.5rem;
display: flex;
padding: 0.75rem 1rem;
align-items: center;
flex: 1 0 0;
background: var(--global-secondary-white-highlight, #FCFCFC);
border: none;
outline: none;
`
const SiretBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
width: 11.5rem;
height: 4.25rem;
`
const SiretInput = styled.input `
display: flex;
padding: 0.75rem 1rem;
align-items: center;
background: var(--global-secondary-white-highlight, #FCFCFC);
width: 8.5rem;
height: 1.5rem;
border : none;
outline : none;
`
const ImmatriculationBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
width: 15.1875rem;
height: 4.25rem;
`
const ImmatriculationInput = styled.input`
display: flex;
padding: 0.75rem 1rem;
align-items: center;
background: var(--global-secondary-white-highlight, #FCFCFC);
width: 15.1875rem;
height: 1.5rem;
border: none;
outline: none;
`
const SecondInputBlock = styled.div`
display: flex;
align-items: flex-start;
gap: 1.5rem;
align-self: stretch;
width: 53.5rem;
height: 4.25rem;
`
const AdresseBlock= styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
flex: 1 0 0;
width: 19rem;
height: 4.25rem;
`
const AdresseInput = styled.input`
display: flex;
padding: 0.75rem 1rem;
align-items: center;
flex: 1 0 0;
width: 16rem;
height: 1.5rem;
background: var(--global-secondary-white-highlight, #FCFCFC);
border: none;
outline: none;
`
const CityInputBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
flex: 1 0 0;
width: 19rem;
height: 4.25rem;
`
const CityInput = styled.input`
display: flex;
padding: 0.75rem 1rem;
align-items: center;
flex: 1 0 0;
background: var(--global-secondary-white-highlight, #FCFCFC);
width: 16rem;
height: 1.5rem;
border: none;
outline: none;
`
const CountryBlock = styled.div`
display: flex;
width: 12.5rem;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
width: 12.5rem;
height: 4.25rem;
`
const SelectedCountry = styled.div`
display: flex;
padding: 0.75rem 1rem;
align-items: center;
flex: 1 0 0;
background: var(--global-secondary-white-highlight, #FCFCFC);
width: 9.5rem;
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
const SuppButton = styled.img<{active : boolean}>`
display: flex;
padding: 0.75rem;
align-items: flex-start;
background: var(--global-secondary-white-highlight, #FCFCFC);
width: 1.5rem;
height: 1.5rem;
cursor: pointer;
border: none;
`

const NewAccount3 = () => {

    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/login/créer-un-compte4');
    };

    //Etats
    const [entreprise, setEntreprise] = useState("");
    const [siret, setSiret] = useState("");
    const [adresse, setAdresse] =useState("");
    const [city, setCity] = useState("");
    const [isSuppBtnActive, setIsSuppBtnActive] = useState(false);

    const handleClickEntreprise = (e : React.ChangeEvent<HTMLInputElement>) =>{
        setEntreprise(e.target.value);
    };
    const handleClickSiret = (e : React.ChangeEvent<HTMLInputElement>) =>{
        setSiret(e.target.value);
    };
    const handleClickAdresse = (e : React.ChangeEvent<HTMLInputElement>) =>{
        setAdresse(e.target.value);
    };
    const handleClickCity = (e : React.ChangeEvent<HTMLInputElement>) =>{
        setCity(e.target.value);
    };
    const handleClearInput = (setState: React.Dispatch<React.SetStateAction<string>>) =>{
        setState("");
    }

    return(
        <Container>
            <HeaderNewAccount></HeaderNewAccount>
            <Title>Créer un compte</Title>
            <Block>
                <BoldTexteBlock>A propos de votre entreprise</BoldTexteBlock>
                <TexteBlock>Si vous êtes une entreprise ou un particulier il nous faudra différentes informations, c’est pourquoi nous vous posons cette question</TexteBlock>
                <FirstInputBlock>
                    <InputNameBlock>
                        <Texte>Nom de l'entreprise</Texte>
                        <Alignement>
                        <InputName placeholder = "Nom de l'entreprise" 
                                    value={entreprise} 
                                    onChange={handleClickEntreprise}></InputName>
                        <SuppButton 
                                    src={BouttonSupp} 
                                    onClick={() => handleClearInput(setEntreprise)}>
                        </SuppButton>
                        </Alignement>                   
                    </InputNameBlock>
                    <SiretBlock>
                        <Texte>Numéro de SIRET</Texte>
                        <Alignement>
                        <SiretInput placeholder = "123456789101112"
                                    value={siret}
                                    onChange={handleClickSiret}></SiretInput>
                        <SuppButton 
                                    src={BouttonSupp}
                                    onClick={() => handleClearInput(setSiret)}>
                        </SuppButton>
                        </Alignement>                  
                        </SiretBlock>
                    <ImmatriculationBlock>
                        <Texte>Immatriculation RCS</Texte>
                        <ImmatriculationInput placeholder = "RCS"></ImmatriculationInput>
                   </ImmatriculationBlock>
                </FirstInputBlock>
                <SecondInputBlock>
                        <AdresseBlock>
                            <Texte>Adresse du siège social</Texte>
                            <Alignement>
                            <AdresseInput placeholder = "18 rue du Bicentenaire" 
                                            value={adresse} 
                                            onChange={handleClickAdresse}></AdresseInput>
                            <SuppButton 
                                            src={BouttonSupp}
                                            onClick={() => handleClearInput(setAdresse)}>
                            </SuppButton>
                            </Alignement>                        
                            </AdresseBlock>
                        <CityInputBlock>
                            <Texte>Ville</Texte>
                            <Alignement>
                            <CityInput placeholder = "Massy (91000)"
                                        value={city}
                                        onChange={handleClickCity}></CityInput>
                            <SuppButton 
                                        src={BouttonSupp}
                                        onClick={() => handleClearInput(setCity)}>
                            </SuppButton>
                            </Alignement>                        
                                        </CityInputBlock>
                        <CountryBlock>
                            <Texte>Pays</Texte>
                            <SelectedCountry>France</SelectedCountry>
                        </CountryBlock>
                </SecondInputBlock>
                <ButtonBlock>
                            <ReturnButton>Précédent</ReturnButton>
                            <NextButton onClick={handleNext}>Suivant</NextButton>
                </ButtonBlock>
            </Block>
            <FooterWrapper>
            <FooterNewAccount></FooterNewAccount>
            </FooterWrapper>
        </Container>
    );
}

export default NewAccount3;