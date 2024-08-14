import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Cadastro } from "./pages/cadastro";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
