import Cabecalho from './components/Cabecalho';
import MenuNavegacao from 'components/Menu_Navegacao';
import MenuLateral from 'components/Menu_Lateral';
import './App.css';
import EditorCode from 'components/EditorCode';


function App() {
  return (
    <>
      <Cabecalho />
      <MenuNavegacao />
      <EditorCode/>
      <MenuLateral/>
    </>
  );
}

export default App;
