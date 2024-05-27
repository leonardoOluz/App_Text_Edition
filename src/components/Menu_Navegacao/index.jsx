import styles from "./MenuNavegacao.module.css";
import Titulo from "components/Titulo";
import CampoLista from "components/Campo_Lista";

const MenuNavegacao = () => {

    return (
        <aside className={styles.menu_navegacao}>
            <Titulo>Menu</Titulo>
            <CampoLista />
        </aside>
    )
}

export default MenuNavegacao;