import styled from "styled-components";


const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
background-color: #ebebeb;
margin-left: 30px;`

const LeftBlock = styled.div `
width: 30%;
height: 35vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
margin-left: 100px;
`

const Texte = styled.h2`
font-size: 35px;
margin: 0;
color: black;

`

const SecondText = styled.span`
margin : 10px 0;
color: black;
`

const Input = styled.input`
background-color: yellow;
margin-top: 10px;
font-weight: bold;
color: black;
height: 50px;
width: 200px;
border-radius: 5px;
padding: 5px;
display: flex;
justify-content: center;
align-items: center;
`
const RightBlock = styled.div`
border: solid blue 1px;
width: 60%;
justify-content: center;
align-items: center;
`

const Sponsor = styled.div`
width: 100%;
border: solid black 1px;
height: 25px;`

const Intro =() => {

    const handleClick = () => {
        console.log('cliqué');
    }

    return (
        <Container>
            <LeftBlock>
                <Texte>Des solutions peu innovantes, mais plus performantes</Texte>
                <SecondText>Découvrez nos deux offres complémentaires pour optimiser la gestion de vos projets et événements. La première solution, dédiée à la gestion des consultants.
                </SecondText>
                <Input placeholder="ESSAYER GRATUITEMENT" onClick={handleClick}></Input>
            </LeftBlock>
            <RightBlock>IMAGE</RightBlock>
            <Sponsor>MARQUE</Sponsor>
        </Container>
    );
}

export default Intro;