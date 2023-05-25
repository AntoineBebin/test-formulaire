import { useState, useEffect } from 'react';
import styled from 'styled-components';
import quadrille from './image/quadrille.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header';

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
background-image: url(${quadrille});
background-repeat: repeat;
`

const LeftBlock = styled.div`
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
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
margin-left: -3px;
`
const AvisBlock = styled.div `
  background-color: white;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  width: 22%;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-3px);
  }
`

const AvisIcon = styled.div `
color: #000;
margin-right: 10px;`

const AvisName = styled.span `
font-size: 16px;
  font-weight: bold;
  color: #333;
`

const AvisContenu = styled.p `
  font-size: 16px;
  margin-bottom: 5px;
  color: #666;
`

const AvisRating = styled.span `
  font-weight: bold;
  color: #ff6f00;
`

const AvisDate = styled.span `
font-size: 14px;
color : #999;`

const avis = [
  {
    name : "pierre",
    content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ex nemo sequi veniam magnam, dolores quaerat explicabo, nobis odit ad tenetur ipsa impedit ab tempora earum perferendis corporis! Quo, quae.",
    rating : 7,
    date: "23/05/23",
  },
  {
    name : "antoine",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ex nemo sequi veniam magnam, dolores quaerat explicabo, nobis odit ad tenetur ipsa impedit ab tempora earum perferendis corporis! Quo, quae.",
    rating : 4,
    date: "12/02/23"
  },
  {
    name : "francois",
    content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ex nemo sequi veniam magnam, dolores quaerat explicabo, nobis odit ad tenetur ipsa impedit ab tempora earum perferendis corporis! Quo, quae.",
    rating : 10,
    date: "01/07/21"
  },
  {
    name : "francois",
    content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ex nemo sequi veniam magnam, dolores quaerat explicabo, nobis odit ad tenetur ipsa impedit ab tempora earum perferendis corporis! Quo, quae.",
    rating : 10,
    date: "01/07/21"
  },
  {
    name : "francois",
    content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ex nemo sequi veniam magnam, dolores quaerat explicabo, nobis odit ad tenetur ipsa impedit ab tempora earum perferendis corporis! Quo, quae.",
    rating : 10,
    date: "01/07/21"
  },
  {
    name : "francois",
    content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ex nemo sequi veniam magnam, dolores quaerat explicabo, nobis odit ad tenetur ipsa impedit ab tempora earum perferendis corporis! Quo, quae.",
    rating : 10,
    date: "01/07/21"
  },
  {
    name : "francois",
    content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ex nemo sequi veniam magnam, dolores quaerat explicabo, nobis odit ad tenetur ipsa impedit ab tempora earum perferendis corporis! Quo, quae.",
    rating : 10,
    date: "01/07/21"
  },
  {
    name : "francois",
    content : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ex nemo sequi veniam magnam, dolores quaerat explicabo, nobis odit ad tenetur ipsa impedit ab tempora earum perferendis corporis! Quo, quae.",
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
      <Header></Header>
      <FirstBlock>
      <Title>Ils pourront vous en parler mieux que nous.</Title>
      <Text> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ex nemo sequi veniam magnam, dolores quaerat explicabo, nobis odit ad tenetur ipsa impedit ab tempora earum perferendis corporis! Quo, quae.</Text>
      {avis.map((avis, index) => (
        <AvisBlock key={index}>
          <AvisIcon>
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          </AvisIcon>
          <AvisName>{avis.name}</AvisName>
          <AvisContenu>{avis.content}</AvisContenu>
          <AvisRating>{avis.rating}</AvisRating>
          <AvisDate>Date : {avis.date}</AvisDate>
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
