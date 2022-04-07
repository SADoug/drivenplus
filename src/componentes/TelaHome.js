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
    const [planoperk, setPlanoPerk] = useState([]);
    const [codigo, setCodigo] = useState("");
    const [nome, setNome] = useState("");
    const [validade, setValidade] = useState("");
    const [digitos, setDigitos] = useState("");
    const [membership, setMembership] = useState("");
    const { dados } = useContext(UserContext)
    console.log(dados.membership)
    const navigate = useNavigate();



    /* function alterar() {
         const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions";
         const promise = axios.post(URL, {
             membershipId: 1,
             cardName: nome,
             cardNumber: digitos,
             securityNumber: codigo,
             expirationDate: validade
         }, config);
         promise.then(response => {
             const { data } = response;
             console.log(data);
 
         });
         promise.catch(err => {
             alert("Insira dados válidos")
         });
     }*/

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
            <img className="imagem" src={dados.membership.image} />
            <img className="icon" src={Vector} />
        </Topo>
        <Main>
            <h1>Olá, {dados.name} </h1>
            <Button>meio</Button>
        </Main>
        <Menu>
            <Link to="./subscriptions"><Button1 className="alterar" >Alterar plano</Button1></Link>
            <Button2 onClick={excluir} className="cancelar">Cancelar Plano</Button2>
        </Menu>
    </Container>
    )
}
const Container = styled.div`
width: 300px;
padding: 31px;

`;
const Topo = styled.div`
width: 300px;
position: fixed;
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
top: 300px;
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

color: #FFFFFF;
}
`
const Menu = styled.div`
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
const Button1 = styled.div`
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
`;
const Button2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 303px;
height: 45px;
background: #FF4747;
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
`;