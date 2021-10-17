import React from 'react'
import { Container } from '../../styles/global'
import { Left, Wrapper } from './styles'

const Hero = () => {
    return (
        <Wrapper className="hero">
            <Container>
                <Left>
                    <h1>Donnez de  la lumiere &agrave; votre entreprise</h1>
                    <p>
                        Avec des solutions informatique mieux adaptées à vos bésoins
                    </p>
                </Left>
            </Container>
        </Wrapper>
    )
}

export default Hero
