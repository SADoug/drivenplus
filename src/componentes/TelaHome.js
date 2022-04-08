import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import UserContext from "./Usecontext";
import Vector from "./../assets/Vector.png"

export default function TelaHome() {
    const { token } = useContext(UserContext)
    console.log(token);
    const config = {
        headers: { "Authorization": `Bearer ${token}` }
    }

    const { dados } = useContext(UserContext)
    const { logo } = useContext(UserContext)
    const { name } = useContext(UserContext)

    console.log(dados)

    const navigate = useNavigate();

    function excluir() {
        const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions";
        ;
        const promise = axios.delete(URL, config);
        promise.then(response => {
            const { data } = response;
            console.log(data);
            navigate("/subscriptions");
        });
        promise.catch(err => {
            console.log("Erro ao deletar")
        });
    }


    return (<Container>
        <Topo>
           <img className="imagem" src={logo} />
            <img className="icon" src={Vector} />
        </Topo>
        <Main>
            <h1>Olá, {name} </h1>
            {dados.map((perks) => {
                return (<a href={perks.link}><Button>{perks.title}</Button></a> )
            })}
        </Main>
        <Menu>
            <Link to="/subscriptions"><Button1 className="alterar" >Alterar plano</Button1></Link>
            <Button2 onClick={excluir} className="cancelar">Cancelar Plano</Button2>
        </Menu>
    </Container>
    )
}


const Container3 = styled.div`
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        `;
const Container = styled.div`
width: 100%;
height: 100vh;
padding: 31px;

`;
const Topo = styled.div`
width: 100%;
position: absolute;
left: 0;
right: 0;
top: 0;
display: flex;
justify-content: space-between;

.imagem {
    width: 50px;
    height: 50px;
}
.icon {
    width: 32px;
    height: 32px;
}
`;

const Main = styled.div`
position: relative;
top: 100px;
height: 1px;
display: flex;
flex-direction: column;
align-items: center ;

h1 {
    font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
margin-bottom:100px ;
color: #FFFFFF;
}
`
const Menu = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
position: fixed;
left: 0;
right: 0;
bottom: 0;
`;
const Button = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 303px;
height: 45px;
background: #FF4791;
border-radius: 4.63636px;
margin-top: 10px;
margin-bottom: 24px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20.976px;
line-height: 26px;
text-align: center;
color: #FFFFFF;

`
const Button1 = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 303px;
height: 45px;
background: #FF4791;
border-radius: 4.63636px;

margin-bottom: 10px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20.976px;
line-height: 26px;
text-align: center;
color: #FFFFFF;
`;
const Button2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 303px;
height: 45px;
background: #FF4747;
border-radius: 4.63636px;
margin-bottom: 24px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20.976px;
line-height: 26px;
text-align: center;
color: #FFFFFF;
`;