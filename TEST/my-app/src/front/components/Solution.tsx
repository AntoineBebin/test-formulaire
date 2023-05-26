import styled from "styled-components";

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
`
const Titre = styled.h2`
color : black;
font-size: 25px;`

const Texte = styled.span`
color: black;`

const Solution = () => {

    return (
        <Container>
            <Title>Nos solutions</Title>
            <Block>
                <Titre>Gérez tous vos consultants en un clic</Titre>
                <Texte>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ipsam magni, optio magnam est debitis eaque error veritatis tempore minima voluptatum cum soluta recusandae nisi hic, ut dolor laboriosam adipisci.</Texte>
            </Block>
        </Container>
    );
}

export default Solution;