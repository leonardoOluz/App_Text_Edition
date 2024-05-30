import Cabecalho from "components/Cabecalho";
import ContainerDisplay from "components/ContainerDisplay";
import InputFlutuante from "components/InputFlutuante";
import MenuFlutuante from "components/MenuFlutuante";
import MenuNavegacao from "components/Menu_Navegacao";
import { CodigoProvider } from "context/CodigoContexto";
import { Outlet } from "react-router-dom";

const PaginaBase = () => {
    return (
        <ContainerDisplay>
            <CodigoProvider>
                <InputFlutuante/>
                <Cabecalho />
                <MenuNavegacao />
                <Outlet />
                <MenuFlutuante />
            </CodigoProvider>
        </ContainerDisplay>
    )
};

export default PaginaBase;