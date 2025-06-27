import styled from 'styled-components';
import {
  borderColor,
  fontPrimaryColor,
  fontSecundaryColor,
} from '../../styles/GlobalColors';

export const Container = styled.main`
  width: 80%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h1`
  padding: 16px;
  font-weight: bold;
  font-size: 2rem;
`;

export const Form = styled.form`
  padding-left: 16px;
`;

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  padding: 12px 16px;

  span {
    padding-bottom: 8px;
    font-weight: 500;
    font-size: 1rem;
  }

  input,
  textarea {
    padding: 15px;
    border: 1px solid ${borderColor};
    border-radius: 12px;
    outline: none;
    font-size: 1rem;
    transition: all 350ms ease-in-out;

    &::placeholder {
      color: ${fontSecundaryColor};
      font-size: 1rem;
    }

    &:focus {
      border: 1px solid ${fontPrimaryColor};
    }
  }

  input[type='file'] {
    display: none;
  }

  textarea {
    width: calc(100vw - 80%);
    height: 20rem;
  }
`;

export const ImageInput = styled.div`
  margin-top: 16px;
  padding: 30px;
  border: 1px solid ${borderColor};
  border-radius: 12px;
  transition: all 350ms ease-in-out;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
  }

  button {
    border: none;
    outline: none;
    padding: 16px 16px;
    border-radius: 20px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
  }

  &:hover {
    border-color: ${fontPrimaryColor};
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 20px;
  padding: 12px 16px;

  button {
    border: none;
    padding: 16px;
    outline: none;
    border-radius: 20px;
    color: ${fontPrimaryColor};
    font-weight: bold;
    font-size: 0.8rem;
    transition: all 350ms ease-in-out;

    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
  }
`;
