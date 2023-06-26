import styled from "styled-components";
import Box from '../image/box.png';
import Case from '../image/valise.png';
import Paper from '../image/papier.png';
import Check from '../image/check-line.png';

const Container = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin : 80px;
`

const Title = styled.h1`
color: #86b9c2 ;
font-style: normal;
font-weight: 400;
font-size: 120px;
line-height: 100%;
font-family: 'Urbanist';
margin-bottom : -30px;
`

const Block = styled.div `
display: flex;
margin-top : -10px;
`

const OffreFirst = styled.div `
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 24px;
gap: 32px;
isolation: isolate;
position: relative;
width: 296px;
height: 488px;
left: 120px;
top: 105px;
background: rgba(245, 245, 245, 0.5);
box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.06);
backdrop-filter: blur(6px);
border-radius: 8px;
margin-top : -100px;
margin-left: 100px;
`

const Boite = styled.img `
position: absolute;
width: 145px;
height: 78px;
left: 200px;
top: -24px;
`

const OffreSecond = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 24px;
gap: 32px;
isolation: isolate;
position: relative;
width: 296px;
height: 488px;
left: 22px;
top: 105px;;
background: rgba(245, 245, 245, 0.5);
box-shadow: 0px 8px 64px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
border-radius: 8px;
margin-top : -100px;
margin-left: 200px;
border : solid #0E738A 2px;`

const Valise = styled.img `
position: absolute;
width: 104px;
height: 100px;
left: 304px;
top: -24px;
`

const OffreThird = styled.div `
margin-top : -100px;
margin-left : 300px;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 24px;
gap: 32px;
isolation: isolate;
position: relative;
width: 296px;
height: 488px;
left: -172px;
top: 105px;
background: rgba(245, 245, 245, 0.5);
box-shadow: 0px 8px 64px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
border-radius: 8px;`

const Papier = styled.img`
position: absolute;
width: 122px;
height: 100px;
right: 16px;
top: -32px;
`

const FreeBlock = styled.div`
display : flex;
flex-direction: column;
align-items: flex-start;
width: 248px;
height: 400px;
`

const Texte1Block = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 4px 8px;
gap: 16px;
width: 85px;
height: 15px;
background: #E6E6E6;
border-radius: 4px;`

const FreeTexte1 = styled.span`
background : #E6E6E6;
font-family: 'Urbanist';
font-style: normal;
font-weight: 700;
font-size: 12px;`

const Texte2Block = styled.div `
display : flex;
flex-direction: column;
align-items: flex-start;
padding : 0px;
gap : 14px;
width: 240px;
height: 100px;
margin-top : 20px;
`

const FreeTexte2 = styled.span`
font-family: 'Urbanist';
font-style: normal;
font-weight: 700;
font-size: 40px;
color : #202124;
`

const FreeTexte3 = styled.span `
font-family: 'Urbanist';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color : #202124;
`

const Texte3Block = styled.div `
display : flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
width : 247px;
height: 400px;
margin-top : 30px;
`

const FreeTexte4 = styled.span `
font-family : "Urbanist";
font-style : normal;
font-weight: 400;
font-size : 12px;
color : #202124;`

const Button = styled.button`
color : #202124;
background-color: white;
box-sizing: border-box;
display: flex;
flex-direction : row;
justify-content: center;
align-items: center;
padding : 12px 20px;
gap : 8px;
position : absolute;
width : 248px;
height : 48px;
left : 24px;
top : 416px;
border : 2px solid #202124;
border-radius : 4px;
font-family : 'Urbanist';
font-style: normal;
font-weight: 600;
font-size: 14px;
margin-top : 50px;
margin-left: 20px;
cursor: pointer;`

const ProBlock = styled.div `
display : flex;
flex-direction: column;
align-items: flex-start;
width: 248px;
height: 410px;
`

const Pro1Block = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 4px 8px;
gap: 16px;
width: 30px;
height: 15px;
background: #CFE3E8;
border-radius: 4px;`

const Pro1Text = styled.span`
font-family: 'Urbanist';
font-style: normal;
font-weight: 700;
font-size: 12px;
color : #0E738A;
`

const Pro2Block = styled.div `
display : flex;
flex-direction: column;
align-items: flex-start;
padding : 0px;
gap : 14px;
width: 247px;
height: 130px;
margin-top : 10px;
`

const Pro2Text = styled.span`
font-family: 'Urbanist';
font-style: normal;
font-weight: 700;
font-size: 40px;
color : #0E738A;`

const Pro3Text = styled.span`
font-family: 'Urbanist';
font-style: normal;
font-weight: 400;
font-size: 16px;
color: #202124;`

const Pro3Block = styled.div `
display : flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
width : 247px;
height: 400px;
margin-top: 35px;
`

const Pro4Text = styled.span`
font-family: 'Urbanist';
font-style: normal;
font-weight: 400;
font-size: 12px;
color : #202124;`


const Button2 = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 20px;
gap: 8px;
position: absolute;
width: 248px;
height: 48px;
left: 24px;
top: 416px;
border : none;
outline : none;
background: #0E738A;
border-radius: 4px;
font-family : 'Urbanist';
font-style: normal;
font-weight: 600;
font-size: 14px;
margin-top : 50px;
margin-left : 20px;
cursor: pointer;
color : #F5F5F5;`

const DevisBlock = styled.div`
display : flex;
flex-direction: column;
align-items: flex-start;
width: 248px;
height: 400px;
`

const DevisBlock1 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 4px 8px;
gap: 16px;
width: 40px;
height: 15px;
background: #E5DEF3;
border-radius: 4px;
`
const DevisText1 = styled.span`
color : #7F5CC4;
font-family: 'Urbanist';
font-style: normal;
font-weight: 700;
font-size: 12px;`

const DevisBlock2 = styled.div`
display : flex;
flex-direction: column;
align-items: flex-start;
padding : 0px;
gap : 14px;
width: 240px;
height: 100px;
margin-top : 20px;
`

const DevisText2 = styled.span`
font-family: 'Urbanist';
font-style: normal;
font-weight: 700;
font-size: 40px;
color : #202124;
`

const DevisText3 = styled.span `
font-family: 'Urbanist';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color : #202124;
`

const DevisBlock3 = styled.div `
display : flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
width : 247px;
height: 400px;
margin-top: 35px;
`

const DevisText4 = styled.span`
font-family: 'Urbanist';
font-style: normal;
font-weight: 400;
font-size: 12px;
color : #202124;`

const Button3 = styled.button`
color : #202124;
background-color: white;
box-sizing: border-box;
display: flex;
flex-direction : row;
justify-content: center;
align-items: center;
padding : 12px 20px;
gap : 8px;
position : absolute;
width : 248px;
height : 48px;
left : 24px;
top : 416px;
border : 2px solid #202124;
border-radius : 4px;
font-family : 'Urbanist';
font-style: normal;
font-weight: 600;
font-size: 14px;
margin-top : 50px;
margin-left: 20px;
cursor: pointer;`

const Icon = styled.img`
width: 0.75rem;
height: 0.75rem;
`

const Offre = () => {

   

    const handleClick = () => {
        console.log("cliqué")
    };



    return (
        <Container>
            <Title>Nos Offres</Title>
            <Block>
                <OffreFirst>
                <Boite src={Box}></Boite>
                    <FreeBlock>
                        <Texte1Block>
                        <FreeTexte1>DECOUVERTE</FreeTexte1>
                        </Texte1Block>
                        <Texte2Block>
                            <FreeTexte2>GRATUIT</FreeTexte2>
                            <FreeTexte3>“Première dose gratos, le bolosse est fidélisé” - Booba</FreeTexte3>
                        </Texte2Block>
                        <Texte3Block>
                            <FreeTexte4>Inclus :</FreeTexte4>
                            <FreeTexte4><Icon src={Check}></Icon>Fonctionnalité N1</FreeTexte4>
                            <FreeTexte4><Icon src={Check}></Icon>Fonctionnalité N1</FreeTexte4>
                            <FreeTexte4><Icon src={Check}></Icon>Fonctionnalité N1</FreeTexte4>
                            <FreeTexte4><Icon src={Check}></Icon>Fonctionnalité N1</FreeTexte4>
                        </Texte3Block>
                        <Button onClick={handleClick}>ESSAYER GRATUITEMENT</Button>
                    </FreeBlock>
                </OffreFirst>
                <OffreSecond>
                <Valise src = {Case}></Valise>
                    <ProBlock>
                        <Pro1Block>
                            <Pro1Text>PRO</Pro1Text>
                        </Pro1Block>
                        <Pro2Block>
                            <Pro2Text>13.12€</Pro2Text>
                            <Pro3Text>Pour les entreprises de petite et moyenne taille</Pro3Text>
                        </Pro2Block>
                        <Pro3Block>
                            <Pro4Text>Toutes les fonctions DECOUVERTE, plus:</Pro4Text>
                            <Pro4Text><Icon src={Check}></Icon>Fonctionnalité N1</Pro4Text>
                            <Pro4Text><Icon src={Check}></Icon>Fonctionnalité N1</Pro4Text>
                            <Pro4Text><Icon src={Check}></Icon>Fonctionnalité N1</Pro4Text>
                            <Pro4Text><Icon src={Check}></Icon>Fonctionnalité N1</Pro4Text>
                        </Pro3Block>
                        <Button2 onClick={handleClick}>CREER UN COMPTE</Button2>
                    </ProBlock>
                </OffreSecond>
                <OffreThird>
                <Papier src={Paper}></Papier>
                    <DevisBlock>
                        <DevisBlock1>
                            <DevisText1>PRO +</DevisText1>
                        </DevisBlock1>
                        <DevisBlock2>
                            <DevisText2>Sur devis</DevisText2>
                            <DevisText3>Pour les grandes entreprises et celles souciantes du détail</DevisText3>
                        </DevisBlock2>
                        <DevisBlock3>
                            <DevisText4><Icon src={Check}></Icon>Toutes les fonctions PRO et aussi :</DevisText4>
                            <DevisText4><Icon src={Check}></Icon>Réduction liée au volume</DevisText4>
                            <DevisText4><Icon src={Check}></Icon>Accompagnement personnalisé</DevisText4>
                            <DevisText4><Icon src={Check}></Icon>Support dédié 24h/24</DevisText4>
                            <DevisText4><Icon src={Check}></Icon>Autre fonction cool</DevisText4>
                        </DevisBlock3>
                        <Button3 onClick={handleClick}>DEMANDER UN DEVIS</Button3>
                    </DevisBlock>
                </OffreThird>
            </Block>
        </Container>
    );
}

export default Offre ; 