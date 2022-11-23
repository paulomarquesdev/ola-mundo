import React from 'react';
import { Outlet } from 'react-router-dom';
import { PostModel } from 'components/PostModel';
import { Container } from './style';
import imgCapa from '../../assets/images/sobre_mim_capa.png';

export function AboutMe() {
  return (
    <React.Fragment>
      <Outlet />

      <PostModel
        imgCapa={imgCapa}
        title="Sobre Mim"
      >
        <Container>
          <h3>Olá, eu sou o Paulo!</h3>
          <img src="https://github.com/paulomarquesdev.png" alt="Foto do Paulo Marques Dev" />
          <p>
            Oi, tudo bem? Eu sou estudante e desenvolvedor Front-end e estou feliz de te ver por aqui.
          </p>
          <p>
            Minha história com programação começou no Centro Universitário do Distrito Federal (UDF), onde fiz um semestre em Sistemas de Informação. Eu aprendi lógica de programação e o básico de algumas linguagens, como HTML, CSS, Python, mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação, mas na época por questões financeiras não pude seguir com a formação.
          </p>
          <p>
            Nesse ano de 2022, pude investir em uma plataforma de ensino focado no mercado de tecnologia, a Alura. Desde então, estou estudando tecnologias de Front-End. Durante os últimos meses estudei criação de páginas web utilizando HTML, CSS e JavaScript puro (Vanilla). Atualmente, estou estudando ReactJS, Next.js e TypeScript.
          </p>
          <p>
            Desde o começo de minha jornada, venho buscando evoluir, aplicando para vagas de front-end lutando por minha primeira oportunidade na área.
          </p>
        </Container>
      </PostModel>
    </React.Fragment>
  )
}
