import { useState, useEffect } from 'react';
import styled from 'styled-components';



const Container = styled.div `
width: 100vw;
height: 100vw;
background-color: white;`

const FirstBlock = styled.div`
height: 50vw;
background-color: #ffeed6;
display: flex;
justify-content: center;
flex-wrap: wrap;
justify-content: space-around;`

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
color: black;
margin-top: 50px;`

const SecondText = styled.text`
color: black;`

const Input = styled.input`
border: solid black 2px;
padding: 10px;
font-size: 16px;
border-radius: 4px;
height: 30px;
width: 230px;
border-radius: 5px;`

const Button = styled.button `
background-color: black;
color: white;
cursor: pointer;
height: 55px;
width: 120px;
border-radius: 4px;
margin-left: -3px;
`
const AvisBlock = styled.div `
background-color: white;
border-radius: 4px;
padding: 10px;
margin-bottom: 10px;
display: flex;
flex-direction: column;
justify-content: space-around;
width: 22%;
height: 50px;
flex-wrap : wrap;
`

const AvisName = styled.span `
font-size: 16px;
`

const AvisContenu = styled.p `
font-size: 16px;
margin-bottom: 5px;
`

const AvisRating = styled.span `
font-weight: bold;
`

const avis = [
  {
    name : "pierre",
    content : "bien",
    rating : 7,
    date: "23/05/23",
  },
  {
    name : "antoine",
    content: "bof",
    rating : 4,
    date: "12/02/23"
  },
  {
    name : "francois",
    content : "super",
    rating : 10,
    date: "01/07/21"
  },
  {
    name : "francois",
    content : "super",
    rating : 10,
    date: "01/07/21"
  },
  {
    name : "francois",
    content : "super",
    rating : 10,
    date: "01/07/21"
  },
  {
    name : "francois",
    content : "super",
    rating : 10,
    date: "01/07/21"
  },
  {
    name : "francois",
    content : "super",
    rating : 10,
    date: "01/07/21"
  },
  {
    name : "francois",
    content : "super",
    rating : 10,
    date: "01/07/21"
  },
]

const App = () => {

  const [email, setEmail] = useState<string>('');
  const [button, setButton] = useState<boolean>(false);
  const [waitlist, setWaitlist] = useState<string[]>([]);


  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  };

  const handleButtonClick = () => {
    if(email !== ''){
      if(!waitlist.includes(email)){
        setWaitlist([...waitlist,email]);
        setEmail('');
        setButton(false);
      }
    } 
  };
  

  useEffect(() => {
    const storeWaitlist = localStorage.getItem('waitlist');
    if(storeWaitlist){
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
      <Text> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ex nemo sequi veniam magnam, dolores quaerat explicabo, nobis odit ad tenetur ipsa impedit ab tempora earum perferendis corporis! Quo, quae.</Text>
      {avis.map((avis, index) => (
        <AvisBlock key={index}>
          <AvisName>{avis.name}</AvisName>
          <AvisContenu>{avis.content}</AvisContenu>
          <AvisRating>{avis.rating}</AvisRating>
          <span>Date : {avis.date}</span>
        </AvisBlock>
      ))}
      </FirstBlock>
      <SecondBlock>
        <LeftBlock>
          <SecondTitle>Bientôt disponible</SecondTitle>
          <SecondText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis cumque, error iusto, id qui sed eveniet, numquam quo nulla reprehenderit quasi fugiat! Labore, sit. Autem dignissimos accusamus officiis. Consectetur, expedita.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis cumque, error iusto, id qui sed eveniet, numquam quo nulla reprehenderit quasi fugiat! Labore, sit. Autem dignissimos accusamus officiis. Consectetur, expedita.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis cumque, error iusto, id qui sed eveniet, numquam quo nulla reprehenderit quasi fugiat! Labore, sit. Autem dignissimos accusamus officiis. Consectetur, expedita.</SecondText>
          <Input type="email" placeholder='Email' value={email} onChange={handleEmailChange}></Input>
          <Button type="submit" onClick={handleButtonClick} >Envoyer</Button>
        </LeftBlock>
      </SecondBlock>
    </Container>
  );
};

export default App;
