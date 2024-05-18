import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditorDoCodigo from 'pages/EditorDoCodigo';
import Comunidade from 'pages/Comunidade';
import PaginaBase from 'pages/PaginaBase';
import PaginaNaoEncontrada from 'pages/PaginaNaoEncontrada';


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaBase/>} >
          <Route index element={<EditorDoCodigo />} />
          <Route path='/comunidade' element={<Comunidade />} />
          <Route path='*' element={<PaginaNaoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
