import styled from "styled-components";
import Background from '../../image/Background_Pattern.svg';
import HeaderNewAccount from "../HeaderNewAccount";
import Footer from "../../mainPage/Footer";
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
width : 58.5rem;
height : 61.5rem;
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
position: relative;
top : -120px;
left : 550px;
`
const ContenuBlock = styled.div`
width: 53.5rem;
height: 50rem;
display: flex;
flex-direction: column;
align-items: center;
gap: 3rem;
align-self: stretch;
`
const TextBlock = styled.div`
height: 8rem;
display: flex;
width: 34.5rem;
flex-direction: column;
align-items: center;
gap: 1rem;
`
const BoldText = styled.div`
height: 2.5rem;
width: 34.5rem;
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
const Texte = styled.div`
height: 4.5rem;
width: 34.5rem;
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
const ButtonBlock = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;
gap: 0.5rem;
height: 4.5rem;
width: 16.5rem;
`
const ButtonText = styled.div`
height: 1.5rem;
display: flex;
width: 16.5rem;
flex-direction: column;
`
const Text = styled.span `
color: #202124;
font-size: 1rem;
font-family: 'Urbanist';
font-style: normal;
font-weight: 400;
line-height: 150%;
`
const BlueTexte = styled.span`
color : #0e738a;
`
const ButtonDiv = styled.div`
display: flex;
width: 16.5rem;
height: 2.5rem;
padding: 0.25rem;
justify-content: center;
align-items: center;
gap: 0.5rem;
border-radius: 0.25rem;
background: var(--global-secondary-white-highlight, #FCFCFC);
`
const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
gap: 0.5rem;
flex: 1 0 0;
align-self: stretch;
border-radius: 0.25rem;
background: var(--cra-main-metallic-seaweed, #0E738A);
text-transform: uppercase;
border: none;
outline: none;
font-weight: 600;
`
const AnimatedButton = styled(Button)`
transition : all 0.3s ease-in-out;
:hover{
    transform: translateY(-3px);
    box-shadow: 0 1px 5px rgba(0,0,0,0.2);
}
:active{
    transform: translateY(0);
    box-shadow : none;
}
`
const OffreBlock = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1.5rem;
width: 53.5rem;
height: 31.5rem;
`
const FilterBlock = styled.div`
display: flex;
flex-direction : column;
align-items: center;
gap: 1rem;
align-self: stretch;
`
const FilterTexte = styled.span`
color: var(--global-secondary-black, #202124);
text-align: center;
font-size: 1.25rem;
font-family: 'Urbanist';
font-style: normal;
font-weight: 400;
line-height: 1.5rem;
`
const FilterBar = styled.div`
display: flex;
width: 53rem;
height: 1.25rem;
padding: 0.5rem 5rem;
flex-direction: column;
align-items: flex-start;
gap: 0.5rem;
margin-left : 65px;
border : solid black 1px;
`
const CardBlock = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 1.5rem;
margin-left : 70px;
`
const OffreCard = styled.div`
display: flex;
width: 16.5rem;
padding: 1.5rem;
flex-direction: column;
align-items: flex-start;
gap: 2rem;
align-self: stretch;
height: 21.75rem;
border-radius: 0.5rem;
background: var(--global-secondary-white-highlight, #FCFCFC);
box-shadow: 0px 8px 56px 0px rgba(32, 33, 36, 0.06);
`
const CardTexte = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 2rem;
align-self: stretch;
width: 13.5rem;
height: 6.75rem;
`
const Decouverte = styled.div`
display: flex;
padding: 0.25rem 0.5rem;
flex-direction: column;
align-items: flex-start;
gap: 1rem;
border-radius: 0.25rem;
background: var(--global-secondary-grey-lighter, #E6E6E6);
color: var(--global-secondary-grey-darker, #6C6D70);
font-size: 0.75rem;
font-family: 'Urbanist';
font-style: normal;
font-weight: 700;
line-height: 1rem;
text-transform: uppercase;
`
const Bold = styled.div`
display: flex;
flex-direction: column;
align-self: stretch;
color: var(--global-secondary-black, #202124);
font-size: 2.5rem;
font-family: 'Urbanist';
font-style: normal;
font-weight: 700;
line-height: 100%;
`
const LittleText = styled.div`
display: flex;
flex-direction: column;
align-self: stretch;
color: var(--global-secondary-black, #202124);
font-size: 0.75rem;
font-family: 'Urbanist';
font-style: normal;
font-weight: 400;
line-height: 100%;
`
const Fonctionnalite = styled.div`
width: 13.5rem;
height: 10rem;
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 1rem;
align-self: stretch;
`
const FonctionnaliteTexte = styled.span`
color: var(--global-secondary-black, #202124);
font-size: 0.75rem;
font-family: 'Urbanist';
font-style: normal;
font-weight: 400;
line-height: 1rem;
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
font-size: 0.75rem;
font-family: 'Urbanist';
font-style: normal;
font-weight: 700;
line-height: 1rem;
text-transform: uppercase;
`
const SpecialTexte = styled.span`
color : #6c6d70;
text-transform : uppercase;
`
const DevisPro = styled.div`
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
font-size: 0.75rem;
font-family: 'Urbanist';
font-style: normal;
font-weight: 700;
line-height: 1rem;
text-transform: uppercase;
`
const ButtonOffre = styled.button`
display: flex;
width: 16.5rem;
height: 3rem;
padding: 0.75rem 1.25rem;
justify-content: center;
align-items: flex-start;
gap: 0.5rem;
margin-left : 70px;
border-radius: 0.25rem;
border: 2px solid var(--global-secondary-black, #202124);
color: var(--global-secondary-black, #202124);
background: var(--global-secondary-transparent-50, rgba(245, 245, 245, 0.50));
font-size: 0.875rem;
font-family: 'Urbanist';
font-style: normal;
font-weight: 600;
line-height: 1.5rem;
text-transform: uppercase;
`
const ButtonNavBlock = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
gap: 1.5rem;
align-self: stretch;
width: 53.5rem;
height: 3rem;
margin-top : 70px;
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

const NewAccount4 = () => {

    const [buttonSelected, setButtonSelected] = useState<number | null>(null);
    const [showDevisBlock, setShowDevisBlock] = useState(false);

    const blueButtons = [
        {id: 1, label : "Mois"},
        {id : 2, label: "Année"},
    ]

    const blueButtonStyle = (buttonId : number) =>{
        if(buttonSelected === buttonId){
            return {backgroundColor : "#0E738A"};
        }else {
            return {backgroundColor : "white"};
        }
    };

    const handleButtonClick = (buttonId : number) => {
        if(buttonSelected === 2){
            setShowDevisBlock(!showDevisBlock);
        }else {
            setShowDevisBlock(false);
        }
        if (buttonSelected === buttonId) {
            setButtonSelected(null);
        } else {
            setButtonSelected(buttonId);
        }
    };

    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/login/créer-un-compte5');
    };

    return(
        <Container>
            <HeaderNewAccount></HeaderNewAccount>
            <Title>Créer un compte</Title>
            <Block>
                <ContenuBlock>
                    <TextBlock>
                        <BoldText>Une offre adaptée à vos besoins</BoldText>
                        <Texte>Des formules pour tous : choisissez selon vos besoins l’offre qui vous correspond le plus, le curseur ci-dessous vous permet d’estimer le coût selon la taille de votre entreprise.</Texte>
                    </TextBlock>
                    <ButtonBlock>
                        <ButtonText>
                            <Text>Économisez <BlueTexte>5%</BlueTexte> avec le plan annuel</Text>
                        </ButtonText>
                        <ButtonDiv>
                            {blueButtons.map((button)=>(
                                <AnimatedButton key={button.id}
                                                style={blueButtonStyle(button.id)}
                                                onClick={() => handleButtonClick(button.id)}
                                                >{button.label}</AnimatedButton>
                            ))}     
                        </ButtonDiv>
                    </ButtonBlock>
                    <OffreBlock>
                    <FilterBlock>
                        <FilterTexte>Entreprise de <BlueTexte>15</BlueTexte>salariés</FilterTexte>
                        <FilterBar></FilterBar>
                    </FilterBlock>
                    <CardBlock>
                    <OffreCard>
                        <CardTexte>
                            <Decouverte>Découverte</Decouverte>
                            <Bold>Gratuit<LittleText>(à vie)</LittleText></Bold>           
                        </CardTexte>
                        <Fonctionnalite>
                            <FonctionnaliteTexte>Inclus:</FonctionnaliteTexte>
                            <FonctionnaliteTexte>Fonctionnalité 1</FonctionnaliteTexte>
                            <FonctionnaliteTexte>Fonctionnalité 2 avec plus de place eeefeezdzdzd</FonctionnaliteTexte>
                            <FonctionnaliteTexte>Fonctionnalité 1</FonctionnaliteTexte>
                            <FonctionnaliteTexte>Fonctionnalité 1</FonctionnaliteTexte>
                        </Fonctionnalite>
                    </OffreCard>
                    <OffreCard>
                        <CardTexte>
                            <Pro>Pro</Pro>
                            <Bold>196.80€*<LittleText>Par mois</LittleText></Bold>             
                        </CardTexte>
                        <Fonctionnalite>
                            <FonctionnaliteTexte>Toutes les fonctions <SpecialTexte>DÉCOUVERTE</SpecialTexte>, plus :</FonctionnaliteTexte>
                            <FonctionnaliteTexte>Fonctionnalité 1</FonctionnaliteTexte>
                            <FonctionnaliteTexte>Fonctionnalité 2 avec plus de place eeefeezdzdzd</FonctionnaliteTexte>
                            <FonctionnaliteTexte>Fonctionnalité 1</FonctionnaliteTexte>
                            <FonctionnaliteTexte>Fonctionnalité 1</FonctionnaliteTexte>
                        </Fonctionnalite>
                    </OffreCard>
                    <OffreCard>
                        <CardTexte>
                            <DevisPro>PRO+</DevisPro>
                            <Bold>Sur devis<LittleText>Tarif sur-mesure selon votre besoin</LittleText></Bold>        
                        </CardTexte>
                        <Fonctionnalite>
                            <FonctionnaliteTexte>Toutes les fonctions <BlueTexte>PRO</BlueTexte> et aussi :</FonctionnaliteTexte>
                            <FonctionnaliteTexte>Fonctionnalité 1</FonctionnaliteTexte>
                            <FonctionnaliteTexte>Fonctionnalité 2 avec plus de place eeefeezdzdzd</FonctionnaliteTexte>
                            <FonctionnaliteTexte>Fonctionnalité 1</FonctionnaliteTexte>
                            <FonctionnaliteTexte>Fonctionnalité 1</FonctionnaliteTexte>
                        </Fonctionnalite>
                    </OffreCard>
                    </CardBlock>
                    <ButtonOffre>COMPARER LES OFFRES</ButtonOffre>
                    </OffreBlock>
                    <ButtonNavBlock>
                        <ReturnButton>Précédent</ReturnButton>
                        <NextButton onClick={handleNext}>Suivant</NextButton>
                    </ButtonNavBlock>
                </ContenuBlock>
            </Block>
            <Footer></Footer>
        </Container>
    );
}

export default NewAccount4;