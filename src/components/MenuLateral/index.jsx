import MenuLista from "./MenuLista";
import styles from "./MenuLateral.module.css";
import iconCode from "./IconCode.png";
import iconComunidade from "./iconComunidade.png";

const MenuLateral = () => {
    return(
        <aside className={styles.menu_lateral}>
            <h2>Menu</h2>
                <ul>
                    <MenuLista children='Editor de código' imagem={iconCode} link={"#"} texto={'icone code'}/>
                    <MenuLista children='Comunidade' imagem={iconComunidade} link={"#"} texto={'icone code'}/>
                </ul>
        </aside>
    )
}

export default MenuLateral;