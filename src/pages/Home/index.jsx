import React from 'react';
import { PostCard } from 'components/PostCard';
import { Container } from './style';
import posts from '../../json/posts.json';

export function Home() {
  return (
      <Container>
        <ul className='posts'>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <PostCard post={post} /> 
              </li>
            )
          })}
        </ul>
      </Container>
  );
}
