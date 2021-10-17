import styled from 'styled-components'

export const Section = styled.section`
    padding: 50px;
`

export const ImageBox = styled.div`
  
`
export const TextBox = styled.div`
    
    h2{
      margin-bottom: 2rem;
      margin-top: 1rem;
      font-weight: 300;
      font-size: 2rem;
  } 
`
export const Cards = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 3rem; 

`
export const Card = styled.div`
  div{
    display:flex;
    gap: 10px;
    align-items: center;
    transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);

    &:hover{
      margin-left: 10px;
    }
  }
`
