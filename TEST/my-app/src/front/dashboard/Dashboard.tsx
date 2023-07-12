import styled from "styled-components";
import Background from '../image/Background_Pattern.svg';
import FooterNewAccount from "../loginPage/newAccount/FooterNewAccount";
import LoginHeader from "../loginPage/LoginHeader";
//import image
import Profil from '../../front/image/information-perso.png';
import Pen from '../../front/image/stylo.png';
import Lock from '../../front/image/lock.png';
import Abonnement from '../../front/image/abonnement.png';
import Card from '../../front/image/card.png';
import Histo from '../../front/image/historique.png';
import Casque from '../../front/image/casque.png';
import Plus from '../../front/image/bluePlus.png';
import Bug from '../../front/image/bug.png';
import Parametre from '../../front/image/parametre.png';
import Case from '../../front/image/case.png';
import SupportTexte from '../../front/image/supportTexte.png';
import Eye from '../../front/image/eye.png';
import Download from '../../front/image/download.png';
import BlackBug from '../../front/image/black-bug.png';
import Link from '../../front/image/link.png'
//
import { useState } from "react";
import ModalPersonnalInfo from "./ModalPersonnalInfo";
import ModalAcces from "./ModalAcces";
import ModalAbonnement from "./ModalAbonnement";
import ModalFacture from "./ModalFacture";



const Container = styled.div `
max-width: 100vw;
min-height: 100vh;
background-image : url(${Background});
background-repeat: repeat;
display: flex;
flex-direction: column;
align-items: center;
gap: 1.5rem;
`
const BlockContainer = styled.div`
display: flex;
padding-left: 0px;
align-items: flex-start;
width: 70.5rem;
height: 78rem;
margin-top : 150px;
`
const Block = styled.div`
display: flex;
width: 64.5rem;
height: 75rem;
padding: 1.5rem 1.5rem 1.5rem 12rem;
flex-direction: column;
align-items: flex-start;
gap: 3.5rem;
border-radius: 0.5rem;
background: var(--global-secondary-transparent-50, rgba(245, 245, 245, 0.50));
box-shadow: 0px 8px 64px 0px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
`
const AccountBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 1.5rem;
align-self: stretch;
width: 51rem;
height: 72rem;
`
const AccountTexte = styled.div`
display: flex;
flex-direction: column;
align-self: stretch;
color: var(--global-secondary-black, #202124);
font-family: 'Urbanist';
font-size: 2rem;
font-style: normal;
font-weight: 600;
line-height: 2.5rem;
width: 51rem;
height: 2.5rem;
`
const DivTexte = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;
width: 51rem;
margin-top: -40px;
`
const Texte = styled.span`
color: var(--global-secondary-black, #202124);
font-family: 'Urbanist';
font-size: 0.75rem;
font-style: normal;
font-weight: 600;
line-height: 1rem;
`
const BlueTexte = styled.span`
color: var(--cra-main-metallic-seaweed, #0E738A);
font-family: 'Urbanist';
font-size: 0.75rem;
font-style: normal;
font-weight: 600;
line-height: 1rem;
text-transform: uppercase;
`
const GreyTexte = styled.span`
color: var(--global-secondary-grey-darker, #6C6D70);
font-family: 'Urbanist';
font-size: 0.75rem;
font-style: normal;
font-weight: 400;
line-height: 1rem;
`
const InformationBlock = styled.div`
display: flex;
padding: 2rem 1rem 1.5rem 1rem;
flex-direction: column;
align-items: flex-start;
gap: 1.5rem;
align-self: stretch;
border-radius: 0.25rem;
background: var(--global-secondary-white-highlight, #FCFCFC);
box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
width: 51rem;
height: 9rem;
`
const BlockPerso = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
flex-wrap: wrap;
gap: 1rem;
align-self: stretch;
width: 49rem;
height: 7rem;
`
const AccesSupportBlock = styled.div`
display: flex;
align-items: flex-start;
gap: 1.5rem;
align-self: stretch;
width: 51rem;
height: 16.125rem;
`
const AccesBlock = styled.div`
display: flex;
padding: 2rem 1rem 1.5rem 1rem;
flex-direction: column;
justify-content: space-between;
align-items: flex-end;
flex: 1 0 0;
align-self: stretch;
border-radius: 0.25rem;
background: var(--global-secondary-white-highlight, #FCFCFC);
box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
width: 24.75rem;
height: 16.125rem;
`
const Div2Texte = styled.div`
width: 24.75rem;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;
margin-top: -40px;
`
const AccesInfo = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.5rem;
align-self: stretch;
`
const Button = styled.button`
display: flex;
padding: 0.75rem 1.25rem;
justify-content: center;
align-items: flex-start;
gap: 0.5rem;
align-self: stretch;
border-radius: 0.25rem;
background: white;
border: 2px solid var(--global-secondary-black, #202124);
color: var(--global-secondary-black, #202124);
font-family: 'Urbanist';
font-size: 0.875rem;
font-style: normal;
font-weight: 700;
line-height: 1.5rem;
letter-spacing: 0.04375rem;
text-transform: uppercase;
width: 22.75rem;
min-height: 3rem;
cursor: pointer;
`
const SupportBlock = styled.div`
display: flex;
padding: 2rem 1rem 1.5rem 1rem;
flex-direction: column;
align-items: center;
gap: 1.5rem;
flex: 1 0 0;
border-radius: 0.25rem;
background: var(--global-secondary-white-highlight, #FCFCFC);
box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
width: 24.75rem;
height: 16.125rem;
`
const RequestBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.5rem;
align-self: stretch;
width: 22.75rem;
height: 8.125rem;
`
const Request = styled.div`
display: flex;
align-items: center;
gap: 1.5rem;
align-self: stretch;
width: 22.75rem;
height: 2rem;
`
const RequestTexte = styled.span`
overflow: hidden;
color: var(--global-secondary-black, #202124);
text-overflow: ellipsis;
font-family: 'Urbanist';
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: 1rem;
display: flex;
flex-direction: column;
width: 22.75rem;
`
const OrangeTexte = styled.span`
color: var(--global-status-alert-marigold, #DB8630);
font-family: 'Urbanist';
font-size: 0.75rem;
font-style: normal;
font-weight: 500;
line-height: 0.75rem;
`
const GreenTexte = styled.span`
color: var(--global-status-good-may-green, #44893E);
font-family: 'Urbanist';
font-size: 0.75rem;
font-style: normal;
font-weight: 400;
line-height: 0.75rem;
`
const AbonnementBlock = styled.div`
display: flex;
padding: 2rem 1rem 1.5rem 1rem;
flex-direction: column;
align-items: flex-end;
gap: 1.5rem;
align-self: stretch;
border-radius: 0.25rem;
background: var(--global-secondary-white-highlight, #FCFCFC);
box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
width: 51rem;
height: 7rem;
margin-top : 60px;
`
const AbonnementTexteBlock = styled.div`
display: flex;
width: 49rem;
justify-content: space-between;
align-items: flex-start;
width: 49rem;
height: 3.5rem;
`
const FormuleBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 0.25rem;
width: 14.1875rem;
height: 3.5rem;
`
const FormuleTexte = styled.span`
color: #202124;
font-family: 'Urbanist';
font-size: 2.5rem;
font-style: normal;
font-weight: 700;
line-height: 2.5rem;
`
const BlueFormuleTexte = styled.span`
color : #0e738a;
font-family: 'Urbanist';
font-size: 2.5rem;
font-style: normal;
font-weight: 700;
line-height: 2.5rem;
`
const PriceBlock = styled.div`
display: flex;
width: 11rem;
flex-direction: column;
align-items: flex-end;
gap: 0.25rem;
width: 11rem;
height: 3.5rem;
`
const FacturationBlock = styled.div`
display: flex;
padding: 2rem 1rem 1.5rem 1rem;
flex-direction: column;
align-items: flex-end;
gap: 1.5rem;
align-self: stretch;
border-radius: 0.25rem;
background: var(--global-secondary-white-highlight, #FCFCFC);
box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
width: 51rem;
height: 9rem;
`
const InfoFacturationBlock = styled.div`
display: flex;
align-items: flex-start;
gap: 1rem;
align-self: stretch;
width: 49rem;
height: 5.5rem;
`
const FirstBlock = styled.div`
display: flex;
width: 34.5rem;
height: 5.5rem;
flex-direction: column;
align-items: flex-start;
gap: 0.5rem;
`
const SecondBlock = styled.div`
display: flex;
width: 12.4375rem;
height: 5rem;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
flex: 1 0 0;
`
const HistoriqueBlock = styled.div`
display: flex;
padding: 2rem 1rem 1.5rem 1rem;
flex-direction: column;
align-items: flex-start;
gap: 1.5rem;
align-self: stretch;
border-radius: 0.25rem;
background: var(--global-secondary-white-highlight, #FCFCFC);
box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
`
const Historique = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
align-self: stretch;
`
const HistoriqueTexteBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`
const HistoriqueTexte = styled.span`
color: var(--global-secondary-black, #202124);
font-family: 'Urbanist';
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: 1.25rem;
`
const HistoriqueBlueTexte = styled.span`
color: var(--cra-main-metallic-seaweed, #0E738A);
font-family: 'Urbanist';
font-size: 0.75rem;
font-style: normal;
font-weight: 800;
line-height: 100%;
text-transform: uppercase;
`
const HistoriqueGreyTexte = styled.span`
color: var(--global-secondary-grey-darker, #6C6D70);
font-family: 'Urbanist';
font-size: 0.75rem;
font-style: normal;
font-weight: 600;
line-height: 100%;
`
const Image = styled.img`
width : 1rem;
height: 1rem;
`
const BlueImage = styled.img`
width: 1rem;
height: 1rem;
color : #0e738a;
cursor: pointer;
`
const SecondImage = styled.img`
width: 2rem;
height: 2rem;
`
const ImageContainer = styled.div`
display: flex;
padding: 0.5rem;
align-items: center;
gap: 0.25rem;
`
const ThirdImage = styled.img`
display: flex;
width: 1.25rem;
height: 1.25rem;
justify-content: center;
align-items: center;
`
const BlueImageContainer = styled.div`
display: flex;
align-items: flex-start;
gap: 0.25rem;
`
const MenuBlock = styled.div`
display: flex;
width: 16.5rem;
height: 23.5rem;
padding: 1.5rem 1rem;
flex-direction: column;
align-items: flex-start;
gap: 1rem;
position: absolute;
top: 170px;
left: 350px;
border-radius: 0.25rem;
background: var(--global-secondary-white-highlight, #FCFCFC);
box-shadow: 0px 8px 96px 0px rgba(32, 33, 36, 0.04);
`
const Menu = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 2rem;
width: 13.5625rem;
height: 19rem;
`
const MenuDiv =styled.div`
width: 16.375rem;
height: 2.5rem;
display: flex;
align-items: center;
gap: 0.5rem;
`
const MenuDiv2 = styled.div`
display: flex;
align-items: center;
width: 16.375rem;
height: 2.5rem;
background: var(--editeur-main-lighter-shade-2, #FFF7E0);
`
const MenuText = styled.span`
color: var(--global-secondary-black, #202124);
font-family: 'Urbanist';
font-size: 1rem;
font-style: normal;
font-weight: 700;
line-height: 150%;
`
const MenuIcon = styled.img`
width: 1.5rem;
height: 1.5rem;
`
const MenuLine = styled.div`
height: 0.0625rem;
flex-shrink: 0;
align-self: stretch;
background: #D9D9D9;
`
const MenuBlueTexte = styled.span`
color: var(--cra-main-metallic-seaweed, #0E738A);
font-family: 'Urbanist';
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 150%;
`

const Dashboard = () =>{

    const [modal, setModal] = useState(false);
    const [accesModal, setAccesModal] = useState(false);
    const [abonnementModal, setAbonnementModal] = useState(false);
    const [factureModal, setFactureModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };
    const toggleAccesModal = () => {
        setAccesModal(!accesModal)
    };
    const toggleAbonnementModal = () => {
        setAbonnementModal(!abonnementModal);
    };
    const toggleFactureModal = () => {
        setFactureModal(!factureModal)
    };
    

    return(
        <Container>
            <LoginHeader></LoginHeader>
            <BlockContainer>
                <Block>
                    <AccountBlock>
                        <AccountTexte>Mon compte</AccountTexte>
                        <InformationBlock>
                            <DivTexte>
                                <ImageContainer>
                                <Image src={Profil}></Image>
                                </ImageContainer>
                            <Texte>INFORMATIONS PERSONNELLES</Texte>
                            {modal && <ModalPersonnalInfo></ModalPersonnalInfo>}
                            <BlueTexte>MODIFIER MES INFORMATIONS<BlueImage src={Pen} onClick={toggleModal}></BlueImage></BlueTexte>
                            </DivTexte>
                            <BlockPerso>
                                <GreyTexte>Nom de l'entreprise: <Texte>AMAPII</Texte></GreyTexte>
                                <GreyTexte>Nom & prénom du représentant: <Texte>Jean-Marc Affionme</Texte></GreyTexte>
                                <GreyTexte>Email du représentant: <Texte>j********e@amapii.com</Texte></GreyTexte>
                                <GreyTexte>Tel du représentant<Texte>******70</Texte></GreyTexte>
                                <GreyTexte>Numéro de SIRET: <Texte>123456789101112</Texte></GreyTexte>
                                <GreyTexte>Immatriculation RCS: <Texte>RCS PARIS B 517403572</Texte></GreyTexte>
                                <GreyTexte>Adresse du siège social: <Texte>18 Bis ue du Bicentenaire de la Révolution, Le Plessis-Pâté, 91220</Texte></GreyTexte>
                            </BlockPerso>
                        </InformationBlock>
                        <AccesSupportBlock>
                            <AccesBlock>
                                <Div2Texte>
                                    <Texte><Image src={Lock}></Image>ACCES</Texte>
                                    {accesModal && <ModalAcces></ModalAcces>}
                                    <BlueTexte>CHANGER D'EMAIL OU MOT DE PASSE<BlueImage src={Pen} onClick={toggleAccesModal}></BlueImage></BlueTexte>
                                </Div2Texte>
                                <AccesInfo>
                                    <GreyTexte>Adresse email: <Texte>j**********e@a****i.com</Texte></GreyTexte>
                                    <GreyTexte>Authentification sécurisée: <Texte>Pas d'authentification en deux étapes</Texte></GreyTexte>
                                </AccesInfo>
                                <Button>AJOUTER L'AUTHENTIFICATION EN DEUX ETAPES</Button>
                            </AccesBlock>
                            <SupportBlock>
                                <Div2Texte>
                                    <Texte><Image src={Casque}></Image>SUPPORT TECHNIQUE</Texte>
                                    <BlueTexte>CREER UN NOUVEAU TICKET<BlueImage src={Plus}></BlueImage></BlueTexte>
                                </Div2Texte>
                                <RequestBlock>
                                    <Request>
                                        <ImageContainer>
                                            <SecondImage src={Bug}></SecondImage>
                                        <RequestTexte>Création d'un module de traitement<OrangeTexte>Requête en cours de traitement</OrangeTexte></RequestTexte>
                                        <ThirdImage src={SupportTexte}></ThirdImage>
                                        </ImageContainer>                                       
                                    </Request>
                                    <Request>
                                        <ImageContainer>
                                            <SecondImage src={Parametre}></SecondImage>
                                        <RequestTexte>Ajout d’une fonctionnalité<OrangeTexte>Requête en cours de traitement</OrangeTexte></RequestTexte>
                                        <ThirdImage src={SupportTexte}></ThirdImage>
                                        </ImageContainer>                                       
                                    </Request>
                                    <Request>
                                        <ImageContainer>
                                            <SecondImage src={Case}></SecondImage>
                                        <RequestTexte>Négociation du tarif réglementé<GreenTexte>Archivé le 1 Juin 2023</GreenTexte></RequestTexte>
                                        </ImageContainer>                                       
                                    </Request>
                                </RequestBlock>
                                <Button>VOIR TOUTES MES REQUETES</Button>
                            </SupportBlock>
                        </AccesSupportBlock>
                        <AbonnementBlock>
                            <DivTexte>
                                <Texte><Image src={Abonnement}></Image>MON ABONNEMENT</Texte>
                                {abonnementModal && <ModalAbonnement></ModalAbonnement>}
                                <BlueTexte>CHANGER DE FORMULE<BlueImage src={Pen} onClick={toggleAbonnementModal}></BlueImage></BlueTexte>
                            </DivTexte>
                            <AbonnementTexteBlock>
                                <FormuleBlock>
                                    <FormuleTexte>Formule <BlueFormuleTexte>Pro</BlueFormuleTexte></FormuleTexte>
                                    <Texte>18 UTILISATEURS</Texte>
                                </FormuleBlock>
                                <PriceBlock>
                                    <BlueFormuleTexte>236.16€</BlueFormuleTexte>
                                    <Texte>PAR MOIS</Texte>
                                </PriceBlock>
                            </AbonnementTexteBlock>
                        </AbonnementBlock>
                        <FacturationBlock>
                                <DivTexte>
                                    <Texte><Image src={Card}></Image>PAIEMENT & FACTURATION</Texte>
                                    {factureModal && <ModalFacture></ModalFacture>}
                                    <BlueTexte>MODIFIER LA FACTURATION ET LE PAIEMENT<BlueImage src={Pen} onClick={toggleFactureModal}></BlueImage></BlueTexte>
                                </DivTexte>
                            <InfoFacturationBlock>
                                <FirstBlock>
                                    <GreyTexte>Nom de la société:     <Texte>AMAPII</Texte></GreyTexte>
                                    <GreyTexte>Adresse de facturation:     <Texte>18 Bis Rue du Bicentenaire de la Révolution, Le Plessis-Pâté, 91220</Texte></GreyTexte>
                                    <GreyTexte>Numéro de téléphone:     <Texte>+33 1 23 45 67 89</Texte></GreyTexte>
                                    <GreyTexte>Numéro de TVA:     <Texte>Info</Texte></GreyTexte>
                                </FirstBlock>
                                <SecondBlock>
                                    <GreyTexte>Moyen de paiement</GreyTexte>
                                    <Texte>Visa se terminant par 6166</Texte>
                                    <GreyTexte>Prochaine date de facturation</GreyTexte>
                                    <Texte>25 septembre 2023</Texte>
                                </SecondBlock>
                            </InfoFacturationBlock>
                        </FacturationBlock>
                        <HistoriqueBlock>
                            <DivTexte>
                                <Texte><Image src={Histo}></Image>HISTORIQUE DE FACTURATION</Texte>
                            </DivTexte>
                            <Historique>
                                <HistoriqueTexteBlock>
                                    <HistoriqueBlueTexte>JUIN 2023</HistoriqueBlueTexte>
                                    <HistoriqueTexte>Formule Pro</HistoriqueTexte>
                                    <HistoriqueGreyTexte>236.16€</HistoriqueGreyTexte>
                                </HistoriqueTexteBlock>
                                <BlueImageContainer>
                                <Image src={Eye}></Image>
                                <Image src={Download}></Image>
                                </BlueImageContainer>
                            </Historique>
                            <Historique>
                                <HistoriqueTexteBlock>
                                    <HistoriqueBlueTexte>JUIN 2023</HistoriqueBlueTexte>
                                    <HistoriqueTexte>Formule Pro</HistoriqueTexte>
                                    <HistoriqueGreyTexte>236.16€</HistoriqueGreyTexte>
                                </HistoriqueTexteBlock>
                                <BlueImageContainer>
                                <Image src={Eye}></Image>
                                <Image src={Download}></Image>
                                </BlueImageContainer>
                            </Historique>
                            <Historique>
                                <HistoriqueTexteBlock>
                                    <HistoriqueBlueTexte>JUIN 2023</HistoriqueBlueTexte>
                                    <HistoriqueTexte>Formule Pro</HistoriqueTexte>
                                    <HistoriqueGreyTexte>236.16€</HistoriqueGreyTexte>
                                </HistoriqueTexteBlock>
                                <BlueImageContainer>
                                <Image src={Eye}></Image>
                                <Image src={Download}></Image>
                                </BlueImageContainer>
                            </Historique>
                        </HistoriqueBlock>
                    </AccountBlock>
                </Block>
                <MenuBlock>
                    <Menu>
                        <MenuDiv2>
                            <MenuIcon src={Profil}></MenuIcon>
                            <MenuText>Informations personnelles</MenuText>
                        </MenuDiv2>
                        <MenuDiv>
                            <MenuIcon src={Lock}></MenuIcon>
                            <MenuText>Accés</MenuText>
                        </MenuDiv>
                        <MenuDiv>
                            <MenuIcon src={Abonnement}></MenuIcon>
                            <MenuText>Mon abonnement</MenuText>
                        </MenuDiv>
                        <MenuDiv>
                            <MenuIcon src={Card}></MenuIcon>
                            <MenuText>Paiement & Facturation</MenuText>
                        </MenuDiv>
                        <MenuDiv>
                            <MenuIcon src={Histo}></MenuIcon>
                            <MenuText>Historique de facturation</MenuText>
                        </MenuDiv>
                        <MenuDiv>
                            <MenuIcon src={BlackBug}></MenuIcon>
                            <MenuText>Support technique</MenuText>
                        </MenuDiv>
                    </Menu>
                    <MenuLine></MenuLine>
                    <MenuDiv>
                        <MenuIcon src={Link}></MenuIcon>
                        <MenuBlueTexte>Accéder à l'application</MenuBlueTexte>
                    </MenuDiv>
                </MenuBlock>
            </BlockContainer>
            <FooterNewAccount></FooterNewAccount>
        </Container>
    );
};

export default Dashboard;