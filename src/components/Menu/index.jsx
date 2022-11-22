import React from 'react'
import { MenuLink } from './MenuLink';
import { Container } from './style'

export function Menu() {
    return (
        <Container>
            <nav>
                <MenuLink to="/" label="Ínicio" />
                <MenuLink to="/sobremim" label="Sobre Mim" />
            </nav>
        </Container>
    )
}
