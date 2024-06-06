import MenuLista from "components/Campo_Lista/Menu_Lista";
import styles from "./CampoLista.module.css";
import logoCode from "./IconCode.png";
import logoComunidade from "./IconComunidade.png"
import { usePost } from "hooks/usePost";
const CampoLista = () => {
    const { setState } = usePost();
    return (<ul className={styles.ul}>
        <MenuLista handleClick={setState} children='Editor de código' imagem={logoCode} link={"/"} texto={'icone code'} />
        <MenuLista children='Comunidade' imagem={logoComunidade} link={"/comunidade"} texto={'icone code'} />
    </ul>)
}

export default CampoLista;