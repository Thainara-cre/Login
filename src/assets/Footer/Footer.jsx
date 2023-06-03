import styled from "styled-components"

const Rodape = styled.footer `
    font-weight: 700;
    line-height: 24px;
    color: #475569;
    cursor: pointer;
    &:hover {
        font-weight: 400;   
    }
`

const Span = styled.span `
    color: #7C3AED;
`

function Footer() {
  return (
        <Rodape>
            Ainda não tem uma conta? <Span>Inscreva-se</Span>
        </Rodape>
  )
}

export default Footer