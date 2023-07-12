import styled from "styled-components";
import Card from '../../front/image/blueCard.png';
import Circle from '../../front/image/circle.png';
import Trash from '../../front/image/trash.png';
import SuppButton from '../../front/image/BtnSupp.png';
import BlackCard from '../../front/image/card.png';
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
width: 58.5rem;
height: 30.5rem;
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
const BlueTexte = styled.span`
color: var(--cra-main-metallic-seaweed, #0E738A);
text-align: center;
font-family: 'Urbanist';
font-size: 1rem;
font-style: normal;
font-weight: 800;
line-height: 100%;
`
const InputBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 1.5rem;
align-self: stretch;
width: 55.5rem;
height: 20rem;
`
const PaiementBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.5rem;
width: 23.1875rem;
height: 4rem;
`
const Alignement = styled.div`
display: flex;
flex-direction: row;
gap: 1rem;
`
const Alignement2 = styled.div`
display: flex;
flex-direction: row;
`
const CardBlock = styled.div`
display: flex;
padding: 0.75rem;
align-items: center;
gap: 0.5rem;
border-radius: 0.25rem;
border: 2px solid var(--cra-main-metallic-seaweed, #0E738A);
background: var(--global-secondary-white-highlight, #FCFCFC);
box-shadow: 0px 8px 56px 0px rgba(32, 33, 36, 0.06);
color: var(--cra-main-metallic-seaweed, #0E738A);
text-align: center;
font-family: 'Urbanist';
font-size: 1rem;
font-style: normal;
font-weight: 800;
line-height: 100%;
`
const Icon = styled.img`
width: 1rem;
height: 1rem;
`
const PrelevementBlock = styled.div`
display: flex;
padding: 0.75rem;
align-items: center;
gap: 0.5rem;
border-radius: 0.25rem;
background: var(--global-secondary-white-highlight, #FCFCFC);
box-shadow: 0px 8px 56px 0px rgba(32, 33, 36, 0.06);
color: var(--global-secondary-grey-grey, #B7B7B7);
text-align: center;
font-family: 'Urbanist';
font-size: 1rem;
font-style: normal;
font-weight: 500;
line-height: 100%;
`
const FirstLine = styled.div`
display: flex;
width: 48.375rem;
height: 3rem;
align-items: center;
gap: 2rem;
`
const FirstInputBlock = styled.div`
display: flex;
padding: 0.5rem 1rem;
align-items: center;
gap: 2rem;
background: var(--global-secondary-white-highlight, #FCFCFC);
width: 33.4375rem;
height: 2rem;
`
const NameDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 0.25rem;
`
const InputDiv = styled.input`
color: var(--global-secondary-black, #202124);
font-family: 'Urbanist';
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 1rem;
border: none;
`
const GreyDiv = styled.span`
color: var(--global-secondary-grey-darker, #6C6D70);
font-family: 'Urbanist';
font-size: 0.75rem;
font-style: normal;
font-weight: 600;
line-height: 0.75rem;
text-transform: uppercase;
`
const NumDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 0.25rem;
`
const NumInput = styled.input`
color: var(--global-secondary-black, #202124);
font-family: 'Urbanist';
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 1rem;
border: none;
width: 6.8125rem ;
`
const RedButton = styled.button`
display: flex;
padding: 0.75rem;
align-items: center;
gap: 0.25rem;
background: var(--global-status-danger-bittersweet-shimmer, #C24E4E);
width: 14.9375rem;
height: 3rem;
color: var(--global-secondary-white-highlight, #FCFCFC);
font-family: 'Urbanist';
font-size: 0.75rem;
font-style: normal;
font-weight: 600;
line-height: 1.5rem;
text-transform: uppercase;
cursor: pointer;
border: none;
`
const TrashIcon = styled.img`
width: 1.5rem;
height: 1.5rem;
`
const SecondLine = styled.div`
display: flex;
width: 55.5rem;
height: 3rem;
align-items: center;
gap: 2rem;
`
const SecondInputBlock =styled.div`
display: flex;
align-items: flex-start;
gap: 1.5rem;
align-self: stretch;
width: 55.5rem;
height: 4.25rem;
`
const EntrepriseBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
flex: 1 0 0;
width: 26.125rem;
height: 4.25rem;
`
const EntrepriseInput = styled.input`
display: flex;
padding: 0.75rem 1rem;
align-items: center;
flex: 1 0 0;
background: var(--global-secondary-white-highlight, #FCFCFC);
width: 23.125rem;
height: 1.5rem;
border: none;
overflow: hidden;
color: var(--global-secondary-black, #202124);
text-overflow: ellipsis;
font-family: 'Urbanist';
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 1.5rem;
`
const SuppBtn = styled.img`
display: flex;
padding: 0.75rem;
align-items: flex-start;
background: var(--global-secondary-white-highlight, #FCFCFC);
width: 1.5rem;
height: 1.5rem;
`
const TelBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
width: 14.6875rem;
height: 4.25rem;
`
const TelYellowBlock = styled.div`
display: flex;
width: 1.5rem;
height: 1.5rem;
padding: 0.75rem 1rem;
justify-content: center;
align-items: center;
border-radius: 0.25rem 0rem 0rem 0.25rem;
background: var(--editeur-main-dandelion, #FFD966);
box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
`
const TelInput = styled.input`
display: flex;
padding: 0.75rem 1rem;
align-items: center;
background: var(--global-secondary-white-highlight, #FCFCFC);
width: 11.6875rem;
height: 1.5rem;
border: none;
`
const TvaBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
width: 11.6875rem;
height: 4.25rem;
`
const TvaInput = styled.input`
display: flex;
padding: 0.75rem 1rem;
align-items: center;
background: var(--global-secondary-white-highlight, #FCFCFC);
border: none;
width: 8.6875rem;
height: 1.5rem;
overflow: hidden;
color: var(--global-secondary-black, #202124);
text-overflow: ellipsis;
font-family: 'Urbanist';
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 1.5rem;
`
const ThirdLine = styled.div`
display: flex;
width: 55.5rem;
height: 3rem;
align-items: center;
gap: 2rem;
`
const ThirdInputBlock = styled.div`
display: flex;
align-items: flex-start;
gap: 1.5rem;
align-self: stretch;
width: 55.5rem;
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
const AdresseInput = styled.input`
display: flex;
padding: 0.75rem 1rem;
align-items: center;
flex: 1 0 0;
background: var(--global-secondary-white-highlight, #FCFCFC);
overflow: hidden;
color: var(--global-secondary-black, #202124);
text-overflow: ellipsis;
font-family: 'Urbanist';
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 1.5rem;
width: 17rem;
height: 1.5rem;
border : none;
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
border: none;
background: var(--global-secondary-white-highlight, #FCFCFC);
width: 17rem;
height: 1.5rem;
overflow: hidden;
color: var(--global-secondary-black, #202124);
text-overflow: ellipsis;
font-family: 'Urbanist';
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 1.5rem;
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
const CountryDiv = styled.div`
display: flex;
padding: 0.75rem 1rem;
align-items: center;
flex: 1 0 0;
background: var(--global-secondary-white-highlight, #FCFCFC);
width: 12.5rem;
height: 1.5rem;
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
left: 33rem;
top: 23rem;
z-index: 1;
border-radius: 0.25rem;
background: var(--global-secondary-white-highlight, #FCFCFC);
box-shadow: 0px 8px 56px 0px rgba(32, 33, 36, 0.06);
`
const Tittle = styled.span`
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

const ModalFacture = () => {

    const [isOpen, setIsopen] = useState(true);

    const closeModal = () => {
        setIsopen(false);
    }

    return (
        <>
        {isOpen && (
        <Container>
            <TitleBlock>
                <TitleIcon src={BlackCard}></TitleIcon>
                <Tittle>Paiement et facturation</Tittle>
            </TitleBlock>
            <Block>
                <InputBlock>
                    <PaiementBlock>
                        <Texte>Mode de paiement</Texte>
                        <Alignement>
                            <CardBlock>
                                <Icon src={Card}></Icon>
                                <BlueTexte>Carte bleu</BlueTexte>
                            </CardBlock>
                        <PrelevementBlock>
                            <Icon src={Circle}></Icon>
                            Prélevement automatique
                        </PrelevementBlock>
                        </Alignement>
                    </PaiementBlock>
                    <FirstInputBlock>
                        <FirstLine>
                        <NameDiv>
                            <GreyDiv>Titulaire de la carte</GreyDiv>
                            <InputDiv placeholder="Titulaire de la carte"></InputDiv>
                        </NameDiv>
                        <NumDiv>
                            <GreyDiv>Numéro de carte</GreyDiv>
                            <NumInput placeholder="Numéro de carte"></NumInput>
                        </NumDiv>
                        <NumDiv>
                            <GreyDiv>Date d'expiration</GreyDiv>
                            <NumInput placeholder="Date"></NumInput>
                        </NumDiv>
                        <RedButton><TrashIcon src={Trash}></TrashIcon>Changer de mode de paiement</RedButton>
                        </FirstLine>
                    </FirstInputBlock>
                    <SecondInputBlock>
                        <SecondLine>
                            <EntrepriseBlock>
                                <Texte>Nom de l'entreprise</Texte>
                                <Alignement2>
                                <EntrepriseInput placeholder="Nom de l'entreprise"></EntrepriseInput>
                                <SuppBtn src={SuppButton}></SuppBtn>
                                </Alignement2>
                            </EntrepriseBlock>
                            <TelBlock>               
                                <Texte>Numéro de téléphone</Texte>
                                <Alignement2>
                                <TelYellowBlock>+33</TelYellowBlock>
                                <TelInput placeholder="123456789"></TelInput>
                                </Alignement2>
                            </TelBlock>
                            <TvaBlock>
                                <Texte>Numéro de TVA</Texte>
                                <Alignement2>
                                    <TvaInput placeholder="FR 12345678910"></TvaInput>
                                    <SuppBtn src={SuppButton}></SuppBtn>
                                </Alignement2>
                            </TvaBlock>
                        </SecondLine>
                    </SecondInputBlock>
                    <ThirdInputBlock>
                        <ThirdLine>
                            <AdresseBlock>
                                <Texte>Adresse du siège social</Texte>
                                <Alignement2>
                                    <AdresseInput placeholder="18 Bis Rue du Bicentenaire de la Révolution, Le Plessis-Pâté, 91220"></AdresseInput>
                                    <SuppBtn src={SuppButton}></SuppBtn>
                                </Alignement2>
                            </AdresseBlock>
                            <CityBlock>
                                <Texte>Ville</Texte>
                                <Alignement2>
                                    <CityInput placeholder = "Massy (91000)"></CityInput>
                                    <SuppBtn src={SuppButton}></SuppBtn>
                                </Alignement2>
                            </CityBlock>
                            <CountryBlock>
                                <Texte>Pays</Texte>
                                <Alignement2>
                                    <CountryDiv>France</CountryDiv>
                                </Alignement2>
                            </CountryBlock>
                        </ThirdLine>
                    </ThirdInputBlock>
                </InputBlock>
                <ButtonBlock>
                    <GreyButtonTexte onClick={closeModal}>Annuler</GreyButtonTexte>
                    <RegisterButton>Enregistrer les modifications</RegisterButton>
                </ButtonBlock>
            </Block>
        </Container>
        )}
        </>
    );
};

export default ModalFacture;