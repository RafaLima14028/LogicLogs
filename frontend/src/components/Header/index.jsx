import React from 'react';
import { CiSearch } from 'react-icons/ci';

import { Container, LogoContainer, SignIn, Options } from './style';

import logo from '../../assets/logo-16x16.png';

export default function Header() {
  return (
    <Container>
      <nav>
        <LogoContainer href="/">
          <img src={logo} alt="Logo" />

          <h3>LogicLogs</h3>
        </LogoContainer>

        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>

      <Options>
        <div>
          <CiSearch className="searchIcon" />
          <input type="text" placeholder="Search" autoComplete="none" />
        </div>

        <SignIn>Sign In</SignIn>
      </Options>
    </Container>
  );
}
