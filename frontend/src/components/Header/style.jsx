import styled from 'styled-components';

import {
  backgroundColor,
  backgroundSecundaryColor,
  borderColor,
  fontPrimaryColor,
  fontSecundaryColor,
} from '../../styles/GlobalColors';

export const Container = styled.header`
  max-width: 100%;
  border-bottom: 2px solid ${borderColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${backgroundColor};
  padding: 15px 40px;

  nav {
    display: flex;
    gap: 32px;
  }

  nav ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 36px;
  }

  nav ul li a {
    color: ${fontPrimaryColor};
    text-decoration: none;
    font-weight: 500;
  }
`;

export const LogoContainer = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  color: ${fontPrimaryColor};
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 22px;

  div {
    display: flex;
    align-items: center;

    input {
      border-radius: 12px;
      border: none;
      outline: none;
      background-color: ${backgroundSecundaryColor};
      padding: 10px 20px;
      padding-left: 40px;
      position: relative;
      width: 160px;
      font-size: 1rem;
      font-size: 1rem;
      transition: all 350ms ease-in-out;
    }

    input::placeholder {
      color: ${fontSecundaryColor};
      font-size: 1.1rem;
    }

    input:focus,
    input:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }

    input:focus {
      width: 300px;
    }

    .searchIcon {
      position: absolute;
      z-index: 1;
      width: 24px;
      height: 24px;
      margin-left: 10px;
      color: ${fontSecundaryColor};
    }
  }
`;

export const SignIn = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  background-color: ${backgroundSecundaryColor};
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 350ms ease-in-out;

  a {
    text-decoration: none;
    color: unset;
  }

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;
