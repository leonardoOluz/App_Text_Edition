import ConteudoDaSecao from "components/ConteudoDaSecao";
import styles from "./EditorDoCodigo.module.css";

const EditorDoCodigo = () => {
    return (<>
        <main className={styles.editor_codigo}>
            <ConteudoDaSecao/>
        </main>
    </>)
}

export default EditorDoCodigo;