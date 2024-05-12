import styles from './Titulo.module.css';

const Titulo = ({children}) => {
    return(
        <h2 className={styles.h2}>{children}</h2>
    )
}

export default Titulo;