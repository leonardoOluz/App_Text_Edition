import MenuLista from "components/Campo_Lista/Menu_Lista";
import styles from "./CampoLista.module.css";
import logoCode from "./IconCode.png";
import logoComunidade from "./IconComunidade.png"
import { usePost } from "hooks/usePost";
const CampoLista = () => {
    const { setState, getPoster } = usePost();
    return (<ul className={styles.ul}>
        <MenuLista handleClick={getPoster} children='Comunidade' imagem={logoComunidade} link={"/"}  texto={'icone code'} />
        <MenuLista handleClick={setState} children='Editor de código' imagem={logoCode} link={"/editor"} texto={'icone code'} />
    </ul>)
}

export default CampoLista;