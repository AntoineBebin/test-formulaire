import styled from "styled-components";
import Background from '../../image/Background_Pattern.svg';
import HeaderNewAccount from "../HeaderNewAccount";
import FooterNewAccount from "../../mainPage/Footer";
import BouttonSupp from '../../image/BtnSupp.png';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


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
height: 29.75rem;
position: relative;
top: -120px;
left : 550px;
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
height: 9.75rem;
`
const FirstBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.5rem;
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
const BlockPaiement = styled.div`
display: flex;
flex-direction: row;
`
const BlockChoice = styled.div`
display: flex;
padding: 0.75rem;
align-items: center;
gap: 0.5rem;
border-radius: 0.25rem;
border: 2px solid var(--cra-main-metallic-seaweed, #0E738A);
background: var(--global-secondary-white-highlight, #FCFCFC);
box-shadow: 0px 8px 56px 0px rgba(32, 33, 36, 0.06);
`
const Choice = styled.div`
display: flex;
padding: 0.75rem;
align-items: center;
gap: 0.5rem;
border-radius: 0.25rem;
background: var(--global-secondary-white-highlight, #FCFCFC);
box-shadow: 0px 8px 56px 0px rgba(32, 33, 36, 0.06);
color: var(--global-secondary-grey-grey, #B7B7B7);
text-align: center;
font-size: 1rem;
font-family: 'Urbanist';
font-style: normal;
font-weight: 800;
line-height: 100%;
`
const SecondBlock = styled.div`
display: flex;
align-items: flex-start;
gap: 1.5rem;
align-self: stretch;
width: 53.5rem;
height: 4.25rem;
`
const NameBlock = styled.div`
width: 20.5625rem;
height: 4.25rem;
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
flex: 1 0 0;
`
const InputName = styled.input`
display: flex;
padding: 0.75rem 1rem;
align-items: center;
flex: 1 0 0;
background: var(--global-secondary-white-highlight, #FCFCFC);
overflow: hidden;
color: var(--global-secondary-black, #202124);
text-overflow: ellipsis;
font-size: 1rem;
font-family: 'Urbanist';
font-style: normal;
font-weight: 400;
line-height: 1.5rem;
width: 17.5625rem;
height: 3rem;
border: none;
outline : none;
`
const CardBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
width: 13.0625rem;
height: 4.25rem;
`
const CardInput = styled.input`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
background: var(--global-secondary-white-highlight, #FCFCFC);
width: 10.0625rem;
height: 3rem;
color: var(--global-secondary-black, #202124);
font-size: 1rem;
font-family: 'Urbanist';
font-style: normal;
font-weight: 400;
line-height: 1.5rem;
border: none;
outline : none;
`
const DateBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
width: 8.6875rem;
height: 4.25rem;
`
const DateInput = styled.input`
display: flex;
padding: 0.75rem 1rem;
align-items: center;
background: var(--global-secondary-white-highlight, #FCFCFC);
width: 5.6875rem;
height: 3rem;
border: none;
outline : none;
`
const Cvv = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
width: 6.6875rem;
height: 4.25rem;
`
const CvvInput = styled.input`
display: flex;
padding: 0.75rem 1rem;
align-items: center;
background: var(--global-secondary-white-highlight, #FCFCFC);
width: 3.6875rem;
height: 3rem;
border: none;
outline : none;
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

const NewAccount5 = () => {

    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/login/créer-un-compte6');
    };

    //Etats
    const [name, setName] = useState("");
    const [numero, setNumero] = useState("");
    const [date, setDate] = useState("");
    const [cvv, setCvv] = useState("");

    const handleClickName = (e : React.ChangeEvent<HTMLInputElement>) =>{
        setName(e.target.value);
    };
    const handleClickNumero = (e : React.ChangeEvent<HTMLInputElement>) =>{
        setNumero(e.target.value);
    };
    const handleClickDate = (e : React.ChangeEvent<HTMLInputElement>) =>{
        setDate(e.target.value);
    };
    const handleClickCvv = (e : React.ChangeEvent<HTMLInputElement>) =>{
        setCvv(e.target.value);
    };

    return(
        <Container>
            <HeaderNewAccount></HeaderNewAccount>
            <Title>Créer un compte</Title>
            <Block>
                <BoldTextBlock>Choisissez un moyen de paiement</BoldTextBlock>
                <TexteBlock>Blabla sur le paiement</TexteBlock>
                <InputBlock>
                    <FirstBlock>
                        <Texte>Mode de paiement</Texte>
                        <BlockPaiement>
                        <BlockChoice>Carte bleu</BlockChoice>
                        <Choice>Prélevement automatique</Choice>
                        </BlockPaiement>
                    </FirstBlock>
                    <SecondBlock>
                        <NameBlock>
                            <Texte>Titulaire de la carte</Texte>
                            <InputName placeholder = "Nom du titulaire"
                                        value={name}
                                        onChange={handleClickName}></InputName>
                            <SuppButtonContainer><SuppButton
                                        src={BouttonSupp}
                                        onClick={handleClickName}></SuppButton></SuppButtonContainer>
                        </NameBlock>
                        <CardBlock>
                            <Texte>Numéro de carte</Texte>
                            <CardInput placeholder="Numéro de carte"
                                        value={numero}
                                        onChange={handleClickNumero}></CardInput>
                                        <SuppButtonContainer><SuppButton
                                        src={BouttonSupp}
                                        onClick={handleClickNumero}></SuppButton></SuppButtonContainer>
                        </CardBlock>
                        <DateBlock>
                            <Texte>Date d'expiration</Texte>
                            <DateInput placeholder = "mm/yy"
                                        value={date}
                                        onChange={handleClickDate}></DateInput>
                                        <SuppButtonContainer><SuppButton
                                        src={BouttonSupp}
                                        onClick={handleClickDate}></SuppButton></SuppButtonContainer>
                        </DateBlock>
                        <Cvv>
                            <Texte>CVV</Texte>
                            <CvvInput placeholder = "420"
                                        value={cvv}
                                        onChange={handleClickCvv}></CvvInput>
                                        <SuppButtonContainer><SuppButton
                                        src={BouttonSupp}
                                        onClick={handleClickCvv}></SuppButton></SuppButtonContainer>
                        </Cvv>
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

export default NewAccount5;