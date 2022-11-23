import React from 'react'
import { Container, ContainerVoid } from './styled'
import img404 from '../../assets/images/erro_404.png'
import Button from 'components/Button'

export function Page404() {
  return (
    <>
      <Container>
        <span>404</span>

        <h1>Ops! Página não encontrada.</h1>
        <p>Tem certeza de que era isso que você estava procurando?</p>
        <p>Aguarde uns instantes e recarregue a página, ou volte para a página inicial.</p>

        <div>
          <Button label="Voltar" />
        </div>

        <img src={img404} alt='Imagem de cachorro' />
      </Container>

      <ContainerVoid />
    </>
  );
}
