import { createContext, useState } from "react"

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
    const [click, setClick] = useState(true);

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
            setClick
        }}>
            {children}
        </CodigoContext.Provider>
    )
}