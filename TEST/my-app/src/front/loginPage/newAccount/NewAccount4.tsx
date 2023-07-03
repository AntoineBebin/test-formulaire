import styled from "styled-components";
import Background from '../../image/Background_Pattern.svg';
import HeaderNewAccount from "../HeaderNewAccount";
import Footer from "../../mainPage/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Container = styled.div `
max-width: 130vw;
min-height: 100vh;
background-image : url(${Background});
background-repeat: repeat;
`
const Title = styled.h1`
color: var(--cra-main-lighter-shade-1, #5EA2B1);
text-align: center;
font-size: 7.5rem;
font-family: 'Ibarra Real Nova';
font-style: normal;
font-weight: 400;
line-height: 100%;
margin-top: 150px;
`

const NewAccount4 = () => {

    return(
        <Container>
            <HeaderNewAccount></HeaderNewAccount>
            <Title>Créer un compte</Title>
            <Footer></Footer>
        </Container>
    );
}

export default NewAccount4;