import React from 'react';
import { PostCard } from 'components/PostCard';
import { Posts } from './style';
import posts from '../../json/posts.json';

export function Home() {
  return (
      <Posts>
        <ul className='posts'>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <PostCard post={post} /> 
              </li>
            )
          })}
        </ul>
      </Posts>
  );
}
