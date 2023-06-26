import styled from "styled-components";
import Calendar from "../image/calendrier.png";

const FirstBlock = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 40px;
gap: 32px;
position: absolute;
width: 724px;
height: 328px;
left: calc(50% - 724px/2);
top: 246px;
margin-top : -100px;
`

const BlockText = styled.div `
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 8px;
width: 575px;
height: 168px;
`

const Texte1 = styled.span`
width: 575px;
height: 120px;
font-family: 'Outfit';
font-style: normal;
font-weight: 600;
font-size: 48px;
line-height: 60px;
text-align: center;
color: #202124;`

const Texte2 = styled.span`
width: 575px;
height: 40px;
font-family: 'Outfit';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #202124;
`
const Button = styled.button`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 12px 20px;
gap: 8px;
width: 206px;
height: 48px;
background: #FFD966;
border-radius: 4px;
border: none;
outline: none;
margin-top : 60px;
cursor: pointer;`

const Image = styled.img`
background-image: url(${Calendar});
position: absolute;
width: 1390px;
height: 852px;
left: calc(50% - 1390px/2);
top: 275px;
margin-top : 50px;`

const Calendrier = () => {

    return (
        <FirstBlock>
            <BlockText>
                <Texte1>Gérez vos consultants avec un seul logiciel</Texte1>
                <Texte2>Découvrez nos deux offres complémentaires pour optimiser la gestion de vos projets et événements. La première solution, dédiée à la gestion des consultants.</Texte2>
                <Button>ESSAYER GRATUITEMENT</Button>
            </BlockText>
            <Image></Image>
        </FirstBlock>
    );
}

export default Calendrier;