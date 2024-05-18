import Formulario from "components/Formulario";
import styles from "./ConteudoDaSecao.module.css";
import { useLocation } from "react-router-dom";
import Postagem from "components/Postagem";

const ConteudoDaSecao = ({to}) => {
    let local = useLocation();

    return (
        <section className={styles.secao}>
            {local.pathname === to ? <Formulario /> : <Postagem />}
        </section>
    )
};

export default ConteudoDaSecao;