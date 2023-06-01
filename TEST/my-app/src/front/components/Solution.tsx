import styled from "styled-components";
import Image from '../image/triangle.png';
import Rectangle1 from '../image/Rectangle.png';
import Rectangle2 from '../image/Rectangle-1.png';
import Rectangle3 from '../image/Rectangle-2.png';

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
flex-direction: column;
align-items: center;
background: rgba(245, 245, 245, 0.5);
box-shadow: 0px 8px 64px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
border-radius : 8px;
height: 450px;
position : relative;
`
const Titre = styled.h2`
color : black;
font-size: 25px;`

const Texte = styled.span`
color: black;`

const SolutionBlock = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
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
width: 400px;
background-image: url(${Image});
background-size: contain;
background-position: center;
position : relative;`

const ImageTextBlock = styled.div `
position: absolute;
bottom: 10px;
left: 10px;
font-weight: bold;`

const ImageTopLeft = styled.img`
position: absolute;
top: 0;
left: 0;`

const ImageBottomLeft = styled.img`
position: absolute;
bottom:0;
left: 0;`

const ImageTopRight = styled.img`
position:absolute;
top: 0;
right:0;`

const TextBlock = styled.div `
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`

const ButtonBlock = styled.div`
display:flex;
flex-direction: row;
margin-bottom: 30px;
`

const Button = styled.button `
background-color: #FFD966;
border-color: #FFD966 ;
margin-top: 10px;
font-weight: bold;
color: black;
height: 48px;
width: 209px;
border-radius: 4px;
padding: 12px 20px;
display: flex;
justify-content: center;
align-items: center;
margin-top : 30px;
`

const Solution = () => {

  
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
                <Button>POUR LES INDEPENDANTS</Button><Button>POUR LES ENTREPRISES</Button><Button>POUR L'EVENEMENTIEL</Button>
                </ButtonBlock>
            </Block>
        </Container>
    );
}

export default Solution;