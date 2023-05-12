import React from 'react';
import './App.css';
import styled from 'styled-components';
import { type } from 'os';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormInputs = {
  email: string;
  password: string;
};

function App() {

  const {register,handleSubmit} = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> =(data: FormInputs)=> {
    console.log(data)
  }

  return (
  
    <FormContainer
    onSubmit ={handleSubmit(onSubmit)}>
      <Form>
        <Span htmlFor='email' placeholder="Email">Email</Span>
        <Input  type='text' {...register('email', {required: true})} />
      </Form>
      <Form>
        <Span htmlFor='password' placeholder="Password">Password</Span>
        <Input type='password' {...register('password', {required: true})}/>
      </Form>
      <Button type='submit'>S'inscrire</Button>
    </FormContainer>
  );
}

const FormContainer = styled.form `
display:flex;
flex-direction: column;
align-items: center;`

const Form = styled.div `
display:flex;
flex-direction: column;
margin-bottom: 1rem;`

const Span = styled.span `
margin-bottom: 1rem;`

const Input = styled.input `
font-size: 1rem;
padding : 1rem;`

const Button = styled.button `
padding: 1rem;
cursor: pointer;`

export default App;
