import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import ProgressBar from './newAccount/ProgressBar';


const Header = styled.div`
display: flex;
width: 100%;
height: 5rem;
align-items: center;
gap: 12.3125rem;
border-radius: 0.5rem;
box-shadow: 0px 8px 80px 0px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(8px);`

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
`
const Title = styled.span`
color: black;
font-weight: bold;
font-size: 35px;
cursor : pointer;
font-family : 'Urbanist';
`
const TitleIcon = styled.div`
  color: #FFD966;
  font-size: 35px;
`;

const PersonnalInfoBlock = styled.div`
display: flex;
width: 12.75rem;
padding: 0.5rem;
height: 2.75rem;
flex-direction: column;
align-items: flex-start;
gap: 0.5rem;
border-radius: 0.25rem;
background: rgba(14, 115, 138, 0.10);
`
const OffreBlock = styled.div`
display: flex;
width: 12.75rem;
padding: 0.5rem;
height: 2.75rem;
flex-direction: column;
align-items: flex-start;
gap: 0.5rem;
`
const PaiementBlock = styled.div`
display: flex;
width: 12.75rem;
padding: 0.5rem;
height: 2.75rem;
flex-direction: column;
align-items: flex-start;
gap: 0.5rem;
`
const Bar = styled.div`
width: 100%;
height: 4px;
background-color: #b7b7b7;
border-radius: 2px;
`
const Button = styled.button`
display: flex;
padding: 0.75rem 1.5rem;
justify-content: center;
align-items: flex-start;
gap: 0.5rem;
border-radius: 0.25rem;
background-color: white;
cursor: pointer;
border: 2px solid var(--global-secondary-black, #202124);
`

const HeaderNewAccount = () => {
    
    const navigate = useNavigate();

    const handleClickTitre = () => {
        navigate('/');
      };

    return (
        <Header>
            <LeftContainer>
                <TitleIcon>
                    <FontAwesomeIcon icon={faCircle}/>
                </TitleIcon>
                <Title onClick={handleClickTitre}>Déjà-Vu</Title>
            </LeftContainer>
            <PersonnalInfoBlock>1. Informations personnelles
                <ProgressBar></ProgressBar>
            </PersonnalInfoBlock>
            <OffreBlock>2. Nos offres
                <Bar/>
            </OffreBlock>
            <PaiementBlock>3. Paiement et contrat
                <Bar/>
            </PaiementBlock>
            <Button>DEMANDER DE L'AIDE</Button>
        </Header>
    );
}

export default HeaderNewAccount;