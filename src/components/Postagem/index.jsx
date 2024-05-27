import styles from "./Postagem.module.css";
import iconCoracao from "./icon_coracao.png";
import iconMensagem from "./icon_mensagem.png";
import fotoPerfil from "@/../assets/LeoLuz.jpg"
import Imagem from "components/Cabecalho/Imagem";

const Postagem = () => {
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
                <div className={`container_postagem`}>
                    <img src={iconMensagem} alt="icone de mensagem" />
                    <span>9</span>
                </div>
                <div className={`container_postagem`} >
                    <img src={iconCoracao} alt=" icone de coração de curtida" />
                    <span>7</span>
                </div>
            </div>
            <div className={`container_postagem`} >
                <Imagem src={fotoPerfil} alt='foto perfil' lg="postagem" altura="25px" comprimento="35px" />
                <p className={styles.perfil}>@Leo</p>
            </div>
        </div>
    </div>)
};

export default Postagem;