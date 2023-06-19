import styled, {keyframes} from "styled-components";
import { useState, useEffect } from "react";


const Container = styled.div`
display: flex;
flex-direction : column;
align-items: center;
margin-top : 300px;
`

const Block = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 120px;
position: relative;
width: 1128px;
height: 500px;
left: -90px;
top: 680px;
margin-top: 20px;
`

const Title = styled.h1`
position: absolute;
width: 441px;
height: 81px;
left: 35px;
top: -100px;
font-family: 'Ibarra Real Nova';
font-style: normal;
font-weight: 400;
font-size: 120px;
line-height: 100%;
color: #5EA2B1;
`

const BlockText = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px;
gap: 8px;
position: absolute;
width: 648px;
height: 320px;
left: 0px;
top: 65px;
background: rgba(245, 245, 245, 0.5);
box-shadow: 0px 8px 64px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
border-radius: 8px;`

const Texte1 = styled.span`
width: 648px;
height: 40px;
font-family: 'Outfit';
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 40px;
color: #202124;
`

const Texte2 = styled.span`
width: 568px;
height: 192px;
font-family: 'Outfit';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: #000000;
`

const SlideContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: relative;
left: 275px;
top: 270px;
padding: 0px;
gap: 32px;
width: 360px;
height: 364px;
border : solid blue 1px;`


const Team = () => {


    return(
        <Container>
            <Block>
                <Title>L'équipe</Title>
                <BlockText>
                    <Texte1>La communication</Texte1>
                    <Texte2>Il était une fois une entreprise appelée "NovaTech" qui avait été fondée par deux jeunes entrepreneurs passionnés par la technologie et l'innovation, Lisa et David. Leur objectif était de créer une entreprise axée sur la recherche et le développement de nouvelles technologies révolutionnaires. Au départ, NovaTech était une petite start-up basée dans un garage. Lisa et David travaillaient jour et nuit pour concrétiser leurs idées novatrices. Ils ont réuni une équipe talentueuse de développeurs, d'ingénieurs et de chercheurs, partageant tous la même vision de transformer le monde grâce à la technologie.</Texte2>
                </BlockText>
            </Block>
            <SlideContainer>
                <p>Slide a faire</p>
            </SlideContainer>
        </Container>
    );
}

export default Team;