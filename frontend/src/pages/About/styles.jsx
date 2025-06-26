import styled from 'styled-components';

import {
  backgroundSecundaryColor,
  borderColor,
  fontPrimaryColor,
  fontSecundaryColor,
} from '../../styles/GlobalColors';

export const Content = styled.main`
  width: 80%;
  margin: 20px auto 0 auto;
`;

export const Title = styled.h1`
  padding: 16px;
  font-weight: bold;
  font-size: 2rem;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 24px;
  padding: 4px 16px 12px 16px;
`;

export const AboutAuthor = styled.div`
  position: relative;

  .main-title {
    font-weight: bold;
    font-size: 1.8rem;
    padding: 20px 16px 12px 16px;
  }

  img {
    width: 130px;
    height: 130px;
    object-fit: cover;
    object-position: center bottom;
    border-radius: 50%;
    box-shadow: 0 0 10px 5px ${borderColor};
    transition: all 0.3s ease-out;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
  }

  .need-padding {
    padding: 16px;
  }
`;

export const ContentAboutAuthor = styled.div`
  padding: 16px;
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 65px;
  left: 150px;

  h2 {
    font-weight: bold;
    line-height: 28px;
  }

  p {
    font-size: 1.1rem;
    margin-top: 5px;
    line-height: 20px;
    color: ${fontSecundaryColor};
  }
`;

export const SocialMedias = styled.div`
  padding: 0 16px;

  h2 {
    font-weight: bold;
    font-size: 1.8rem;
  }

  .icons-div {
    display: flex;
    flex-direction: row;
    column-gap: 35px;
  }
`;

export const IconContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-left: 16px;
  cursor: pointer;

  .icon-wrapper {
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
