import styled from "styled-components"
import Fundo from "../Images/fundo.jpeg"


const ImagemContainer = styled.img `
    width: 40%
`

function Imagem() {
    return (
        <>
            <ImagemContainer src={Fundo} alt="" srcset="" />
        </>
    )
  }
  
export default Imagem