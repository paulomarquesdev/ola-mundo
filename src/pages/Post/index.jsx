import React from 'react'
import { useParams } from 'react-router-dom';
import { PostModel } from 'components/PostModel';
import { Container } from './style';
import posts from '../../json/posts.json';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
// import imgCapa from '../../assets/images/sobre_mim_capa.png';

export function Post() {
  const params = useParams();

  const post = posts.find((post) => {
    return post.id === Number(params.id);
  });

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
