import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content, Title, SubTitle } from './style';

export default function Notice({ title, description, image }) {
  return (
    <Container>
      <Content>
        <Title>{title}</Title>

        <SubTitle>{description}</SubTitle>

        <button className="read-more-btn">Read More</button>
      </Content>

      <img src={image} alt="Post image" className="img-post" />
    </Container>
  );
}

Notice.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
};
