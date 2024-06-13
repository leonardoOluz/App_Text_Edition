import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Comunidade from 'pages/Comunidade';
import PaginaBase from 'pages/PaginaBase';
import PaginaNaoEncontrada from 'pages/PaginaNaoEncontrada';
import EditarFormulario from 'pages/EditarFormulario';
import FormularioEdicao from 'pages/FormularioEdicao';


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaBase />} >
          <Route index element={<Comunidade />} />
          <Route path='/editor' element={<FormularioEdicao />} />
          <Route path='/editar/:id' element={<EditarFormulario />} />
          <Route path='*' element={<PaginaNaoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
