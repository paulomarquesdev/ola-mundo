import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Container } from './style'

export function MenuLink({ to, label }) {
  const location = useLocation();
  
  return (
    <Container>
      <Link
        className={`
          link 
          ${location.pathname === to ? 'link__active' : ''}
        `}
        to={to}
      >
        {label}
      </Link>
    </Container>
  )
}
