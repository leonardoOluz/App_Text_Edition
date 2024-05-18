import Formulario from "components/Formulario";
import styles from "./ConteudoDaSecao.module.css";

const ConteudoDaSecao = () => {
    return(
        <section className={styles.secao}>
            <Formulario/>
        </section>
    )
};

export default ConteudoDaSecao;