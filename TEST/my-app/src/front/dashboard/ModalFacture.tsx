import styled from "styled-components";
import Card from '../../front/image/blueCard.png';
import Circle from '../../front/image/circle.png';
import Trash from '../../front/image/trash.png';
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
height: 3rem;
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
height: 4rem;
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

const ModalFacture = () => {

    return (
        <Container>
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
                </InputBlock>
            </Block>
        </Container>
    );
};

export default ModalFacture;