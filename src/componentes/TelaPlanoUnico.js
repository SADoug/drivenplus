import styled from "styled-components";
import { useState, useEffect } from "react";
import { useContext } from "react";
import UserContext from "./Usecontext";
import axios from "axios";
import { Link, useParams, useNavigate } from 'react-router-dom';
import Vector1 from "./../assets/Vector1.png"


export default function TelaPlanoUnico() {
    const { ID_DO_PLANO } = useParams();

    const { token } = useContext(UserContext)
    const config = {
        headers: { "Authorization": `Bearer ${token}` }
    }
    const config2 = {
        headers: { "Authorization": `Bearer ${token}` }
    }
    const navigate = useNavigate();

    const [planoperk, setPlanoPerk] = useState([]);
    const [codigo, setCodigo] = useState("");
    const [nome, setNome] = useState("");
    const [validade, setValidade] = useState("");
    const [digitos, setDigitos] = useState("");
    const [membership, setMembership] = useState("");

    const [plano, setPlano] = useState([])
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${ID_DO_PLANO}`, config)
        promise.then((result) => {
            console.log(result.data.perks)
            setPlano(result.data)
            setPlanoPerk(result.data.perks)

        })
        promise.catch((err) => {
            console.log(err)
        })
    }, [])

    function Assinar() {
        const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions";
        const promise = axios.post(URL, {
            membershipId: 1,
            cardName: nome,
            cardNumber: digitos,
            securityNumber: codigo,
            expirationDate: validade
        }, config2);
        promise.then(response => {
            const { data } = response;
            console.log(data);
            navigate("/home");
        });
        promise.catch(err => {
            alert("Insira dados válidos")
        });
    }



    return (<Container>
        <Header>
            <Link to="/subscriptions"><img src={Vector1} /></Link>
        </Header>
        <Titulo>
            <img src={plano.image} />
            <h1>Driven plus</h1>
        </Titulo>
        <Div1>
            <h1>Benefícios:</h1>

            {planoperk.map((planoele) => {
                return (
                    <>
                 <a href={planoele.link}><p>{planoele.title}</p></a>
                    </>
                )
            })}
        </Div1>
        <Div1>
            <h1>Preço: {plano.price}</h1>
        </Div1>
        <DivInput>
            <input typeof="text" placeholder="Nome impresso no cartão Ex: Fulano Da Silva " value={nome} onChange={(e) => setNome(e.target.value)} />
            <input typeof="text" placeholder="Digitos no cartão" value={digitos} onChange={(e) => setDigitos(e.target.value)} />
            <Div2>
            <input typeof="text" placeholder="Código de segurança" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
            <input typeof="text" placeholder="Validade" value={validade} onChange={(e) => setValidade(e.target.value)} />
            </Div2>
            <Button onClick={Assinar} >Assinar</Button>
        </DivInput>
    </Container>

    )

}
const Header = styled.div`
height: 60px;
width: 100vw;

div {
    color: white;
}
`;
const DivInput = styled.div`
min-height: 100vh;
width: 100%;
padding: 31px;
display: flex;
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

const Titulo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


img {
    width: 140px;
    height: 96px;
}
`;

const Div1 = styled.div`
display: flex;
flex-direction: column;
align-items:center ;

h1 {
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;

color: #FFFFFF;
}
p {

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;

color: #FFFFFF;
}

`;
const Div2 = styled.div`
display: flex;
`;
const H = styled.div`
color: white;
font-family: 'Roboto';
`;

const Container = styled.div`
 
  width: 400px;
  height: 100vw;
  padding: 31px;
  display: flex;
  flex-direction: column;
  

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