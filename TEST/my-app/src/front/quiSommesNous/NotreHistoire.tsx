import styled from "styled-components";
import { useState } from "react";
import HistoryImage from '../image/histoire.png';

const Container = styled.div`
display: flex;
flex-direction : column;
align-items: center;
margin-top : 300px;
`

const TitleBlock = styled.div`
position: absolute;
display: flex;
align-items: center;
justify-content: center;
width: 1440px;
height: 264px;
left: 230px;
top: 637px;
background: #F5F5F5;
box-shadow: 0px 8px 96px rgba(32, 33, 36, 0.04);
`

const Title = styled.h1`
width: 690px;
height: 81px;
left: calc(50% - 690px/2 - 27px);
top: 743px;
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
gap: 8px;
position: absolute;
width: 936px;
height: 344px;
left: 600px;
top: 809px;
background: rgba(245, 245, 245, 0.5);
box-shadow: 0px 8px 64px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
border-radius: 8px;
z-index: 1;`

const TexteBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 8px;
width: 856px;
`
const Texte1 = styled.h3`
width: 422px;
height: 40px;
font-family: 'Urbanist';
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 40px;
color: #202124;
`

const Texte2 = styled.span `
width: 856px;
height: 216px;
font-family: 'Urbanist';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: #000000;
`

const ButtonBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 16px;
position: absolute;
width: 168px;
height: 240px;
left: 395px;
top: 861px;
`

const Button = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
font-weight: 600;
font-family: 'Urbanist';
padding: 12px 20px;
gap: 8px;
width: 168px;
height: 48px;
background: #FFD966;
box-shadow: 0px 8px 96px rgba(32, 33, 36, 0.04);
border-radius: 4px;
border: none;
outline: none;
cursor: pointer;
`

const AnimatedButton = styled(Button)`
transition : all 0.3s ease-in-out;
:hover{
    transform: translateY(-3px);
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
}
:active{
    transform: translateY(0);
    box-shadow : none;
}`

const Image = styled.img`
position: absolute;
width: 208px;
height: 214px;
left: 850px;
top: -100px;
transform: rotate(14.32deg);
z-index: -1;
`

const NotreHistoire = () => {
    // Etat et fonction pour les boutons avec animations
    const [buttonSelected, setButtonSelected] = useState<number | null>(null);

    const buttons = [
        {id : 1, label: "2017"},
        {id : 2, label: "2018"},
        {id : 3, label: "2019"},
        {id : 4, label: "2020"},
    ]

    const handleButtonClick = (buttonId : number) => {
        if (buttonSelected === buttonId) {
            setButtonSelected(null);
        } else {
            setButtonSelected(buttonId);
        }
    };

    const buttonStyle = (buttonId : number) => {
        if( buttonSelected === buttonId){
            return {backgroundColor : "#ffd966"};
        } else {
            return { backgroundColor : "white"};
        }
    };

    return (
        <Container>
            <TitleBlock>
                <Title>Notre histoire</Title>
            </TitleBlock>
            <Block>
                <TexteBlock>
                    <Texte1>Une idée nous vient en tête 💡</Texte1>
                    <Texte2>Il était une fois une entreprise appelée "NovaTech" qui avait été fondée par deux jeunes entrepreneurs passionnés par la technologie et l'innovation, Lisa et David. Leur objectif était de créer une entreprise axée sur la recherche et le développement de nouvelles technologies révolutionnaires. Au départ, NovaTech était une petite start-up basée dans un garage. Lisa et David travaillaient jour et nuit pour concrétiser leurs idées novatrices. Ils ont réuni une équipe talentueuse de développeurs, d'ingénieurs et de chercheurs, partageant tous la même vision de transformer le monde grâce à la technologie. Le premier produit phare de NovaTech fut un dispositif portable révolutionnaire appelé "NeuroLink". Il s'agissait d'un casque qui permettait de contrôler des appareils électroniques et des ordinateurs par la pensée. Cette invention fut un succès retentissant, attirant l'attention des médias et des investisseurs</Texte2>
                </TexteBlock>
                <Image src={HistoryImage}></Image>
            </Block>
            <ButtonBlock>
                {buttons.map((button) =>(
                    <AnimatedButton key={button.id}
                    style={buttonStyle(button.id)}
                    onClick={()=> handleButtonClick(button.id)}
                    >{button.label}</AnimatedButton>
                ))}
            </ButtonBlock>
        </Container>
    );
}

export default NotreHistoire;