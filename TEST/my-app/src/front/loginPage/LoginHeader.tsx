import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faCircle} from '@fortawesome/free-solid-svg-icons';
import { useNavigate,Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Head = styled.div<{className?: string}> `
display: flex;
justify-content: space-between;
align-items: center;
padding : 16px 24px;
gap : 197px;
width: 95%;
margin-left : 22px;
height: 5rem;
background: rgba(245, 245, 245, 0.5);
box-shadow: 0px 8px 64px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);
border-radius: 8px;
`
const NavWrapper = styled.div`
display : flex;
background: rgba(245, 245, 245, 0.5);
align-items : center;
justify-content : space-between;
padding : 16px 24px;
width: 100%;
height: 80px;
margin : 0;
position : fixed;
left : 0;
right : 0;
z-index : 99;
transition : all 0.3s ease-in-out;
&.solid {
  background: rgba(245, 245, 245, 0.5);
  box-shadow: 0px 8px 64px rgba(0, 0, 0, 0.04);
  backdrop-filter: blur(8px);
  width: calc(100% - 32px);
  margin : 0 16px;
  padding: 16px;
  top : 16px;
  border-radius: 8px;
}`

const AccessibilityWrapper = styled.div`
position : fixed;
display : flex;
justify-content : space-between;
background-color : rgba(245, 245, 245, 0.5);
width : 100%;
height : 32px;
transition : all 0.3s ease-in-out;
top: -32px;
z-index : 99;
&.visible{
  top: 0px;
}`

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

  const [isFixed, setIsFixed] = useState(false);
  const [isSolid, setIsSolid] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [tempSolid, setTempSolid] = useState(false);
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
    };

    const handleClickProduit = () =>{
      navigate('/produits')
    };

    const handleClickTarif = () => {
      navigate('/tarifs')
    };

    const handleClickQuiSommesNous = () =>{
      navigate('/qui-sommes-nous')
    }
   
    useEffect(() => {
      const scrollHandler = () => {
        const scroll = 
        document.documentElement.scrollTop
        if(scroll > 48) {
          setIsSolid(true)
        } else {
          setIsSolid(false)
        }
      }
      window.addEventListener('scroll', scrollHandler)
      return () =>
      window.removeEventListener('scroll', scrollHandler)
    })

    return (
      <AccessibilityWrapper className={isOpen || isSolid || tempSolid ? 'no-mobile-display' : 'visible no-mobile-display'}>
      <NavWrapper className={isOpen || isSolid || tempSolid ? 'solid' : undefined}>
        <Head className={isFixed ? "fixed-header" : ""}>
            <LeftContainer>
            <TitleIcon>
             <FontAwesomeIcon icon={faCircle} />
            </TitleIcon>
           <Title onClick={handleClickTitre}>Déjà-Vu</Title>
           </LeftContainer>
           <RightContainer>
            <Product onClick={handleClickProduit}>Produits</Product>
            <Tarif onClick={handleClickTarif}>Tarifs</Tarif>
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
        </NavWrapper>
        </AccessibilityWrapper>
    );
}

export default LoginHeader;