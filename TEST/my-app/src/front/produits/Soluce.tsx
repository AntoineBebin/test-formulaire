import styled from "styled-components";


const Container = styled.div`
position: absolute;
width: 1123px;
height: 714px;
left: calc(50% - 1123px/2 + 0.5px);
top: 1415px;
`
const Title = styled.h1`
position: absolute;
width: 588px;
height: 81px;
left: calc(50% - 588px/2 - 2.5px);
top: -80px;
font-family: 'Ibarra Real Nova';
font-style: normal;
font-weight: 400;
font-size: 120px;
line-height: 100%;
color: #5EA2B1;
`
const Block = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 40px;
gap: 40px;
position: absolute;
width: 1123px;
height: 649px;
left: 0px;
top: 65px;
background: rgba(245, 245, 245, 0.5);
box-shadow: 0px 8px 64px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
border-radius: 8px;
margin-top : 18px;
`
const BlockText = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 16px;
width: 596px;
height: 104px;
`
const Texte1 = styled.span`
width: 596px;
height: 40px;
font-family: 'Silka';
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 40px;
color: #202124;
`
const Texte2 = styled.span`
width: 556px;
height: 48px;
font-family: 'Silka';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
text-align: center;
color: #202124;
`
const LeftBlock = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-end;
padding: 0px;
gap: 24px;
width: 398.34px;
height: 425px;
margin-left: -700px;
border : solid yellow 1px;
`
const LeftTexte = styled.div`
display: flex;
flex-direction: column;
flex-shrink: 0;
align-self: stretch;
color: var(--global-secondary-black, #202124);
font-size: 1.5rem;
font-family: 'Outfit';
font-weight: 600;
line-height: 2.5rem;
padding : 15px;
`
const PetitTexte = styled.div`
display: flex;
flex-direction: column;
align-self: stretch;
color: var(--global-secondary-black, #202124);
font-size: 1rem;
font-family: 'Outfit';
line-height: 150%;
margin-top : -40px;`

const VideoBlock = styled.div`
display: flex;
flex-direction: column;
width: 37.3535rem;
height: 36.5625rem;
border : solid blue 1px;
`


const Soluce = () => {

    return(
        <Container>
            <Title>La solution</Title>
            <Block>
            <BlockText>
                <Texte1>Gérez tous vos consultants en un clic</Texte1>
                <Texte2>Ne perdez plus de temps à blablabla blabla blabl abla utilisez suepr outils pour cra, fichiers, etc etc et etc et etet et efetet et zt zr</Texte2>         
            </BlockText>
            <LeftBlock>
                <LeftTexte>Création d'événements</LeftTexte>
                <LeftTexte>Création de sondages</LeftTexte>
                <PetitTexte>Parce-que même sans innovation, il existe toujours une marge de progression, DéjàVu s’efforce d’améliorer ses solutions au quotidien</PetitTexte>
                <LeftTexte>Mix entre événement et sondage</LeftTexte>
                <LeftTexte>Ajout d’organisateur</LeftTexte>
            </LeftBlock>
            <VideoBlock></VideoBlock>
            </Block>
        </Container>
    );
}

export default Soluce;