import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faCircle} from '@fortawesome/free-solid-svg-icons';
import { useNavigate,Link } from "react-router-dom";

const Head = styled.div `
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 2%;
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
color: black;
font-weight: bold;
font-size: 35px;
cursor : pointer;
font-family : 'Urbanist';
`

const Product = styled.span`
font-size: 20px;
color: black;
font-weight: 500;
font-style: normal;
font-family: 'Urbanist';
cursor: pointer;`

const Tarif = styled.span`
font-size: 20px;
color: black;
font-weight: 500;
font-style: normal;
font-family: 'Urbanist';
cursor: pointer;
`

const Who = styled.span`
font-size: 20px;
color: black;
font-weight: 500;
font-style: normal;
font-family: 'Urbanist';
cursor: pointer;`

const News = styled.span `
font-size: 20px;
color: black;
font-weight: 500;
font-style: normal;
font-family: 'Urbanist';
cursor: pointer;`

const IconBlock = styled.div `
background-color: #FFD966;
margin-right : 30px;
margin-top: 10px;
border-radius: 8px;
width: 60px;
height: 60px;
gap : 8px;display: flex;
align-items: center;
justify-content: center;
`

const Icon = styled.div`
color: black;
font-size: 35px;
cursor: pointer;
margin-right : 5px;`

const TitleIcon = styled.div`
  color: #FFD966;
  font-size: 35px;
`;

const Header = () => {
  // Navigation
  const navigate = useNavigate();

    const handleClick = () => {
        console.log('cliqué');
    };

    const handleClickLogin = () => {
      navigate('/login');
    };

    const handleClickTitre = () => {
      navigate('/');
    }

    const handleClickProduct = () => {
      navigate('/produits');
    }

    const handleClickQuiSommesNous = () => {
        navigate('/qui-sommes-nous');
    }

    const handleClickTarifs = () => {
      navigate('/tarifs');
    }
   
    return (
        <Head>
            <LeftContainer>
            <TitleIcon>
             <FontAwesomeIcon icon={faCircle} />
            </TitleIcon>
           <Title onClick={handleClickTitre}>Déjà-Vu</Title>
           </LeftContainer>
           <RightContainer>
            <Product onClick={handleClickProduct}>Produits</Product>
            <Tarif onClick={handleClickTarifs}>Tarifs</Tarif>
            <Who onClick={handleClickQuiSommesNous}>Qui sommes-nous</Who>
            <News onClick={handleClick}>Actualités</News>
            <IconBlock>
              <Link to="login"></Link>
            <Icon>
            <FontAwesomeIcon icon={faUser} onClick={handleClickLogin}></FontAwesomeIcon>
            </Icon>
            </IconBlock>
            </RightContainer>
        </Head>
    );
}

export default Header;