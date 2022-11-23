import React from 'react'
import { Article } from './styled';

export function PostModel({ imgCapa, title, children }) {
  return (
    <Article>
        <div className='imgCapa' style={{backgroundImage: `url('${imgCapa}')`}}>
        </div>
            <h2>{title}</h2>
        <div className='content'>{children}</div>
    </Article>
  );
}
