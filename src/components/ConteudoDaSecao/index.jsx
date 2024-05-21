import Formulario from "components/Formulario";
import styles from "./ConteudoDaSecao.module.css";
import Postagem from "components/Postagem";

const ConteudoDaSecao = ({ to }) => {
    return (
        <section className={styles.secao}>
            {to === '/' ? <Formulario /> :
                <>
                    <Postagem />
                    <Postagem />
                </>
            }
        </section>
    )
};

export default ConteudoDaSecao;