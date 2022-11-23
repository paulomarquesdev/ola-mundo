import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, ContainerVoid } from './styled'
import { Button } from 'components/Button'
import img404 from '../../assets/images/erro_404.png'

export function Page404() {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <span>404</span>

        <h1>Ops! Página não encontrada.</h1>
        <p>Tem certeza de que era isso que você estava procurando?</p>
        <p>Aguarde uns instantes e recarregue a página, ou volte para a página inicial.</p>

        <div onClick={() => navigate(-1)}>
          <Button label="Voltar" size="lg" />
        </div>

        <img src={img404} alt='Imagem de cachorro' />
      </Container>

      <ContainerVoid />
    </>
  );
}
