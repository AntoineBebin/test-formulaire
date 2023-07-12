import styled from "styled-components";
import Box from '../../image/box.png';
import Case from '../../image/valise.png';

const Container = styled.div`
width: 90rem;
height: 39.5rem;
flex-shrink: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const BlockTitle = styled.div`
width: 90rem;
height: 26rem;
flex-shrink: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Title = styled.h1`
color: var(--cra-main-lighter-shade-1, #5EA2B1);
font-family: 'Ibarra Real Nova';
font-size: 7.5rem;
font-style: normal;
font-weight: 400;
line-height: 100%;
`
const OffreBlock = styled.div`
display: inline-flex;
align-items: flex-start;
gap: 1.5rem;
width: 46.5rem;
height: 28.8125rem;
margin-top : -12rem;
`
const Card = styled.div`
display: flex;
width: 22.5rem;
height: 28.8125rem;
padding: 1.5rem;
flex-direction: column;
align-items: flex-start;
gap: 2rem;
border-radius: 0.5rem;
background: var(--global-secondary-white, #F5F5F5);
box-shadow: 0px 8px 56px 0px rgba(32, 33, 36, 0.06);
`
const Texte = styled.span`
color: var(--global-secondary-black, #202124);
font-family: 'Urbanist';
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 150%;
`
const DecouverteBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 2rem;
width: 15.5rem;
height: 9.8125rem;
`
const DecouverteGreyBlock = styled.div`
display: flex;
padding: 0.25rem 0.5rem;
flex-direction: column;
align-items: flex-start;
gap: 1rem;
border-radius: 0.25rem;
background: var(--global-secondary-grey-lighter, #E6E6E6);
color: var(--global-secondary-grey-darker, #6C6D70);
font-family: 'Urbanist';
font-size: 0.75rem;
font-style: normal;
font-weight: 700;
line-height: 1rem;
text-transform: uppercase;
`
const Bold = styled.span`
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
const LittleTexte = styled.span`
display: flex;
flex-direction: column;
align-self: stretch;
color: var(--global-secondary-black, #202124);
font-family: 'Urbanist';
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 150%;
`
const FonctionnaliteBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 1rem;
align-self: stretch;
width: 19.5rem;
height: 9rem;
`
const ButtonBlock = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 2rem;
margin-left: 0.5rem;
`
const ButtonFree = styled.button`
display: flex;
padding: 0.75rem 1.25rem;
justify-content: center;
align-items: flex-start;
gap: 0.5rem;
align-self: stretch;
border-radius: 0.25rem;
border: 2px solid var(--global-secondary-black, #202124);
width: 19.5rem;
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
const ProBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 2rem;
width: 15.5rem;
height: 9.8125rem;
`
const Pro = styled.div`
display: flex;
padding: 0.25rem 0.5rem;
flex-direction: column;
align-items: flex-start;
gap: 1rem;
border-radius: 0.25rem;
background: var(--cra-main-lighter-shade-2, #CFE3E8);
color: var(--cra-main-metallic-seaweed, #0E738A);
font-family: 'Urbanist';
font-size: 0.75rem;
font-style: normal;
font-weight: 700;
line-height: 1rem;
text-transform: uppercase;
`
const BlueTexte = styled.span`
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
const BlueButton = styled.button `
display: flex;
padding: 0.75rem 1.25rem;
justify-content: center;
align-items: flex-start;
gap: 0.5rem;
align-self: stretch;
width: 19.5rem;
height: 3rem;
border-radius: 0.25rem;
background: var(--cra-main-metallic-seaweed, #0E738A);
color: var(--global-secondary-white, #F5F5F5);
font-family: 'Urbanist';
font-size: 0.875rem;
font-style: normal;
font-weight: 600;
line-height: 1.5rem;
text-transform: uppercase;
border: none;
cursor: pointer;
`
const GreyTexte = styled.span`
color : #6c6d70;
text-transform: uppercase;
`
const Boite = styled.img`
width: 9.0625rem;
height: 4.875rem;
position: absolute;
left : 55rem;
top: 161rem;
`
const Valise = styled.img`
width: 6.5rem;
height: 6.25rem;
position: absolute;
right: 43rem;
top: 160rem;
`

const DoubleOffres = () => {

        return(
            <Container>
                <BlockTitle>
                    <Title>Nos offres</Title>
                </BlockTitle>
                <OffreBlock>
                    <Card>
                        <Boite src={Box}></Boite>
                        <DecouverteBlock>
                            <DecouverteGreyBlock>Découverte</DecouverteGreyBlock>
                            <Bold>Gratuit<Texte>(à vie)</Texte></Bold>
                            <LittleTexte>“Première dose gratos, le bolosse est fidélisé” - Booba</LittleTexte>
                        </DecouverteBlock>
                        <FonctionnaliteBlock>
                            <Texte>Inclus:</Texte>
                            <Texte>Fonctionnalité 1 </Texte>
                            <Texte>Fonctionnalité 1 euing,lrrbnk,l;k,l</Texte>
                            <Texte>Fonctionnalité 1 </Texte>
                            <Texte>Fonctionnalité 1 </Texte>
                        </FonctionnaliteBlock>
                        <ButtonBlock>
                        <ButtonFree>Essayer gratuitement</ButtonFree>
                        </ButtonBlock>
                    </Card>
                    <Card>
                        <Valise src={Case}></Valise>
                        <ProBlock>
                            <Pro>PRO</Pro>
                            <BlueTexte>13.12€<Texte>Par utilisateur par mois</Texte></BlueTexte>
                            <LittleTexte>Pour les entreprises de petite et moyenne taille</LittleTexte>
                        </ProBlock>
                        <FonctionnaliteBlock>
                            <Texte>Toutes les fonctions <GreyTexte>DÉCOUVERTE</GreyTexte>, plus :</Texte>
                            <Texte>Fonctionnalité 1 </Texte>
                            <Texte>Fonctionnalité 1 euing,lrrbnk,l;k,l</Texte>
                            <Texte>Fonctionnalité 1 </Texte>
                            <Texte>Fonctionnalité 1 </Texte>
                        </FonctionnaliteBlock>
                        <ButtonBlock>
                        <BlueButton>Créer un compte</BlueButton>
                        </ButtonBlock>
                    </Card>
                </OffreBlock>
            </Container>
        );
};

export default DoubleOffres;