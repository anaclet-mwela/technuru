import React from 'react'
import { ServiceBox, ServicesList, IconBox, ContentBox } from './styles'
import {MdOutlineComputer, MdOutlineColorLens} from 'react-icons/md'
import {IoColorPaletteOutline} from 'react-icons/io'
import {FcFlashAuto, FcCircuit, FcCamcorderPro, FcFeedback} from 'react-icons/fc'

const Services = () => {
    return (
        <div className="services">
            <h2 className="section-heading">Nos Services</h2>
            <p style={{textAlign:"center", width: "50%", margin: 'auto'}}>Nous offrons des services de qualit&eacute; pour le succes de votre entreprise.</p>
            <ServicesList>
                <ServiceBox className="service-box">
                    <IconBox className="icon">
                        <FcCircuit />
                        <h3>Informatique</h3>
                    </IconBox>
                    <ContentBox className="content-box">
                        <h2>Informatique</h2>
                        <p>
                            Transformer votre entreprise et profitter de tous les avantages des technologies de pointe
                        </p>
                    </ContentBox>
                </ServiceBox>
                <ServiceBox className="service-box">
                    <IconBox className="icon">
                        <FcCamcorderPro />
                        <h3>Multi Media</h3>
                    </IconBox>
                    <ContentBox className="content-box">
                        <h2>Multi Media</h2>
                        <p>
                            Transformer votre entreprise et profitter de tous les avantages des technologies de pointe
                        </p>
                    </ContentBox>
                </ServiceBox>
                <ServiceBox className="service-box">
                    <IconBox className="icon">
                        <FcFlashAuto />
                        <h3>Electricite</h3>
                    </IconBox>
                    <ContentBox className="content-box">
                        <h2>Electricite</h2>
                        <p>
                            Transformer votre entreprise et profitter de tous les avantages des technologies de pointe
                        </p>
                    </ContentBox>
                </ServiceBox>
                <ServiceBox className="service-box">
                    <IconBox className="icon">
                        <FcFeedback />
                        <h3>Contactez Nous</h3>
                    </IconBox>
                    <ContentBox className="content-box">
                        <h2>Contact</h2>
                        <p>
                           Contactez notre &eacute;quipe pour plus d&apos;information sur nos services
                        </p>
                    </ContentBox>
                </ServiceBox>
                
                
            </ServicesList>
        </div>
    )
}

export default Services
