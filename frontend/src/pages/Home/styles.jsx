import styled from 'styled-components';

import { backgroundColor } from '../../styles/GlobalColors';

export const Container = styled.div`
  background-color: ${backgroundColor};
  width: 100%;
  min-height: 100vh;
`;

export const Content = styled.main`
  max-width: 1000px;
  min-width: 360px;
  height: 100%;
  margin: 10px auto;
  /* padding: 0 160px; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  padding: 20px 16px 12px 16px;
`;
