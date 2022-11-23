import React from 'react'
import { Container } from './style';
import postImg from '../../assets/posts/1/capa.png';

export function PostCard({ post }) {
  return (
    <Container>
        <img
            src={postImg}
            // src={`/assets/posts/${post.id}/capa.png`}
            alt="Imagem de capa do post" 
        />
        <h2>{post.title}</h2>
        <button>Ler</button>
    </Container>
  )
}
