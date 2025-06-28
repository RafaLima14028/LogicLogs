import React, { useRef, useState } from 'react';

import Header from '../../components/Header';
import Loading from '../../components/Loading';

import {
  Container,
  Title,
  WrapperInput,
  Form,
  ImageInput,
  Buttons,
} from './styles';

export default function NewPost() {
  const inputFileRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    // console.log(inputFileRef.current.files);

    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }

  function handleBrowseFileImg() {
    inputFileRef.current.click();
  }

  return (
    <>
      <Loading isLoading={isLoading} />

      <Header />

      <Container>
        <Title>Create a New Post</Title>

        <Form onSubmit={handleSubmit}>
          <WrapperInput>
            <span>Post Title</span>
            <input type="text" placeholder="Enter post title" />
          </WrapperInput>

          <WrapperInput>
            <span>Post Content</span>
            <textarea />
          </WrapperInput>

          <WrapperInput>
            <span>Tags</span>
            <input type="text" placeholder="Add tags (comma-separeted)" />
          </WrapperInput>

          <WrapperInput>
            <span>Featured Image</span>
            <input type="file" accept="image/*" ref={inputFileRef} />

            <ImageInput>
              <div>
                <h2>Upload Featured Image</h2>

                <p>Drop and drop an image here, or click to select a file</p>
              </div>

              <button onClick={handleBrowseFileImg}>Browse Files</button>
            </ImageInput>
          </WrapperInput>

          <Buttons>
            <button>Save Draft</button>
            <button>Publish</button>
          </Buttons>
        </Form>
      </Container>
    </>
  );
}
