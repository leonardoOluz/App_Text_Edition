import { useContext } from "react";
import styles from "./EditorCodigo.module.css";
import TextEditor from "./TextEditor";
import { CodigoContext } from "context/CodigoContexto";

const EditorCodigo = () => {
    const { setShow, show } = useContext(CodigoContext)

    const highlight = (e) => {
        e.preventDefault()
        setShow(!show)
    }

    return (
        <div className={styles.container_principal}>
            <div className={styles.border}>
                <TextEditor />
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