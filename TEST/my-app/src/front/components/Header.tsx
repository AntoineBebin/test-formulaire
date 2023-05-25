import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faCircle} from '@fortawesome/free-solid-svg-icons';


const Head = styled.div `
display: flex;
justify-content: space-between;
align-items: center;
background-color: black;
width: 100%;
height: 4%;
`
const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
`

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 45%;
`

const Title = styled.span`
color: white;
font-weight: bold;
font-size: 35px;
`

const Product = styled.span`
font-size: 20px;
color: grey;
cursor: pointer;`

const Tarif = styled.span`
font-size: 20px;
color: grey;
cursor: pointer;
`

const Who = styled.span`
font-size: 20px;
color: grey;
cursor: pointer;`

const News = styled.span `
font-size: 20px;
color: grey;
cursor: pointer;`

const Icon = styled.div`
color: black;
background-color: yellow;
font-size: 35px;
cursor: pointer;`

const TitleIcon = styled.div`
  color: yellow;
  font-size: 35px;
`;

const Header = () => {

    const handleClick = () => {
        console.log('cliqué');
    }
   
    return (
        <Head>
            <LeftContainer>
            <TitleIcon>
             <FontAwesomeIcon icon={faCircle} />
            </TitleIcon>
           <Title>Déjà-Vu</Title>
           </LeftContainer>
           <RightContainer>
            <Product onClick={handleClick}>Produits</Product>
            <Tarif onClick={handleClick}>Tarifs</Tarif>
            <Who onClick={handleClick}>Qui sommes-nous</Who>
            <News onClick={handleClick}>Actualités</News>
            <Icon>
            <FontAwesomeIcon icon={faUser} onClick={handleClick}></FontAwesomeIcon>
            </Icon>
            </RightContainer>
        </Head>
    );
}

export default Header;