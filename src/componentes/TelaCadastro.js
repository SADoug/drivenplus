
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";


export default function TelaCadastro() {

    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [CPF, setCPF] = useState("");
    const navigate = useNavigate();

    function cadastrar() {
        const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up";
        ;
        const promise = axios.post(URL, {
            email: email,
            name: nome,
            cpf: CPF,
            password: senha
        });
        promise.then(response => {
            const { data } = response;
            console.log(data);
            navigate("/");
        });
        promise.catch(err => {alert("Insira dados válidos")
           });
    }

    return (<Container>
        <input typeof="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        <input typeof="text" placeholder="CPF" value={CPF} onChange={(e) => setCPF(e.target.value)} />
        <input typeof="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input typeof="text" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
            <Button onClick={cadastrar}>Cadastrar</Button>
            
        <StyledLink to="/">Já possui uma conta? Faça login</StyledLink>
    </Container>)
}


const Container = styled.div`
min-height: 100vh;
width: 100%;
padding: 31px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


input {
    width: 299px;
height: 52px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
box-sizing: border-box;
border-radius: 5px;
margin-top: 16px;
font-family: 'Roboto';
font-style: normal;
color: #DBDBDB;
}
`;

const Button = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 303px;
height: 45px;
background: #FF4791;
border-radius: 4.63636px;
margin-top: 24px;
margin-bottom: 24px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20.976px;
line-height: 26px;
text-align: center;

color: #FFFFFF;
`
const StyledLink = styled(Link)`
  font-family: 'Roboto';
  height: 17px;
font-style: normal;
font-weight: 400;
font-size: 13.976px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;
margin-top: 25px;
color: #52B6FF;
`;
