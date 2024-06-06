import { useContext } from "react";
import styles from "./EditorCodigo.module.css";
import TextEditor from "./TextEditor";
import { CodigoContext } from "contexts/CodigoContexto";

const EditorCodigo = ({changed, valor}) => {
    const { setShow, show, cor } = useContext(CodigoContext)

    const highlight = (e) => {
        e.preventDefault()
        setShow(!show)
    }

    return (
        <div className={styles.container_principal}>
            <div className={styles.border} style={{backgroundColor: cor}}>
                <TextEditor changed={changed} valor={valor}/>
                <div className={styles.container}>
                    <div className={styles.circulos} />
                    <div className={styles.circulos} style={{ backgroundColor: '#FFBD2E' }} />
                    <div className={styles.circulos} style={{ backgroundColor: '#27C93F' }} />
                </div>
            </div>
            <button
                className={styles.btn}
                onClick={highlight}
            >
                Visualizar com o highlight
            </button>
        </div>
    )
};

export default EditorCodigo;