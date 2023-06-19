import styled from "styled-components";


const Container = styled.div`
position: absolute;
width: 1123px;
height: 714px;
left: calc(50% - 1123px/2 + 0.5px);
top: 1415px;
border : solid black 1px;
`

const Title = styled.h1`
position: absolute;
width: 588px;
height: 81px;
left: calc(50% - 588px/2 - 2.5px);
top: -80px;
font-family: 'Ibarra Real Nova';
font-style: normal;
font-weight: 400;
font-size: 120px;
line-height: 100%;
color: #5EA2B1;`

const Block = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 40px;
gap: 40px;
position: absolute;
width: 1123px;
height: 649px;
left: 0px;
top: 65px;
background: rgba(245, 245, 245, 0.5);
box-shadow: 0px 8px 64px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
border-radius: 8px;
margin-top : 18px;`

const BlockText = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 16px;
width: 596px;
height: 104px;
border : solid green 1px;`

const Texte1 = styled.span`
width: 596px;
height: 40px;
font-family: 'Silka';
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 40px;
color: #202124;`

const Texte2 = styled.span`
width: 556px;
height: 48px;
font-family: 'Silka';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
text-align: center;
color: #202124;`

const LeftBlock = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-end;
padding: 0px;
gap: 24px;
width: 398.34px;
height: 425px;
border : solid yellow 1px;`

const Soluce = () => {

    return(
        <Container>
            <Title>La solution</Title>
            <Block>
            <BlockText>
                <Texte1>Gérez tous vos consultants en un clic</Texte1>
                <Texte2>Ne perdez plus de temps à blablabla blabla blabl abla utilisez suepr outils pour cra, fichiers, etc etc et etc et etet et efetet et zt zr</Texte2>         
            </BlockText>
            <LeftBlock>
            </LeftBlock>
            </Block>
        </Container>
    );
}

export default Soluce;