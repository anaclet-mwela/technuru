import styled from 'styled-components'
import img from '../../src/background.jpg'

export const Wrapper = styled.section`
    background-color: #333;
    color: #fff;
    display: grid;
    place-items: center;
    width: 100%;
    height: calc(100vh - 80px);
    display: grid;
    grid-template-columns: 2fr 1fr;
`

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;

    h1{
        font-weight: 700;
        font-size: 3rem;
        line-height: 3rem;
        margin-bottom: 0;
        padding-right: 10%;
    }

    p{
        font-weight: 400;
        font-size: 1.2em;
    }
`

    
