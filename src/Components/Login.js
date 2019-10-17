import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import Section from './Section';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2rem;
`;

const InputText = styled.input`
  font-size: 1rem;
  width: 18rem;
  height: 1.8rem;
  background-color: #caccd3;
  margin-bottom: 2rem;
  border: none;
  padding-left: 0.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #949599;
  display: flex;
`;

const Submit = styled.input`
  align-self: center;
  font-family: Poppins;
  background-color: #e9b839;
  color: #fff;
  width: 7rem;
  height: 2rem;
  font-size: 1rem;
  padding: auto;
  border-radius: 5px;
`;

export default function Login() {

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    setName(event.target.name.value);
    setEmail(event.target.email.value);
    setPassword(event.target.password1.value);
  }
   
  return (
    <Section heading="Login">
      <Form onSubmit={handleSubmit}>

        <Label htmlFor="name">Name</Label>
        <InputText
          type="text"
          id="name"
          name="name"
          required
        />

        <Label htmlFor="email">Email</Label>
        <InputText
          type="email"
          id="email"
          name="email"
          required
        />

        <Label htmlFor="password1">Create a password</Label>
        <InputText
          type="password"
          id="password1"
          name="password1"
          required
        />

        <Label htmlFor="password2">Repeat password</Label>
        <InputText
          type="password"
          id="password2"
          name="password2"
          required
        />

        <Submit type="submit" value="Save" />
      </Form>
      <p>{name}</p>
      <p>{email}</p>
      <p>{password}</p>
    </Section>
  )
}
