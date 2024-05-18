import Cabecalho from "components/Cabecalho";
import ContainerDisplay from "components/ContainerDisplay";
import MenuNavegacao from "components/Menu_Navegacao";
import { Outlet } from "react-router-dom";

const PaginaBase = () => {
    return (
        <ContainerDisplay>
            <Cabecalho />
            <MenuNavegacao />
            <Outlet />
        </ContainerDisplay>
    )
};

export default PaginaBase;