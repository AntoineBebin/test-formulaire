import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction : column;
align-items: center;
background-color: #ebebeb;
margin-top : 600px;
`

const Title = styled.h1`
color: #86b9c2 ;
font-size: 50px;`

const Block = styled.div `
background-color : rgba(245, 245, 245, 0.5);
width: 1162px;
height: 360px;
left: 156px;
top: 2391px;
flex-direction: column;
align-items: center;
display: flex;
`

const Titre = styled.h2`
color: black;
font-size : 25px;
font-weight: bold;`

const Texte = styled.span`
font-size: 15px;
color: black;`

const BlockInput = styled.div`
display: flex;
align-items: center;
flex-direction: row;
margin-top: 20px;`

const Input = styled.input `
background-color: #FCFCFC;
border : 1px solid transparent;
width: 451px;
height: 44px;
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

const News = () => {

    const handleClick = () => {
        console.log('cliqué')
    }


    return (
        <Container>
            <Title>Nouveautés</Title>
            <Block>
                <Titre>Bientôt disponible</Titre>
                <Texte>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, fuga ullam? Nulla id dolor aut nihil ducimus ut harum minus optio molestiae sunt perferendis reprehenderit dolorem ex, porro laudantium voluptas?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, fuga ullam? Nulla id dolor aut nihil ducimus ut harum minus optio molestiae sunt perferendis reprehenderit dolorem ex, porro laudantium voluptas?</Texte>
                <BlockInput>
                <Input placeholder="Email"></Input>
                <Button onClick={handleClick}>M'inscrire</Button>
                </BlockInput>
            </Block>
        </Container>
    );
}

export default News;