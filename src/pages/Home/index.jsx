import React from 'react'
import { Banner } from 'components/Banner'
import { Post } from 'components/Post';
import { Posts } from './style';
import posts from '../../json/posts.json';

export function Home() {
  return (
    <main>
      <Banner />
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
    </main>
  );
}
