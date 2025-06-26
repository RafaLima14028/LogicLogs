import React, { useState } from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

import Header from '../../components/Header';

import {
  Container,
  Title,
  SimpleText,
  Form,
  ConnectWithUs,
  WrapperIcons,
  ContentIcons,
} from './styles';

export default function Contact() {
  const [subject, setSubjet] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleRedirectToEmail() {
    const completeSubject = `${subject} - ${name}`;

    window.open(
      `mailto:rafael.alv334@gmail.com?subject=${completeSubject}&body=${message}`,
      '_blank'
    );
  }

  function handleRedirectToLinkedin() {
    window.open('https://www.linkedin.com/in/rafa-alves-de-lima/', '_blank');
  }

  function handleRedirectToGithub() {
    window.open('https://github.com/RafaLima14028', '_blank');
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <Header />

      <Container>
        <Title>Contact Us</Title>

        <SimpleText>
          We&apos;d love to hear from you! Whether you have a question,
          feedback, or just want to say hello, please don&apos;t hesitate to
          reach out. Fill out the form below, and we&apos;ll get back to you as
          soon as possible.
        </SimpleText>

        <Form onSubmit={handleSubmit}>
          <div>
            <span>Name</span>
            <input
              type="text"
              placeholder="Your Name"
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div>
            <span>Email</span>
            <input
              type="email"
              placeholder="Your Email"
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div>
            <span>Subject</span>
            <input
              type="text"
              placeholder="Subject"
              onChange={e => setSubjet(e.target.value)}
            />
          </div>

          <div>
            <span>Message</span>
            <textarea onChange={e => setMessage(e.target.value)} />
          </div>

          <button type="submit">Send Message</button>
        </Form>

        <ConnectWithUs>
          <h2>Connect with Us</h2>

          <WrapperIcons>
            <ContentIcons onClick={handleRedirectToEmail}>
              <div>
                <FiMail size={30} />
              </div>

              <span>Email</span>
            </ContentIcons>

            <ContentIcons onClick={handleRedirectToLinkedin}>
              <div>
                <FiLinkedin size={30} />
              </div>

              <span>LinkedIn</span>
            </ContentIcons>

            <ContentIcons onClick={handleRedirectToGithub}>
              <div>
                <FiGithub size={30} />
              </div>

              <span>GitHub</span>
            </ContentIcons>
          </WrapperIcons>
        </ConnectWithUs>
      </Container>
    </>
  );
}
