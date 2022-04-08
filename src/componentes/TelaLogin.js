import React from "react";
import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import {useContext} from "react";
import UserContext from "./Usecontext";

export default function TelaLogin() {
    const [email, setEmail] = React.useState("douglastec2@gmail.com");
    const [senha, setSenha] = React.useState("12345678");
    const navigate = useNavigate();
    const { setToken, setDados,  setLogo, setName } = useContext(UserContext);
   
    function login() {
        const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/auth/login";
        
        const promise = axios.post(URL, {
            email, // email: email
            password: senha
        });
        promise.then(response => {
            const { data } = response;
            console.log(data);
            setToken(data.token)
            setDados(data.membership.perks)
            setLogo(data.membership.image)
            setName(data.name)
            {data.membership === null ? navigate("/subscriptions") : navigate("/home");}
            
        })
        promise.catch(err => {
            alert("Insira dados válidos")
        });
    }



    return (<Container>
        <img src="https://svgshare.com/i/dSP.svg" />
        <input typeof="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input typeof="text" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />

        <Button onClick={login}>Entrar</Button>
        <StyledLink to="/sign-up">Não possui uma conta? Cadastre-se</StyledLink>
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

  img {
      margin-bottom: 100px;
  }
input {
    width: 303px;
height: 45px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
box-sizing: border-box;
border-radius: 5px;
margin-bottom: 16px;
font-family: 'Roboto';
font-style: normal;
color: black;
}
`;

const Button = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 24px;
margin-top: 24px;
width: 303px;
height: 45px;
background: #FF4791;
border-radius: 4.63636px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20.976px;
line-height: 26px;
text-align: center;

color: #FFFFFF;
`
const StyledLink = styled(Link)`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #52B6FF;
  font-family: 'Roboto';
`;
