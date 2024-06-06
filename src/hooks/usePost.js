import { CodigoContext } from "contexts/CodigoContexto";
import { useContext } from "react";
import uuid from "react-native-uuid";


export const usePost = () => {
    const { codigo,
        linguagem,
        cor,
        titulo,
        descricao,
        usuarios,
        poster,
        setPoster,
        setCodigo,
        setTitulo,
        setDescricao,
        setLinguagem,
        setCor,
        setId_post
    } = useContext(CodigoContext);

    const setState = () => {
        setCodigo("")
        setTitulo("")
        setDescricao("")
        setLinguagem("")
        setCor("#5081FB")
        setId_post()
    }

    const saveNewPost = () => {
        const post = {
            id: uuid.v4(),
            id_usuario: usuarios[1].id,
            titulo,
            descricao,
            linguagem,
            codigo,
            cor,
            curtidas: {
                id_usuario: []
            },
            mensagem: []
        }
        setPoster([...poster, post])
    }

    const editionPost = (id_post) => {
        let thereIsEdition = poster.find((item) => item.id === id_post)
        setCodigo(thereIsEdition.codigo)
        setTitulo(thereIsEdition.titulo)
        setDescricao(thereIsEdition.descricao)
        setLinguagem(thereIsEdition.linguagem)
        setCor(thereIsEdition.cor)
    }

    const savePostEdited = (id_post) => {
        setPoster( poster.map(prev => {
            if (prev.id === id_post) {
                prev.titulo = titulo
                prev.descricao = descricao
                prev.linguagem = linguagem
                prev.codigo = codigo
                prev.cor = cor
                return prev
            }
           return prev
        }))
    }

    return {
        setState,
        saveNewPost,
        editionPost,
        savePostEdited
    }

}