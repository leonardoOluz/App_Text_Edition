import { FaHeart } from "react-icons/fa";
import styles from "./Postagem.module.css";
import iconMensagem from "./icon_mensagem.png";
import Imagem from "components/Cabecalho/Imagem";

const Postagem = ({ poster, usuario, like, logado }) => {

    const foto = require(`assets/${usuario.foto}.jpg`);

    return (<div className={styles.postagem}>
        <div className={styles.border} style={{ backgroundColor: `${poster.cor}` }}>
            <code className={styles.card_code}>{poster.codigo}</code>
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
                <div className={`perfil ${styles.heart}`} >
                    {poster.curtidas.id_usuario.length > 0 && poster.curtidas.id_usuario.includes(logado)
                        ? <FaHeart onClick={() => like(poster.id)} color="#f65151" size={20} />
                        : <FaHeart onClick={() => like(poster.id)} size={20} />
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