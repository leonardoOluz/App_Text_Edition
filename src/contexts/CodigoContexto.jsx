import { createContext, useEffect, useState } from "react";
import user from "json/usuario.json";
import code from "json/postagem.json";

export const CodigoContext = createContext();
CodigoContext.displayName = "Codigo";

export const CodigoProvider = ({ children }) => {
    /* VAriavies de estado da api/json */
    const [poster, setPoster] = useState(code.postagem);
    const [usuarios, setUsuarios] = useState(user.editorCode);
    const [post, setPost] = useState([])
    /* Variaveis de controle */
    const [show, setShow] = useState(false);
    const [click, setClick] = useState(false);
    const [clickPesquisa, setClickPesquisa] = useState(false);
    /* Variaveis de controle do formulario*/
    const [codigo, setCodigo] = useState("");
    const [linguagem, setLinguagem] = useState("");
    const [cor, setCor] = useState("#5081FB");
    const [titulo, setTitulo] = useState();
    const [descricao, setDescricao] = useState("");
    const [id_post, setId_post] = useState("");

    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight
    ])

    useEffect(() => {
        setPost([...poster])
    },[poster])

    useEffect(() => {

        const windowSizeHandler = () => {
            setWindowSize([window.innerWidth, window.innerHeight])
        }
        window.addEventListener("resize", windowSizeHandler)

        setClickPesquisa((prev) => windowSize[0] > 767 ? prev = false : prev)

        return () => {
            window.removeEventListener("resize", windowSizeHandler)
        }

    }, [windowSize, setWindowSize, setClickPesquisa, clickPesquisa])

    return (
        <CodigoContext.Provider value={{
            poster,
            setPoster,
            usuarios,
            setUsuarios,
            codigo,
            setCodigo,
            linguagem,
            setLinguagem,
            show,
            setShow,
            cor,
            setCor,
            click,
            setClick,
            clickPesquisa,
            setClickPesquisa,
            windowSize,
            setWindowSize,
            titulo,
            setTitulo,
            descricao,
            setDescricao,
            id_post,
            setId_post,
            post, 
            setPost
        }}>
            {children}
        </CodigoContext.Provider>
    )
}