import Header from '../mainPage/Header';
import Footer from '../mainPage/Footer';
import styled from "styled-components";

const Head = styled(Header) `
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

const Account = () => {

    return (
        <div>
        <Head></Head>
        <Footer></Footer>
        </div>
    )
};

export default Account;