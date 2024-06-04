import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Comunidade from 'pages/Comunidade';
import PaginaBase from 'pages/PaginaBase';
import PaginaNaoEncontrada from 'pages/PaginaNaoEncontrada';
import EditarFormulario from 'pages/EditarFormulario';


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaBase />} >
          <Route index element={<Home />} />
          <Route path='/comunidade' element={<Comunidade />} />
          <Route path='/editar/:id' element={<EditarFormulario />} />
          <Route path='*' element={<PaginaNaoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
