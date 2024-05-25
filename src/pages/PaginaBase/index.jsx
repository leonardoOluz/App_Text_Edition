import Cabecalho from "components/Cabecalho";
import ContainerDisplay from "components/ContainerDisplay";
import MenuNavegacao from "components/Menu_Navegacao";
import { CodigoProvider } from "context/CodigoContexto";
import { Outlet } from "react-router-dom";

const PaginaBase = () => {
    return (
        <ContainerDisplay>
            <CodigoProvider>
                <Cabecalho />
                <MenuNavegacao />
                <Outlet />
            </CodigoProvider>
        </ContainerDisplay>
    )
};

export default PaginaBase;