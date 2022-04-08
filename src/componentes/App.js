import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaLogin from "./TelaLogin";
import TelaPlanos from "./TelaPlanos";
import UserContext from "./Usecontext";
import { useState } from "react";
import TelaCadastro from "./TelaCadastro";
import TelaPlanoUnico from "./TelaPlanoUnico";
import TelaHome from "./TelaHome";


function App() {
    const [token, setToken] = useState("");
    const [dados, setDados] = useState("");
    const [logo, setLogo] = useState("");
    const [name, setName] = useState("");
    

    return (
        <UserContext.Provider value={{ token, setToken, dados, setDados, logo, setLogo, name, setName }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaLogin />} />
                    <Route path="/sign-up" element={<TelaCadastro />} />
                    <Route path="/subscriptions" element={<TelaPlanos />} />
                    <Route path="/subscriptions/:ID_DO_PLANO" element={<TelaPlanoUnico />} />
                    <Route path="/home" element={<TelaHome />} />

                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App;

