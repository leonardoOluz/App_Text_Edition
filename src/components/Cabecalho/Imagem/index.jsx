import styles from './Imagem.module.css';

const Imagem = ({ alt, src, altura = '35px', lg = 'img' }) => {
    return (
        <img className={`
        ${styles.img}
        ${styles[lg]}
        `}
            src={src}
            alt={alt}
            style={{ height: `${altura}` }} />
    )
}

export default Imagem;