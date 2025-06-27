import React, { useState } from 'react';

import Header from '../../components/Header';

import { Container, Title, Content, Form, Button } from './styles';

export default function Login() {
  const [focusedButton, setFocusedButton] = useState('login');

  return (
    <>
      <Header />

      <Container>
        <Title>Welcome to LogicLogs</Title>

        <ul>
          <li>
            <button
              onClick={() => setFocusedButton('login')}
              className={focusedButton === 'login' ? 'focused' : 'not-focused'}
            >
              Login
            </button>
          </li>
          <li>
            <button
              onClick={() => setFocusedButton('register')}
              className={
                focusedButton === 'register' ? 'focused' : 'not-focused'
              }
            >
              Register
            </button>
          </li>
        </ul>

        <Content>
          {focusedButton === 'login' ? <LoginContent /> : <RegisterContent />}
        </Content>
      </Container>
    </>
  );
}

function RegisterContent() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <span>Username</span>
        <input type="text" placeholder="Choose a username" />
      </div>

      <div>
        <span>Email</span>
        <input type="email" placeholder="Enter your email" />
      </div>

      <div>
        <span>Password</span>
        <input type="password" placeholder="Create a password" />
      </div>

      <div>
        <span>Confirm Password</span>
        <input type="password" placeholder="Re-enter your password" />
      </div>

      <Button type="submit">Register</Button>
    </Form>
  );
}

function LoginContent() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <span>Email</span>
        <input type="email" placeholder="Enter your email" />
      </div>

      <div>
        <span>Password</span>
        <input type="password" placeholder="Enter your password" />
      </div>

      <Button type="submit">Login</Button>
    </Form>
  );
}
