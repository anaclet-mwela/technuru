import styled from 'styled-components'

export const ServicesList = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
`

export const ServiceBox = styled.div`
    background-color: #333;
    min-height:  200px;
    position: relative;
    overflow: hidden;
`
export const IconBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #efefff;
    transition: 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5rem;
    flex-direction: column;

    h3{
        font-size: .9rem;
    }
`
export const ContentBox = styled.div`
    color: #fff;
    padding: 20px;
    text-align: center;
    margin-top: 100px;
    z-index: 1;
    transform: scale(0);
    transition: 0.5s;
    opacity: 0;

    h2{
        font-size: 1.5rem;
        margin-bottom: 0;
    }
    p{
        font-size: 14px;
    }
`

