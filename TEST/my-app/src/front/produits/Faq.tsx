import styled from "styled-components";
import Homme from '../image/homme.png';
import {useState} from 'react';
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
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
font-family: 'Urbanist';
font-style: normal;
font-weight: 600;
font-size: 48px;
line-height: 60px;
color: #000000;`

const Texte2 = styled.span`
width: 407px;
height: 120px;
font-family: 'Urbanist';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: #000000;`

const Texte3 = styled.span`
width: 212px;
height: 25px;
font-family: 'Urbanist';
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
const Question = styled.span`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 563px;
height: 30px;
font-family: 'Urbanist';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 30px;
color: #000000;
`
const Answer = styled.span`
display: flex;
flex-direction: column;
align-self: stretch;
color: var(--global-secondary-black, #202124);
font-size: 1rem;
font-family: 'Urbanist';
line-height: 150%;
`
const Image= styled.img`
position: absolute;
width: 332px;
height: 466px;
left: 570px;
bottom: 0px;`

const Icon = styled(FontAwesomeIcon)`
cursor: pointer;
`;

interface FAQ {
    question : string;
    answer : string;
    isOpen?: boolean;
}

const Faq = () => {
    // Etat et fonction pour ouvrir un menu lors du clic sur l'icone +
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [faqs, setFaqs] = useState<FAQ[]>([]);

    const handleClick = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
        setFaqs((prevFaq) => 
        prevFaq.map((faq, i) => ({
            ...faq,
            isOpen : i === index ? !faq.isOpen : false
        })))
    };

    const faqData: FAQ[] = [
        {
          question: 'Quelle est votre plus grande passion dans la vie ?',
          answer:
            "Parce-que même sans innovation, il existe toujours une marge de progression, DéjàVu s’efforce d’améliorer ses solutions au quotidien. Nos développeurs travaillent donc chaque jour afin de vous apporter de nouvelles fonctionnalités comme l’intégration Salesforce qui est en cours de développement.",
        },
        {
          question: 'Si vous pouviez voyager dans le...',
          answer:
            "Parce-que même sans innovation, il existe toujours une marge de progression, DéjàVu s’efforce d’améliorer ses solutions au quotidien. Nos développeurs travaillent donc chaque jour afin de vous apporter de nouvelles fonctionnalités comme l’intégration Salesforce qui est en cours de développement.",
        },
        {
          question: 'Quel est le livre qui vous a le plus marqué?',
          answer:
            "Parce-que même sans innovation, il existe toujours une marge de progression, DéjàVu s’efforce d’améliorer ses solutions au quotidien. Nos développeurs travaillent donc chaque jour afin de vous apporter de nouvelles fonctionnalités comme l’intégration Salesforce qui est en cours de développement.",
        },
        {
          question: 'Si vous pouviez avoir un super pouvoir...',
          answer:
            "Parce-que même sans innovation, il existe toujours une marge de progression, DéjàVu s’efforce d’améliorer ses solutions au quotidien. Nos développeurs travaillent donc chaque jour afin de vous apporter de nouvelles fonctionnalités comme l’intégration Salesforce qui est en cours de développement.",
        },
        {
          question: 'Quelle est votre destination de rêve?',
          answer:
            "Parce-que même sans innovation, il existe toujours une marge de progression, DéjàVu s’efforce d’améliorer ses solutions au quotidien. Nos développeurs travaillent donc chaque jour afin de vous apporter de nouvelles fonctionnalités comme l’intégration Salesforce qui est en cours de développement.",
        },
      ];

    return(
        <Container>
            <Block>
                <Title>F.A.Q</Title>
            <BlockText>
                <Texte1>Une question ?</Texte1>
                <Texte2>Dans un monde lointain, au cœur d'une forêt enchantée, se trouvait une petite maison en bois. Les arbres majestueux se dressaient autour d'elle, créant une atmosphère paisible et mystérieuse. À l'intérieur, un vieux livre.</Texte2>
                <Texte3>Toujours des questions ?</Texte3>
                <Image src={Homme} alt="homme"></Image>
            </BlockText>
            <SecondBlock>
                {faqData.map((faq , index) => (
                    <div key={index}>
                        <Question>
                            {faq.question}
                            <Icon icon={faq.isOpen ? faMinus : faPlus}
                            onClick={() => handleClick(index)}
                            />
                        </Question>
                        {openIndex === index && <Answer>{faq.answer}</Answer>}
                    </div>
                ))}
            </SecondBlock>
            </Block>
        </Container>
    );
}

export default Faq;