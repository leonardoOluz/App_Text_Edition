import { createContext, useEffect, useState } from "react"
export const CodigoContext = createContext();
CodigoContext.displayName = "Codigo";

export const CodigoProvider = ({ children }) => {
    const postCode = [
        {
            nome: "@Leo",
            foto: "",
            titulo: "",
            descricao: "",
            linguagem: "",
            codigo: "",
            cor: "",
        }
    ];
    const [postarCode, setPostarCode] = useState(postCode);
    const [codigo, setCodigo] = useState("");
    const [linguagem, setLinguagem] = useState("javascript");
    const [show, setShow] = useState(false);
    const [cor, setCor] = useState("#5081FB");
    const [click, setClick] = useState(false);
    const [clickPesquisa, setClickPesquisa] = useState(false)
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight
    ])
    useEffect(() => {

        const windowSizeHandler = () => {
            setWindowSize([window.innerWidth, window.innerHeight])
        }
        window.addEventListener("resize", windowSizeHandler)

        setClickPesquisa((prev) => windowSize[0] > 768 ? prev = false : prev)
        console.log(windowSize[0], clickPesquisa)

        return () => {
            window.removeEventListener("resize", windowSizeHandler)
        }

    }, [windowSize, setWindowSize, setClickPesquisa, clickPesquisa])

    return (
        <CodigoContext.Provider value={{
            codigo,
            setCodigo,
            linguagem,
            setLinguagem,
            postarCode,
            setPostarCode,
            show,
            setShow,
            cor,
            setCor,
            click,
            setClick,
            clickPesquisa,
            setClickPesquisa,
            windowSize,
            setWindowSize
        }}>
            {children}
        </CodigoContext.Provider>
    )
}