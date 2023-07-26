import styled from "styled-components";

const Container = styled.div`
width: 106.3125rem;
height: 79.75rem;
flex-shrink: 0;
background: linear-gradient(180deg, #F7E9BD 0%, rgba(255, 217, 102, 0.00) 100%);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Block = styled.div`
display: flex;
width: 45.25rem;
height: 20.5rem;
padding: 2.5rem;
flex-direction: column;
align-items: center;
gap: 2rem;
border-radius: 0.5rem;
box-shadow: 0px 8px 64px 0px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
`
const BoldTexte = styled.span`
color: var(--global-secondary-black, #202124);
text-align: center;
font-family: 'Urbanist';
font-size: 3rem;
font-style: normal;
font-weight: 600;
line-height: normal;
`
const UppercaseTexte = styled.span`
color: var(--global-secondary-black, #202124);
font-family: 'Urbanist';
font-size: 3rem;
font-style: normal;
font-weight: 600;
line-height: normal;
text-transform: uppercase;
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
flex-direction: row;
padding: 0.75rem 1.25rem;
align-items: center;
gap: 0.5rem;
border-radius: 0.25rem;
background: var(--editeur-main-dandelion, #FFD966);
width: 10.875rem;
height: 3rem;
border: none;
cursor: pointer;
`
const ButtonText = styled.span `
color: var(--global-secondary-black, #202124);
font-family: 'Urbanist';
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: 1.5rem;
text-transform: uppercase;
`

const ArrowAnimation = () => {

    return(
        <Container>
            <Block>
            <BoldTexte>Passer au <UppercaseTexte>niveau</UppercaseTexte> supérieur</BoldTexte>
            <Texte>Découvrez nos deux offres complémentaires pour optimiser la gestion de vos projets et événements. La première solution, dédiée à la gestion des consultants.</Texte>
            <Button><ButtonText>Passe au nextstep</ButtonText></Button>
            </Block>
        </Container>
    );
};

export default ArrowAnimation;