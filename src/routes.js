import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./componentes/Menu";
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
    
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
          <Route path="posts/:id" element={<Post />}/>
          
        </Route>

        {/* Na rota "/"(index), a estrutura a ser renderizada é:
          <PaginaPadrao>  
            <Inicio />
          </PaginaPadrao>

          Na rota "SobreMim", a estrutura a ser renderizada é:
          <PaginaPadrao>  
            <SobreMim />
          </PaginaPadrao>
         */}

        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
