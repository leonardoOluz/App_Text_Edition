import MenuLista from "./Menu_Lista";
import styles from "./MenuNavegacao.module.css";
import iconCode from "./IconCode.png";
import iconComunidade from "./iconComunidade.png";
import Titulo from "components/Titulo";

const MenuNavegacao = () => {
    return(
        <aside className={styles.menu_navegacao}>
            <Titulo>Menu</Titulo>
                <ul>
                    <MenuLista children='Editor de código' imagem={iconCode} link={"#"} texto={'icone code'}/>
                    <MenuLista children='Comunidade' imagem={iconComunidade} link={"#"} texto={'icone code'}/>
                </ul>
        </aside>
    )
}

export default MenuNavegacao;