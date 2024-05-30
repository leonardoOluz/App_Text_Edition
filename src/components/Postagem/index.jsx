import { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import styles from "./Postagem.module.css";
import iconMensagem from "./icon_mensagem.png";
import fotoPerfil from "@/../assets/LeoLuz.jpg"
import Imagem from "components/Cabecalho/Imagem";
import { CodigoContext } from "context/CodigoContexto";

const Postagem = () => {
    const { coracao, setCoracao } = useContext(CodigoContext);

    return (<div className={styles.postagem}>
        <div className={styles.border}>
            <p className={styles.card_code} />
            <div className={styles.container}>
                <div className={styles.circulos} />
                <div className={styles.circulos} style={{ backgroundColor: '#FFBD2E' }} />
                <div className={styles.circulos} style={{ backgroundColor: '#27C93F' }} />
            </div>
        </div>
        <h2>Título do projeto</h2>
        <p>Essa é a descrição do meu projeto.</p>
        <div className={styles.descricao}>
            <div className={`container_postagem`}>
                <div className={`perfil`}>
                    <img src={iconMensagem} alt="icone de mensagem" />
                    <span>9</span>
                </div>
                <div className={`perfil ${styles.heart}`} onClick={() => setCoracao((prev) => prev = !prev)}>
                    {coracao
                        ? <FaHeart color="#f65151" size={20} />
                        : <FaHeart size={20} />
                    }
                    <span>7</span>
                </div>
            </div>
            <div className={`perfil ${styles.perfil_hover}`} >
                <Imagem src={fotoPerfil} alt='foto perfil' lg="postagem" altura="25px" comprimento="35px" />
                <p className={styles.perfil}>@Leo</p>
            </div>
        </div>
    </div>)
};

export default Postagem;