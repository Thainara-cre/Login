import Login from './assets/Login/Login'
import Imagem from './assets/Imagem/Imagem'
import styled from "styled-components"

const AppContainer = styled.div `
  display: flex;
`

function App() {

  return (
    <AppContainer>
      <Login />
      <Imagem />
    </AppContainer>
  )
}

export default App
