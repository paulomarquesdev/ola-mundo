import React from 'react';
import { Post } from 'components/Post';
import { Posts } from './style';
import posts from '../../json/posts.json';

export function Home() {
  return (
      <Posts>
        <ul className='posts'>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <Post post={post} /> 
              </li>
            )
          })}
        </ul>
      </Posts>
  );
}
