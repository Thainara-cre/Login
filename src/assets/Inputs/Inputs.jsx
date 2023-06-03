import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const Label = styled.label `
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    color: #1E293B;
`

const Invalido = styled.p `
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: rgba(237, 58, 90, 1);
    display: none;
`

const InputSenha = styled.input `
    outline: none;
    border: none;
    width:95%;
    &::placeholder {
        color: #94A3B8;
        font-size: 14px;
        line-height: 21px;
    }
`

const Input = styled.input `
    height: 20px;
    width: 80%;
    border-radius: 4px;
    padding: 16px 12px 16px 12px;
    border: 1px solid #E2E8F0;
    outline: none;
    display: block;
    &::placeholder {
        color: #94A3B8;
        font-size: 14px;
        line-height: 21px;
    }
    &:focus, &:hover{
    border-color: rgba(124, 58, 237, 1) ;
    }
`

const InputContainer = styled.div `
    height: 20px;
    width: 80%;
    border-radius: 4px;
    padding: 16px 12px 16px 12px;
    border: 1px solid #E2E8F0;
    outline: none;
    &:focus, &:hover{
    border-color: rgba(124, 58, 237, 1) ;
    }
`

const Button = styled.button `
    height: 56px;
    width: 384px;
    border-radius: 4px;
    margin-top: 1rem;
    padding: 16px 24px 16px 24px;
    background: #7C3AED;
    border: none;
    color: #FFFFFF;
    cursor: pointer;
    
    &:hover {
        background: #9F67FF;
    }
`

function Inputs() {
    const [email, setEmail] = useState(0);
    const [senha, setSenha] = useState(0);

    function mudaSenha(event) {
      setSenha(event.target.value);
    }
  
    
    function mostraSenha() {
      var mostraIcon = document.getElementById("mostra");
      mostraIcon.style.display = "none";
      var escondeIcon = document.getElementById("esconde");
      escondeIcon.style.display = "inline-block";
      document.getElementById('senha').type = 'text';
    }
  
    function escondeSenha() {
      var mostraIcon = document.getElementById("mostra");
      mostraIcon.style.display = "inline-block";
      var escondeIcon = document.getElementById("esconde");
      escondeIcon.style.display = "none";
      document.getElementById('senha').type = 'password';
    }
  
    function mudaEmail(event) {
        var Inputemail = document.getElementById('email')
        var Invalido = document.getElementById('ivalido')
        if(validateEmail(event.target.value)){
            setEmail(event.target.value);
            Inputemail.style.borderColor="rgba(124, 58, 237, 1)"
            Invalido.style.display = "none";
        }else {
            Invalido.style.display = "block";
            Inputemail.style.borderColor="rgba(237, 58, 90, 1)"
            console.log(email)
        }
    }

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function entra() {
        if(senha == 0 || email == 0) {
            alert("Email ou senha invalidos")
        }else {
            alert(email + " " + senha)
            setEmail(0)
            setSenha(0)
            document.getElementById('email').value = ''
            document.getElementById('senha').value = ''
        }
    }

    return (
        <main className="main">
            <Label>E-mail</Label>
            <Input id="email" placeholder="Digite seu e-mail" onChange={mudaEmail}/>
            <Invalido id="ivalido">Digite um e-mail válido</Invalido>
            <div>
                <Label>Senha</Label>
                <InputContainer>
                    <InputSenha id="senha" type="password" placeholder="Digite sua senha" onChange={mudaSenha} />                
                    <FontAwesomeIcon id="mostra" icon={faEye} style={{color: "#94a3b8",display: "visible"}} onClick={mostraSenha}/>
                    <FontAwesomeIcon id="esconde" icon={faEyeSlash} rotation={180} style={{color: "#94a3b8",display: "none"}} onClick={escondeSenha} />
                </InputContainer>
            </div>
            <Button onClick={entra}>Entrar</Button>
        </main>
    )
  }
  
  export default Inputs