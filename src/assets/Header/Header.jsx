import styled from "styled-components"

const Conteudo = styled.header `
  margin: 0;
  padding: 0;
`

const Titulo = styled.h1 `
  font-family: Titillium Web;
  font-size: 30px;
  font-weight: 700;
  line-height: 33px;
  color: #1E293B;
`

const Paragrafo = styled.p `
  font-family: Titillium Web;
  font-weight: 400;
  line-height: 24px;
  color: #475569;
`

function Header() {
  return (
    <Conteudo>
        <Titulo>Acesse a plataforma</Titulo>
        <Paragrafo>
          Faça login ou registre-se para começar a construir seus projetos ainda hoje.  
        </Paragrafo> 
    </Conteudo>
  )
}

export default Header