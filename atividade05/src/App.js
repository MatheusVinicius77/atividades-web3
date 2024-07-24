import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { Cardapio } from "./pages/cardapio";
import { Pratos } from "./pages/pratos";
import { Espaco } from "./pages/espaço";
import { FAQ } from "./pages/faq";
import { SobreNos } from "./pages/sobre";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardapio" element={<Cardapio />} />

          <Route path="/pratos" element={<Pratos />} />
          <Route path="/espaco" element={<Espaco />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/sobre" element={<SobreNos />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
