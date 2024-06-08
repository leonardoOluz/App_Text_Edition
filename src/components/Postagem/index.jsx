import { FaHeart } from "react-icons/fa";
import styles from "./Postagem.module.css";
import iconMensagem from "./icon_mensagem.png";
import Imagem from "components/Cabecalho/Imagem";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs/'
import { Link } from "react-router-dom";
import { usePost } from "hooks/usePost";
import { useCallback, useContext, useRef } from "react";
import { CodigoContext } from "contexts/CodigoContexto";
import { toPng } from 'html-to-image';


const Postagem = ({ poster, usuario, like, logado }) => {
    const { editionPost } = usePost();
    const { setId_post } = useContext(CodigoContext);
    const foto = require(`assets/${usuario.foto}.jpg`);
    const ref = useRef(null)

    const onBtnClick = useCallback(() => {

        if (ref.current === null) {
            return
        }



        toPng(ref.current, { cacheBust: true })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = `my-projeto-code.png`
                link.href = dataUrl
                link.click()
            })
            .catch((error) => {
                console.log(error)
            })

    }, [ref])

    const handleClick = () => {
        editionPost(poster.id)
        setId_post(poster.id)
    }

    return (
        <div className={styles.postagem}>
            <Link ref={ref} id="imagem-png"
                onClick={logado === poster.id_usuario && handleClick}
                to={logado === poster.id_usuario && `/editar/${poster.id}`}
                className={styles.border} style={{ backgroundColor: `${poster.cor}` }}
            >
                <SyntaxHighlighter
                    style={atomOneDark}
                    customStyle={{
                        width: "90%",
                        paddingTop: "2.5em",
                        borderRadius: "8px"
                    }}
                    wrapLongLines={true}
                >
                    {poster.codigo}
                </SyntaxHighlighter>
                <div className={styles.container}>
                    <div className={styles.circulos} />
                    <div className={styles.circulos} style={{ backgroundColor: '#FFBD2E' }} />
                    <div className={styles.circulos} style={{ backgroundColor: '#27C93F' }} />
                </div>
            </Link>
            <h2>{poster.titulo}</h2>
            <p>{poster.descricao}</p>
            <div className={styles.descricao}>
                <div className={`container_postagem`}>
                    <div className={`perfil`}>
                        <img src={iconMensagem} alt="icone de mensagem" />
                        <span>{poster.mensagem.length}</span>
                    </div>
                    <div className={`perfil ${styles.heart}`} onClick={() => like(poster.id)}>
                        {poster.curtidas.id_usuario.length > 0 && poster.curtidas.id_usuario.includes(logado)
                            ? <FaHeart color="#f65151" size={20} />
                            : <FaHeart size={20} />
                        }
                        <span>{poster.curtidas.id_usuario.length}</span>
                    </div>
                </div>
                <button onClick={onBtnClick} style={{ borderRadius: "8px", padding: "10px 15px" }} >Gerador de Imagem</button>
                <div className={`perfil ${styles.perfil_hover}`} >
                    <Imagem src={foto} alt='foto perfil' lg="postagem" altura="25px" comprimento="35px" />
                    <p className={styles.perfil}>{usuario.nome}</p>
                </div>
            </div>
        </div>
    )
};

export default Postagem;