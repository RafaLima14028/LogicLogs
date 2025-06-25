import React from 'react';

import Header from '../../components/Header';
import Notice from '../../components/Notice';

import { Container, Content, Title } from './styles';

import { newsData } from '../../temporary/temp';

export default function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <Title>Recent Blog Posts</Title>

        {newsData.map((notice, index) => (
          <Notice
            key={index}
            title={notice.title}
            description={notice.description}
            image={notice.image}
          />
        ))}
      </Content>
    </Container>
  );
}
