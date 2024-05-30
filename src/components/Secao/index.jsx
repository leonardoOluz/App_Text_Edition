import styles from "./Secao.module.css";

const Secao = ({ children }) => {
    return (<section className={styles.secao}>
        {children}
    </section>)
}

export default Secao;