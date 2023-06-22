import styled from "styled-components";
import { useState } from "react";


const Container = styled.div`
display : flex;`

const BlockTitle = styled.div`
position: absolute;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 264px;
left: 0px;
top: 637px;
background: #F5F5F5;
box-shadow: 0px 8px 96px rgba(32, 33, 36, 0.04);`

const Title = styled.h1`
width: 506px;
height: 81px;
left: calc(50% - 506px/2);
font-family: 'Ibarra Real Nova';
font-style: normal;
font-weight: 400;
font-size: 120px;
line-height: 100%;
color: #5EA2B1;`

const FirstBlock = styled.div`
position: absolute;
width: 1192px;
height: 280px;
left: calc(50% - 1192px/2);
top: 815px;
background: rgba(245, 245, 245, 0.5);
box-shadow: 0px 8px 64px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
border-radius: 8px;`

const ButtonBlock = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 24px;
position: absolute;
width: 1128px;
height: 296px;
left: 30px;
top: 50px;`

const SelectedButtonBlock = styled.div`
display : flex;
flex-direction : column;
align-items : flex-start;
padding : 0px;
gap: 24px;
width : 264px;
height : 296px;
`

const TexteButtonBlock = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 8px;
width: 264px;
height: 70px;`

const TexteButton = styled.span`
width: 264px;
height: 24px;
font-family: 'Urbanist';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: #202124;
`

const BlueTexte = styled.span`
color : #0e738a;`

const BlueButtonBlock = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px;
gap: 8px;
width: 253px;
height: 40px;
background: #FCFCFC;
border-radius: 4px;
color: white;
`

const YellowButtonBlock = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 8px;
gap: 8px;
width: 247px;
height: 200px;
background: #FCFCFC;
box-shadow: 0px 8px 96px rgba(32, 33, 36, 0.04);
border-radius: 4px;
`

const YellowButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
font-weight: bold;
padding: 16px 24px;
gap: 8px;
width: 248px;
height: 56px;
background: white;
border : none;
outline: none;
filter: drop-shadow(0px 8px 96px rgba(32, 33, 36, 0.04));
border-radius: 4px;
cursor: pointer;`

const AnimatedButton = styled(YellowButton)`
transition : all 0.3s ease-in-out;
:hover{
    transform: translateY(-3px);
    box-shadow: 0 1px 5px rgba(0,0,0,0.2);
}
:active{
    transform: translateY(0);
    box-shadow : none;
}`

const FreeBlock = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
padding: 24px;
gap: 32px;
width: 408px;
height: 245px;
background: #FCFCFC;
box-shadow: 0px 8px 96px rgba(32, 33, 36, 0.04);
border-radius: 8px;
`
const FreeTexteBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
width: 360px;
height: 133px;
`
const DecouverteBlock = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 4px 8px;
gap: 16px;
width: 97px;
height: 24px;
background: #E6E6E6;
border-radius: 4px;`

const TexteFree = styled.span`
width: 81px;
height: 16px;
font-family: 'Outfit';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 16px;
text-transform: uppercase;
color: #6C6D70;`

const TexteGratuit = styled.span`
color: #202124;
font-size: 2.5rem;
font-family: 'Outfit';
font-weight: 700;
line-height: 100%;
margin-top : 10px;`

const TexteVie = styled.span`
color: #202124;
font-size: 0.75rem;
font-family: 'Outfit';
line-height: 100%;`

const TexteDecouverte = styled.span`
color: #202124;
font-size: 1rem;
font-family: 'Outfit';
line-height: 150%;
margin-top : 20px;`

const FreeButton = styled.button`
display : flex;
padding : 0.75rem 1.25rem;
justify-content: center;
align-items: flex-start;
gap : 0.5rem;
align-self : stretch;
border-radius : 4px;
border : 2px solid #202124;
background-color: white;
cursor: pointer;
`
const TexteFreeButton = styled.span`
color:  #202124;
font-size: 0.875rem;
font-family: 'Outfit';
font-weight: 600;
line-height: 1.5rem;
text-transform: uppercase;`

const ProBlock = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
padding: 24px;
gap: 32px;
width: 408px;
height: 245px;
background: #FCFCFC;
box-shadow: 0px 8px 96px rgba(32, 33, 36, 0.04);
border-radius: 8px;
border : solid #0E738A 2px;
`
const ProTexteBlock = styled.div `
display : flex;
flex-direction: column;
align-items: flex-start;
width: 248px;
height: 180px;
`
const TextePro = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 4px 8px;
gap: 16px;
width: 40px;
height: 20px;
background: #CFE3E8;
border-radius: 4px;
color: #0e738a;
font-size: 0.75rem;
font-family: 'Outfit';
font-weight: 700;
line-height: 1rem;
text-transform: uppercase;`

const TextePrix = styled.span`
color: #0E738A;
font-size: 2.5rem;
font-family: 'Outfit';
font-weight: 700;
line-height: 100%;
margin-top : 10px;`

const TexteUser = styled.span`
color:#202124;
font-size: 0.75rem;
font-family: 'Outfit';
line-height: 100%;`

const ProTexte = styled.span`
color: #202124;
font-size: 1rem;
font-family: 'Outfit';
line-height: 150%;
margin-top : 20px;
`
const ProButton = styled.button`
display: flex;
padding: 0.75rem 1.25rem;
justify-content: center;
align-items: flex-start;
gap: 0.5rem;
align-self: stretch;
border-radius: 4px;
background: #0E738A;
color: #F5F5F5;
font-size: 0.875rem;
font-family: 'Outfit';
font-weight: 600;
line-height: 1.5rem;
text-transform: uppercase;
border : none;
outline : none;
cursor: pointer;`

const BigBlock = styled.div`
display : flex;
flex-direction : column;`

const BlockFonctionnalite = styled.div`
position : relative;
display: flex;
flex-direction: column;
width: 70rem;
height : 88rem;
top : 1060px;
left : 390px;
border : solid blue 1px;
`
const Fonctionnalite = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 20rem;
height: 87.9rem;
border : solid black 1px;
`

const FreeFonctionnalite = styled.div`
display: flex;
width: 25.5rem;
height: 84.1rem;
padding: 2.25rem 1.5rem 1.5rem 1.5rem;
flex-direction: column;
align-items: flex-start;
gap: 2rem;
flex: 1 0 0;
border-radius: 8px;
background: rgba(245, 245, 245, 0.50);
box-shadow: 0px 8px 64px 0px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
border : solid yellow 1px;
`
const PayantFonctionnalite = styled.div`
display: flex;
width: 25.5rem;
height: 84.1rem;
padding: 2.25rem 1.5rem 1.5rem 1.5rem;
flex-direction: column;
align-items: flex-start;
gap: 2rem;
flex: 1 0 0;
border-radius: 8px;
background: rgba(245, 245, 245, 0.50);
box-shadow: 0px 8px 64px 0px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
border : solid green 1px;
`

const Titre = styled.span`
color: #0E738A;
font-size: 1rem;
font-family: 'Urbanist';
font-weight: 700;
line-height: 1.25rem;
text-transform: uppercase;
`
const Description = styled.span`
color: #6C6D70;
font-size: 1rem;
font-family: 'Outfit';
line-height: 1.25rem;
margin-top: 20px;
`

const OffreTarifs = () => {
    // Etats et fonctions pour les boutons

    const [buttonSelected, setButtonSelected] = useState<number | null>(null);
    const [yellowButtonSelected, setYellowButtonSelected] = useState<number | null>(null);
    
    const buttons = [
        {id: 1, label: "POUR LES INDEPENDANTS"},
        {id: 2, label: "POUR LES ENTREPRISES"},
        {id: 3, label: "POUR L'EVENEMENTIEL"},
    ];

    const blueButtons = [
        {id: 1, label : "Mois"},
        {id : 2, label: "Année"},
    ]
    

    const handleButtonClick = (buttonId : number) => {
        if (buttonSelected === buttonId) {
            setButtonSelected(null);
        } else {
            setButtonSelected(buttonId);
        }
    };

    const handleYellowButton = (buttonId : number)=> {
        if(yellowButtonSelected === buttonId) {
            setYellowButtonSelected(null);
        }else {
            setYellowButtonSelected(buttonId);
        }
    };

    const buttonStyle = (buttonId : number) => {
        if( yellowButtonSelected === buttonId){
            return {backgroundColor : "#ffd966"};
        } else {
            return { backgroundColor : "white"};
        }
    };

    const blueButtonStyle = (buttonId : number) =>{
        if(buttonSelected === buttonId){
            return {backgroundColor : "#0E738A"};
        }else {
            return {backgroundColor : "white"};
        }
    };

    //Fonctions pour tableau de fonctionnalités permet d'afficher dynamiquement 

    const fonctionnalites =[
        {
            titre: "Missions",
            fonctionnalites : [
                "Gestion et suivi des missions",
                "Gestion des contrats associés"
            ]
        },
        {
            titre : "CRA",
            fonctionnalites : [
                "Gestion du CRA",
                "Envoi via DocuSign",
                "Relance automatique",
                "Personnalisation du document CRA",
                "Conservation du CRA",
            ]
        },
        {
            titre : "Frais professionnel",
            fonctionnalites : [
                "Gestion des frais pro",
                "Envoie via DocuSign",
                "Personnalisation du document de consolidation",
                "AutoScan de masse"
            ]
        },
        {
            titre : "Clent & signataires",
            fonctionnalites : [
                "Gestion des clients et signataires",
                "Gestion des contrats"
            ]
        },
        {
            titre : "Docuement",
            fonctionnalites : [
                "Gestion du dossierpartagé",
                "Gestion du dossier personnel"
            ]
        },
        {
            titre : "Event / sondage",
            fonctionnalites : [
                "Organisation d'Event et Sondage",
                "Organisation d'Event et Sondage avancée"
            ]
        },
        {
            titre : "Préférences",
            fonctionnalites:[
                "Personnalisation d'interface",
                "Espace de stockage plus important",
                "Base de données personnelle",
                "Intégration de leurs propres outils",
                "Nom de domaine personnalisé",
                "Serveur dédié",
                "Support dédié et personnalisé"
            ]
        },
    ]

    return(
<Container>
    <BlockTitle>
        <Title>Nos offres</Title>
    </BlockTitle>
    <FirstBlock>
        <ButtonBlock>
            <SelectedButtonBlock>
                <TexteButtonBlock>
                    <TexteButton>Économisez <BlueTexte>5%</BlueTexte> avec le plan annuel</TexteButton>
                    <BlueButtonBlock>
                        {blueButtons.map((button)=>(
                            <AnimatedButton key={button.id}
                                            style={blueButtonStyle(button.id)}
                                            cursor='pointer'
                                            onClick={() => handleButtonClick(button.id)}
                                            >{button.label}</AnimatedButton>
                        ))}
                    </BlueButtonBlock>
                </TexteButtonBlock>
                <YellowButtonBlock>
                {buttons.map((button)=>(
                        <AnimatedButton key={button.id}
                                style={buttonStyle(button.id)}
                                onClick={() => handleYellowButton(button.id)}
                                >{button.label}</AnimatedButton>
                    ))}
                </YellowButtonBlock>
            </SelectedButtonBlock>
            <FreeBlock>
                <FreeTexteBlock>
                    <DecouverteBlock>
                        <TexteFree>découverte</TexteFree>
                    </DecouverteBlock>
                    <TexteGratuit>Gratuit</TexteGratuit>
                    <TexteVie>(à vie)</TexteVie>
                    <TexteDecouverte>SIUUUUUUUUUUUU</TexteDecouverte>
                </FreeTexteBlock>
                <FreeButton><TexteFreeButton>ESSAYER GRATUITEMENT</TexteFreeButton></FreeButton>
            </FreeBlock>
            <ProBlock>
                    <ProTexteBlock>
                        <TextePro>PRO</TextePro>
                        <TextePrix>13.12€</TextePrix>
                        <TexteUser>Par utilisateur par mois</TexteUser>
                        <ProTexte>Pour les entreprises de petite et moyenne taille</ProTexte>
                    </ProTexteBlock>
                    <ProButton>Créer un compte</ProButton>
            </ProBlock>
        </ButtonBlock>
    </FirstBlock>
    <BigBlock>
    <BlockFonctionnalite>
        {fonctionnalites.map(({titre, fonctionnalites}) =>(
            <Fonctionnalite key={titre}>
                <Titre>{titre}</Titre>
                {fonctionnalites.map(fonctionnalites => (
                    <Description key={fonctionnalites}>
                        {fonctionnalites}
                        </Description>
                ))}
            </Fonctionnalite>
        ))}        
        <FreeFonctionnalite>

        </FreeFonctionnalite>
        <PayantFonctionnalite>

        </PayantFonctionnalite>
    </BlockFonctionnalite>
    </BigBlock>
</Container>
    );
}

export default OffreTarifs;