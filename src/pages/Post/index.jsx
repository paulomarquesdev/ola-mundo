import React from 'react'
import { useParams } from 'react-router-dom';
import { PostModel } from 'components/PostModel';
import { Container } from './style';
import posts from '../../json/posts.json';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export function Post() {
  const params = useParams();

  const post = posts.find((post) => {
    return post.id === Number(params.id);
  });

  if(!post) {
    return <h1 style={{textAlign: 'center', color: 'var(--blue)'}}>Post não encontrado...</h1>
  }

  return (
    <PostModel
      imgCapa={`/assets/posts/${post.id}/capa.png`}
      title={post.title}
    >
      <Container>
        <ReactMarkdown>
          {post.content}
        </ReactMarkdown>
      </Container>
    </PostModel>
  )
}
