import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div `
width: 100vw;
height: 100vw;
background-color: white;`

const FirstBlock = styled.div`
height: 50vw;
background-color: #E5992e;
display: flex;
justify-content: center;
flex-wrap: wrap;`

const Title = styled.h1 `
font-size: 25px;
color: black;`

const Text = styled.span`
color: black;`

const SecondBlock = styled.div`
background-color: white;
`

const LeftBlock = styled.div`
background-color: white;
display:flex;
flex-wrap: wrap;
height: 50vw;
width: 50vw;
margin-left: 15px;
`

const SecondTitle = styled.h2 `
color: black;`

const SecondText = styled.text`
color: black;`

const Input = styled.input`
border: solid black 2px;
padding: 10px;
font-size: 16px;
border-radius: 4px;
height: 30px;
width: 200px;
border-radius: 5px;`

const Button = styled.button `
background-color: black;
color: white;
cursor: pointer;
height: 55px;
width: 120px;
border-radius: 5px;
`

const App = () => {

  const [email, setEmail] = useState('');
  const [button, setButton] = useState(false);
  const [waitlist, setWaitlist] = useState<string[]>([]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  };
  const handleButtonClick = () => {
    if(email !== ''){
      if(!waitlist.includes(email)){
        setButton(true);
        setWaitlist([...waitlist, email]);
        setEmail('');
      }
    }
    
  };

  useEffect(() => {
    const storeWaitlist = localStorage.getItem('waitlist');
    if(storeWaitlist) {
      setWaitlist(JSON.parse(storeWaitlist));
    }
  },[])

  useEffect(() => {
    localStorage.setItem('waitlist', JSON.stringify(waitlist));
  }, [waitlist])

  return (
    <Container>
      <FirstBlock>
      <Title>Ils pourront vous en parler mieux que nous.</Title>
      <Text> Dans un monde lointain, au coeur d'une forêt enchantée, se trouvait une petite maison en bois. Les arbres majestueux se dressaient autour d'elle, créant une atmosphère paisible et mystérieuse. A l'intérieur, un vieux livre.</Text>
      <span>Ajouter TrustPilot</span>
      </FirstBlock>
      <SecondBlock>
        <LeftBlock>
          <SecondTitle>Bientôt disponible</SecondTitle>
          <SecondText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis cumque, error iusto, id qui sed eveniet, numquam quo nulla reprehenderit quasi fugiat! Labore, sit. Autem dignissimos accusamus officiis. Consectetur, expedita.</SecondText>
          <Input type="email" placeholder='Email' value={email} onChange={handleEmailChange}></Input>
          <Button type="submit" onClick={handleButtonClick} disabled={!button}>Envoyer</Button>
        </LeftBlock>
      </SecondBlock>
    </Container>
  );
};

export default App;
