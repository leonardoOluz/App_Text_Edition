import Imagem from "components/Cabecalho/Imagem";
import CampoLista from "components/Campo_Lista";
import { CodigoContext } from "contexts/CodigoContexto";
import { useContext } from "react";
import fotoPerfil from '@/../assets/LeoLuz.jpg'
import styles from "./MenuFlutuante.module.css"

const MenuFlutuante = () => {
    const { click } = useContext(CodigoContext);

    return (<>
        {click ? <span className={styles.menu_span}>
            <CampoLista />
            <div className={styles.container_usuario}>
                <Imagem src={fotoPerfil} alt='foto perfil' lg='postagem' altura="25px" comprimento="35px" />
                <p>@Leo</p>
            </div>
        </span> : <></>}
    </>)
};

export default MenuFlutuante;