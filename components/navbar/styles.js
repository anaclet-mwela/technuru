import styled from 'styled-components'

export const Nav = styled.nav`
    width: 100%;
    height: 80px;
    background-color: #fff;

`

export const Logo = styled.a`
    display: block;
    font-size: 2rem;
    color: red;
`

export const Menu = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    font-size: 14px;

    a{
        text-decoration: none;
        text-transform: uppercase;
    }
`