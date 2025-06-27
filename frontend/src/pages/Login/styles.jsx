import styled, { keyframes } from 'styled-components';

import {
  backgroundSecundaryColor,
  borderColor,
  fontPrimaryColor,
  fontSecundaryColor,
} from '../../styles/GlobalColors';

export const Container = styled.main`
  max-width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 40px;

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    column-gap: 32px;
    padding-top: 16px;
    padding-bottom: 12px;
    padding-left: 16px;
    padding-right: 16px;

    & li button {
      background: none;
      border: none;
      outline: none;
      color: ${fontSecundaryColor};
      transition: all 350ms ease-in-out;
      font-weight: bold;
      font-size: 1.2rem;
      padding: 16px 0 13px 0;
      border-bottom: 3px solid ${borderColor};
    }
  }

  .focused {
    color: ${fontPrimaryColor};
    border-bottom: 3px solid ${fontPrimaryColor};
  }
`;

export const Title = styled.h1`
  text-align: center;
  padding: 20px 16px 12px 16px;
  font-weight: bold;
  font-size: 2rem;
`;

const fadeSlideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Content = styled.div`
  padding: 12px 16px;
`;

export const Form = styled.form`
  animation: ${fadeSlideIn} 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  opacity: 1;
  transform: translateY(0);

  div {
    display: flex;
    flex-direction: column;

    width: 400px;
    padding: 12px 0;

    & span {
      font-weight: 500;
      font-size: 1rem;
      padding-bottom: 10px;
    }

    & input {
      padding: 15px;
      border-radius: 12px;
      border: 1px solid ${borderColor};
      outline: none;
      transition: all 350ms ease-in-out;
      font-size: 1rem;
    }

    & input::placeholder {
      color: ${fontSecundaryColor};
      font-size: 1rem;
    }

    & input:focus {
      border: 1px solid ${fontPrimaryColor};
    }
  }
`;

export const Button = styled.button`
  width: 400px;
  border: none;
  outline: none;
  background-color: ${backgroundSecundaryColor};
  cursor: pointer;
  border-radius: 20px;
  margin: 12px 0;
  padding: 10px 16px;
  transition: all 350ms ease-out;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;
