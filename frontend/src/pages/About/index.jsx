import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

import Header from '../../components/Header';

import {
  Content,
  Title,
  Description,
  AboutAuthor,
  ContentAboutAuthor,
  SocialMedias,
  IconContent,
} from './styles';

export default function About() {
  function handleRedirectToLinkedin() {
    window.open('https://www.linkedin.com/in/rafa-alves-de-lima/', '_blank');
  }

  function handleRedirectToGitHub() {
    window.open('https://github.com/RafaLima14028', '_blank');
  }

  return (
    <>
      <Header />

      <Content>
        <Title>About LogicLogs</Title>

        <Description>
          LogicLogs is a blog dedicated to exploring the fascinating world of
          technology, software development, and the ever-evolving digital
          landscape. Our mission is to provide insightful, informative, and
          engaging content that caters to both tech enthusiasts and
          professionals alike. Whether you are a seasoned developer, a student
          eager to learn, or simply curious about the latest trends, LogicLogs
          offers a wealth of knowledge and perspectives to keep you informed and
          inspired.
        </Description>

        <AboutAuthor>
          <h2 className="main-title">Meet the Author</h2>

          <div className="need-padding">
            <img src="/img-author.jpg" alt="Photo of the author" />

            <ContentAboutAuthor>
              <h2>Rafael Alves de Lima</h2>

              <p>Web Developer</p>

              <p>
                I am a Computer Science student with a passion for programming
                and web application development. I constantly seek to expand my
                knowledge in programming logic, back-end and front-end
                languages, and databases, aiming to build scalable and efficient
                solutions.
              </p>
            </ContentAboutAuthor>
          </div>

          <SocialMedias>
            <h2>Connect with Rafael</h2>

            <div className="icons-div">
              <IconContent onClick={handleRedirectToLinkedin}>
                <div className="icon-wrapper">
                  <FiLinkedin size={30} className="icons" />
                </div>
                <span>LinkedIn</span>
              </IconContent>

              <IconContent onClick={handleRedirectToGitHub}>
                <div className="icon-wrapper">
                  <FiGithub size={30} className="icons" />
                </div>

                <span>GitHub</span>
              </IconContent>
            </div>
          </SocialMedias>
        </AboutAuthor>
      </Content>
    </>
  );
}
