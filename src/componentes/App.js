import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaLogin from "./TelaLogin";
import TelaPlanos from "./TelaPlanos";
import UserContext from "./Usecontext";
import { useState } from "react";
import TelaCadastro from "./TelaCadastro";
import TelaPlanoUnico from "./TelaPlanoUnico";

function App() {
    const [token, setToken] = useState("");
    return (
        <UserContext.Provider value={{ token, setToken }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaLogin />} />
                    <Route path="/sign-up" element={<TelaCadastro />} />
                    <Route path="/subscriptions" element={<TelaPlanos />} />
                    <Route path="/subscriptions/ID_DO_PLANO" element={<TelaPlanoUnico />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App;

