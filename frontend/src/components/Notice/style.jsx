import styled from 'styled-components';
import {
  backgroundSecundaryColor,
  fontPrimaryColor,
  fontSecundaryColor,
} from '../../styles/GlobalColors';

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 960px;
  height: 200px;
  padding: 16px;
  transition: all 350ms ease-in-out;
  border-radius: 12px;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }

  .img-post {
    border-radius: 12px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  height: 100%;

  .read-more-btn {
    margin-top: 16px;
    width: 102px;
    height: 32px;
    border-radius: 16px;
    border: none;
    padding: 0px 16px;
    background-color: ${backgroundSecundaryColor};
    font-weight: 500;
    font-size: 0.8rem;
    cursor: pointer;
  }
`;

export const Title = styled.h2`
  color: ${fontPrimaryColor};
  font-weight: bold;
  font-size: 1.3rem;
  margin-bottom: 4px;
`;

export const SubTitle = styled.h3`
  color: ${fontSecundaryColor};
  font-size: 1rem;
  max-height: 50%;
  font-weight: 500;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
`;
