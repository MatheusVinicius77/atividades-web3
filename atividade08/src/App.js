import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Cadastro } from "./pages/cadastro";
import { UserList } from "./pages/UserList";
import { CadastrarContato } from "./pages/cadastrarContato";
import { EditarUsuario } from "./pages/EditarUsuario";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/userlist/:name" element={<UserList />} />
          <Route path="/cadastrarcontato/:id" element={<CadastrarContato />} />
          <Route path="/editarusuario/:id" element={< EditarUsuario/>} />

          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
