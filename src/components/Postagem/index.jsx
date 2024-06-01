import { FaHeart } from "react-icons/fa";
import styles from "./Postagem.module.css";
import iconMensagem from "./icon_mensagem.png";
import Imagem from "components/Cabecalho/Imagem";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs/'
const Postagem = ({ poster, usuario, like, logado }) => {

    const foto = require(`assets/${usuario.foto}.jpg`);

    return (<div className={styles.postagem}>
        <div className={styles.border} style={{ backgroundColor: `${poster.cor}` }}>
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
        </div>
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
            <div className={`perfil ${styles.perfil_hover}`} >
                <Imagem src={foto} alt='foto perfil' lg="postagem" altura="25px" comprimento="35px" />
                <p className={styles.perfil}>{usuario.nome}</p>
            </div>
        </div>
    </div>)
};

export default Postagem;