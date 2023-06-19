import styled from "styled-components";
import Homme from '../image/homme.png';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
position: relative;
top : 3600px;
display: flex;
flex-direction : column;
align-items: center;
`

const Block = styled.div`
display: flex;
margin-top : 150px;
width: 1128px;
height: 678px;
left: 156px;
top: 3688px;`

const Title = styled.h1`
position: absolute;
width: 256px;
height: 81px;
left: calc(50% - 256px/2 + 224px);
bottom: 662px;
font-family: 'Ibarra Real Nova';
font-style: normal;
font-weight: 400;
font-size: 120px;
line-height: 100%;
color: #5EA2B1;
margin-bottom: 20px;
`

const BlockText = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 16px;
width: 407px;
height: 229px;
`

const Texte1 = styled.span`
width: 407px;
height: 60px;
font-family: 'Outfit';
font-style: normal;
font-weight: 600;
font-size: 48px;
line-height: 60px;
color: #000000;`

const Texte2 = styled.span`
width: 407px;
height: 120px;
font-family: 'Outfit';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: #000000;`

const Texte3 = styled.span`
width: 212px;
height: 25px;
font-family: 'Outfit';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 25px;
text-decoration-line: underline;
color: #000000;`

const SecondBlock = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
padding: 40px;
gap: 40px;
width: 681px;
height: 590px;
background: rgba(245, 245, 245, 0.5);
box-shadow: 0px 8px 64px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
border-radius: 8px;
`
const BlockTextFaq = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 16px;
width: 601px;
height: 50px;
`

const TextBlockFaq = styled.span`
width: 563px;
height: 30px;
font-family: 'Outfit';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 30px;
color: #000000;`

const Image= styled.img`
position: absolute;
width: 332px;
height: 466px;
left: 467px;
bottom: 0px;`

const Faq = () => {

    return(
        <Container>
            <Block>
                <Title>F.A.Q</Title>
            <BlockText>
                <Texte1>Une question ?</Texte1>
                <Texte2>Dans un monde lointain, au cœur d'une forêt enchantée, se trouvait une petite maison en bois. Les arbres majestueux se dressaient autour d'elle, créant une atmosphère paisible et mystérieuse. À l'intérieur, un vieux livre.</Texte2>
                <Texte3>Toujours des questions ?</Texte3>
                <Image src={Homme}></Image>
            </BlockText>
            <SecondBlock>
                <BlockTextFaq>
                    <TextBlockFaq>Quelle est votre plus grande passion dans la vie ?
                    <FontAwesomeIcon icon={faPlus} style={{color : "#000000"}}></FontAwesomeIcon>
                    </TextBlockFaq>
                </BlockTextFaq>
                <BlockTextFaq>
                    <TextBlockFaq>Si vous pouviez voyager dans le 
                    <FontAwesomeIcon icon={faPlus} style={{color : "#000000"}}></FontAwesomeIcon>
                    </TextBlockFaq>
                </BlockTextFaq>
                <BlockTextFaq>
                    <TextBlockFaq>Quel est le livre qui vous a le plus marqué?
                    <FontAwesomeIcon icon={faPlus} style={{color : "#000000"}}></FontAwesomeIcon>
                    </TextBlockFaq>
                </BlockTextFaq>
                <BlockTextFaq>
                    <TextBlockFaq>Si vous pouviez avoir un super pouvoir
                    <FontAwesomeIcon icon={faPlus} style={{color : "#000000"}}></FontAwesomeIcon>
                    </TextBlockFaq>
                </BlockTextFaq>
                <BlockTextFaq>
                    <TextBlockFaq>Quelle est votre destination de rêve ?
                    <FontAwesomeIcon icon={faPlus} style={{color : "#000000"}}></FontAwesomeIcon>
                    </TextBlockFaq>
                </BlockTextFaq>
            </SecondBlock>
            </Block>
        </Container>
    );
}

export default Faq;