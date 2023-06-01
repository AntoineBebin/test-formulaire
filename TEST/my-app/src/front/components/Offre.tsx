import styled from "styled-components";
import Box from '../image/box.png';

const Container = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color : #ebebeb;`

const Title = styled.h1`
color: #86b9c2 ;
font-size: 50px;
`

const Block = styled.div `
display: flex;
border: solid black 1px;`

const OffreFirst = styled.div `
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 24px;
gap: 32px;
isolation: isolate;
position: absolute;
width: 296px;
height: 488px;
left: 252px;
top: 1719px;
background: rgba(245, 245, 245, 0.5);
box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.06);
backdrop-filter: blur(6px);
border-radius: 8px;
margin-top : -250px;
margin-left: 100px;
`

const TextFirst = styled.span`
`

const OffreSecond = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 24px;
gap: 32px;
isolation: isolate;
position: absolute;
width: 296px;
height: 488px;
left: 572px;
top: 1719px;
background: rgba(245, 245, 245, 0.5);
box-shadow: 0px 8px 64px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
border-radius: 8px;
margin-top : -250px;
margin-left: 200px;`

const OffreThird = styled.div `
margin-top : -250px;
margin-left : 300px;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 24px;
gap: 32px;
isolation: isolate;
position: absolute;
width: 296px;
height: 488px;
left: 892px;
top: 1719px;
background: rgba(245, 245, 245, 0.5);
box-shadow: 0px 8px 64px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
border-radius: 8px;`

const Offre = () => {

    return (
        <Container>
            <Title>Nos Offres</Title>
            <Block>
                <OffreFirst></OffreFirst><OffreSecond></OffreSecond><OffreThird></OffreThird>
            </Block>
        </Container>
    );
}

export default Offre ; 