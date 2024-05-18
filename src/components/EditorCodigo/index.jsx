// import Botao from "components/Botao";
import styles from "./EditorCodigo.module.css";

const EditorCodigo = () => {
    return (        
        <div className={styles.container_principal}>
            <div className={styles.border}>
                <textarea placeholder="Edition code" />
                <div className={styles.container}>
                    <div className={styles.circulos} />
                    <div className={styles.circulos} style={{ backgroundColor: '#FFBD2E' }} />
                    <div className={styles.circulos} style={{ backgroundColor: '#27C93F' }} />
                </div>
            </div>
            <button  className={styles.btn}>Visualizar com o highlight</button>            
        </div>
    )
};

export default EditorCodigo;