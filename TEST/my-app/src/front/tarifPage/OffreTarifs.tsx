import styled from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.div`
position : relative;
display: grid;
grid-template-rows: auto 1fr;
gap: 20px;
margin-top : 500px;`

const BlockTitle = styled.div`
position: absolute;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 264px;
left: 0px;
top: 30px;
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

const FirstBlockWrapper = styled.div<{ stickToTop: boolean}> `
position : sticky;
top : 800px;
left : 465px;
z-index : 1;`

const FirstBlock = styled.div`
width: 1192px;
height: 280px;
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
color : #0e738a;
font-family : 'Urbanist';
`

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
cursor: pointer;
font-family : 'Urbanist';
`

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
width: 25.5rem;
height: 18.5rem;
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
font-family: 'Urbanist';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 16px;
text-transform: uppercase;
color: #6C6D70;`

const TexteGratuit = styled.span`
color: #202124;
font-size: 2.5rem;
font-family: 'Urbanist';
font-weight: 700;
line-height: 100%;
margin-top : 10px;`

const TexteVie = styled.span`
color: #202124;
font-size: 0.75rem;
font-family: 'Urbanist';
line-height: 100%;`

const TexteDecouverte = styled.span`
color: #202124;
font-size: 1rem;
font-family: 'Urbanist';
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
font-family: 'Urbanist';
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
width: 25.5rem;
height: 18.5rem;
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
font-family: 'Urbanist';
font-weight: 700;
line-height: 1rem;
text-transform: uppercase;`

const TextePrix = styled.span`
color: #0E738A;
font-size: 2.5rem;
font-family: 'Urbanist';
font-weight: 700;
line-height: 100%;
margin-top : 10px;`

const TexteUser = styled.span`
color:#202124;
font-size: 0.75rem;
font-family: 'Urbanist';
line-height: 100%;`

const ProTexte = styled.span`
color: #202124;
font-size: 1rem;
font-family: 'Urbanist';
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
font-family: 'Urbanist';
font-weight: 600;
line-height: 1.5rem;
text-transform: uppercase;
border : none;
outline : none;
cursor: pointer;`

const DevisBlock = styled.div`
display: flex;
padding: 24px;
gap: 32px;
width: 16.5rem;
height: 18.5rem;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
flex: 1 0 0;
border-radius: 0.5rem;
background: #FCFCFC;
box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
`
const DevisBlockWrapper = styled.div<{ visite: boolean }>`
position : absolute;
right : -340px;
top: 0;
display: ({ visible }: { visible: boolean }) => (visible ? "block" : "none");
`
const DevisTexteBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 2rem;
align-self: stretch;
`
const PurpleBlock = styled.div`
display: flex;
padding: 0.25rem 0.5rem;
flex-direction: column;
align-items: flex-start;
gap: 1rem;
border-radius: 0.25rem;
background: var(--event-main-lighter-shade-2, #E5DEF3);
color: var(--event-main-dark-pastel-purple, #7F5CC4);
font-size: 0.75rem;
font-family: 'Urbanist';
font-style: normal;
font-weight: 700;
line-height: 1rem;
text-transform: uppercase;
`
const TexteDevis = styled.div`
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
const TexteTarif = styled.div`
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
const Texte1 = styled.div`
display: flex;
flex-direction: column;
align-self: stretch;
color: var(--global-secondary-black, #202124);
font-size: 1rem;
font-family: 'Urbanist';
font-style: normal;
font-weight: 400;
line-height: 150%;
`
const ComparisonTableWrapper = styled.div`
grid-area: comparison-table;
`;
const ComparaisonTable = styled.div`
display : grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: auto;
gap: 1.5px;
width : 70.5rem;
height : 88.25rem;
margin-top: 500px;
margin-right: 30px;
position : relative;
top : -280px;
left : -710px;
`
const TableCellBackground = styled.div`
display : grid;
width : 25.5rem;
height : 88.25rem;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
border-radius: 8px;
background: var(--global-secondary-transparent-50, rgba(245, 245, 245, 0.50));
box-shadow: 0px 8px 64px 0px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
`
const LittleTableCell = styled.div`
display : grid;
position: relative;
top : -1420px;
left : 1150px;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
border-radius: 8px;
background: var(--global-secondary-transparent-50, rgba(245, 245, 245, 0.50));
box-shadow: 0px 8px 64px 0px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
width: 16.5rem;
height: 98.5rem;
`
const Div2 = styled.div `
grid-area :1 / 2 / 6 / 3;
display : flex;
flex-direction: column;
align-items: center;
height: 100%; 
`
const Div3 = styled.div`
grid-area: 1 / 3 / 6 / 4;
display : flex;
flex-direction: column;
align-items: center;
height: 100%; 
`
const TableCell = styled.div`
display : grid;
grid-template-columns : repeat(5, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap : 0px;
grid-row-gap : 0px;
justify-content: space-around;
`
const Div1 = styled.div`
grid-area: 1 / 1 / 6 / 2;
width: 20rem;
height: 10rem;
display : flex;
flex-direction: column;
align-items: flex-start;
height: 100%;
`;
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
display: flex;
flex-direction: column;
`
interface TableData {
    titre: string;
    contenu: string[];
  }

const OffreTarifs = () => {

    const [buttonSelected, setButtonSelected] = useState<number | null>(null);
    const [yellowButtonSelected, setYellowButtonSelected] = useState<number | null>(null);
    const [stickToTop, setStickToTop] = useState(true);
    const [showDevisBlock, setShowDevisBlock] = useState(false);
    const [selectedButton, setSelectedButton] = useState("");

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
    const [tableData, setTableData] = useState<TableData[][]>([
        // Pour les indépendants
        [
            {
                titre: "Missions",
                contenu : [
                    "Gestion et suivi des missions",
                    "Gestion des contrats associés"
                ]
            },
            {
                titre : "CRA",
                contenu : [
                    "Gestion du CRA",
                    "Envoi via DocuSign",
                    "Relance automatique",
                    "Personnalisation du document CRA",
                    "Conservation du CRA",
                ]
            },
            {
                titre : "Frais professionnel",
                contenu : [
                    "Gestion des frais pro",
                    "Envoie via DocuSign",
                    "Personnalisation du document de consolidation",
                    "AutoScan de masse"
                ]
            },
            {
                titre : "Clients & signataires",
                contenu : [
                    "Gestion des clients et signataires",
                    "Gestion des contrats"
                ]
            },
            {
                titre : "Document",
                contenu : [
                    "Gestion du dossierpartagé",
                    "Gestion du dossier personnel"
                ]
            },
            {
                titre : "Event / sondage",
                contenu : [
                    "Organisation d'Event et Sondage",
                    "Organisation d'Event et Sondage avancée"
                ]
            },
            {
                titre : "Préférences",
                contenu:[
                    "Personnalisation d'interface",
                    "Espace de stockage plus important",
                    "Base de données personnelle",
                    "Intégration de leurs propres outils",
                    "Nom de domaine personnalisé",
                    "Serveur dédié",
                    "Support dédié et personnalisé"
                ]
            },
        ],
        // Pour les entreprises 
        [
            {
                titre: "Missions",
                contenu : [
                    "Gestion et suivi des missions",
                    "Gestion des contrats associés"
                ]
            },
            {
                titre : "CRA",
                contenu : [
                    "Gestion du CRA",
                    "Envoi via DocuSign",
                    "Relance automatique",
                    "Personnalisation du document CRA",
                    "Conservation du CRA",
                ]
            },
            {
                titre : "Frais professionnel",
                contenu : [
                    "Gestion des frais pro",
                    "Envoie via DocuSign",
                    "Personnalisation du document de consolidation",
                    "AutoScan de masse"
                ]
            },
            {
                titre : "Clients & signataires",
                contenu : [
                    "Gestion des clients et signataires",
                    "Gestion des contrats"
                ]
            },
            {
                titre : "Document",
                contenu : [
                    "Gestion du dossierpartagé",
                    "Gestion du dossier personnel"
                ]
            },
            {
                titre : "Event / sondage",
                contenu : [
                    "Organisation d'Event et Sondage",
                    "Organisation d'Event et Sondage avancée"
                ]
            },
            {
                titre : "Préférences",
                contenu:[
                    "Personnalisation d'interface",
                    "Espace de stockage plus important",
                    "Base de données personnelle",
                    "Intégration de leurs propres outils",
                    "Nom de domaine personnalisé",
                    "Serveur dédié",
                    "Support dédié et personnalisé"
                ]
            },
        ],
        //Pour l'evenementiel
        [
            {
                titre: "Missions",
                contenu : [
                    "Gestion et suivi des missions",
                    "Gestion des contrats associés"
                ]
            },
            {
                titre : "CRA",
                contenu : [
                    "Gestion du CRA",
                    "Envoi via DocuSign",
                    "Relance automatique",
                    "Personnalisation du document CRA",
                    "Conservation du CRA",
                ]
            },
            {
                titre : "Frais professionnel",
                contenu : [
                    "Gestion des frais pro",
                    "Envoie via DocuSign",
                    "Personnalisation du document de consolidation",
                    "AutoScan de masse"
                ]
            },
            {
                titre : "Clients & signataires",
                contenu : [
                    "Gestion des clients et signataires",
                    "Gestion des contrats"
                ]
            },
            {
                titre : "Document",
                contenu : [
                    "Gestion du dossierpartagé",
                    "Gestion du dossier personnel"
                ]
            },
            {
                titre : "Event / sondage",
                contenu : [
                    "Organisation d'Event et Sondage",
                    "Organisation d'Event et Sondage avancée"
                ]
            },
            {
                titre : "Préférences",
                contenu:[
                    "Personnalisation d'interface",
                    "Espace de stockage plus important",
                    "Base de données personnelle",
                    "Intégration de leurs propres outils",
                    "Nom de domaine personnalisé",
                    "Serveur dédié",
                    "Support dédié et personnalisé"
                ]
            },
        ],
    ]);


    const renderFonctionnalites = () => {
        if (yellowButtonSelected === null) return null;
        const selectedData = tableData[yellowButtonSelected];
        if (!selectedData) return null;

        return selectedData.map(({ titre, contenu } : TableData, index : number) => (
          <Div1 key={index}>
            <Titre>{titre}</Titre>
            <Description>
              {contenu.map((fonctionnalite, fonctionnaliteIndex) => (
                  <Description key={fonctionnaliteIndex}>{fonctionnalite}</Description>
              ))}
            </Description>
          </Div1>
        ));
      };

      useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
            const treshold = scrollHeight - clientHeight - 1;
            if (scrollTop >= treshold){
                setStickToTop(false);
            }else {
                setStickToTop(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
      }, []);

      useEffect(() => {
        window.addEventListener('load', function() {
            setSelectedButton("POUR LES INDEPENDANTS");          
        });      
      }, [])
    
    return(
        <Container>
                <BlockTitle>
                    <Title>Nos offres</Title>
                </BlockTitle>
                <FirstBlockWrapper stickToTop={stickToTop} style={{top: stickToTop ? "0" : "auto"}}>
                <FirstBlock >
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
                                className={selectedButton === "POUR LES INDEPENDANTS" ? "selected": ""}
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
            <DevisBlockWrapper visible={showDevisBlock}>
                <DevisBlock>
                    <DevisTexteBlock>
                        <PurpleBlock>PRO+</PurpleBlock>
                        <TexteDevis>Sur devis</TexteDevis>
                        <TexteTarif>Tarif sur-mesure selon votre besoin</TexteTarif>
                        <Texte1>Pour les grandes entreprises et celles souciantes du détail</Texte1>
                        <FreeButton><TexteFreeButton>Demander un devis</TexteFreeButton></FreeButton>
                    </DevisTexteBlock>
                </DevisBlock>
            </DevisBlockWrapper>
        </ButtonBlock>
                </FirstBlock> 
            </FirstBlockWrapper>            
                <ComparisonTableWrapper>
                <ComparaisonTable>
                <TableCell>
                    <Div1>{renderFonctionnalites()}</Div1>
                </TableCell>                   
                   <TableCellBackground>
                    <Div2>guhijo</Div2>
                    </TableCellBackground> 
                   <TableCellBackground>
                    <Div3>dtfghjk</Div3>
                    </TableCellBackground> 
                    <LittleTableCell>
                        <Div3>ghjlmkl</Div3>
                    </LittleTableCell>
                </ComparaisonTable>
                </ComparisonTableWrapper>
        </Container>
    );
}

export default OffreTarifs;