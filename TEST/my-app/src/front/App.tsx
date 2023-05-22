import { useState, useEffect } from 'react';
import styled from 'styled-components';

interface WaitlistItem {
  email : string;
  cci : string;
}

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

  const [email, setEmail] = useState<string>('');
  const [button, setButton] = useState<boolean>(false);
  const [waitlist, setWaitlist] = useState<WaitlistItem[]>([]);
  const [cci, setCCI] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  };

  const handleButtonClick = () => {
    if(email !== ''){
      if(!waitlist.some(item => item.email === email && item.cci === cci)){
        setWaitlist([...waitlist,{email, cci}]);
        setEmail('');
        setCCI ('');
        setButton(false);
      }
    } 
  };
  
  const handleCCIChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setCCI (e.target.value);
  }

  useEffect(() => {
    const storeWaitlist = localStorage.getItem('waitlist') || '[]' ;
 
      setWaitlist(JSON.parse(storeWaitlist));
    
  },[])

  useEffect(() => {
    localStorage.setItem('waitlist', JSON.stringify(waitlist));
    
  }, [waitlist])

  

  return (
    <Container>
      <FirstBlock>
      <Title>Ils pourront vous en parler mieux que nous.</Title>
      <Text> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ex nemo sequi veniam magnam, dolores quaerat explicabo, nobis odit ad tenetur ipsa impedit ab tempora earum perferendis corporis! Quo, quae.</Text>
      </FirstBlock>
      <SecondBlock>
        <LeftBlock>
          <SecondTitle>Bientôt disponible</SecondTitle>
          <SecondText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis cumque, error iusto, id qui sed eveniet, numquam quo nulla reprehenderit quasi fugiat! Labore, sit. Autem dignissimos accusamus officiis. Consectetur, expedita.</SecondText>
          <Input type="email" placeholder='Email' value={email} onChange={handleEmailChange}></Input>
          <Input type="email" placeholder="CCI" value={cci}  onChange={handleCCIChange}/>
          <Button type="submit" onClick={handleButtonClick} >Envoyer</Button>
        </LeftBlock>
      </SecondBlock>
    </Container>
  );
};

export default App;
