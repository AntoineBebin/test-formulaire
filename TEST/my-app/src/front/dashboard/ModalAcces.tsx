import styled from "styled-components";
import Edit from '../../front/image/edit.png';
import Lock from '../../front/image/lock.png';
import { useState } from "react";

const Container = styled.div`
display: flex;
width: 100rem;
height: 59.0625rem;
padding: 13.5625rem 15.75rem 13.5rem 15.75rem;
justify-content: center;
align-items: center;
background: rgba(32, 33, 36, 0.50);
backdrop-filter: blur(8px);
position: absolute;
top: -140px;
left: -493px;
z-index: 99;
`
const Block = styled.div`
display: flex;
width: 34.5rem;
height: 20.5rem;
padding: 3.5rem 1.5rem 1.5rem 1.5rem;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;
gap: 2.5rem;
flex-shrink: 0;
border-radius: 0.5rem;
background: var(--global-secondary-transparent-70, rgba(245, 245, 245, 0.70));
box-shadow: 0px 8px 64px 0px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
margin-top: -200px;
`
const Texte = styled.span`
color: var(--global-secondary-black, #202124);
font-family: 'Urbanist';
font-size: 0.75rem;
font-style: normal;
font-weight: 600;
line-height: 1rem;
text-transform: uppercase;
`
const EmailBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
flex: 1 0 0;
width : 31.5rem;
height : 4.25rem;
`
const EmailInput = styled.input`
display: flex;
padding: 0.75rem 1rem;
align-items: center;
flex: 1 0 0;
background: var(--global-secondary-white-highlight, #FCFCFC);
width: 28.5rem;
height: 3rem;
border: none;
`
const IconContainer = styled.img`
display: flex;
padding: 0.75rem;
align-items: flex-start;
background: var(--global-secondary-white-highlight, #FCFCFC);
width: 1.5rem;
height: 1.5rem;
cursor: pointer;
`
const PasswordBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
flex: 1 0 0;
width: 31.5rem;
height: 4.25rem;
`
const PasswordInput = styled.input`
display: flex;
padding: 0.75rem 1rem;
align-items: center;
flex: 1 0 0;
background: var(--global-secondary-white-highlight, #FCFCFC);
width: 28.5rem;
height: 3rem;
border : none;
`
const ButtonBlock = styled.div`
display: flex;
align-items: center;
gap: 1.5rem;
width: 21.8125rem;
height: 3rem;
`
const GreyButtonTexte = styled.span`
color: var(--global-secondary-black, #202124);
font-family: 'Urbanist';
font-size: 0.875rem;
font-style: normal;
font-weight: 600;
line-height: 1.5rem;
text-transform: uppercase;
cursor: pointer;
`
const RegisterButton = styled.button`
display: flex;
padding: 0.75rem 1.25rem;
justify-content: center;
align-items: center;
gap: 0.5rem;
border-radius: 0.25rem;
background: var(--editeur-main-dandelion, #FFD966);
width: 16.5rem;
height: 3rem;
color: var(--global-secondary-black, #202124);
font-family: 'Urbanist';
font-size: 0.875rem;
font-style: normal;
font-weight: 600;
line-height: 1.5rem;
text-transform: uppercase;
cursor: pointer;
border: none;
`
const TitleBlock = styled.div`
display: flex;
padding: 1rem 2rem;
align-items: flex-start;
gap: 0.5rem;
position: absolute;
z-index: 1;
left: 46rem;
top: 22rem;
border-radius: 0.25rem;
background: var(--global-secondary-white-highlight, #FCFCFC);
box-shadow: 0px 8px 56px 0px rgba(32, 33, 36, 0.06);
`
const Title = styled.span`
color: var(--global-secondary-black, #202124);
font-family: 'Urbanist';
font-size: 1.5rem;
font-style: normal;
font-weight: 600;
line-height: 2rem;
`
const IconTitle = styled.img`
width: 2rem;
height: 2rem;
`

const ModalAcces = () => {

    const [isOpen, setIsopen] = useState(true);

    const closeModal = () => {
        setIsopen(false);
    }

    return(
        <>
        {isOpen && (
        <Container>
            <TitleBlock>
                <IconTitle src={Lock}></IconTitle>
                <Title>Accès</Title>
            </TitleBlock>
            <Block>
                <EmailBlock>
                    <Texte>Adresse email</Texte>
                    <EmailInput placeholder = "Email"></EmailInput>
                    <IconContainer src={Edit}></IconContainer>
                </EmailBlock>
                <PasswordBlock>
                    <Texte>Mot de passe</Texte>
                    <PasswordInput placeholder = "Mot de passe"></PasswordInput>
                    <IconContainer src={Edit}></IconContainer>
                </PasswordBlock>
                <ButtonBlock>
                    <GreyButtonTexte onClick={closeModal}>Annuler</GreyButtonTexte>
                    <RegisterButton>Enregistrer mes informations</RegisterButton>
                </ButtonBlock>
            </Block>
        </Container>
        )}
        </>
    );
};

export default ModalAcces;