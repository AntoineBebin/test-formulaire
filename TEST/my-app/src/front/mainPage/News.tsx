import styled from "styled-components";
import { useState } from "react";
import Computer from '../image/computer.png';

const Container = styled.div`
display: flex;
flex-direction : column;
align-items: center;
margin-top : 300px;
`

const Title = styled.h1`
color: #86b9c2 ;
font-style: normal;
font-weight: 400;
font-size: 120px;
line-height: 100%;
font-family: 'Urbanist';
margin-bottom : -30px;`

const Block = styled.div `
width: 744px;
height: 360px;
left: 156px;
top: 2391px;
flex-direction: column;
align-items: flex-start;
display: flex;
background: rgba(245, 245, 245, 0.5);
box-shadow: 0px 8px 64px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
border-radius: 8px;
margin-right : 250px;
`

const Titre = styled.h2`
color: black;
font-size : 25px;
font-weight: bold;
margin-left : 20px;`

const Texte = styled.span`
font-size: 15px;
color: black;
margin-left : 20px;`

const BlockInput = styled.div`
display: flex;
align-items: center;
flex-direction: row;
margin-top: 20px;
margin-left : 20px;`

const Input = styled.input `
background-color: #FCFCFC;
border : 1px solid transparent;
width: 451px;
height: 44px;
padding : 0px 16px;
border-radius: 4px 0px 0px 4px;
margin-bottom: 10px;
`

const Button = styled.button`
background-color: #FFD966;
border : solid 1px transparent;
cursor: pointer;
padding : 12px 20px;
gap: 8px;
width: 117px;
height: 48px;
border-radius: 0px 4px 4px 0px;
align-self : flex-start;
`

const SecondBlock = styled.div`
position: relative;
width: 461px;
height: 348px;
left: 490px;
top: -390px;
background-image: url(${Computer});
`

const News = () => {
    // Etat et fonction bouton (vide l'input)
    const [email, setEmail] = useState ('');

    const handleClick = (e : React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }


    return (
        <Container>
            <Title>Nouveautés</Title>
            <Block>
                <Titre>Bientôt disponible</Titre>
                <Texte>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, fuga ullam? Nulla id dolor aut nihil ducimus ut harum minus optio molestiae sunt perferendis reprehenderit dolorem ex, porro laudantium voluptas?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, fuga ullam? Nulla id dolor aut nihil ducimus ut harum minus optio molestiae sunt perferendis reprehenderit dolorem ex, porro laudantium voluptas?</Texte>
                <BlockInput>
                <Input placeholder="Email" value={email} onChange={handleClick}></Input>
                <Button onClick={handleClick}>M'inscrire</Button>
                </BlockInput>
            </Block>
            <SecondBlock></SecondBlock>
        </Container>
    );
}

export default News;