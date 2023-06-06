import styled from "styled-components";
import backgroundImage from '../image/famille.png'


const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
background-color: #F5F5F5;
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

const Button = styled.button`
background-color: #FFD966;
border-color: #FFD966 ;
margin-top: 10px;
font-weight: bold;
height: 48px;
width: 209px;
border-radius: 4px;
display: flex;
justify-content: center;
align-items: center;
border : none;
outline : none;
`
const RightBlock = styled.div`
width: 60%;
justify-content: center;
align-items: center;
background-image: url(${backgroundImage});
background-position: center;
width: 744px;
height: 484px;
left: 540px;
top: 307px;
margin-top : 160px;
margin-left: 100px;
`

const Sponsor = styled.div`
width: 100%;
border: solid black 1px;
height: 25px;`

const Intro = () => {

    const handleClick = () => {
        console.log('cliqué');
    }

    return (
        <Container>
            <LeftBlock>
                <Texte>Des solutions peu innovantes, mais plus performantes</Texte>
                <SecondText>Découvrez nos deux offres complémentaires pour optimiser la gestion de vos projets et événements. La première solution, dédiée à la gestion des consultants.
                </SecondText>
                <Button  onClick={handleClick}>ESSAYER GRATUITEMENT</Button>
            </LeftBlock>
            <RightBlock></RightBlock>
        </Container>
    );
}

export default Intro;