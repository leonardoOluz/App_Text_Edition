import { CodigoContext } from "context/CodigoContexto";
import { useContext } from "react";
import uuid from "react-native-uuid";

export const Postagem = () => {
    const {setPoster, poster, usuarios, titulo, descricao, linguagem, codigo, cor} = useContext(CodigoContext);

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

    return{
        salveNewPoster,
    }

}