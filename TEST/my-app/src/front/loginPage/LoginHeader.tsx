import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faCircle} from '@fortawesome/free-solid-svg-icons';
import { useNavigate,Link } from "react-router-dom";


const Head = styled.div `
display: flex;
justify-content: space-between;
align-items: center;
padding : 16px 24px;
gap : 197px;
width: 95%;
margin-left : 22px;
height: 2%;
background: rgba(245, 245, 245, 0.5);
box-shadow: 0px 8px 64px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
border-radius: 8px;
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

const LoginHeader = () => {

  const navigate = useNavigate();

    const handleClick = () => {
        console.log('cliqué');
    };

    const handleClickLogin = () => {
      navigate('/login');
      console.log("changé")
    };

    const handleClickTitre = () => {
      navigate('/');
      console.log('cliqué');
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
            <Product onClick={handleClick}>Produits</Product>
            <Tarif onClick={handleClick}>Tarifs</Tarif>
            <Who onClick={handleClick}>Qui sommes-nous</Who>
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

export default LoginHeader;