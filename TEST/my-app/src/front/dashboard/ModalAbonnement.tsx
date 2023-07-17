import styled from "styled-components";
import FilterBar from "../loginPage/newAccount/FilterBar";
import { useState } from "react";
import Abo from '../../front/image/abonnement.png';

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
height: 42rem;
padding: 3.5rem 1.5rem 1.5rem 1.5rem;
flex-direction: column;
justify-content: flex-end;
align-items: center;
gap: 2.5rem;
flex-shrink: 0;
border-radius: 0.5rem;
background: var(--global-secondary-transparent-70, rgba(245, 245, 245, 0.70));
box-shadow: 0px 8px 64px 0px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
z-index: 98;
`
const FilterBarWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1rem;
align-self: center;
width: 52.5rem;
height: 3.75rem;
border: solid black 1px;
`
const BarText = styled.span`
color: var(--global-secondary-black, #202124);
text-align: center;
font-family: 'Urbanist';
font-size: 1.25rem;
font-style: normal;
font-weight: 400;
line-height: 1.5rem;
`
const BlueBarText = styled.span`
color: var(--cra-main-metallic-seaweed, #0E738A);
text-align: center;
font-family: 'Urbanist';
font-size: 1.25rem;
font-style: normal;
font-weight: 700;
line-height: 1.5rem;
`
const OffreBlock = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
gap: 1.5rem;
width: 52.5rem;
height: 21.75rem;
`
const Card = styled.div`
display: flex;
width: 16.5rem;
height: 21.75rem;
padding: 1.5rem;
flex-direction: column;
align-items: center;
gap: 2rem;
align-self: stretch;
border-radius: 0.5rem;
background: var(--global-secondary-white-highlight, #FCFCFC);
box-shadow: 0px 8px 56px 0px rgba(32, 33, 36, 0.06);
`
const BlueCard = styled.div`
display: flex;
width: 16.5rem;
height: 21.75rem;
padding: 1.5rem;
flex-direction: column;
align-items: center;
gap: 2rem;
align-self: stretch;
border-radius: 0.5rem;
background: var(--global-secondary-white-highlight, #FCFCFC);
box-shadow: 0px 8px 56px 0px rgba(32, 33, 36, 0.06);
border: #0E738A ;
`
const BoldTexte = styled.span`
display: flex;
flex-direction: column;
align-self: stretch;
color: var(--global-secondary-black, #202124);
font-family: 'Urbanist';
font-size: 2.5rem;
font-style: normal;
font-weight: 700;
line-height: 100%;
`
const BoldBlueTexte = styled.span`
display: flex;
flex-direction: column;
align-self: stretch;
color: var(--cra-main-metallic-seaweed, #0E738A);
font-family: 'Urbanist';
font-size: 2.5rem;
font-style: normal;
font-weight: 700;
line-height: 100%;
`
const Texte = styled.span`
color: #202124;
font-family: 'Urbanist';
font-size: 0.75rem;
font-style: normal;
font-weight: 400;
line-height: 1rem;
`
const TexteBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 2rem;
align-self: stretch;
width: 13.5rem;
height: 6.75rem;
`
const DecouverteTitle = styled.div`
display: flex;
padding: 0.25rem 0.5rem;
flex-direction: column;
align-items: flex-start;
gap: 1rem;
border-radius: 0.25rem;
background: var(--global-secondary-grey-lighter, #E6E6E6);
width: 5.8125rem;
height: 1.5rem;
color: var(--global-secondary-grey-darker, #6C6D70);
font-family: 'Urbanist';
font-size: 0.75rem;
font-style: normal;
font-weight: 700;
line-height: 1rem;
text-transform: uppercase;
`
const FonctionnaliteBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 1.5rem;
align-self: stretch;
width: 13.5rem;
height: 10rem;
`
const Pro = styled.div`
display: flex;
padding: 0.25rem 0.5rem;
flex-direction: column;
align-items: flex-start;
gap: 1rem;
border-radius: 0.25rem;
background: var(--cra-main-lighter-shade-2, #CFE3E8);
width: 2.4375rem;
height: 1.5rem;
color: var(--cra-main-metallic-seaweed, #0E738A);
font-family: 'Urbanist';
font-size: 0.75rem;
font-style: normal;
font-weight: 700;
line-height: 1rem;
text-transform: uppercase;
`
const ProPlus = styled.div`
display: flex;
padding: 0.25rem 0.5rem;
flex-direction: column;
align-items: flex-start;
gap: 1rem;
border-radius: 0.25rem;
background: var(--event-main-lighter-shade-2, #E5DEF3);
width: 2.875rem;
height: 1.5rem;
color: var(--event-main-dark-pastel-purple, #7F5CC4);
font-family: 'Urbanist';
font-size: 0.75rem;
font-style: normal;
font-weight: 700;
line-height: 1rem;
text-transform: uppercase;
`
const GreyTexte = styled.span`
color: #6c6d70;
text-transform: uppercase;
`
const BlueTexte = styled.span`
color: #0e738a;
text-transform: uppercase;
`
const ComparaisonButton = styled.button`
display: flex;
padding: 0.75rem 1.25rem;
justify-content: center;
align-items: center;
gap: 0.5rem;
align-self: stretch;
border-radius: 0.25rem;
border: 2px solid var(--global-secondary-black, #202124);
background-color: rgba(245, 245, 245, 0.70);
width: 52.5rem;
height: 3rem;
color: var(--global-secondary-black, #202124);
font-family: 'Urbanist';
font-size: 0.875rem;
font-style: normal;
font-weight: 600;
line-height: 1.5rem;
text-transform: uppercase;
cursor: pointer;
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
left: 32rem;
top: 18rem;
border-radius: 0.25rem;
background: var(--global-secondary-white-highlight, #FCFCFC);
box-shadow: 0px 8px 56px 0px rgba(32, 33, 36, 0.06);
color: var(--global-secondary-black, #202124);
font-family: 'Urbanist';
font-size: 1.5rem;
font-style: normal;
font-weight: 600;
line-height: 2rem;
z-index: 1;
`
const IconTitle = styled.img`
width: 2rem;
height: 2rem;
`

const ModalAbonnement = () => {

    const [isOpen, setIsopen] = useState(true);
    const [positionX, setPositionX] = useState(0);

    const closeModal = () => {
        setIsopen(false);
    };

    const handlePositionXChange = (newX: number) => {
        setPositionX(newX);
    }

    return(
        <>
        {isOpen && (
        <Container>
            <TitleBlock>
                <IconTitle src={Abo}></IconTitle>
                Mon abonnement
            </TitleBlock>
           <Block>
            <FilterBarWrapper>
                <BarText>Entreprise de <BlueBarText>{positionX}</BlueBarText> salariés</BarText>
            <FilterBar positionX={positionX} onPositionXChange={handlePositionXChange}></FilterBar>
            </FilterBarWrapper>
            <OffreBlock>
                <Card>
                    <TexteBlock>
                        <DecouverteTitle>Découverte</DecouverteTitle>
                        <BoldTexte>Gratuit<Texte>(à vie)</Texte></BoldTexte>                       
                    </TexteBlock>
                    <FonctionnaliteBlock>
                        <Texte>Inclus:</Texte>
                        <Texte>Fonctionnalité 1</Texte>
                        <Texte>Fonctionnalité 2 plus de place blabla</Texte>
                        <Texte>Fonctionnalité 1</Texte>
                        <Texte>Fonctionnalité 1</Texte>
                    </FonctionnaliteBlock>
                </Card>
                <BlueCard>
                    <TexteBlock>
                        <Pro>PRO</Pro>
                        <BoldBlueTexte>196.80€*<Texte>Par mois</Texte></BoldBlueTexte>
                    </TexteBlock>
                    <FonctionnaliteBlock>
                        <Texte>Toutes les fonctions <GreyTexte>découverte,</GreyTexte> plus</Texte>
                        <Texte>Fonctionnalité 1</Texte>
                        <Texte>Fonctionnalité 2 plus de place blabla</Texte>
                        <Texte>Fonctionnalité 1</Texte>
                        <Texte>Fonctionnalité 1</Texte>
                    </FonctionnaliteBlock>
                </BlueCard>
                <Card>
                    <TexteBlock>
                        <ProPlus>PRO+</ProPlus>
                        <BoldTexte>Sur devis<Texte>Tarif sur-mesure selon votre besoin</Texte></BoldTexte>
                    </TexteBlock>
                    <FonctionnaliteBlock>
                        <Texte>Toutes les fonctions <BlueTexte>PRO</BlueTexte> et aussi:</Texte>
                        <Texte>Fonctionnalité 1</Texte>
                        <Texte>Fonctionnalité 2 plus de place blabla</Texte>
                        <Texte>Fonctionnalité 1</Texte>
                        <Texte>Fonctionnalité 1</Texte>
                    </FonctionnaliteBlock>
                </Card>
                </OffreBlock>
                <ComparaisonButton>Comparer les offres</ComparaisonButton>
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

export default ModalAbonnement;