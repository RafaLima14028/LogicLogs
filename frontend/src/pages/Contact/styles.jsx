import styled from 'styled-components';
import {
  backgroundSecundaryColor,
  borderColor,
  fontSecundaryColor,
  fontPrimaryColor,
  buttonColor,
} from '../../styles/GlobalColors';

export const Container = styled.main`
  max-width: 80%;
  padding-top: 40px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  padding: 16px 16px;
  font-weight: bold;
  font-weight: 2.3rem;
`;

export const SimpleText = styled.p`
  font-size: 1rem;
  padding: 4px 16px 12px 16px;
  line-height: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 12px 16px;

  div {
    display: flex;
    flex-direction: column;
    padding: 12px 0;

    & span {
      padding-bottom: 8px;
      font-weight: 500;
      font-size: 1rem;
    }

    & input,
    & textarea {
      max-width: 450px;
      padding: 15px;
      border-radius: 12px;
      border: 1px solid ${borderColor};
      transition: all 350ms ease-in-out;
      font-size: 1rem;
    }

    & textarea {
      height: 150px;
      resize: none;
    }

    & input:focus,
    & textarea:focus {
      border: 1px solid ${fontPrimaryColor};
      outline: none;
    }

    & input::placeholder {
      color: ${fontSecundaryColor};
      font-size: 1rem;
    }
  }

  button {
    background-color: ${buttonColor};
    border: none;
    border-radius: 20px;
    max-width: 450px;
    height: 40px;
    padding: 0 16px;
    margin-top: 12px;
    margin-bottom: 12px;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    transition: all 350ms ease-in-out;
  }

  button:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    opacity: 0.96;
    font-size: 1.3rem;
  }
`;

export const ConnectWithUs = styled.div`
  padding: 16px 16px 8px 16px;

  h2 {
    font-weight: bold;
    font-size: 2rem;
    padding-bottom: 8px;
  }
`;

export const WrapperIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 20px;
`;

export const ContentIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  div {
    width: 60px;
    height: 60px;
    margin-top: 10px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${backgroundSecundaryColor};
    color: ${fontPrimaryColor};
    transition: all 0.3s ease-out;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
  }

  span {
    margin-top: 10px;
    font-weight: 500;
    font-size: 1rem;
  }
`;
