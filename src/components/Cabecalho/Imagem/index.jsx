import styles from './Imagem.module.css';

const Imagem = ({ alt, src, altura = '35px', newClass = false }) => {
    return (
        <img className={newClass ? styles.lupa : styles.img} src={src} alt={alt} style={{ height: `${altura}` }} />
    )
}

export default Imagem;