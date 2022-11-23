import React from 'react'
import { Container } from './style';

export function Button({ label, size }) {
  return (
    <Container className={size}>
        {label}
    </Container>
  );
}
