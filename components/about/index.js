import { Container } from 'postcss'
import React from 'react'
import { Content, Right, Left } from './styles'

const About = () => {
    return (
        <div>
           <Content>
               <Left>
                   <h2>Nous travaillons main dans la main avec nos partenairs</h2>
               </Left>
               <Right>
                   <p>
                        Une entreprise de service informatique ainsi qu&apos;un centrre de reflexion 
                        qui s&apos;adresse aux acteurs economique au sens large(Entrepreneurs,
                        PME, Grandes Entreprises...)
                    </p>
                    <p>
                        Pour relever les defis permanents de l&apos;evolution des technologies, 
                        Tech-Nuru se doit d&apos;etre proche de ses clients. travailler en etroite 
                        collaboration avec les metiers de l&apos;entreprise est la seule maniere 
                        de comprendre l&apos;importance de vos enjeux et de vos objectis
                   </p>
               </Right>
           </Content>
        </div>
    )
}

export default About
