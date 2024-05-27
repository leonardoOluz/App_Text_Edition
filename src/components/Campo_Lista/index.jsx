import MenuLista from "components/Campo_Lista/Menu_Lista";
import styles from "./CampoLista.module.css";
import logoCode from "./IconCode.png";
import logoComunidade from "./IconComunidade.png"
const CampoLista = () => {
    return (<ul className={styles.ul}>
        <MenuLista children='Editor de código' imagem={logoCode} link={"/"} texto={'icone code'}  />
        <MenuLista children='Comunidade' imagem={logoComunidade} link={"/comunidade"} texto={'icone code'} />
    </ul>)
}

export default CampoLista;