import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";
function App() {

  
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaLogin />}/>
        <Route path="/sign-up" element={<TelaCadastro />}/>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App;

