import { CodigoContext } from "context/CodigoContexto";
import { useContext } from "react";
import uuid from "react-native-uuid";

export const Postagem = () => {
    const {
        setPoster,
        poster,
        usuarios,
        titulo,
        descricao,
        linguagem,
        codigo,
        cor,
        setCodigo,
        setLinguagem,
        setCor,
        setTitulo,
        setDescricao,
    } = useContext(CodigoContext);


    const salveNewPoster = () => {
        setPoster([...poster, {
            id: uuid.v4(),
            id_usuario: usuarios[1].id,
            titulo: titulo,
            descricao: descricao,
            linguagem: linguagem,
            codigo: codigo,
            cor: cor,
            curtidas: {
                id_usuario: []
            },
            mensagem: []
        }])
    }

    const zerarVariaveis = () => {
        setLinguagem("");
        setCor("#ffffff");
        setTitulo("");
        setDescricao("");
        setCodigo("");
    }

    return {
        salveNewPoster,
        zerarVariaveis
    }

}