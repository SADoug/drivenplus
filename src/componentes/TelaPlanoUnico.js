import styled from "styled-components";
import { useState, useEffect } from "react";
import { useContext } from "react";
import UserContext from "./Usecontext";
import axios from "axios";
import { Link, useParams, useNavigate } from 'react-router-dom';
import Vector1 from "./../assets/Vector1.png"
import BeneficiosLogo from "./../assets/BeneficiosLogo.png"
import PrecoLogo from "./../assets/PrecoLogo.png"

/*import Modal from "react-modal"
Modal.setAppElement('#root')*/

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
            membershipId: 1, /*ARRUMAR COMO PEGAR ESSE VALOR DE FORMA AUTOMATICA*/
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
    /*const [modalaberto, setModalaberto] = useState(true);
    function modalOPen(){return (setModalaberto(false))}
    function modalClosed(){return (setModalaberto(true))}
   
    function Modal() {
        return (<>
            { modalaberto === true ? modalOPen() : modalClosed()}
            </>
        )
    }*/

    return (<Container>
        <Header>
            <Link to="/subscriptions"><img src={Vector1} /></Link>
        </Header>
        <Titulo>
            <img src={plano.image} />
            <h1>Driven plus</h1>
        </Titulo>
        <Div1>
            <h2>
                <img src={BeneficiosLogo}/> Benefícios:</h2>

            {planoperk.map((planoele) => {
                return (
                    <>
                 <a href={planoele.link}><p>{planoele.title}</p></a>
                    </>
                )
            })}
        </Div1>
        <Div1>
            <h2><img src={PrecoLogo}/> Preço:</h2>
            <h2>R$ {plano.price} cobrados mensalmente</h2>

        </Div1>
        <DivInput>
            <input className="input1" typeof="text" placeholder="Nome impresso no cartão Ex: Fulano Da Silva " value={nome} onChange={(e) => setNome(e.target.value)} />
            <input className="input1" typeof="text" placeholder="Digitos no cartão" value={digitos} onChange={(e) => setDigitos(e.target.value)} />
            <Div2>
            <input className="input2" typeof="text" placeholder="Código de segurança" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
            <input className="input2" typeof="text" placeholder="Validade" value={validade} onChange={(e) => setValidade(e.target.value)} />
            </Div2>
            <Button onClick={Assinar} >Assinar</Button>
           
        </DivInput>
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


.input1 {
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
margin-left: 30px;
margin-bottom: 10px;

h2 {
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #FFFFFF;
margin-bottom: 5px;
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
justify-content: space-around;

.input2 {
    width: 120px;
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

const Container1 = styled.div`
 
  width: 400px;
  height: 100vw;
  padding: 31px;
  display: flex;
  flex-direction: column;
  background: black;
  opacity: 0.5;
  z-index: 1;
  

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