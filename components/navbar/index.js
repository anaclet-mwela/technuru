import React from 'react'
import { Menu,Logo, Nav } from './styles'
import {Container} from '../../styles/global'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../src/logo.png'

const Navbar = () => {
    return (
        <Nav>
            <Container>
                <Logo>
                    <Image 
                        src={logo} 
                        width={80}
                        height={25}
                        alt="logo"
                    />
                </Logo>
                <Menu>
                    <Link href='#'><a>Services</a></Link>
                    <Link href='#'><a>Formations</a></Link>
                    <Link href='#'><a>Contacts</a></Link>
                </Menu>
            </Container>
        </Nav>
    )
}

export default Navbar
