import React from 'react'
import { Container } from './style';
import circleColorImg from '../../assets/images/circulo_colorido.png';

export function Banner() {
    return (
        <Container>
            <div className='presentation'>
                <h1>Olá, mundo!</h1>
                <p>Boas vindas ao meu espaço pessoal! Eu sou Paulo Marques, estudante e Desenvolvedor Front-end. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)</p>
            </div>
            <div className='images'>
                <img className='circleColor' src={circleColorImg} alt="Imagem de circulo colorido" aria-hidden={true} />
                <img className='profileImg' src="https://github.com/paulomarquesdev.png" alt="Foto do Paulo Marques Dev" />
            </div>
        </Container>
    );
}
