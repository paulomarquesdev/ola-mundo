import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from './style';

export function PostCard({ post }) {
  return (
    <Container>
        <Link to={`/posts/${post.id}`}>
          <img
              src={`/assets/posts/${post.id}/capa.png`}
              alt="Imagem de capa do post" 
              />
          <h2>{post.title}</h2>
          <button>Ler</button>
      </Link>
    </Container>
  )
}
