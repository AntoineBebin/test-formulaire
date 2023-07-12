import styled from "styled-components";
import SuppBtn from '../../front/image/BtnSupp.png';
import Profil from "../../front/image/information-perso.png";
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
const ModalBlock = styled.div`
display: flex;
width: 58.5rem;
height: 32rem;
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
z-index: 98;
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
const FirstInputBlock = styled.div`
display: flex;
align-items: flex-start;
gap: 1.5rem;
align-self: stretch;
width: 58rem;
height: 4.25rem;
`
const NameBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
flex: 1 0 0;
width: 20rem;
height: 4.25rem;
`
const NameInput = styled.input`
display: flex;
padding: 0.75rem 1rem;
align-items: center;
flex: 1 0 0;
background: var(--global-secondary-white-highlight, #FCFCFC);
width: 20rem;
height: 3rem;
border: none;
`
const StatutBlock = styled.div`
display: flex;
width: 12.5rem;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
width: 12.5rem;
height: 4.25rem;
`
const SelectStatut = styled.div`
display: flex;
padding: 0.75rem 1rem;
align-items: center;
justify-content: space-between;
flex: 1 0 0;
overflow: hidden;
color: var(--global-secondary-black, #202124);
background: var(--global-secondary-white-highlight, #FCFCFC);
text-overflow: ellipsis;
font-family: 'Urbanist';
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 1.5rem;
width: 12.5rem;
height: 3rem;
`
const SecondInputBlock = styled.div`
display: flex;
align-items: flex-start;
gap: 1.5rem;
align-self: stretch;
width: 58rem;
height: 4.25rem;
`
const EmailBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
flex: 1 0 0;
width: 42.3125rem;
height: 4.25rem;
`
const EmailInput = styled.input`
display: flex;
padding: 0.75rem 1rem;
align-items: center;
flex: 1 0 0;
background: var(--global-secondary-white-highlight, #FCFCFC);
height: 3rem;
width: 42.3125rem;
border: none;
`
const TelephoneBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
width: 11.6875rem;
height: 4.25rem;
`
const YellowBlockTelephone = styled.div`
display: flex;
width: 1rem;
height: 3rem;
padding: 0.75rem 1rem;
justify-content: center;
align-items: center;
border-radius: 0.25rem 0rem 0rem 0.25rem;
background: var(--editeur-main-dandelion, #FFD966);
box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
`
const TelephoneInput = styled.input`
display: flex;
padding: 0.75rem 1rem;
align-items: center;
background: var(--global-secondary-white-highlight, #FCFCFC);
width: 8.6875rem;
height: 3rem;
border: none;
`
const ThirdInputBlock = styled.div`
display: flex;
align-items: flex-start;
gap: 1.5rem;
align-self: stretch;
width: 58rem;
height: 4.25rem;
`
const EntrepriseBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
flex: 1 0 0;
width: 25.8125rem;
height: 4.25rem;
`
const EntrepriseInput = styled.input`
display: flex;
padding: 0.75rem 1rem;
align-items: center;
flex: 1 0 0;
background: var(--global-secondary-white-highlight, #FCFCFC);
width: 22.8125rem;
height: 3rem;
border: none;
`
const SuppButton = styled.img`
display: flex;
padding: 0.75rem;
align-items: flex-start;
background: var(--global-secondary-white-highlight, #FCFCFC);
width: 1.5rem;
height: 1.5rem;
border: none;
`
const SiretBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
width: 11.5rem;
height: 4.25rem;
`
const SiretInput = styled.input`
display: flex;
padding: 0.75rem 1rem;
align-items: center;
background: var(--global-secondary-white-highlight, #FCFCFC);
width: 8.5rem;
height: 3rem;
border: none;
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
height: 3rem;
border: none;
`
const Alignement = styled.div`
display: flex;
flex-direction: row;
`
const FourthInputBlock = styled.div`
display: flex;
align-items: flex-start;
gap: 1.5rem;
align-self: stretch;
width: 58rem;
height: 4.25rem;
`
const AdresseBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
flex: 1 0 0;
width: 20rem;
height: 4.25rem;
`
const AdresseInput = styled.input `
display: flex;
padding: 0.75rem 1rem;
align-items: center;
flex: 1 0 0;
background: var(--global-secondary-white-highlight, #FCFCFC);
width: 17rem;
height: 3rem;
border: none;
`
const CityBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
flex: 1 0 0;
width: 20rem;
height: 4.25rem;
`
const CityInput = styled.input`
display: flex;
padding: 0.75rem 1rem;
align-items: center;
flex: 1 0 0;
background: var(--global-secondary-white-highlight, #FCFCFC);
width: 17rem;
height: 3rem;
border: none;
`
const CountryBlock = styled.div`
display: flex;
width: 12.5rem;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
height: 4.25rem;
`
const SelectCountry = styled.div`
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
align-items: center;
gap: 1.5rem;
width: 21.8125rem;
height: 3rem;
`
const CancelButton = styled.button `
color: var(--global-secondary-black, #202124);
background: rgba(245, 245, 245, 0.70);
border: none;
font-family: 'Urbanist';
font-size: 0.875rem;
font-style: normal;
font-weight: 600;
line-height: 1.5rem;
text-transform: uppercase;
width: 3.8125rem;
height: 3rem;
border-radius: 0.5rem;
cursor: pointer;
`
const RegisterButton = styled.button`
display: flex;
padding: 0.75rem 1.25rem;
justify-content: center;
align-items: center;
color: var(--global-secondary-black, #202124);
font-family: 'Urbanist';
font-size: 0.875rem;
font-style: normal;
font-weight: 600;
line-height: 1.5rem;
text-transform: uppercase;
gap: 0.5rem;
border-radius: 0.25rem;
background: var(--editeur-main-dandelion, #FFD966);
width: 16.5rem;
border: none;
height: 3rem;
cursor: pointer;
`
const TitleBlock = styled.div`
display: flex;
padding: 1rem 2rem;
align-items: center;
gap: 0.5rem;
border-radius: 0.25rem;
background: var(--global-secondary-white-highlight, #FCFCFC);
box-shadow: 0px 8px 56px 0px rgba(32, 33, 36, 0.06);
position: absolute;
left: 34rem;
top: 22rem;
width: 23.6875rem;
height: 4rem;
z-index: 99;
`
const Title = styled.span`
color: var(--global-secondary-black, #202124);
font-family: 'Urbanist';
font-size: 1.5rem;
font-style: normal;
font-weight: 600;
line-height: 2rem;
`
const TitleIcon = styled.img`
width: 2rem;
height: 2rem;
`

const ModalPersonnalInfo = () => {

    const [isOpen, setIsopen] = useState(true);

    const closeModal = () => {
        setIsopen(false);
    }

    return(
        <>
        {isOpen && (
        <Container>
            <ModalBlock>
                <FirstInputBlock>
                    <NameBlock>
                        <Texte>Prénom du représentant légal</Texte>
                        <NameInput placeholder="Prénom"></NameInput>
                    </NameBlock>
                    <NameBlock>
                        <Texte>Nom du représentant légal</Texte>
                        <NameInput placeholder = "Nom"></NameInput>
                    </NameBlock>
                    <StatutBlock>
                        <Texte>Quel est votre statut</Texte>
                        <SelectStatut>Entreprise SARL</SelectStatut>
                    </StatutBlock>
                </FirstInputBlock>
                <SecondInputBlock>
                    <EmailBlock>
                        <Texte>Adresse email du représentant légal</Texte>
                        <EmailInput placeholder="fan-de-dejavu-1@hotmail.com"></EmailInput>
                    </EmailBlock>
                    <TelephoneBlock>
                        <Texte>Tél. du représentant légal</Texte>
                        <YellowBlockTelephone>+33</YellowBlockTelephone>
                        <TelephoneInput placeholder="123456789"></TelephoneInput>
                    </TelephoneBlock>
                </SecondInputBlock>
                <ThirdInputBlock>
                    <EntrepriseBlock>
                        <Texte>Nom de l'entreprise</Texte>
                        <EntrepriseInput placeholder="Nom de l'entreprise"></EntrepriseInput>
                        <SuppButton src={SuppBtn}></SuppButton>
                    </EntrepriseBlock>
                    <SiretBlock>
                        <Texte>Numéro de SIRET</Texte>
                        <SiretInput placeholder="123456789101112"></SiretInput>
                        <SuppButton src={SuppBtn}></SuppButton>
                    </SiretBlock>
                    <ImmatriculationBlock>
                        <Texte>Immatriculation RCS</Texte>
                        <ImmatriculationInput placeholder="RCS PARIS B 517403572"></ImmatriculationInput>
                    </ImmatriculationBlock>
                </ThirdInputBlock>
                <FourthInputBlock>
                    <AdresseBlock>
                        <Texte>Adresse du siège social</Texte>
                        <AdresseInput placeholder="Adresse"></AdresseInput>
                        <SuppButton src={SuppBtn}></SuppButton>
                    </AdresseBlock>
                    <CityBlock>
                        <Texte>Ville</Texte>
                        <CityInput placeholder="Ville"></CityInput>
                        <SuppButton src={SuppBtn}></SuppButton>
                    </CityBlock>
                    <CountryBlock>
                        <Texte>Pays</Texte>
                        <SelectCountry>France</SelectCountry>
                    </CountryBlock>
                </FourthInputBlock>
                <ButtonBlock>
                    <CancelButton onClick={closeModal}>Annuler</CancelButton>
                    <RegisterButton>Enregistrer mes informations</RegisterButton>
                </ButtonBlock>
            </ModalBlock>
            <TitleBlock>
                <TitleIcon src={Profil}></TitleIcon>
                <Title>Informations personnelles</Title>
            </TitleBlock>
        </Container>
        )}
        </>
    )
};

export default ModalPersonnalInfo;