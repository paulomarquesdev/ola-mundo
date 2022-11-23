import React from 'react'
import { Container } from './style';

export default function Button({ label }) {
  return (
    <Container className='lg'>
        {label}
    </Container>
  );
}
