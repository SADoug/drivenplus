import styled from "styled-components";
import { useState, useEffect } from "react";
import { useContext } from "react";
import UserContext from "./Usecontext";
import axios from "axios";
import { Link } from 'react-router-dom';


export default function TelaPlanos() {
    
    const { token } = useContext(UserContext)
    const config = {
        headers: { "Authorization": `Bearer ${token}` }
    }
   

    const [planos, setPlanos] = useState([])
    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships", config)
        promise.then((result) => {
            console.log(result.data)
            setPlanos(result.data)
        })
        promise.catch((err) => {
            alert("Problema");
            console.log(err)
        })
    }, [])

    return (<Container>
        <h1>Escolha seu plano</h1>
       {planos.map((plano, index) => {                              
    return (<Div>
        <img src={plano.image} />
       <Link to={`/subscriptions/${plano.id}`}> <H>R$ {plano.price}</H></Link>
    </Div>
        )})}
    
                        </Container>)
}



const Div = styled.div`

width: 290px;
height: 220px;
display: flex;
justify-content: space-around;
align-items: center;
background: #0E0E13;
border: 3px solid #7E7E7E;
box-sizing: border-box;
border-radius: 12px;
margin-bottom: 10px;
`;
const H = styled.div`
color: white;
font-family: 'Roboto';
`;

const Container = styled.div`
 
  width: 100%;
  height: 100vw;
  padding: 50px;
  display: flex;
  flex-direction: column;
  
  align-items: center;

h1 {
color: white;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 38px;
margin-bottom: 24px;
}
`;