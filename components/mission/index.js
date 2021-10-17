import React from 'react'
import { Card, Cards, ImageBox, Section, TextBox } from './styles'
import Image from 'next/image'
import office from '../../src/office.jpg'
import { MdOutlineNoteAlt } from 'react-icons/md'
import Link from 'next/link'



const Mission = () => {
    return (
        <div className="formation">
            <ImageBox className="image-box"></ImageBox>
            <Section>
                <TextBox>
                    <h4>Nuru Classe</h4>
                    <h2>
                        Formation et Coatching Personnalis&eacute;
                    </h2>
                    <p>
                        Nous offrons des formations en informatique dans plusieurs domaines, que ce soit pour vos employ7eacute;s ou pour votre compte personnel.
                    </p>
                    <Cards>
                        <Card>
                            <div>
                               <MdOutlineNoteAlt style={{fontSize:"1rem", color:"#fff"}} />
                                <p>
                                   Programmation
                                </p> 
                            </div>
                            <div>
                               <MdOutlineNoteAlt style={{fontSize:"1rem", color:"#fff"}} />
                                <p>Initiation &agrave; l&apos;informatique</p> 
                            </div>
                            <div>
                               <MdOutlineNoteAlt style={{fontSize:"1rem", color:"#fff"}} />
                                <p>Developement Web</p> 
                            </div>
                            <div>
                               <MdOutlineNoteAlt style={{fontSize:"1rem", color:"#fff"}} />
                                <p>Graphisme et Design</p> 
                            </div>
                        </Card>
                    </Cards>
                </TextBox>
            </Section> 
        </div>
    )
}

export default Mission
