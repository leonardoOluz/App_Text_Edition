import styles from './Imagem.module.css';

const Imagem = ({alt, src, altura = '35px'}) => {
    return(
        <img className={styles} src={src} alt={alt} style={{height: `${altura}`}}/>
    )
}

export default Imagem;