import styled from "styled-components";
import Background from '../../image/Background_Pattern.svg';
import HeaderNewAccount from "../HeaderNewAccount";
import Footer from "../../mainPage/Footer";
import { useNavigate } from "react-router-dom";

const Container = styled.div `
max-width: 130vw;
min-height: 100vh;
background-image : url(${Background});
background-repeat: repeat;
`

const NewAccount7 = () => {

    return(
        <Container>
            <HeaderNewAccount></HeaderNewAccount>
            <Footer></Footer>
        </Container>
    );
};

export default NewAccount7;