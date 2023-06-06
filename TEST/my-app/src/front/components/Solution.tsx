import styled from "styled-components";
import Image from '../image/triangle.png';
import Rectangle1 from '../image/Rectangle.png';
import Rectangle2 from '../image/Rectangle-1.png';
import Rectangle3 from '../image/Rectangle-2.png';
import { useState } from "react";


const Container = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;`

const Title = styled.h1`
color: #86b9c2 ;
font-size: 50px;
`
const Block = styled.div`
display: flex;
margin-top : -35px;
flex-direction: column;
align-items: center;
background: rgba(245, 245, 245, 0.5);
box-shadow: 0px 8px 64px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
border-radius : 8px;
height: 410px;
position : relative;
padding : 40px 40px 104px;
gap : 56px;
width: 1128px;
`
const Titre = styled.h2`
color : black;
font-size: 25px;`

const Texte = styled.span`
color: black;`

const SolutionBlock = styled.div `
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 0px;
gap: 44px;
width: 1048px;
height: 240px;
position : relative;
`

const ImageBlock =styled.div `
margin-top: 30px;
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
width: 300px;
height: 150px;
background-image: url(${Image});
background-size: contain;
position : relative;`

const ImageTextBlock = styled.div `
position: absolute;
bottom: 10px;
left: 10px;
font-weight: bold;
`

const ImageTopLeft = styled.img`
position: absolute;
top: -370px;
left: -200px;
`

const ImageBottomLeft = styled.img`
position: absolute;
bottom:-260px;
left: -610px;
`

const ImageTopRight = styled.img`
position:absolute;
top: -400px;
right: -180px;
`

const TextBlock = styled.div `
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`

const ButtonBlock = styled.div`
display:flex;
flex-direction: row;
align-items: center;
padding: 8px;
gap : 16px;
width: 676px;
height: 72px;
margin-bottom: 30px;
background-color: white;
`

const Button = styled.button`
  background-color: #ffd966;
  border-color: white;
  border : none;
  outline : none;
  margin-top: 10px;
  font-weight: bold;
  height: 48px;
  width: 209px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Solution = () => {

    const [buttonSelected, setButtonSelected] = useState<number | null>(null);

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
    }

    return (
        <Container>
            <Title>Nos solutions</Title>
            <Block>
                <Titre>Gérez tous vos consultants en un clic</Titre>
                <Texte>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ipsam magni, optio magnam est debitis eaque error veritatis tempore minima voluptatum cum soluta recusandae nisi hic, ut dolor laboriosam adipisci.</Texte>
                <SolutionBlock>
                <ImageBlock>
                    <ImageTopLeft src={Rectangle3}></ImageTopLeft>
                    <ImageTextBlock>Personnalisable</ImageTextBlock>
                </ImageBlock>
                <ImageBlock>
                    <ImageBottomLeft src={Rectangle1}></ImageBottomLeft>
                    <ImageTextBlock>Simple</ImageTextBlock>
                </ImageBlock>
                <ImageBlock>
                       <ImageTopRight src={Rectangle2}></ImageTopRight>
                    <ImageTextBlock>Limpide</ImageTextBlock>
                </ImageBlock>
                </SolutionBlock>
                <ButtonBlock>
                <Button style={buttonStyle(1)} onClick ={() => handleButtonClick(1)}>POUR LES INDEPENDANTS</Button>
                <Button style={buttonStyle(2)} onClick ={() => handleButtonClick(2)}>POUR LES ENTREPRISES</Button>
                <Button style={buttonStyle(3)} onClick ={() => handleButtonClick(3)}>POUR L'EVENEMENTIEL</Button>
                </ButtonBlock>
            </Block>
        </Container>
    );
}

export default Solution;