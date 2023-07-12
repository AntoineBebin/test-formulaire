import styled from "styled-components";

const Block = styled.div`
display: flex;
width: 45.25rem;
height: 20.5rem;
padding: 2.5rem;
flex-direction: column;
align-items: center;
gap: 2rem;
margin-left: 40rem;
margin-top: 10rem;
`
const FirstBlock = styled.div`
display: flex;
width: 38.9375rem;
flex-direction: column;
height: 7.5rem;
`
const Bold = styled.span`
color: #202124;
text-align: center;
font-family: 'Urbanist';
font-size: 3rem;
font-style: normal;
font-weight: 600;
line-height: normal;
`
const YellowBold = styled.span`
color: #ffd966;
text-align: center;
font-family: 'Urbanist';
font-size: 3rem;
font-style: normal;
font-weight: 600;
line-height: normal;
text-transform: uppercase;
`
const SecondBlock = styled.div`
display: flex;
flex-direction: column;
align-self: stretch;
width: 35.9375rem;
height: 2.5rem;
`
const Texte = styled.span`
color: var(--global-secondary-black, #202124);
text-align: center;
font-family: 'Urbanist';
font-size: 1rem;
font-style: normal;
font-weight: 500;
line-height: normal;
`
const Button = styled.button`
display: flex;
padding: 0.75rem 1.25rem;
align-items: center;
gap: 0.5rem;
border-radius: 0.25rem;
background: var(--editeur-main-dandelion, #FFD966);
color: var(--global-secondary-black, #202124);
font-family: 'Urbanist';
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: 1.5rem;
text-transform: uppercase;
border: none;
cursor: pointer;
`

const TexteIntro = () => {

    return(
        <Block>
            <FirstBlock>
                <Bold>Gérez <YellowBold>tous</YellowBold> vos événements depuis une seule interface</Bold>
            </FirstBlock>
            <SecondBlock>
                <Texte>Découvrez nos deux offres complémentaires pour optimiser la gestion de vos projets et événements. La première solution, dédiée à la gestion des consultants.</Texte>
            </SecondBlock>
            <Button>Essayer gratuitement</Button>
        </Block>
    );
};

export default TexteIntro;