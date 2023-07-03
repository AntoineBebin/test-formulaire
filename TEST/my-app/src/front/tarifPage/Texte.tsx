import styled from "styled-components";

const Block = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 40px;
gap: 32px;
position: absolute;
width: 698px;
height: 328px;
left: calc(50% - 698px/2);
top: 160px;
border-radius: 8px;
`

const BlockTexte = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 8px;
width: 618px;
height: 328px;
`

const Texte1 = styled.span`
font-family: 'Urbanist';
font-style: normal;
font-weight: 600;
font-size: 48px;
line-height: 60px;
text-align: center;
color: #202124;`

const YellowTexte = styled.span`
color: #FFD966;
font-family : 'Urbanist';
`

const Texte2 = styled.span`
font-family: 'Urbanist';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #202124;`

const Button = styled.button`
display : flex;
flex-direction : row;
align-items : center;
font-weight: bold;
padding : 12px 20px;
gap : 8px;
width : 206px;
height : 48px;
background : #FFD966;
border-radius : 4px;
border : none;
outline : none;
cursor : pointer;
margin-top : 35px;
font-family : 'Urbanist';
`

const Texte = () => {

    return(
        <Block>
            <BlockTexte>
                <Texte1>Des prix <YellowTexte>CLAIRS</YellowTexte> pour une solution durable</Texte1>
                <Texte2>Découvrez nos deux offres complémentaires pour optimiser la gestion de vos projets et événements. La première solution, dédiée à la gestion des consultants.</Texte2>
                <Button>ESSAYER GRATUITEMENT</Button>
            </BlockTexte>
        </Block>
    );
}

export default Texte;