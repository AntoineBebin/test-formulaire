import styled from "styled-components";

const Container = styled.div`
width: 90rem;
height: 118.8125rem;
flex-shrink: 0;
display: flex;
flex-direction: column;
`
const Block = styled.div`
display: inline-flex;
position: absolute;
top: 70rem;
left: 35rem;
flex-direction: column;
align-items: flex-start;
gap: 1.5rem;
width: 70.5rem;
height: 120.3125rem;
`
const Title = styled.h1`
color: var(--cra-main-lighter-shade-1, #5EA2B1);
font-family: 'Ibarra Real Nova';
font-size: 7.5rem;
font-style: normal;
font-weight: 400;
line-height: 100%;
position: absolute;
left : 50rem;
top : 60rem;
`
const FirstBlock = styled.div`
display: flex;
width: 70.5rem;
height: 27.5rem;
border-radius: 1rem;
background: var(--global-secondary-transparent-50, rgba(245, 245, 245, 0.50));
box-shadow: 0px 8px 64px 0px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
`
const Gestion = styled.div`
width: 33rem;
height: 25rem;
margin-top: 2rem;
`
const BoldTexte = styled.span`
color: var(--global-secondary-black, #202124);
font-family: 'Urbanist';
font-size: 1.5rem;
font-style: normal;
font-weight: 600;
line-height: 2.5rem;
align-self: stretch;
`
const Texte = styled.span`
color: var(--global-secondary-black, #202124);
font-family: 'Urbanist';
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 150%;
align-self: stretch;
`
const BlockTexte = styled.div`
width: 28.6875rem;
height: 10rem;
display: flex;
flex-direction: column;
align-self: stretch;
`
const AmapiiImage = styled.div`
width: 33rem;
height: 25rem;
border: solid black 1px;
`
const SecondBlock = styled.div`
display: flex;
width: 70.5rem;
height : 29.4375rem;
align-items: flex-start;
gap: 1.5rem;
`
const DocuSign = styled.div`
height: 29.4375rem;
width : 34.5rem;
flex: 1 0 0;
border-radius: 1rem;
background: var(--global-secondary-transparent-50, rgba(245, 245, 245, 0.50));
box-shadow: 0px 8px 64px 0px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
padding: 2.5rem 0.8125rem 2.125rem 0.8125rem;
`
const BlockText = styled.div`
display: flex;
flex-direction: column;
height: 5.5rem;
width: 25.0625rem;
`
const AutoScan = styled.div`
display: flex;
height: 29.4375rem;
width : 34.5rem;
padding: 2.5rem 0.8125rem 2.125rem 0.8125rem;
flex-direction: column;
justify-content: flex-end;
align-items: center;
gap: 3.25rem;
flex: 1 0 0;
border-radius: 1rem;
background: var(--global-secondary-transparent-50, rgba(245, 245, 245, 0.50));
box-shadow: 0px 8px 64px 0px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
`
const ScanBlock = styled.div`
display: flex;
width: 32.875rem;
height: 16.0625rem;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 0.35425rem;
border: 1.417px dashed var(--main-prussian-blue, #06384D);
background: rgba(252, 252, 252, 0.90);
border: solid blue 1px;
`
const ThirdBlock = styled.div`
display: flex;
align-items: flex-start;
gap: 1.5625rem;
width: 70.5rem;
height: 29.4375rem;
`
const Relance = styled.div`
width: 22.5rem;
height: 29.4375rem;
border-radius: 1rem;
background: var(--global-secondary-transparent-50, rgba(245, 245, 245, 0.50));
box-shadow: 0px 8px 64px 0px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
display: flex;
flex-direction: column;
`
const GestionDossier = styled.div`
display: flex;
flex-direction: column;
width: 46.4375rem;
height: 29.4375rem;
border-radius: 1rem;
background: var(--global-secondary-transparent-50, rgba(245, 245, 245, 0.50));
box-shadow: 0px 8px 64px 0px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
`
const FourBlock = styled.div`
display: flex;
flex-direction: column;
padding: 2.5625rem 2.32656rem 0rem 2.6875rem;
gap: 2.375rem;
align-self: stretch;
border-radius: 1rem;
background: var(--global-secondary-transparent-50, rgba(245, 245, 245, 0.50));
box-shadow: 0px 8px 64px 0px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
width: 70.5rem;
height: 29.4375rem;
`

const Fonctions = () => {

    return(
        <Container>
            <Title>Fonctions pro</Title>
            <Block>
            <FirstBlock>
                <Gestion>
                <BlockTexte>
                    <BoldTexte>Gestion des contrats associés</BoldTexte>
                    <Texte>Parce-que même sans innovation, il existe toujours une marge de progression, DéjàVu s’efforce d’améliorer ses solutions au quotidien. Parce-que même sans innovation, il existe toujours une marge de progression, DéjàVu s’efforce d’améliorer ses solutions au quotidien</Texte>
                </BlockTexte>
                </Gestion>
                <AmapiiImage></AmapiiImage>
            </FirstBlock>
            <SecondBlock>
                <DocuSign>
                    <BlockText>
                    <BoldTexte>Envoie via DocuSign</BoldTexte>
                    <Texte>Parce-que même sans innovation, il existe toujours une marge de progression.</Texte>
                    </BlockText>
                </DocuSign>
                <AutoScan>
                    <BoldTexte>AutoScan "de masse"</BoldTexte>
                    <Texte>Parce-que même sans innovation, il existe toujours une marge de progression, DéjàVu s’efforce d’améliorer ses solutions au quotidien</Texte>
                    <ScanBlock></ScanBlock>
                </AutoScan>
            </SecondBlock>
            <ThirdBlock>
                <Relance>
                    <BoldTexte>Relance automatique</BoldTexte>
                    <Texte>Parce-que même sans innovation, il existe toujours une marge de progression</Texte>
                </Relance>
                <GestionDossier>
                    <BoldTexte>Gestion du dossier partagé</BoldTexte>
                    <Texte>Parce-que même sans innovation, il existe toujours une marge de progression.</Texte>
                </GestionDossier>
            </ThirdBlock>
            <FourBlock>
                <BoldTexte>Personnalisation du document CRA</BoldTexte>
                <Texte>Parce-que même sans innovation, il existe toujours une marge de progression</Texte>

            </FourBlock>
            </Block>
        </Container>
    );
};

export default Fonctions;