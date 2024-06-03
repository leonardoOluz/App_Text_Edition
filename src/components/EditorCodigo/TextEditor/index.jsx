import { Editor } from "@monaco-editor/react";
import styles from "./TextEditor.module.css";
import { useContext } from "react";
import { CodigoContext } from "context/CodigoContexto";

const TextEditor = () => {

    const { codigo, setCodigo, linguagem, show } = useContext(CodigoContext)

    function handleEditorChange(valor, evento) {
        setCodigo((prev) => prev = valor)
    }

    return (
        <Editor
            className={styles.editor}
            value={codigo}
            language={show ? linguagem : ""}
            theme="vs-dark"
            loading="Carregando..."
            onChange={handleEditorChange}
        />
    )
};

export default TextEditor;