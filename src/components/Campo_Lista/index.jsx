import MenuLista from "components/Campo_Lista/Menu_Lista";
import styles from "./CampoLista.module.css";
import iconCode from "./image/iconCode.png";
import iconComunidade from "./image/iconComunidade.png";

const CampoLista = () => {
    return (<ul className={styles.ul}>
        <MenuLista children='Editor de código' imagem={iconCode} link={"/"} texto={'icone code'}  />
        <MenuLista children='Comunidade' imagem={iconComunidade} link={"/comunidade"} texto={'icone code'} />
    </ul>)
}

export default CampoLista;